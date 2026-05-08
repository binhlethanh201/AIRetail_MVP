import React from 'react';

const StatusBar = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 flex h-12 items-center justify-between bg-admin px-6 text-surface">
      <div className="flex items-center gap-x-6">
        <div className="flex items-center gap-x-2 text-[10px] font-bold uppercase tracking-widest opacity-90">
          <span className="text-placeholder">ĐƠN:</span>
          <span>KK-20260508-001</span>
        </div>

        <div className="flex items-center gap-x-2 border-l border-surface/20 pl-6 text-[10px] font-bold uppercase tracking-widest opacity-90">
          <span className="text-placeholder">NHÂN VIÊN:</span>
          <span>Nguyễn Văn A</span>
        </div>

        <div className="flex items-center gap-x-2 border-l border-surface/20 pl-6 text-[10px] font-bold uppercase tracking-widest opacity-90">
          <span className="text-placeholder">KHÁCH HÀNG:</span>
          <span>Khách lẻ</span>
        </div>
      </div>

      <div className="flex items-center gap-x-6">
        <div className="flex items-center gap-x-2 text-[10px] font-bold uppercase tracking-widest opacity-90">
          <span className="text-placeholder">ĐIỂM:</span>
          <span>125 pts</span>
        </div>

        <div className="flex items-center gap-x-2 border-l border-surface/20 pl-6 text-[10px] font-bold uppercase tracking-widest">
          <div className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success"></span>
          </div>
          <span className="mt-0.5 opacity-90">ĐÃ ĐỒNG BỘ KHO</span>
        </div>
      </div>
    </footer>
  );
};

export default StatusBar;
