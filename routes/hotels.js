import express from "express"
import { verifyAdmin } from "../utils/verifyToken.js";
import {
createHotel,
updatedHotel,
deleteHotel,
getHotel,
getHotels
} from "../controllers/hotel.js";


const router = express.Router();
// CREATE 
router.post("/",verifyAdmin, createHotel)
// UPDATE
router.put("/:id",verifyAdmin,updatedHotel)
// DELETE
router.delete("/:id",verifyAdmin,deleteHotel)
// GET
router.get("/:id",getHotel)
// GET ALL
router.get("/",getHotels)


export default router
