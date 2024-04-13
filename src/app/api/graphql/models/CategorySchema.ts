import mongoose from "mongoose";
const { Schema } = mongoose;

const CategorySchema = new Schema({
  name: { type: String, required: [true, "Nombre requerido"] },
});

export default mongoose.models.CategoryModel || mongoose.model("CategoryModel", CategorySchema);