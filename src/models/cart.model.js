import { Schema } from "mongoose";
const cartSchema= new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    products: [{
        product: {
            type: Schema.Types.ObjectId,
            ref: "Products",            
            required: true 
        },
        quantity: {
            type: Number,
            required: true,
            min: 1
        }
    }],
    total: {
        type: Number,
        required: true
    }
},{timestamps:true})
export const  Cart = mongoose.model("Cart",cartSchema)
        