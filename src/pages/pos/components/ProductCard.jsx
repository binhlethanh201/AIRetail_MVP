import React from 'react';
import Badge from '../../../components/ui/Badge';

const ProductCard = ({ product }) => {
  const { name, price, sku, stock, image } = product;

  let badgeVariant = 'success';
  let badgeText = 'Còn hàng';

  if (stock === 0) {
    badgeVariant = 'danger';
    badgeText = 'Hết hàng';
  } else if (stock <= 5) {
    badgeVariant = 'warning';
    badgeText = 'Sắp hết';
  }

  const formattedPrice = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(price);

  return (
    <div className="group flex cursor-pointer flex-col rounded-customer border border-borderLight bg-surface p-3 transition-all hover:border-primary hover:shadow-lg active:scale-95">
      <div className="relative mb-3 aspect-square w-full overflow-hidden rounded-sm bg-bodyCustomer">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />

        <div className="absolute right-2 top-2">
          <Badge variant={badgeVariant}>{badgeText}</Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col">
        <h4 className="mb-1 line-clamp-2 text-sm font-bold text-textMain" title={name}>
          {name}
        </h4>

        <div className="mt-auto text-base font-black text-primary">{formattedPrice}</div>

        <div className="mt-2 flex items-center justify-between border-t border-borderLight/50 pt-2">
          <span className="max-w-[60%] truncate text-[10px] font-bold uppercase tracking-widest text-placeholder">
            SKU: {sku}
          </span>
          <span
            className={`text-xs font-semibold ${stock === 0 ? 'text-danger' : 'text-textMain'}`}
          >
            SL: {stock}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
