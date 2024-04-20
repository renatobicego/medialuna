import connectMongo from "@/app/util/dbConnection";
import { NextRequest, NextResponse } from "next/server";
import Product from "../../models/ProductSchema";
import { HttpStatusCode } from "axios";
import { Category } from "@/app/util/dataTypes";

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectMongo();
    // Find the requested product by ID and populate its 'categories' field
    const product = await Product.findById(params.id).populate("categories");

    if (!product) {
      return NextResponse.json(
        { message: `Producto no encontrado` },
        { status: HttpStatusCode.NotFound }
      );
    }

    // Extract category IDs from the populated 'categories' field of the product
    const categoryIds = product.categories.map((category: Category) => category._id);

    // Find related products that share at least one category with the requested product
    const relatedProducts = await Product.find({
      categories: { $in: categoryIds }, // Find products with at least one matching category ID
      _id: { $ne: product._id }, // Exclude the requested product itself
      available: true
    });

    return NextResponse.json({ product, relatedProducts });
  } catch (error) {
    return NextResponse.json(
      { message: error },
      { status: HttpStatusCode.BadRequest }
    );
  }
}
