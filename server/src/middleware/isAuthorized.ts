import { NextFunction, Response, Request } from "express";

export default function checkAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).json({
      status: "error",
      message: "You are not authorized to access this resource",
    });
  }
}
