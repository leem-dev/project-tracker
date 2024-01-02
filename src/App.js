import { ChakraProvider } from "@chakra-ui/react";
import ProjectSection from "./component/project-component/project-section-component";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <main>
        <ProjectSection />
      </main>
    </ChakraProvider>
  );
}

export default App;
