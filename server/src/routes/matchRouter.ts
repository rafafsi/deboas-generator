import { Router } from "express";
const matchRouter = Router();

import { generateMatch } from "../controllers/matchController";

matchRouter.get("/generate", generateMatch);

export = matchRouter;
