import React from 'react';
import SignupPage from './pages/SignupPage';
import { Routes, Route } from 'react-router-dom';
import RepositoryPage from './pages/RepositoryPage';

function App() {
  return (
  <Routes>
    <Route path="/" element={<SignupPage />} />
    <Route path="/repositories" element={<RepositoryPage />} />
  </Routes>);
};

export default App;