import { Response, Request, NextFunction } from "express";
import { AnyZodObject } from "zod";
const validate = (schema: AnyZodObject) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }
    }
  };
};

export default validate;
