
import mongoose from "mongoose";
import dotenv from "dotenv";

// ✅ Manually load `.env.local` from `env_local/`
// dotenv.config({ path: "./env_local/.env.local" });
import { resolve } from "path";

// ✅ Use absolute path
dotenv.config({ path: resolve(process.cwd(), "env_local/.env.local") });



const MONGODB_URI = process.env.MONGODB_URI; // Store MongoDB URI in .env file

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};


