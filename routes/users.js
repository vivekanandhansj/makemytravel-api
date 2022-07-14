import express from "express"
import {  deleteUser, getUser, getUsers, updatedUser } from "../controllers/user.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/authentication",verifyToken,((req,res,next)=>{
//     res.send("user is authenticated to login !")
// }))

//  router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//    res.send("hello user, you are logged in and you can delete your account")
//  })

//  router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//    res.send("hello admin, you are logged in and you can delete all accounts")
//  })
// UPDATE
router.put("/:id",verifyUser,updatedUser)
// DELETE
router.delete("/:id",verifyUser,deleteUser)
// GET
router.get("/:id",verifyUser,getUser)
// GET ALL
router.get("/",verifyAdmin,getUsers)




export default router
