import { Router } from "express";
import { UsersController } from "../app/controllers/UsersController";

export const userRoutes = Router();
const usersController = new UsersController();

userRoutes.post("/", usersController.store);

userRoutes.get("/", usersController.index);
