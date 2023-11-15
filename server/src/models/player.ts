import { Schema, Document, model } from "mongoose";

export interface IPlayer extends Document {
  fullName: string;
  nickname?: string;
  position: string;
  level: number;
  confirmed: boolean
}

export const PlayerSchema = new Schema<IPlayer>({
  fullName: {
    type: String,
    required: [true, "Name must be provided."],
    unique: true,
    comments: "Player's full name",
  },
  nickname: {
    type: String,
    required: false,
    unique: true,
    comments: "Player's nickname",
  },
  position: {
    type: String,
    required: true,
    enum: {
      values: ["WINGER", "FIXO", "PIVOT", "GK"],
      message: "This value is not supported: {VALUE}.",
    },
    default: "WINGER",
    comments: "Favourite player's position to play.",
  },
  level: {
    type: Number,
    min: [1, "Minimum level is 1."],
    max: [5, "Maximum level is 5."],
    required: true,
    default: 2,
    comments: "Player's level",
  },
  confirmed: { 
    type: Boolean, 
    default: false,
    comments: "Confirmation if the player will play that day."
  }
});

const Player = model<IPlayer>("player", PlayerSchema);
export default Player;
