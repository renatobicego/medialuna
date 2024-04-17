
import { NextRequest, NextResponse } from "next/server";
import connectMongo from "@/app/util/dbConnection";
import Category from "./models/CategorySchema";


export async function GET(request: NextRequest) {
  try {
    await connectMongo();
    const categories = await Category.find();
    return NextResponse.json({ categories });
} catch (error) {
    return NextResponse.json({ error });
}
}
