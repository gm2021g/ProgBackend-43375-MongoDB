import mongoose from "mongoose";

// Nombre de la coleccion
const productCollection = "products";
import mongoosePaginate from "mongoose-paginate-v2";

// Esquema del documento
const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  brand: String,
  gender: String,
  description: String,
  size: Number,
  price: Number,
  photo: String,
});

productSchema.plugin(mongoosePaginate);

// Creacion del modelo. Collecion + Schema
export const productModel = mongoose.model(productCollection, productSchema);
