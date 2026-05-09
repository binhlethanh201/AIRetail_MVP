/**
 * Sidebar Component - Điều hướng chính theo UI Figma
 */

const navSections = [
  {
    title: 'QUAN LY VAN HANH',
    items: [
      { icon: 'dashboard', label: 'Tong quan', path: '/inventory/dashboard', active: true },
      { icon: 'inventory_2', label: 'Hang hoa', path: '/inventory/products' },
      { icon: 'move_to_inbox', label: 'Nhap kho', path: '/inventory/import' },
      { icon: 'outbox', label: 'Xuat kho', path: '/inventory/export' },
      { icon: 'location_on', label: 'Vi tri kho', path: '/inventory/reports' },
    ],
  },
  {
    title: 'KINH DOANH',
    items: [
      { icon: 'payments', label: 'Tai chinh', path: '/inventory/reports' },
      { icon: 'shopping_cart', label: 'Don hang', path: '/pos/orders' },
      { icon: 'groups', label: 'Nha cung cap', path: '/forum' },
    ],
  },
  {
    title: 'KET NOI & DU LIEU',
    items: [{ icon: 'forum', label: 'Dien dan B2B', path: '/forum' }],
  },
];

export const Sidebar = ({ onNavigate = () => {} }) => {
  return (
    <aside className="fixed left-0 top-0 z-40 flex h-full w-[260px] flex-col border-r border-slate-200 bg-white p-4">
      <div className="mb-8 flex items-center gap-3 px-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1e3a5f] text-white">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            factory
          </span>
        </div>
        <div>
          <h1 className="text-lg font-bold tracking-tight text-blue-900">MetalERP</h1>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
            Industrial Precision
          </p>
        </div>
      </div>

      <nav className="flex-1 space-y-6 overflow-y-auto pr-1">
        {navSections.map((section) => (
          <div key={section.title}>
            <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">
              {section.title}
            </p>
            <div className="space-y-1">
              {section.items.map((item) => (
                <button
                  key={item.label}
                  onClick={() => onNavigate(item.path)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors duration-200 ${
                    item.active
                      ? 'bg-blue-50 font-semibold text-blue-900'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <span className="material-symbols-outlined">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="mt-auto space-y-2 border-t border-slate-100 pt-4">
        <button className="bg-navy-cta w-full rounded-xl py-3 font-bold text-white transition-all active:scale-95">
          <span className="material-symbols-outlined mr-2 align-middle text-sm">bolt</span>
          <span className="align-middle">Ho tro AI</span>
        </button>
        <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-slate-600 hover:bg-slate-100">
          <span className="material-symbols-outlined">settings</span>
          <span>Cai dat</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
