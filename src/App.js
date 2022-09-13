
import SearchTable from "./Search_box";
import { ChakraProvider } from '@chakra-ui/react'
import {React, useState} from "react";
///apy-key-guardian = "db361477-2110-4756-ab04-d1ee6dee873c";
//url = "https://content.guardianapis.com/search?api-key=" + apy-key-guardian

function App() { 
  const [result, setResult] = useState([]);  
  return (

    <div >
      <ChakraProvider>
      <SearchTable data={result} fillresults={setResult}/>
      </ChakraProvider>
    </div>
  );
}

export default App;
