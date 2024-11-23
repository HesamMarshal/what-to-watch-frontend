import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TrendingMoviesPage from "./pages/TrendingMoviesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trending" element={<TrendingMoviesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
