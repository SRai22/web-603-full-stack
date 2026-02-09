import React, { Component } from "react";
import BookList from "./BookList";
import BookEdit from "./BookEdit";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" exact element={<BookList />} />
          <Route path="/books/:id" element={<BookEdit />} />
        </Routes>
      </Router>
    );
  }
}

export default App;