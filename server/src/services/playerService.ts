import { Request } from "express";
import Player from "../models/player";
import mongoose from "mongoose";

export async function createPlayer(req: Request) {
  try {
    const { fullName, nickname, position, level } = req.body;
    const player = await Player.create({ fullName, nickname, position, level });
    if (!player) {
      console.log("Player wasnt registered");
    }
    return player;
  } catch (error) {}
}

export async function findPlayer(req: Request) {
  try {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const player = await Player.findOne({ _id: id });
    return player;
  } catch (error) {}
}

export async function deletePlayer(req: Request) {
  try {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const player = await Player.findByIdAndDelete({ _id: id });
    return player;
  } catch (error) {}
}

export async function findAllPlayers(req: Request) {
  try {
    const position = req.query.position;

    if (position) {
      const players = await Player.find({ position: position });
      return players;
    } else {
      const players = await Player.find({});
      return players;
    }
  } catch (error) {}
}

export async function updatePlayer(req: Request) {
  try {
    const filter = req.body;
    const updatedPlayers = await Player.updateMany(filter, { $set: { confirmed: true } });
    return updatedPlayers;
  } catch (error) {}
}
