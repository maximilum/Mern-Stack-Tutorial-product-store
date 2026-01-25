import express from "express";
import connectDB from "./config/database.js";
import product from "./models/product.model.js";
import mongoose, { model } from "mongoose";

const app = express();

app.use(express.json());

// create a product
app.post("/api/products", async (req, res) => {
  const sentProduct = req.body;

  if (!sentProduct.name || !sentProduct.price || !sentProduct.image) {
    res.status(400).json({ message: "All fields are required" });
  }
  try {
    const newProduct = new product(sentProduct);
    await newProduct.save();
    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: newProduct,
    });
  } catch (error) {
    console.log("internal error", error.message);
    res.status(500).json({ message: `Database Error:${error.message}` });
  }
});

// Delete a product API
app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "The product was not found" });
    } else {
      res.status(200).json({ success: true, message: "Product Deleted" });
    }
  } catch (error) {
    console.log("database error: object not deleted");
    res
      .status(500)
      .json({ success: false, message: "database error: product not deleted" });
  }
});

// Get all products API
app.get("/api/products", async (req, res) => {
  try {
    const allProducts = await product.find({});

    res.status(200).json({
      success: true,
      message: "products fetched successfully",
      data: allProducts,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "database server error" });
  }
});

//Update Product
app.patch("/api/products/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const updatedProduct = await product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "product updated",
      data: updatedProduct,
    });
  } catch (error) {
    console.log("server error", error.message);
    res.status(500).json({ success: false, message: "Database error" });
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
  connectDB();
});
