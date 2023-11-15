import { Router } from "express";
const teamRouter = Router();

import { generateTeam } from "../controllers/teamController";

teamRouter.get("/generate", generateTeam);

export = teamRouter;
