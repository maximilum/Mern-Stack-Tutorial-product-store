import { createSlice } from "@reduxjs/toolkit";

const ProductsSlice = createSlice({
  name: Products,
  initialState: {
    products: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    createProduct: (state, action) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.products.findIndex(
        (product) => product._id === action.payload._id,
      );
      if (index !== -1) state.products[index] = action.payload;
    },
    deleteProduct: (state, action) => {
      const index = state.products.findIndex(
        (product) => product._id === action.payload._id,
      );
      state.products.splice(index, 1);
    },
  },
});

export const { setProducts, createProduct, updateProduct, deleteProduct } =
  ProductsSlice.actions;

export default ProductsSlice.reducer;
