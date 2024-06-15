import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./components/LogIn";
import Home from "./components/Home";

const App = () => {
  return (
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
  );
};

export default App;
