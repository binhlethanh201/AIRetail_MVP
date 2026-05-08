import React from 'react';
import { Outlet } from 'react-router-dom';
import PosSidebar from './PosSidebar';
import PosHeader from './PosHeader';
import PosStatusBar from './PosStatusBar';

const PosLayout = () => {
  return (
    <div className="font-body-md h-screen overflow-hidden bg-bodyCustomer text-textMain">
      <PosSidebar />
      <PosHeader />

      <main className="fixed bottom-12 left-[240px] right-[400px] top-16 flex flex-col p-6">
        <Outlet />
      </main>

      <PosStatusBar />
    </div>
  );
};

export default PosLayout;
