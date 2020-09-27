import { Router } from "express";
import { userRoutes } from "./users.routes";

export const routes = Router();

routes.use("/users", userRoutes);

routes.get("/", (req, res) => {
  res.send("Hello");
});
