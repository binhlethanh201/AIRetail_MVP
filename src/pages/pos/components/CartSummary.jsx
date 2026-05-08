import React from 'react';

const CartSummary = ({ subTotal, discount, vat, total }) => {
  const formatMoney = (amount) => new Intl.NumberFormat('vi-VN').format(amount) + 'đ';

  return (
    <div className="mb-4 flex flex-col gap-y-3">
      <div className="mb-2 flex flex-col gap-y-1">
        <div className="text-[10px] font-bold uppercase tracking-widest text-placeholder">
          Mã giảm giá
        </div>
        <div className="flex gap-x-2">
          <input
            type="text"
            placeholder="Nhập mã..."
            className="flex-1 rounded-customer border border-borderLight bg-surface px-3 py-1.5 text-xs outline-none focus:ring-1 focus:ring-primary"
          />
          <button className="rounded-customer bg-borderLight px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-textMain transition-colors hover:bg-placeholder/50">
            Áp dụng
          </button>
        </div>
      </div>

      <div className="flex justify-between text-xs font-medium text-placeholder">
        <span>Tạm tính</span>
        <span>{formatMoney(subTotal)}</span>
      </div>
      <div className="flex justify-between text-xs font-medium text-placeholder">
        <span>Giảm giá</span>
        <span className="text-danger">- {formatMoney(discount)}</span>
      </div>
      <div className="flex justify-between text-xs font-medium text-placeholder">
        <span>Thuế VAT (8%)</span>
        <span>{formatMoney(vat)}</span>
      </div>

      <div className="my-1 h-px bg-borderLight"></div>

      <div className="flex items-end justify-between">
        <span className="text-xs font-bold uppercase tracking-widest text-textMain">Tổng cộng</span>
        <span className="text-xl font-black text-primary">{formatMoney(total)}</span>
      </div>
    </div>
  );
};

export default CartSummary;
