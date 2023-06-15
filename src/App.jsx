import React from "react";
import Navbar from "./Components/Navbar";
import Box from "@mui/material/Box";
import Content from "./Components/Content.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <Box>
      <Navbar />
      <Content />
      <Footer />
    </Box>
  );
}

export default App;
