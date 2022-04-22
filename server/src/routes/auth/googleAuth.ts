import express from "express";
import Passport from "passport";
import JWT from "../../utils/JWT";
const ggAuthRouter = express.Router();
ggAuthRouter.route("/").get(
  Passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  })
);
ggAuthRouter.route("/callback").get(
  Passport.authenticate("google", {
    scope: ["profile", "email", "birthday"],
    session: false,
  }),
  async (req, res) => {
    const { dataValues } = req.user as any;
    res.setHeader("access_token", await JWT.encode(dataValues.id));
    res.json(dataValues);
    // res.redirect("http://localhost:3000",);
  }
);
export default ggAuthRouter;
