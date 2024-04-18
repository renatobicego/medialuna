import { NextRequest, NextResponse } from "next/server";
import Product from "./models/ProductSchema";
import connectMongo from "@/app/util/dbConnection";
import { HttpStatusCode } from "axios";

export type CreateProductDto = {
  name: string;
  categories: string[];
  price: number;
  image: string;
};

export async function GET(request: NextRequest) {
  try {
    await connectMongo();
    const products = await Product.find().populate('categories');
    return NextResponse.json({ products });
  } catch (error) {
    return NextResponse.json({ error });
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectMongo();
    const body: CreateProductDto = await req.json();
  
    if (
      body.name.length > 0 &&
      body.categories.length > 0 &&
      body.price &&
      body.image.length > 0
    ) {
      const product = new Product(body)
      await product.save();
      return NextResponse.json(
        { product, message: "Producto creado" },
        { status: HttpStatusCode.Created }
      );
    }
    return NextResponse.json(
      { message: "Error al crear, un campo requerido está vacio" },
      { status: HttpStatusCode.BadRequest }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error },
      { status: HttpStatusCode.BadRequest }
    );
  }
}
