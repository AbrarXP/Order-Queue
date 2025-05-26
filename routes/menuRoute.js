import express from "express";
import {
    createMenu,
    getMenu,
    getMenuById,
    updateMenu,
    deleteMenu
} from "../controllers/menuController.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

// Create menu
router.post("/menu", verifyToken, createMenu);

// Read menu
router.get("/menu", verifyToken, getMenu);

// Read menu by ID
router.get("/menu/:id", verifyToken, getMenuById);

// Update menu
router.put("/menu/:id", verifyToken, updateMenu);

// Delete menu
router.delete("/menu/:id", verifyToken, deleteMenu);

export default router;