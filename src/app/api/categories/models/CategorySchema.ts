import mongoose from "mongoose";
const { Schema } = mongoose;

const CategorySchema = new Schema({
  name: { type: String, required: [true, "Nombre requerido"] },
  image: { type: String, required: [true, "Imagen requerida"] },
});

export default mongoose.models.Category || mongoose.model("Category", CategorySchema);