/**
 * Header Component - Header chung cho tất cả pages
 */

import { useAuth } from '../../hooks/useAuth';

export const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="fixed left-[260px] right-0 top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
      <div className="flex w-full items-center justify-between gap-4">
        <div className="flex max-w-xl flex-1 items-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-2">
          <span className="material-symbols-outlined mr-2 text-slate-400">search</span>
          <input
            type="text"
            placeholder="Tim kiem san pham, don hang..."
            className="w-full border-none bg-transparent text-sm focus:ring-0"
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 border-r border-slate-200 pr-4">
            <button className="bg-navy-cta rounded-xl px-4 py-2 text-sm font-bold text-white transition-all active:scale-95">
              Nhap kho
            </button>
            <button className="rounded-xl border border-[#F59E0B] px-4 py-2 text-sm font-bold text-[#F59E0B] transition-all active:scale-95">
              Xuat kho
            </button>
            <button className="border-navy-cta text-navy-cta flex items-center gap-1 rounded-xl border px-4 py-2 text-sm font-bold transition-all hover:bg-blue-50 active:scale-95">
              <span className="material-symbols-outlined text-sm">point_of_sale</span>
              <span>May ban hang</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative rounded-xl p-2 text-slate-500 hover:bg-slate-100">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-600" />
            </button>
            <button className="rounded-xl p-2 text-slate-500 hover:bg-slate-100">
              <span className="material-symbols-outlined">filter_list</span>
            </button>

            <div className="flex items-center gap-3 pl-2">
              <img
                alt="User avatar"
                src={
                  user?.avatar ||
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuCFo3D0VhkjDp6wYi7A3G3rtT-HeBeV9_Irw1MncCf1By9FiWAzrrW0Y1o_eR0BIqouI4JLwKyzpxHiyhHrOxhP1gc2OrbrKeKagYERgHPSLqIeqXh7iopYQYZFpQ3HRo32q_gQG4t9lU6JywKA9r6XbGmBU0YhjbyNzuCTVz8W4Q6FKwogP_fwDpM6p_EySDffHLbP5e-WRjoesCtXL6OJytbDZySk5VBmPYWb9eQM2XahiNm9R3AHtYeKbU3QQiT82T6wAgP0MXo'
                }
                className="h-10 w-10 rounded-xl border border-slate-200 object-cover"
              />
              <div className="text-right">
                <p className="text-sm font-bold text-slate-900">{user?.name || 'Demo User'}</p>
                <p className="text-xs text-slate-500">{user?.role || 'warehouse_manager'}</p>
              </div>
            </div>
          </div>
          <button
            onClick={logout}
            className="rounded-xl px-4 py-2 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-100"
          >
            Dang xuat
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
