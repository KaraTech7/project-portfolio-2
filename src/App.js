import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import theme from "./theme";

const App = () => {
  return (
      <ChakraProvider theme={theme}>
        <Header />
        <Footer />
      </ChakraProvider>
  );
};

export default App;
