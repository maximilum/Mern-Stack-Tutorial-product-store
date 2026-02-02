import { createBrowserRouter } from "react-router";
import App from "../App";
import CreateProduct from "../Components/CreateProduct";
import Products from "../Components/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Products></Products>,
      },
      {
        path: "/createProduct",
        element: <CreateProduct></CreateProduct>,
      },
    ],
  },
]);

export default router;
