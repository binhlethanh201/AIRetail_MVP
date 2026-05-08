import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layouts
import PosLayout from './components/layout/pos/PosLayout';

// Pages
import LandingPage from './pages/LandingPage';
import NotFound from './pages/errors/NotFound';
import PosScreen from './pages/pos/PosScreen';
import AccessDenied from './pages/errors/AccessDenied';
import ServerError from './pages/errors/ServerError';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<PosLayout />}>
          <Route path="/pos" element={<PosScreen />} />
        </Route>

        <Route
          path="/inventory"
          element={
            <div className="flex min-h-screen items-center justify-center bg-white text-2xl font-bold uppercase tracking-widest text-placeholder">
              Inventory Module - Coming Soon
            </div>
          }
        />
        <Route
          path="/forum"
          element={
            <div className="flex min-h-screen items-center justify-center bg-white text-2xl font-bold uppercase tracking-widest text-placeholder">
              Forum Module - Coming Soon
            </div>
          }
        />

        <Route
          path="/admin"
          element={
            <div className="flex min-h-screen items-center justify-center bg-gray-100 text-2xl font-bold uppercase tracking-widest text-placeholder">
              Admin Module - Coming Soon
            </div>
          }
        />

        <Route path="/403" element={<AccessDenied />} />
        <Route path="/500" element={<ServerError />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
