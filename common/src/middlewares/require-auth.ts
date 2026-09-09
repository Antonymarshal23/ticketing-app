import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { NotAuthorizedError } from "../errors/not-authorized-error";

interface UserPayload {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const requireAuth = (type: "company" | "customer", UserModel: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    if (!req.session?.jwt) {
      throw new NotAuthorizedError();
    }

    try {
      const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!) as UserPayload;

      let user;

      if (type === "company") {
        user = await UserModel.findOne({
          _id: payload.id,
        });
      } else if (type === "customer") {
        user = await UserModel.findOne({
          _id: payload.id,
        });
      }

      if (!user) {
        throw new NotAuthorizedError();
      }

      req.currentUser = payload;

      next();
    } catch (err) {
      throw new NotAuthorizedError();
    }
  };
};
