import { Request } from "express";
import Player from "../models/player";
import mongoose from "mongoose";

export async function createPlayer(req: Request) {
  try {
    const payload = req.body;
    const player = await Player.create(payload);

    if (!player) console.log("Player wasnt registered");

    return player;
  } catch (error) {
    console.log("createPlayer ~ error:", error);
  }
}

export async function findPlayer(req: Request) {
  try {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const player = await Player.findOne({ _id: id });
    return player;
  } catch (error) {
    console.log("findPlayer ~ error:", error);
  }
}

export async function deletePlayer(req: Request) {
  try {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const player = await Player.findByIdAndDelete({ _id: id });
    return player;
  } catch (error) {
    console.log("deletePlayer ~ error:", error);
  }
}

export async function findPlayers(req: Request) {
  try {
    const search: any = req.query || {};

    const players = await Player.find(search);
    return players;
  } catch (error) {
    console.log("findPlayers ~ error:", error);
  }
}

export async function updatePlayerById(req: Request) {
  try {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const player = await Player.findById(id);

    if (!player) console.log("Player not found");

    if (player) {
      const updatedPlayer = await Player.updateOne(
        { _id: id },
        {
          $set: {
            fullName: req.body.fullName,
            nickname: req.body.nickname,
            position: req.body.position,
            level: req.body.level,
            confirmed: req.body.confirmed,
          },
        },
        { returnDocument: "after", runValidators: true, new: true }
      );

      if (!updatedPlayer) {
        console.log("Player wasn't updated. Please try again");
      } else {
        return updatedPlayer;
      }
    }
  } catch (error) {
    console.log("updatePlayerById ~ error:", error);
  }
}
