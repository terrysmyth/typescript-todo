import "./App.css";
import { useState } from "react";
import Filter from "./components/filter/filter.component";
import Todos from "./components/todos/todos.component";

export interface Todo {
  text: string,
  done: boolean,
  edit: boolean,
  id: number
}

function App() {
  const [query, setQuery] = useState('');
  const [status, setStatus ] = useState('all')
  const [newItem, newItemInput] = useState('');
  const [items, setItems] = useState([]);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Terry's To-do App :</h1>
        <Filter
        setQuery={setQuery}
        setStatus={setStatus}
        status={status}
        ></Filter>
        <Todos
        newItemInput={newItemInput}
        newItem={newItem}
        items={items}
        setItems={setItems}
        query={query}
        status={status}
        ></Todos>
      </header>
    </div>
  );
}

export default App;
