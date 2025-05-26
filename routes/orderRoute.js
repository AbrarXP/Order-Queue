import express from "express";
import {
    createOrder,
    getOrder,
    getOrderById,
    updateOrder,
    deleteOrder
} from "../controllers/orderController.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

// Create order
router.post("/order", verifyToken, createOrder);

// Read order
router.get("/order", verifyToken, getOrder);

// Read order by ID
router.get("/order/:id", verifyToken, getOrderById);

// Update order
router.put("/order/:id", verifyToken, updateOrder);

// Delete order
router.delete("/order/:id", verifyToken, deleteOrder);

export default router;