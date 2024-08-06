import "./App.css";
import Note from "./components/EmptyComp/Note";
import State from "./components/EmptyComp/State";
import Store from "./components/EmptyComp/Store";
import Wallet from "./components/EmptyComp/Wallet";
import Home from "./container/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/stats" element={<State />} />
        <Route exact path="/note" element={<Note />} />
        <Route exact path="/wallet" element={<Wallet />} />
        <Route exact path="/store" element={<Store />} />
      </Routes>
    </Router>
  );
}

export default App;
