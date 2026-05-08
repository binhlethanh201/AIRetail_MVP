import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, AlertTriangle, ArrowLeft } from 'lucide-react';
import Button from '../../components/ui/Button';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bodyCustomer p-6 text-center">
      <div className="relative mb-8">
        <div className="absolute inset-0 rounded-full bg-danger/10 blur-3xl"></div>
        <div className="relative rounded-full border-2 border-danger/20 bg-surface p-6 text-danger shadow-xl">
          <AlertTriangle size={64} strokeWidth={1.5} />
        </div>
      </div>

      <h1 className="mb-2 text-8xl font-black tracking-tighter text-textMain">404</h1>
      <h2 className="mb-4 text-xl font-bold uppercase tracking-widest text-textMain">
        Không tìm thấy trang
      </h2>
      <p className="mb-10 max-w-md text-sm leading-relaxed text-placeholder">
        Đường dẫn bạn truy cập không tồn tại hoặc tính năng này đang được đội ngũ DEV phát triển.
        Vui lòng kiểm tra lại địa chỉ URL.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Button
          variant="edit"
          className="flex items-center gap-x-2 px-6 py-3"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={18} />
          <span>Quay lại</span>
        </Button>

        <Button
          variant="add"
          className="flex items-center gap-x-2 px-6 py-3"
          onClick={() => navigate('/')}
        >
          <Home size={18} />
          <span>Về Trang chủ</span>
        </Button>
      </div>

      <div className="mt-16 w-full max-w-xs border-t border-borderLight pt-8">
        <p className="text-[10px] uppercase tracking-[0.2em] text-placeholder">
          Error Code: ERR_ROUTE_NOT_FOUND
        </p>
      </div>
    </div>
  );
};

export default NotFound;
