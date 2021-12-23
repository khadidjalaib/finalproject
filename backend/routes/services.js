import express from "express";
import {
  getServices,
  getService,
  createService,
} from "../controllers/services.js";

const router = express.Router();

router.get("/", getServices);
router.post("/", createService);
router.get("/:id", getService);
export default router;
