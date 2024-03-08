import { Router } from "express";
import c from "../controllers/uploads.js";
const router = Router();

router.post("/image", c.uploadImage);
router.get("/image/:id", c.getImage);
router.post("/", c.uploadFile);

export default router;
