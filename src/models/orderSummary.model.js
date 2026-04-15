import { Schema } from "mongoose";
const orderSummarySchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    orderId: {
        type: Schema.Types.ObjectId,
        ref: "Payment",
        required: true
    },
    // products: [{
    //     product: {
    //         type: Schema.Types.ObjectId,
    //         ref: "Products",
    //         required: true
    //     },
    //     quantity: {
    //         type: Number,
    //         required: true
    //     }
    // }],
    status: {
        type: String,
        enum: ["pending", "completed", "cancelled"],
        default: "pending"
    },
    total: {
        type: Number,
        required: true

    },
}, { timestamps: true })
export const OrderSummary = mongoose.model("OrderSummary", orderSummarySchema)