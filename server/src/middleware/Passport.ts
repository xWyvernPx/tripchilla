import Passport from "passport";
import { Strategy as FacebookStrategy } from "passport-facebook";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as GithubStrategy } from "passport-github2";
import { Strategy as JWTStrategy, ExtractJwt } from "passport-jwt";
import userService from "../services/user/user.service";
import { imageUrlToBase64 } from "../utils/imageUrlToBase64";
import { Strategy as LocalStrategy } from "passport-local";
import JWT from "../utils/JWT";
import { User } from "../models";
import bcrypt from "bcrypt";

Passport.use(
  new JWTStrategy(
    {
      secretOrKey: process.env.JWT_SIGN,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async (jwtPayload, done) => {
      console.log(jwtPayload);
      done(null, jwtPayload);
    }
  )
);

Passport.use(
  new GoogleStrategy(
    {
      clientID:
        "792668566991-1bvu9uss47ldq2rd7qe9silc0mg715pi.apps.googleusercontent.com",
      clientSecret: "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",
      passReqToCallback: true,
      callbackURL: "https://localhost:4000/api/auth/google/callback",
    },
    async (req, accessToken, refreshToken, profile, done) => {
      const user: any = await userService.getUser({
        where: { email: profile.emails[0].value },
        raw: true,
      });
      if (user) {
        done(null, user);
      } else {
        const ava = await imageUrlToBase64(profile.photos[0].value);
        const username = profile.emails[0].value.split("@")[0];
        const newUser: any = await userService.register({
          email: profile.emails[0].value,
          password: "",
          username: username,
          ava: ava,
        });
        done(null, newUser);
      }
    }
  )
);
Passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const rs = await User.findOne({
        where: {
          username: username,
        },
        raw: true,
      });
      if (rs) {
        const isMatch = await bcrypt.compare(password, rs.password);
        if (isMatch) {
          done(null, rs);
        } else {
          throw new Error("Username or password are wrong.");
        }
      } else {
        throw new Error("Username or password are wrong.");
      }
    } catch (error: any) {
      const err: any = new Error(error.message);
      err.status = 400;

      done(err, null);
    }
  })
);
Passport.use(
  "local-register",
  new LocalStrategy(
    {
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      try {
        const payload = req.body;
        const result = await userService.register(payload);
        if (result) {
          done(null, result);
        } else throw new Error("User not created!");
      } catch (error: any) {
        console.log("vo catch luon");
        error.status = 400;
        done(error, null);
      }
    }
  )
);
Passport.serializeUser((user: any, done) => {
  console.log(user);
  done(null, user.userid);
});

Passport.deserializeUser((userid, done) => {
  done(null, userid);
});
