import { Schema } from "mongoose";
const productsSchema = new Schema({
    name:{
        type:String,
        required:true,
        lowercase: true,
        trim: true
    },
    description:{
        type:String,
        required:true,
        trim: true
    },
    price:{ 
        type:Number,
        required:true,
    },
   
    stock:{
        type:Number,
        required:true,
    }, 
    category:{
        type:Schema.Types.ObjectId,
        ref:"Categories",
        required:true
    }
},{timestamps:true})
export const  Products = mongoose.model("Products",productsSchema)