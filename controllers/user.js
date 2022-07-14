import User from "../models/User.js"





// UPDATE
export const updatedUser = async (req,res,next)=>{ 
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedUser)
    } catch (error) {
        next(error)
    }
}

// DELETE
export const deleteUser = async (req,res,next)=>{
    try {
       await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User will be deleted")
    } catch (error) {
        next(error)
    }
}
// GET

export const getUser = async (req,res,next)=>{
    try {
      const getUser =  await User.findById(req.params.id)
        res.status(200).json(getUser)
    } catch (error) {
        next(error)
    }
}
// GET ALL

export const getUsers = async (req,res,next)=>{
    try {
      const getUsers =  await User.find()
        res.status(200).json(getUsers)
    } catch (error) {
        next(error)
    }
}
