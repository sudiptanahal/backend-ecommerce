import { Schema } from "mongoose";
const ordersSchema = new Schema({
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
            required: true
        }
    }],
    total: {
        type: Number,
        required: true  

    },
    price:{
        type: Number,
        required: true
    }
},{timestamps:true})
export const  Orders = mongoose.model("Orders",ordersSchema)