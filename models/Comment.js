import { Schema, model } from "mongoose";
import customId from "../utils/generateId.js";

const commentSchema = new Schema(
  {
    _id: {
      type: String,
      default: customId(),
    },
    text: String,
  },
  {
    _id: false,
  }
);

export default model("Comment", commentSchema);
