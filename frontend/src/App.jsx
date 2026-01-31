import "./App.css";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box bg="white" w="100%" minH="100%" color={"black"}>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </Box>
  );
}

export default App;
