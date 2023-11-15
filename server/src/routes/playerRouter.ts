import { Router } from "express";
const playerRouter = Router();

import { create, findById, deleteById, findAll, updateById } from "../controllers/playerController";

playerRouter.post("/create", create);
playerRouter.get("/find/:id", findById);
playerRouter.get("/find-all", findAll);
playerRouter.delete("/delete/:id", deleteById);
playerRouter.post("/update-player/:id", updateById);

export = playerRouter;
