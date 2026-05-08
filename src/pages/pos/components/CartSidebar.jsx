import React from 'react';
import { Trash2 } from 'lucide-react';
import IconButton from '../../../components/ui/IconButton';
// import Button from '../../../components/ui/Button';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import PaymentMethods from './PaymentMethods';

const MOCK_CART = [
  {
    id: 1,
    name: 'Máy khoan Bosch GSB 16 RE',
    price: 1550000,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=100&q=80',
  },
  {
    id: 2,
    name: 'Kìm bấm cos thủy lực YQK-300',
    price: 950000,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=100&q=80',
  },
];

const CartSidebar = () => {
  return (
    <aside className="fixed bottom-12 right-0 top-16 z-30 flex w-[400px] flex-col border-l border-borderLight bg-surface shadow-[-4px_0_15px_rgba(0,0,0,0.02)]">
      <div className="flex items-center justify-between border-b border-borderLight p-4">
        <h3 className="text-sm font-bold uppercase tracking-widest text-placeholder">
          Giỏ hàng hiện tại
        </h3>
        <IconButton icon={Trash2} variant="ghost" size="sm" title="Xóa toàn bộ" />
      </div>

      <div className="custom-scrollbar flex flex-1 flex-col gap-y-2 overflow-y-auto p-4">
        {MOCK_CART.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="border-t border-borderLight bg-bodyCustomer p-6">
        <CartSummary subTotal={2500000} discount={50000} vat={196000} total={2646000} />

        <PaymentMethods />

        <div className="flex flex-col gap-y-2">
          <button className="w-full rounded-lg bg-primary py-4 text-sm font-black uppercase tracking-widest text-surface shadow-lg shadow-primary/20 transition-all hover:brightness-90 active:scale-95">
            THANH TOÁN (F9)
          </button>
          <button className="w-full rounded-lg border-2 border-borderLight bg-surface py-2.5 text-xs font-bold uppercase tracking-widest text-textMain transition-all hover:border-primary hover:text-primary">
            Lưu bản nháp
          </button>
        </div>
      </div>
    </aside>
  );
};

export default CartSidebar;
