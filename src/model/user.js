import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
   phone: String,
   address: String,
   tour:{
       type: mongoose.Schema.Types.ObjectId,
       ref: "Tour"
   }
})


export const User = mongoose.models.User || mongoose.model("User", userSchema)