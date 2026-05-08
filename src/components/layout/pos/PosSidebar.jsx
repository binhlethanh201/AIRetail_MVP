import React from 'react';
import {
  ShoppingCart,
  ClipboardList,
  Users,
  BarChart3,
  Settings,
  PackageSearch,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const PosSidebar = () => {
  const menuItems = [
    { icon: ShoppingCart, label: 'Bán hàng', path: '/pos' },
    { icon: ClipboardList, label: 'Đơn hàng', path: '/orders' },
    { icon: Users, label: 'Khách hàng', path: '/customers' },
    { icon: BarChart3, label: 'Báo cáo', path: '/reports' },
    { icon: Settings, label: 'Cài đặt', path: '/settings' },
  ];

  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-[240px] flex-col border-r border-borderLight bg-surface py-4 shadow-sm">
      <div className="mb-8 flex items-center gap-x-3 px-6">
        <div className="rounded-customer bg-primary/10 p-1.5">
          <ShoppingCart className="text-primary" size={24} strokeWidth={2.5} />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-black uppercase leading-none tracking-tighter text-primary">
            POS
          </span>
          <span className="mt-1 text-[10px] font-bold uppercase leading-none tracking-[0.2em] text-placeholder">
            System
          </span>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-y-1 px-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-x-3 rounded-customer px-3 py-2.5 transition-all duration-200 ${
                isActive
                  ? 'bg-primary/5 font-bold text-primary'
                  : 'text-placeholder hover:bg-bodyCustomer hover:text-textMain'
              } `
            }
          >
            {({ isActive }) => (
              <>
                <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-sm">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="mb-10 mt-auto px-4">
        <button className="flex w-full items-center justify-center gap-x-3 rounded-customer bg-primary px-3 py-4 font-bold text-surface shadow-lg shadow-primary/20 transition-all hover:brightness-110 active:scale-[0.98]">
          <PackageSearch size={20} />
          <span className="text-xs uppercase tracking-widest">Kho hàng</span>
        </button>
      </div>
    </aside>
  );
};

export default PosSidebar;
