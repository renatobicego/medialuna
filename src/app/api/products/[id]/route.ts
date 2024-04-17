import connectMongo from "@/app/util/dbConnection";
import { NextRequest, NextResponse } from "next/server";
import Product from "../models/ProductSchema";
import { HttpStatusCode } from "axios";
import { CreateProductDto } from "../route";
import Category from "../../categories/models/CategorySchema";

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectMongo();
    const product = await Product.findById(params.id);
    if (product) {
      return NextResponse.json({ product });
    }
    return NextResponse.json(
      { message: `Producto no encontrado` },
      { status: HttpStatusCode.NotFound }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error },
      { status: HttpStatusCode.BadRequest }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectMongo();
    const body: CreateProductDto = await req.json();
    body.categories = await Promise.all(body.categories.map(async category => {
        const categoryServer = await Category.findById(category)
        if(categoryServer){
            return categoryServer
        }
    }))
    const product = await Product.findByIdAndUpdate(params.id, body)
    return NextResponse.json({ product });
  } catch (error) {
    return NextResponse.json(
      { message: error },
      { status: HttpStatusCode.BadRequest }
    );
  }
}

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
    try {
        await connectMongo();
        const product = await Product.findById(params.id);
        if (product) {
            await Product.findByIdAndDelete(product._id);
            return NextResponse.json({ message: `Producto eliminado` });
        }
        return NextResponse.json({ message: `Producto no encontrado` }, { status: HttpStatusCode.NotFound });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: HttpStatusCode.BadRequest });
    }
}