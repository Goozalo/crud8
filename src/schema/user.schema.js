import { Schema, model } from "mongoose";

const userDB8 = new Schema({
  name: String,
  lastname: String,
  email: String,
});

export const userdb8 = model("userdb8", userDB8);
