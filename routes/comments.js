import c from "../controllers/comments.js";
import { Router } from "express";
const router = Router();

router.post("/:postId", c.createComment);
router.get("/:id", c.getComment);

export default router;
