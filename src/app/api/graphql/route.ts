
import { NextRequest } from "next/server";
import mongoose from "mongoose";
import ProductModel from './models/ProductSchema'

const uri = process.env.NEXT_PUBLIC_MONGODB_URI

const connectDB = async () => {
    try {
      if (uri) {
        await mongoose.connect(uri);
        console.log("🎉 connected to database successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };
connectDB();

// export async function GET(request: NextRequest) {
//   return handler(request);
// }
// export async function POST(request: NextRequest) {
//   return handler(request);
// }