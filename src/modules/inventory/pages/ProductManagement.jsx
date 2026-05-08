/**
 * ProductManagement Page - Quản lý sản phẩm
 */

import { useState, useEffect } from 'react';
import { Card } from '../../../shared/components/Card';
import { Button } from '../../../shared/components/Button';
import { Input } from '../../../shared/components/Input';
import { ProductTable } from '../components/ProductTable';
import { useDebounce } from '../../../shared/hooks/useDebounce';
import { mockProducts } from '../data/inventoryMockData';

export const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const debouncedSearch = useDebounce(search, 300);

  useEffect(() => {
    // Giả lập gọi API
    setLoading(true);
    setTimeout(() => {
      let filtered = mockProducts;
      if (debouncedSearch) {
        filtered = products.filter(
          (p) =>
            p.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
            p.sku.toLowerCase().includes(debouncedSearch.toLowerCase())
        );
      }
      setProducts(filtered);
      setLoading(false);
    }, 300);
  }, [debouncedSearch]);

  useEffect(() => {
    setProducts(mockProducts);
  }, []);

  const handleEdit = (product) => {
    console.log('Edit product:', product);
  };

  const handleDelete = (productId) => {
    console.log('Delete product:', productId);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quản lý sản phẩm</h1>
          <p className="mt-1 text-gray-600">Thêm, sửa, xóa sản phẩm</p>
        </div>
        <Button variant="primary">+ Thêm sản phẩm</Button>
      </div>

      {/* Filter */}
      <Card>
        <div className="flex gap-4">
          <Input
            placeholder="Tìm kiếm theo tên hoặc SKU..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1"
          />
          <Button variant="secondary">Lọc</Button>
        </div>
      </Card>

      {/* Table */}
      <Card>
        <ProductTable
          products={products}
          loading={loading}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </Card>
    </div>
  );
};

export default ProductManagement;
