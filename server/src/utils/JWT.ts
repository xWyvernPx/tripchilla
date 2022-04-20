import JWT from "jsonwebtoken";

class JWTUtils {
  async encode(payload: any) {
    return JWT.sign(payload, process.env.JWT_SIGN);
  }
  async verify(token: string) {
    return JWT.verify(token, process.env.JWT_SIGN);
  }
}

export default new JWTUtils();
