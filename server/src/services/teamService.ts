import { Request } from "express";
import Player, { IPlayer } from "../models/player";

export async function generate(req: Request) {
  const confirmedPlayers: IPlayer[] = await Player.find({ confirmed: true });
  if (!confirmedPlayers) console.log("No one player has confirmed yet.");

  if (confirmedPlayers.length == 16) {
    const playerAndLevel = confirmedPlayers.map((player) => {
      return { name: player.nickname, level: player.level };
    });
    return playerAndLevel;
  } else {
    return "There are more than 16 players confirmed.";
  }
}
