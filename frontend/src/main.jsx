import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./router/router.jsx";
import { RouterProvider } from "react-router";
import store from "./store/store.js";
import { Provider } from "react-redux";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"; // Import defaultSystem

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ChakraProvider value={defaultSystem}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </Provider>
  </StrictMode>,
);
