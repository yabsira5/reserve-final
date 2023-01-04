import express from "express";
import { getHotel } from "../controllers/hotels.js";

const router = express.Router()

router.get("/find/:HotelID",getHotel)

export default router