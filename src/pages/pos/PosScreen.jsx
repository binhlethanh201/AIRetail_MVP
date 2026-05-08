import React from 'react';
import CategoryTabs from './components/CategoryTabs';
import ProductGrid from './components/ProductGrid';
import CartSidebar from './components/CartSidebar';

const PosScreen = () => {
  return (
    <>
      <CategoryTabs />
      <ProductGrid />
      <CartSidebar />
    </>
  );
};

export default PosScreen;
