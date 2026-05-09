const MaterialIcon = ({ name, className = '', fill = false }) => (
  <span
    className={`material-symbols-outlined ${className}`}
    style={{ fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' 20` }}
  >
    {name}
  </span>
);

const ForumHeader = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
      <div className="flex h-full w-56 items-center gap-2">
        <button
          type="button"
          onClick={() => window.location.assign('/forum')}
          className="text-xl font-bold tracking-tight text-primary transition-colors hover:text-primary/90"
        >
          HardBuild B2B
        </button>
      </div>

      <div className="mx-8 flex-1 max-w-2xl">
        <div className="relative group">
          <MaterialIcon
            name="search"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[18px] text-slate-400"
          />
          <input
            className="w-full rounded-full border-none bg-[#F1F5F9] py-2 pl-10 pr-4 text-xs transition-all focus:ring-1 focus:ring-primary"
            placeholder="Tìm kiếm thảo luận, sản phẩm..."
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden rounded-full bg-primary px-5 py-1.5 text-xs font-bold text-white transition-all hover:bg-primary/90 md:flex md:items-center md:gap-2">
          <MaterialIcon name="add" className="text-[18px]" /> Đăng bài viết
        </button>
        <div className="flex items-center gap-3">
          <button className="relative rounded-full p-1.5 text-slate-500 transition-colors hover:bg-slate-100">
            <MaterialIcon name="notifications" className="text-[20px]" />
            <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-red-500" />
          </button>
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-900 text-[11px] font-bold text-white">
            HB
          </div>
        </div>
      </div>
    </header>
  );
};

export default ForumHeader;
