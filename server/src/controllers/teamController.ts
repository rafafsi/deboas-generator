import { Request, Response } from "express";
import { generate } from "../services/teamService";

export async function generateTeam(req: Request, res: Response) {
  const team = await generate(req);
  res.status(200).send(team);
}
