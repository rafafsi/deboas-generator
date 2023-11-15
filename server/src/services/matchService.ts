import { Request } from "express";
import Player, { IPlayer } from "../models/player";
import Match from "../models/match";
import { shuffleArray, whatsappTemplate } from "../utils/commons";

function splitPlayersIntoTeams(players: IPlayer[]): IPlayer[][] {
  const shuffledPlayers = shuffleArray([...players]);

  const teams: IPlayer[][] = [];
  const teamSize = 4;
  for (let i = 0; i < shuffledPlayers.length; i += teamSize) {
    let team = shuffledPlayers.slice(i, i + teamSize);
    teams.push(team);
  }

  return teams;
}

export async function generate(req: Request) {
  const confirmedPlayers: IPlayer[] = await Player.find({ confirmed: true });
  if (!confirmedPlayers) console.log("No one player has confirmed yet.");

  if (confirmedPlayers.length == 16) {
    // const playerAndLevel = confirmedPlayers.map((player) => {
    //   return { name: player.nickname, level: player.level };
    // });
    const splittedTeams: IPlayer[][] = splitPlayersIntoTeams(confirmedPlayers);
    const payload = {
      date: Date.now(),
      teams: splittedTeams,
    };
    // const { date, teams } = await Match.create(payload);
    const match = await Match.create(payload);
    const zap = whatsappTemplate(match);
    return zap;
  } else {
    return "There are more than 16 players confirmed.";
  }
}

export async function createTeam(players: IPlayer[]) {}
