
import SearchTable from "./Search_box";
import { ChakraProvider } from '@chakra-ui/react'
import {React} from "react";
///apy-key-guardian = "db361477-2110-4756-ab04-d1ee6dee873c";
//url = "https://content.guardianapis.com/search?api-key=" + apy-key-guardian

function App() { 
  
  return (

    <div >
      <ChakraProvider>
      <SearchTable />
      </ChakraProvider>
    </div>
  );
}

export default App;
