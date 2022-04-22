import Passport from "passport";
import { Strategy as FacebookStrategy } from "passport-facebook";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as GithubStrategy } from "passport-github2";
import { Strategy as JWTStrategy, ExtractJwt } from "passport-jwt";
import userService from "../services/user/user.service";
import { imageUrlToBase64 } from "../utils/imageUrlToBase64";

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
      const user = await userService.getUser({
        where: { email: profile.emails[0].value },
      });
      if (user) {
        done(null, user);
      } else {
        const ava = await imageUrlToBase64(profile.photos[0].value);
        const username = profile.emails[0].value.split("@")[0];
        const newUser = await userService.register({
          email: profile.emails[0].value,
          password: "",
          username: username,
          ava: ava,
        });
        done(null, newUser);
      }
      console.log(profile);
    }
  )
);
