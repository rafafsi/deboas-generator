import { Document, Model, Schema, Types, model } from "mongoose";
import { IPlayer, PlayerSchema } from "./player";

export interface IMatch extends Document {
  date: Date;
  teams: Types.DocumentArray<IPlayer>;
}

const MatchSchema = new Schema<IMatch, Model<IMatch>>({
  date: {
    type: Date,
    required: [true, "Match date must be provided."],
    default: Date.now(),
  },
  teams: [[{type: PlayerSchema, required: true}]],
});

const Match = model<IMatch>("match", MatchSchema);
export default Match;
