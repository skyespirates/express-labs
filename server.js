import { connect } from "mongoose";
import app from "./app.js";

const PORT = 3001;
const DB = "mongodb://127.0.0.1:27017/test";

import customId from "./utils/generateId.js";

connect(DB).then(() => {
  app.listen(PORT, () => {
    console.log("connected to database", customId());
    console.log("listening on port", PORT);
  });
});
