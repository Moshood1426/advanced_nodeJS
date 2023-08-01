import express, { Request, Response, NextFunction } from "express";
import {
  createVandor,
  getAllVandor,
  getVandorById,
} from "../controllers/adminController";

const router = express.Router();

router.get("/vandor", getAllVandor);
router.post("/vandor", createVandor);
router.get("/vandor/:id", getVandorById);

export { router as AdminRoute };
