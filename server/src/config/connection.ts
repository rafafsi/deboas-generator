import mongoose from "mongoose";
require("dotenv").config();

export default async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost:27017/");
  } catch (error) {
    console.error(error);
  }
};
