import { Schema } from "mongoose";
import { User } from "./user.model";
const reviewsSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",        
        required: true
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: "Products",
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comment: {
        type: String,
        required: true,
        trim: true
    }
},{timestamps:true})
export const  Reviews = mongoose.model("Reviews",reviewsSchema)
