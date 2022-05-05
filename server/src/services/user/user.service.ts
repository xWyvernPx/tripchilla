import bcrypt from "bcrypt";
import { NextFunction } from "express";
import { QueryOptionsWithWhere, QueryOptions } from "sequelize";
import { UserType } from "../../../../types/GeneralEntity";
import { graph } from "../../database";
import { Address, Title, UserInfo } from "../../models";
import User, { UserInstance } from "../../models/user/user.model";
import { IAddress } from "../../types/ModelingEntity";
import { PaginationQuery, PaginationResponse } from "../../utils/pagination";

export interface IUserService {
  getUser(payload: Object): Promise<UserType>;
  getAll(
    pagination: PaginationQuery
  ): Promise<PaginationResponse<UserInstance>>;
}
class UserService implements IUserService {
  async getFullUser(userid: string) {
    const user = await User.findOne({
      where: {
        userid: userid,
      },
      include: [
        {
          model: UserInfo,
          attributes: ["bod", "name", "phone", "address"],
        },
        Title,
      ],
    });
    return user;
  }
  async getUser(payload: QueryOptionsWithWhere): Promise<UserType> {
    // private
    const rs = await User.findOne(payload);
    if (rs) return rs;
    else return null;
  }
  public async getAll(
    //private
    pagination: PaginationQuery
  ): Promise<PaginationResponse<UserInstance>> {
    const rs = await User.findAndCountAll({
      limit: pagination.limit,
      offset: (pagination.page - 1) * pagination.limit,
      order: [
        [pagination.order ? pagination.order : "id", "ASC"], // default by id
      ],
    });
    const response: PaginationResponse<UserInstance> = {
      pagination: {
        page: pagination.page,
        limit: pagination.limit,
        total: rs.count,
        order: pagination.order,
      },
      data: rs ? rs.rows : [],
    };
    return response;
  }
  public async register(
    user: UserType,
    next?: NextFunction
  ): Promise<UserType> {
    if (await this.isDuplicate("email", user.email)) {
      throw new Error("Email is already used");
    }
    if (await this.isDuplicate("username", user.username)) {
      throw new Error("Username is already used");
    }
    const createUserTransaction = await User.sequelize.transaction();
    let address, infoid;
    if (user.information) {
      if (user.information.address_detail) {
        const addressPayload: IAddress = {
          ...user.information.address_detail,
        };
        await Address.create(addressPayload, {
          transaction: createUserTransaction,
        })
          .then((rs) => {
            address = rs.get("id");
          })
          .catch((err) => {
            address = null;
          });
      }
      const { bod, name, phone } = user.information;
      await UserInfo.create(
        { bod, name, phone, address },
        { transaction: createUserTransaction }
      )
        .then((rs) => {
          infoid = rs.get("id");
        })
        .catch((err) => {
          infoid = null;
        });
    }
    const { username, password, email, ava } = user;
    //   if (this.isDuplicate("email", email))
    //     throw new Error("Email has been used");
    //   if (this.isDuplicate("username", username))
    //     throw new Error("Username has been used");
    user.userid = await bcrypt.hash(Date.now().toString() + user.username, 10);
    const resultCreateUser = await User.create(
      {
        username,
        password,
        email,
        ava,
        userid: user.userid,
        infoid,
        level: 1,
      },
      { transaction: createUserTransaction, raw: true }
    );
    const session = graph.driver.session({ database: "tripchilla" });
    await session
      .run(
        `MERGE (p:User {id : "${resultCreateUser.id}", userid : "${resultCreateUser.userid}" ,username: "${resultCreateUser.username}" ,password: "${resultCreateUser.password}" ,ava : "${resultCreateUser.ava}" , email: "${resultCreateUser.email}" , infoid: "${resultCreateUser.infoid}" , level: "${resultCreateUser.level}" }) RETURN p`
      )
      .catch((err) => console.log(err));
    createUserTransaction.commit();
    return resultCreateUser;
  }
  public async isDuplicate(type: "email" | "username", payload: string) {
    switch (type) {
      case "email": {
        const rs = await User.count({ where: { email: payload } });
        console.log(rs + "email count");
        return rs > 0;
      }
      case "username": {
        const rs = await User.count({ where: { username: payload } });
        console.log(rs + "username count");
        return rs > 0;
      }
    }
  }
  public async login(payload: {
    username: string;
    password: string;
  }): Promise<UserType> {
    const rs = await User.findOne({
      where: {
        username: payload.username,
      },
    });
    if (rs) {
      const isMatch = await bcrypt.compare(payload.password, rs.password);
      if (isMatch) {
        return rs;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
}

export default new UserService();
