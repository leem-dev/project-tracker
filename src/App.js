import { ChakraProvider } from "@chakra-ui/react";

import Header from "./components/header-component/header-component";
import ImageSlider from "./components/imageSlider/image-slider-component";
import Footer from "./components/footer/footer-component";

import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <main>
        <Header />
        <ImageSlider />
        <Footer />
      </main>
    </ChakraProvider>
  );
}

export default App;
