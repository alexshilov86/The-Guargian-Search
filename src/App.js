import results from "./Results";
import Search_table from "./Search_box";
///apy-key-guardian = "db361477-2110-4756-ab04-d1ee6dee873c";
//url = "https://content.guardianapis.com/search?api-key=" + apy-key-guardian

function App() { 
  
  return (
    <div >
      <Search_table data={results}/>
    </div>
  );
}

export default App;
