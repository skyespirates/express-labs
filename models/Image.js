import { Schema, model } from "mongoose";

const imageSchema = new Schema({
  file: Buffer,
});

export default model("Image", imageSchema);
