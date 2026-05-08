/**
 * MainLayout - Layout chính cho ứng dụng
 */

import { Suspense } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

export const MainLayout = ({ children, onNavigate = () => {} }) => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar onNavigate={onNavigate} />

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <Header />

        {/* Content */}
        <main className="flex-1 overflow-auto">
          <div className="mx-auto max-w-7xl px-6 py-8">
            <Suspense
              fallback={
                <div className="flex h-96 items-center justify-center">
                  <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-blue-600" />
                </div>
              }
            >
              {children}
            </Suspense>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
