import { Router } from "express";
import c from "../controllers/posts.js";

const router = Router();

router.post("/", c.createPost);
router.get("/:id", c.getPost);

export default router;
