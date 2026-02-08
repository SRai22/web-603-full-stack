import React, { Component } from "react";
import Home from "./Home";
import InventoryList from "./InventoryList";
import InventoryEdit from "./InventoryEdit";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/inventories" exact element={<InventoryList />} />
          <Route path="/inventories/:id" element={<InventoryEdit />} />
        </Routes>
      </Router>
  );
}
}

export default App;
