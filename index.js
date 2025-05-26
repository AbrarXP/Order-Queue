import express from "express";
import cors from "cors";
import db from './config/database.js';
import cookieParser from 'cookie-parser';

import userRoutes from "./routes/userRoute.js";
import menuRoutes from "./routes/menuRoute.js";
import orderRoutes from "./routes/orderRoute.js";

import dotenv from "dotenv";
dotenv.config();

const app = express(); // <<< INI WAJIB ADA
app.use(cookieParser());

// Middleware
app.use(cors({
    origin: true,// ganti sesuai frontend kamu
    credentials: true
}));
app.use(express.json());

// Routes
app.use("/api", userRoutes);
app.use("/api", menuRoutes);
app.use("/api", orderRoutes);

// Sync DB dan mulai server
db.sync().then(() => console.log("Database synced"));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

