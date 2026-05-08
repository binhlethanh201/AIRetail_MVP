/**
 * App.jsx - Router nội bộ cho dự án module.
 * Dùng History API để chuyển trang không reload lại app.
 */

import { Suspense, useEffect, useState } from 'react';
import { routes, flattenRoutes } from './routes';

const getInitialPath = () => {
  const path = window.location.pathname;
  if (path === '/' || path === '') return '/inventory/dashboard';
  return path;
};

const App = () => {
  const [currentPath, setCurrentPath] = useState(getInitialPath);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(getInitialPath());
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('app:navigate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('app:navigate', handlePopState);
    };
  }, []);

  const flatRoutes = flattenRoutes(routes);
  const matchedRoute = flatRoutes.find((route) => route.path === currentPath);
  const CurrentComponent = matchedRoute?.component;

  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-slate-50">
          <div className="text-center">
            <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-[#004785]" />
            <p className="text-sm font-semibold text-slate-600">Đang tải...</p>
          </div>
        </div>
      }
    >
      {CurrentComponent ? <CurrentComponent /> : <NotFoundPage />}
    </Suspense>
  );
};

const NotFoundPage = () => (
  <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 text-center">
    <h1 className="text-2xl font-bold text-slate-900">Không tìm thấy trang</h1>
    <button
      onClick={() => {
        window.history.pushState({}, '', '/inventory/dashboard');
        window.dispatchEvent(new Event('popstate'));
      }}
      className="mt-4 rounded-xl bg-[#004785] px-5 py-2 text-sm font-bold text-white"
    >
      Về tổng kho
    </button>
  </div>
);

export default App;
