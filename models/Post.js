import { Schema, model } from "mongoose";
import customId from "../utils/generateId.js";

const postSchema = new Schema(
  {
    _id: {
      type: String,
      default: customId(),
    },
    content: String,
    comments: [{ type: String, ref: "Comment" }],
  },
  { _id: false }
);

export default model("Post", postSchema);
