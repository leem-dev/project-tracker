import { ChakraProvider } from "@chakra-ui/react";
import Main from "./component/project-main";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <main>
        <Main />
      </main>
    </ChakraProvider>
  );
}

export default App;
