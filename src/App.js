import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import Login from "./containers/Login";
function App() {
  return (
    <ChakraProvider>
      <div>
        <Login />
      </div>
    </ChakraProvider>
  );
}

export default App;
