import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ServerCrash, RefreshCw, ArrowLeft } from 'lucide-react';
import Button from '../../components/ui/Button';

const ServerError = () => {
  const navigate = useNavigate();

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bodyCustomer p-6 text-center">
      <div className="relative mb-8">
        <div className="absolute inset-0 animate-pulse rounded-full bg-warning/20 blur-3xl"></div>
        <div className="relative rounded-2xl border-2 border-warning/30 bg-surface p-6 text-warning shadow-2xl">
          <ServerCrash size={64} strokeWidth={1.5} />
        </div>
      </div>

      <h1 className="mb-2 text-8xl font-black tracking-tighter text-textMain">500</h1>
      <h2 className="mb-4 text-xl font-bold uppercase tracking-widest text-textMain">
        Lỗi máy chủ hệ thống
      </h2>
      <p className="mb-10 max-w-md text-sm leading-relaxed text-placeholder">
        Có vẻ như máy chủ đang gặp sự cố kỹ thuật hoặc đang quá tải. Đội ngũ kỹ thuật của{' '}
        <span className="font-bold text-primary">AI_RETAIL</span> đã được thông báo. Vui lòng thử
        lại sau vài phút.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Button
          variant="edit"
          className="flex items-center gap-x-2 px-8 py-3"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={18} />
          <span>Quay lại</span>
        </Button>

        <Button
          variant="add"
          className="flex items-center gap-x-2 bg-admin px-6 py-3 hover:bg-black"
          onClick={handleReload}
        >
          <RefreshCw size={18} />
          <span>Tải lại trang</span>
        </Button>
      </div>

      <div className="mt-16 w-full max-w-xs border-t border-borderLight pt-8">
        <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-placeholder">
          Liên hệ hỗ trợ kỹ thuật
        </p>
      </div>
    </div>
  );
};

export default ServerError;
