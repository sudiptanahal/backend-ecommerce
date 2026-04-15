import mongoose from "mongoose";
import { DB_NAME } from "./constant.js";
import connectDB from "./db/db.js";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({ path: "./.env" });

connectDB()
.then(() => {
    
    app.on("error", (error) => {
        console.log("Error", error);
        throw error;
    });
    
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    });
})
.catch((error) => {
    console.log("Error", error);
    throw error;
});

    

























// const app = express();
// ; (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error", (error) => {    
//             console.log("Error",error)
//             throw error
//         })    
//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`)
//         })
//     }
//     catch (error) {
//         console.log("Error",error)
//         throw error
//     }
// }
// )()