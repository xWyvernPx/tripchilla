import { Op, Sequelize } from "sequelize";
import { UserType } from "../../../../types/GeneralEntity";
import { Address, UserInfo } from "../../models";
import User, { UserInstance } from "../../models/user/user.model";
import { IAddress, IUser, IUserInfo } from "../../types/ModelingEntity";
import { PaginationQuery, PaginationResponse } from "../../utils/pagination";
import bcrypt from "bcrypt";
import sequelize from "sequelize";
import { nextTick } from "process";
import { NextFunction } from "express";
import { QueryOptionsWithWhere } from "sequelize";

export interface IUserService {
  getUser(payload: Object): Promise<UserType>;
  getAll(
    pagination: PaginationQuery
  ): Promise<PaginationResponse<UserInstance>>;
}
class UserService implements IUserService {
  async getUser(payload: QueryOptionsWithWhere): Promise<UserType> {
    // private
    try {
      const rs = await User.findOne(payload);
      if (rs) return rs;
      else return null;
    } catch (error) {
      return null;
    }
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
    const createUserTransaction = await User.sequelize.transaction();
    try {
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
      user.userid = await bcrypt.hash(
        Date.now().toString() + user.username,
        10
      );
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
        { transaction: createUserTransaction }
      );
      createUserTransaction.commit();
      return resultCreateUser;
    } catch (error: any) {
      console.log(error);
      createUserTransaction.rollback();
      return null;
    }
  }
  public async isDuplicate(type: "email" | "username", payload: string) {
    switch (type) {
      case "email": {
        const rs = await User.count({ where: { email: payload } });
        return rs > 0;
      }
      case "username": {
        const rs = await User.count({ where: { username: payload } });
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
