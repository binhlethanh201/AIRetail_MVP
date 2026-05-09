const MaterialIcon = ({ name, className = '', fill = false }) => (
  <span
    className={`material-symbols-outlined ${className}`}
    style={{ fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' 20` }}
  >
    {name}
  </span>
);

const SidebarButton = ({ active = false, icon, label, onClick, fill = false }) => (
  <button
    type="button"
    onClick={onClick}
    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-all ${
      active ? 'bg-blue-50/50 font-bold text-primary' : 'text-slate-600 hover:bg-slate-50'
    }`}
  >
    <MaterialIcon name={icon} className="text-[20px]" fill={fill || active} />
    <span>{label}</span>
  </button>
);

const ForumLeftSidebar = ({ activeKey = 'trend' }) => {
  return (
    <aside className="hidden h-[calc(100vh-64px)] w-64 flex-col overflow-y-auto border-r border-slate-200 bg-white lg:fixed lg:left-0 lg:top-16 lg:z-40 lg:flex">
      <nav className="flex flex-1 flex-col px-4 py-6">
        <div className="mb-6">
          <p className="mb-3 px-2 text-[10px] font-bold uppercase tracking-wider text-slate-900">DIỄN ĐÀN</p>
          <div className="space-y-1">
            <SidebarButton
              icon="home"
              label="Trang chủ"
              active={activeKey === 'home'}
              onClick={() => window.location.assign('/forum')}
            />
            <SidebarButton icon="category" label="Chuyên mục" active={activeKey === 'category'} />
            <SidebarButton icon="forum" label="Thảo luận" active={activeKey === 'discussion'} />
            <SidebarButton icon="edit_note" label="Bài viết của tôi" active={activeKey === 'my-posts'} />
            <SidebarButton icon="bookmark" label="Bài đã lưu" active={activeKey === 'saved'} />
          </div>
        </div>

        <div className="mb-6">
          <p className="mb-3 px-2 text-[10px] font-bold uppercase tracking-wider text-slate-900">
            XU HƯỚNG &amp; DỮ LIỆU
          </p>
          <div className="space-y-1">
            <SidebarButton
              icon="trending_up"
              label="Xu hướng kim khí"
              active={activeKey === 'trend'}
              fill
              onClick={() => window.location.assign('/forum/trends')}
            />
            <SidebarButton icon="bar_chart" label="Top sản phẩm bán chạy" active={activeKey === 'top'} />
            <SidebarButton icon="new_releases" label="Sản phẩm mới" active={activeKey === 'new'} />
            <SidebarButton icon="show_chart" label="Biến động giá" active={activeKey === 'price'} />
          </div>
        </div>

        <div className="mb-6">
          <p className="mb-3 px-2 text-[10px] font-bold uppercase tracking-wider text-slate-900">
            KẾT NỐI KINH DOANH
          </p>
          <div className="space-y-1">
            <SidebarButton icon="inventory_2" label="Nguồn hàng" active={activeKey === 'supply'} />
            <SidebarButton icon="sell" label="Đăng bán giá sỉ" active={activeKey === 'wholesale'} />
          </div>
        </div>

        <div className="mb-6">
          <p className="mb-3 px-2 text-[10px] font-bold uppercase tracking-wider text-slate-900">QUẢN LÝ</p>
          <div className="space-y-1">
            <SidebarButton icon="inventory" label="Gợi ý nhập hàng" active={activeKey === 'recommend'} />
          </div>
        </div>

        <div className="mt-auto space-y-1 pt-6">
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-xs text-slate-600 transition-all hover:bg-slate-50"
          >
            <MaterialIcon name="settings" className="text-[18px]" /> Cài đặt
          </button>
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-xs text-slate-600 transition-all hover:bg-slate-50"
          >
            <MaterialIcon name="help_outline" className="text-[18px]" /> Trợ giúp
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default ForumLeftSidebar;
