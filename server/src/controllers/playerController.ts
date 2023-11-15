import { Request, Response } from "express";
import {
  createPlayer,
  findPlayer,
  deletePlayer,
  findAllPlayers,
  updatePlayer,
} from "../services/playerService";

export async function create(req: Request, res: Response) {
  const player = await createPlayer(req);
  res.status(201).send(player);
}

export async function findById(req: Request, res: Response) {
  const player = await findPlayer(req);
  res.status(200).json(player);
}

export async function deleteById(req: Request, res: Response) {
  const player = await deletePlayer(req);
  res.status(200).send(player);
}

export async function findAll(req: Request, res: Response) {
  const players = await findAllPlayers(req);
  res.status(200).send(players);
}

export async function updateByFilter(req: Request, res: Response) {
  const updatedPlayers = await updatePlayer(req);
  res.status(200).send(updatedPlayers);
}
