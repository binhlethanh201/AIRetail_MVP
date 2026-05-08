import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutGrid, ShoppingCart, Users2, Package, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  const MODULES = [
    {
      title: 'Phân hệ Bán hàng (POS)',
      path: '/pos',
      description: 'Giao diện tính tiền, quản lý giỏ hàng và thanh toán nhanh.',
      icon: ShoppingCart,
      color: 'bg-primary',
    },
    {
      title: 'Màn hình Tổng Kho',
      path: '/inventory',
      description: 'Quản lý danh mục hàng hóa, nhập kho và kiểm kê tồn kho tổng.',
      icon: Package,
      color: 'bg-blue-500',
    },
    {
      title: 'Diễn đàn B2B (Forum)',
      path: '/forum',
      description: 'Nơi kết nối giữa các đại lý và nhà cung cấp (Coming soon).',
      icon: Users2,
      color: 'bg-success',
    },
    {
      title: 'Quản trị (Admin)',
      path: '/admin',
      description: 'Hệ thống quản lý kho, nhân viên và báo cáo doanh thu.',
      icon: LayoutGrid,
      color: 'bg-admin',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bodyCustomer p-6">
      <div className="w-full max-w-4xl">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex rounded-customer bg-primary/10 p-3 text-primary">
            <LayoutGrid size={40} />
          </div>
          <h1 className="text-3xl font-black uppercase tracking-tighter text-textMain">
            AI_RETAIL_ERP <span className="text-primary">MVP</span>
          </h1>
          <p className="mt-2 font-medium text-placeholder">
            Hệ thống quản trị bán hàng thông minh - Project Navigation
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((module) => (
            <div
              key={module.path}
              onClick={() => navigate(module.path)}
              className="group cursor-pointer rounded-customer border border-borderLight bg-surface p-6 shadow-sm transition-all hover:border-primary hover:shadow-xl"
            >
              <div
                className={`h-12 w-12 ${module.color} mb-4 flex items-center justify-center rounded-customer text-surface transition-transform group-hover:scale-110`}
              >
                <module.icon size={24} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-textMain">{module.title}</h3>
              <p className="mb-6 text-xs leading-relaxed text-placeholder">{module.description}</p>
              <div className="flex items-center text-xs font-black uppercase tracking-widest text-primary">
                Truy cập ngay <ArrowRight size={14} className="ml-2" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-borderLight pt-8 text-center text-[10px] uppercase tracking-widest text-placeholder">
          Phát triển bởi Team Dev AI_RETAIL_ERP • 2026
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
