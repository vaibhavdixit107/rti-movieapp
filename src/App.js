import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import MovieGrid from './components/MovieGrid';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/" element={<MovieGrid />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
