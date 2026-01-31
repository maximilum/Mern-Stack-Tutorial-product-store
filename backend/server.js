import express from "express";
import connectDB from "./config/database.js";
import cors from "cors";

import productRouter from "./routes/products.route.js";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173", // Only allow your frontend
  }),
);

app.use(express.json());

// Products Routers
app.use("/api/products", productRouter);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
  connectDB();
});
