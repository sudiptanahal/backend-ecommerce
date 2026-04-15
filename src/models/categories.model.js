import { Schema } from "mongoose";
const catergoriesSchema = new Schema({
    name:{
        type:String,
        required:true,
        lowercase: true,
        trim: true
    },
    description:{
        type:String,
        required:true,
        lowercase: true,
        trim: true
    }
},{timestamps:true})
export const  Categories = mongoose.model("Categories",catergoriesSchema)