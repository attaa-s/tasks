import "./App.css";

import Nav from "./components/nav";
import Newtodo from "./components/new-todo";
import Todos from "./components/todos";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <header>
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="/add" element={<Newtodo />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
