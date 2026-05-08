import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldAlert, Lock, Home, ArrowLeft } from 'lucide-react';
import Button from '../../components/ui/Button';

const AccessDenied = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bodyAdmin p-6 text-center">
      <div className="relative mb-8">
        <div className="absolute inset-0 rounded-full bg-admin/5 blur-3xl"></div>
        <div className="relative rounded-full border-2 border-admin/10 bg-surface p-6 text-admin shadow-2xl">
          <ShieldAlert size={64} strokeWidth={1.5} />
        </div>
        <div className="absolute -bottom-2 -right-2 rounded-full border-4 border-bodyAdmin bg-admin p-2 text-surface">
          <Lock size={20} />
        </div>
      </div>

      <h1 className="mb-2 text-8xl font-black tracking-tighter text-textMain">403</h1>
      <h2 className="mb-4 text-xl font-bold uppercase tracking-widest text-textAdmin">
        Truy cập bị từ chối
      </h2>
      <p className="mb-10 max-w-md text-sm leading-relaxed text-placeholder">
        Tài khoản của bạn không có đủ thẩm quyền để truy cập vào khu vực này. Vui lòng liên hệ{' '}
        <span className="font-bold text-admin">Quản trị viên hệ thống</span> nếu bạn cho rằng đây là
        một sự nhầm lẫn.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Button
          variant="edit"
          className="flex items-center gap-x-2 border-admin/20 px-6 py-3 text-admin hover:bg-admin/5"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={18} />
          <span>Quay lại</span>
        </Button>

        <Button
          variant="add"
          className="flex items-center gap-x-2 bg-admin px-6 py-3 hover:bg-black"
          onClick={() => navigate('/')}
        >
          <Home size={18} />
          <span>Về Trang Chủ</span>
        </Button>
      </div>

      <div className="mt-16 w-full max-w-xs border-t border-borderLight pt-8">
        <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-placeholder">
          Security Level: HIGH
        </p>
      </div>
    </div>
  );
};

export default AccessDenied;
