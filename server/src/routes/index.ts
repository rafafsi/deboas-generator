import { Router } from "express";
const router: Router = Router();

import playerRouter from "./playerRouter";
import matchRouter from "./matchRouter";

router.use("/players", playerRouter);
router.use("/match", matchRouter);

export default router;
