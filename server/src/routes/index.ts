import { Router } from "express";
const router: Router = Router();

import playerRouter from "./playerRouter";

router.use("/players", playerRouter);

export default router;
