import { Schema, Document, model, Types, Model } from "mongoose";
import { IPlayer } from "./player";

export interface ITeam extends Document {
  groupName: string;
  members: Types.DocumentArray<IPlayer>;
}

export const TeamSchema = new Schema<ITeam, Model<ITeam>>({
  groupName: {
    type: String,
    required: [true, "Group name must be provided."],
    default: "A",
    comments: "Team name.",
  },
  members: {
    type: [{ nickname: String, level: Number }],
    comments: "Team's member",
    required: [true, "Members must be provided."],
    validate: {
      validator: (value: any[]) => value.length >= 1 && value.length <= 4,
      message: "Number of members must be between 1 and 4.",
    },
  },
});

const Team = model<ITeam>("team", TeamSchema);
export default Team;
