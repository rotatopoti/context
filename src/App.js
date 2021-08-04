import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import List from "./List";
import Detail from "./Detail";
import { ItemContext } from "./ItemContext";

import './App.css';

function App() {

  // Placeholder for list data
  const [data, setData] = useState([
    { id: "24", title: "Go to the store" },
    { id: "25", title: "Item 2" },
    { id: "26", title: "Item 3" },
    { id: "27", title: "Item 4" }
  ]);

  return (
    <Router className="App">
      <ItemContext.Provider value={{data, setData}}>
        <Route exact path="/" component={List} />
        <Route path="/:id" component={Detail} />
      </ItemContext.Provider>
    </Router>
  );
}

export default App;
