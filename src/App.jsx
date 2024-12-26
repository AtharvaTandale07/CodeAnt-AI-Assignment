import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
const SignupPage = lazy(() => import('./pages/SignupPage'));
const RepositoryPage = lazy(() => import('./pages/RepositoryPage'));
function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/repositories" element={<RepositoryPage />} />
      </Routes>
    </Suspense>);
};

export default App;