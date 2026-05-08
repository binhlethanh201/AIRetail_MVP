import React, { useState, useCallback, useRef } from 'react';
import ProductCard from './ProductCard';
import { Loader2 } from 'lucide-react';

const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: 'Máy khoan động lực Bosch GSB 16 RE',
    price: 1550000,
    sku: 'BOS-GSB-16RE',
    stock: 25,
    image:
      'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 2,
    name: 'Chống thấm cao cấp KOVA CT-11A Plus 20kg',
    price: 3450000,
    sku: 'KOV-CT11A-20',
    stock: 4,
    image:
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 3,
    name: 'Kìm bấm cos thủy lực YQK-300 (10-300mm2)',
    price: 950000,
    sku: 'KIM-THUY-LUC',
    stock: 12,
    image:
      'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 4,
    name: 'Đá mài sắt Hải Dương 100x6x16mm',
    price: 5500,
    sku: 'DAI-MAI-HD',
    stock: 500,
    image:
      'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 5,
    name: 'Bộ lục giác Chrome-Vanadium 9 chi tiết',
    price: 125000,
    sku: 'LUC-GIAC-CRV',
    stock: 0,
    image:
      'https://images.unsplash.com/photo-1542615024-c10444319a27?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 6,
    name: 'Búa sừng dê cán gỗ cao cấp 0.5kg',
    price: 85000,
    sku: 'BUA-SUNG-DE',
    stock: 45,
    image:
      'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=80&w=400',
  },
];

const ProductGrid = () => {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [isLoading, setIsLoading] = useState(false);
  const scrollContainerRef = useRef(null);

  const fetchMoreProducts = useCallback(() => {
    if (isLoading) return;

    setIsLoading(true);

    setTimeout(() => {
      const newProducts = INITIAL_PRODUCTS.map((p) => ({
        ...p,
        id: p.id + products.length,
        sku: `${p.sku}-${products.length}`,
      }));

      setProducts((prev) => [...prev, ...newProducts]);
      setIsLoading(false);
    }, 1000);
  }, [isLoading, products.length]);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;

    if (scrollHeight - scrollTop <= clientHeight + 50) {
      fetchMoreProducts();
    }
  };

  return (
    <div
      ref={scrollContainerRef}
      onScroll={handleScroll}
      className="custom-scrollbar flex-1 overflow-y-auto pb-6 pr-2"
    >
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {isLoading && (
        <div className="col-span-3 flex items-center justify-center py-6">
          <Loader2 className="animate-spin text-primary" size={24} />
          <span className="ml-2 text-sm font-bold uppercase tracking-widest text-placeholder">
            Đang tải thêm...
          </span>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
