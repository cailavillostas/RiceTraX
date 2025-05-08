import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import SearchResults from './pages/SearchResults';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/" element={<SearchResults />} /> {/* Default route */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;