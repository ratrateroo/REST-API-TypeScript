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
    } catch (error: unknown) {
      return res.status(400).send(error.errors);
    }
  };
};