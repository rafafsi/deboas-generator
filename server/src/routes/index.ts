import { Router } from "express";
const router: Router = Router();

import playerRouter from "./playerRouter";
import teamRouter from "./teamRouter";

router.use("/players", playerRouter);
router.use("/teams", teamRouter);

export default router;
