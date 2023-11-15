import { Request, Response } from "express";
import { generate } from "../services/matchService";

export async function generateMatch(req: Request, res: Response) {
  const team = await generate(req);
  res.status(200).send(team);
}
