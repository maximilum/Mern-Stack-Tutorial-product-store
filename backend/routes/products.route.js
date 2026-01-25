import express from "express";
import product from "../models/product.model.js";
import mongoose from "mongoose";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../controllers/products.controller.js";

// Create Router
const router = express.Router();
export default router;

// Create a product
router.post("/", createProduct);

// Delete a product
router.delete("/:id", deleteProduct);

// Get all products API
router.get("/", getAllProducts);

//Update Product
router.patch("/:id", updateProduct);
