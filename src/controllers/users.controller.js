import CustomError from "../services/errors/CustomError.js";
import EErrors from "../services/errors/enums.js";
import { validateIdErrorInfo } from "../services/errors/info.js";
import { usersService } from "../services/index.js"
import mongoose from "mongoose";

const getAllUsers = async(req,res)=>{
    const users = await usersService.getAll();
    res.send({status:"success",payload:users})
}

const getUser = async(req,res)=> {
    const userId = req.params.uid;
    if(!userId || mongoose.Types.ObjectId.isValid(userId)) {
        CustomError.createError({
            name: "User ID error",
            cause: validateIdErrorInfo(),
            message: "Param UID is not valid",
            code: EErrors.INVALID_PARAM
        })
    }
    const user = await usersService.getUserById(userId);
    if(!user) return res.status(404).send({status:"error",error:"User not found"})
    res.send({status:"success",payload:user})
}

const updateUser =async(req,res)=>{
    const updateBody = req.body;
    const userId = req.params.uid;
    const user = await usersService.getUserById(userId);
    if(!user) return res.status(404).send({status:"error", error:"User not found"})
    const result = await usersService.update(userId,updateBody);
    res.send({status:"success",message:"User updated"})
}

const deleteUser = async(req,res) =>{
    const userId = req.params.uid;
    const result = await usersService.delete(userId);
    res.send({status:"success",message:"User deleted"})
}

export default {
    deleteUser,
    getAllUsers,
    getUser,
    updateUser
}