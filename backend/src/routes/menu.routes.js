import express from "express";
import {
    getMenu,
    addMenuItem,
    updateMenuItem,
    deleteMenuItem
} from "../controllers/menu.controller.js";
import { adminAuth } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getMenu); // public (for website)
router.post("/", adminAuth, addMenuItem);
router.put("/:id", adminAuth, updateMenuItem);
router.delete("/:id", adminAuth, deleteMenuItem);

export default router;
