import React from 'react';
import { Search, ScanBarcode, History, Plus } from 'lucide-react';
import Button from '../../ui/Button';

const PosHeader = () => {
  return (
    <header className="fixed left-[240px] right-0 top-0 z-40 flex h-16 items-center justify-between border-b border-borderLight bg-surface px-6">
      <div className="flex flex-1 items-center gap-x-8">
        <div className="group relative w-full max-w-xl">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-placeholder transition-colors group-focus-within:text-primary">
            <Search size={18} strokeWidth={2} />
          </span>
          <input
            type="text"
            placeholder="Tìm sản phẩm (Tên, mã SKU, barcode...)"
            className="w-full rounded-customer border border-borderLight bg-bodyCustomer py-2 pl-10 pr-4 text-sm text-textMain placeholder-placeholder outline-none transition-all focus:border-primary focus:ring-0"
          />
        </div>
      </div>

      <div className="flex items-center gap-x-4">
        <Button variant="edit" className="gap-x-2 px-3 py-1.5">
          <ScanBarcode size={16} />
          <span className="text-xs font-semibold">Quét mã</span>
        </Button>

        <Button variant="edit" className="gap-x-2 px-3 py-1.5">
          <History size={16} />
          <span className="text-xs font-semibold">Lịch sử</span>
        </Button>

        <Button variant="add" className="gap-x-2 px-3 py-1.5">
          <Plus size={16} />
          <span className="text-xs font-semibold">Thêm nhanh</span>
        </Button>

        <div className="mx-2 h-8 w-px bg-borderLight"></div>

        <div className="flex cursor-pointer items-center gap-x-3 transition-opacity hover:opacity-80">
          <div className="text-right">
            <div className="text-xs font-bold leading-none text-textMain">Nguyễn Văn A</div>
            <div className="mt-1 text-[10px] uppercase tracking-widest text-placeholder">
              Quản lý kho
            </div>
          </div>

          <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-borderLight bg-bodyCustomer">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=f5f5f6"
              alt="Avatar"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default PosHeader;
