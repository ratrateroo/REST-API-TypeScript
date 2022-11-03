import { Express, Request, Response } from "express";
import { createUserSessionHandler } from "./controller/session.controller";
import { createUserHandler } from "./controller/user.controller";
import validateResource from "./middleware/validateResource";
import { createUserSchema } from "./schema/user.schema";

function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => {
    return res.sendStatus(200);
  });

  app.post("/api/users", validateResource(createUserSchema), createUserHandler);

  app.post(
    "/api/sessions",
    validateResource(createUserSchema),
    createUserSessionHandler
  );
}

export default routes;
