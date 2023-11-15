import { Request, Response } from "express";
import {
  createPlayer,
  findPlayer,
  deletePlayer,
  findPlayers,
  updatePlayerById,
} from "../services/playerService";

export async function create(req: Request, res: Response) {
  const player = await createPlayer(req);
  if (!player) res.status(400).json({ error: "Invalid data or unable to create player" });
  if (player) res.status(201).send(player);
}

export async function findById(req: Request, res: Response) {
  const player = await findPlayer(req);
  if (!player) res.status(404).json({ error: "Player not found" });
  if (player) res.status(200).send(player);
}

export async function findAll(req: Request, res: Response) {
  const players = await findPlayers(req);
  if (!players) res.status(404).json({ error: "Players not found" });
  if (players) res.status(200).send(players);
}

export async function updateById(req: Request, res: Response) {
  const updatedPlayer = await updatePlayerById(req);
  if (!updatedPlayer) res.status(404).json({ error: "Players not found" });
  if (updatedPlayer) res.status(200).send(updatedPlayer);
}

export async function deleteById(req: Request, res: Response) {
  const player = await deletePlayer(req);
  if (!player) res.status(404).json({ error: "Player not deleted" });
  if (player) res.status(204).send(player);
}
