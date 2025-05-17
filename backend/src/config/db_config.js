import mongoose from "mongoose";
import { configDotenv } from "dotenv";

export const connectDB = async ()=>{
    configDotenv();
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB Database is connected");
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1);
    }
}
