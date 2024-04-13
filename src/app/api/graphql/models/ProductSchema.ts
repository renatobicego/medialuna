import mongoose from "mongoose";
const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: { type: String, required: [true, "All fields are required"] },
  categories: [{
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
}],
  price: {
    type: Number,
    required: [true, "All fields are required"],
  },
  available: {type: Boolean, default: true},
});

export default mongoose.model("ProductModel", ProductSchema);