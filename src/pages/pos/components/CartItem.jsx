import React from 'react';
import { Minus, Plus, X } from 'lucide-react';
import IconButton from '../../../components/ui/IconButton';

const CartItem = ({ item }) => {
  const formattedPrice = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(item.price);

  return (
    <div className="group flex items-center gap-x-3 rounded-lg p-2 transition-colors hover:bg-bodyCustomer">
      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded border border-borderLight bg-surface">
        <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
      </div>

      <div className="min-w-0 flex-1">
        <h5 className="truncate text-xs font-bold text-textMain" title={item.name}>
          {item.name}
        </h5>
        <div className="mt-1 text-xs font-black text-primary">{formattedPrice}</div>
      </div>

      <div className="flex items-center gap-x-1">
        <IconButton icon={Minus} size="sm" variant="outline" />
        <span className="w-6 text-center text-xs font-bold">{item.quantity}</span>
        <IconButton icon={Plus} size="sm" variant="outline" />
      </div>

      <IconButton
        icon={X}
        size="sm"
        variant="ghost"
        className="ml-1 opacity-50 group-hover:opacity-100"
      />
    </div>
  );
};

export default CartItem;
