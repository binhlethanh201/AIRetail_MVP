import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import MainLayout from './shared/components/layout/MainLayout';

// Static Pages
import LandingPage from './pages/LandingPage';
import NotFound from './pages/errors/NotFound';
import AccessDenied from './pages/errors/AccessDenied';
import ServerError from './pages/errors/ServerError';

// === LAZY LOAD MODULES ===
// Inventory Module
const InventoryDashboard = lazy(() => import('./modules/inventory/pages/InventoryDashboard'));
const ProductManagement = lazy(() => import('./modules/inventory/pages/ProductManagement'));
const StockImport = lazy(() => import('./modules/inventory/pages/StockImport'));
const StockExport = lazy(() => import('./modules/inventory/pages/StockExport'));
const InventoryReports = lazy(() => import('./modules/inventory/pages/InventoryReports'));

// 2. POS Module
const PosScreen = lazy(() => import('./modules/pos/pages/POSScreen'));
const CheckoutPage = lazy(() => import('./modules/pos/pages/CheckoutPage'));
const OrderHistory = lazy(() => import('./modules/pos/pages/OrderHistory'));
const ShiftManagement = lazy(() => import('./modules/pos/pages/ShiftManagement'));

// 3. Forum Module
const ForumHome = lazy(() => import('./modules/forum/pages/ForumHome'));
const PostDetail = lazy(() => import('./modules/forum/pages/PostDetail'));
const CreatePost = lazy(() => import('./modules/forum/pages/CreatePost'));
const ForumCategory = lazy(() => import('./modules/forum/pages/ForumCategory'));
const ForumTrends = lazy(() => import('./modules/forum/pages/ForumTrends'));

function App() {
  // Giao diện loading lúc chuyển trang
  const LoadingSpinner = (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="text-center">
        <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-[#004785]" />
        <p className="text-sm font-semibold text-slate-600">Đang tải dữ liệu...</p>
      </div>
    </div>
  );

  return (
    <BrowserRouter>
      <Suspense fallback={LoadingSpinner}>
        <Routes>
          {/* TRANG CHỦ */}
          <Route path="/" element={<LandingPage />} />

          {/* NHÓM 1: POS - Đứng độc lập không dính MainLayout */}
          <Route path="/pos">
            <Route index element={<PosScreen />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="orders" element={<OrderHistory />} />
            <Route path="shift" element={<ShiftManagement />} />
          </Route>

          {/* NHÓM 2: DIỄN ĐÀN (FORUM) - Đứng độc lập không dính MainLayout */}
          <Route path="/forum">
            <Route index element={<ForumHome />} />
            <Route path="post/:id" element={<PostDetail />} />
            <Route path="create" element={<CreatePost />} />
            <Route path="category/:id" element={<ForumCategory />} />
            <Route path="trends" element={<ForumTrends />} />
          </Route>

          {/* NHÓM 3: QUẢN TRỊ KHO & ADMIN - Nằm trong khung MainLayout (có Sidebar + Header) */}
          <Route element={<MainLayout />}>
            
            {/* Tổng Kho */}
            <Route path="/inventory" element={<Navigate to="/inventory/dashboard" replace />} />
            <Route path="/inventory/dashboard" element={<InventoryDashboard />} />
            <Route path="/inventory/products" element={<ProductManagement />} />
            <Route path="/inventory/import" element={<StockImport />} />
            <Route path="/inventory/export" element={<StockExport />} />
            <Route path="/inventory/reports" element={<InventoryReports />} />

          </Route>

           {/* Admin */}
            <Route
              path="/admin"
              element={
                <div className="flex h-[50vh] items-center justify-center text-2xl font-bold uppercase tracking-widest text-slate-400">
                  Admin Module - Đang được phát triển
                </div>
              }
            />

          {/* NHÓM 4: XỬ LÝ LỖI */}
          <Route path="/403" element={<AccessDenied />} />
          <Route path="/500" element={<ServerError />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;