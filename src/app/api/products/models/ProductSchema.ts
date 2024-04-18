import mongoose from "mongoose";
const { Schema } = mongoose;

const Product = new Schema({
  name: { type: String, required: [true, "Nombre requerido"] },
  categories: [{
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: [true, "Categoria requerida"]
}],
  price: {
    type: Number,
    required: [true, "Precio requerido"],
  },
  image: { type: String, required: [true, "Imagen requerida"] },
  available: {type: Boolean, default: true},
});

export default mongoose.models.Product || mongoose.model("Product", Product);