import express from "express";
import morgan from "morgan";
import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const app = express();

import users from "./routes/userRoute.js";
import products from "./routes/productRoute.js";
import posts from "./routes/posts.js";
import comments from "./routes/comments.js";
import uploads from "./routes/uploads.js";

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/users", users);
app.use("/api/products", products);
app.use("/api/posts", posts);
app.use("/api/comments", comments);
app.use("/api/uploads", upload.single("file"), uploads);

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

export default app;
