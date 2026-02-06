import product from "../models/product.model.js";
import mongoose from "mongoose";

export const getAllProducts = async (req, res) => {
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
};


export const createProduct = async (req, res) => {
  const sentProduct = req.body;
  
  if (!sentProduct.name || !sentProduct.price || !sentProduct.image) {
    return res.status(400).json({success: false, message: "All fields are required" });
  }
  try {
    const newProduct = new product(sentProduct);
    const savedProduct = await newProduct.save();
    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: savedProduct,
      // newData: newProduct,
    });
  } catch (error) {
    console.log("internal error", error.message);
    res.status(500).json({ success: false, message: `Database Error:${error.message}` });
  }
};


export const updateProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ success: false, message: "invalid Product id" });
  }

  try {
    const updatedProduct = await product.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res.status(200).json({
      success: true,
      message: "product updated",
      data: updatedProduct,
    });
  } catch (error) {
    console.log("server error", error.message);
    res.status(500).json({ success: false, message: "Database error" });
  }
};


export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(500)
      .json({ success: false, message: "database error: invalid Product id" });
  }

  try {
    const deletedProduct = await product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "The product was not found" });
    } else {
      res.status(200).json({
        success: true,
        message: "Product Deleted",
        data: deletedProduct,
      });
    }
  } catch (error) {
    console.log("database error: object not deleted");
    res
      .status(500)
      .json({ success: false, message: "database error: product not deleted" });
  }
};
