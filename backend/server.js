import express from "express";
import connectDB from "./config/database.js";

import productRouter from "./routes/products.route.js";

const app = express();

app.use(express.json());

// Products Routers
app.use("/api/products", productRouter);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
  connectDB();
});
