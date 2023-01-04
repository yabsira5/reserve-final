import express from "express";
import { getRoom } from "../controllers/room.js";

const router = express.Router()

router.get("/find/:RoomID",getRoom)

export default router