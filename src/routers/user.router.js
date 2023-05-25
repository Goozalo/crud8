import { Router } from "express";
import {
  createData,
  deleteData,
  readData,
  updateData,
} from "../controllers/user.controllers.js";

const router = Router();

router.get("/", readData);
router.post("/", createData);
router.patch("/:id", updateData);
router.delete("/:id", deleteData);

export default router;
