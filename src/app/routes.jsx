/**
 * Routes configuration - Tập trung định nghĩa tất cả routes
 * Dễ dàng bổ sung hoặc thay đổi routes
 */

import { lazy } from 'react';

// Inventory Module
const InventoryDashboard = lazy(() => import('../modules/inventory/pages/InventoryDashboard'));
const ProductManagement = lazy(() => import('../modules/inventory/pages/ProductManagement'));
const StockImport = lazy(() => import('../modules/inventory/pages/StockImport'));
const StockExport = lazy(() => import('../modules/inventory/pages/StockExport'));
const InventoryReports = lazy(() => import('../modules/inventory/pages/InventoryReports'));

// POS Module
const POSScreen = lazy(() => import('../modules/pos/pages/POSScreen'));
const CheckoutPage = lazy(() => import('../modules/pos/pages/CheckoutPage'));
const OrderHistory = lazy(() => import('../modules/pos/pages/OrderHistory'));
const ShiftManagement = lazy(() => import('../modules/pos/pages/ShiftManagement'));

// Forum Module
const ForumHome = lazy(() => import('../modules/forum/pages/ForumHome'));
const PostDetail = lazy(() => import('../modules/forum/pages/PostDetail'));
const CreatePost = lazy(() => import('../modules/forum/pages/CreatePost'));
const ForumCategory = lazy(() => import('../modules/forum/pages/ForumCategory'));

export const routes = [
  // Inventory Routes
  {
    path: '/inventory',
    name: 'Tổng kho',
    icon: '📦',
    children: [
      {
        path: '/inventory/dashboard',
        name: 'Dashboard',
        component: InventoryDashboard,
      },
      {
        path: '/inventory/products',
        name: 'Quản lý sản phẩm',
        component: ProductManagement,
      },
      {
        path: '/inventory/import',
        name: 'Nhập kho',
        component: StockImport,
      },
      {
        path: '/inventory/export',
        name: 'Xuất kho',
        component: StockExport,
      },
      {
        path: '/inventory/reports',
        name: 'Báo cáo',
        component: InventoryReports,
      },
    ],
  },

  // POS Routes
  {
    path: '/pos',
    name: 'Bán hàng',
    icon: '🛍️',
    children: [
      {
        path: '/pos',
        name: 'Bán hàng',
        component: POSScreen,
      },
      {
        path: '/pos/checkout',
        name: 'Thanh toán',
        component: CheckoutPage,
      },
      {
        path: '/pos/orders',
        name: 'Lịch sử đơn',
        component: OrderHistory,
      },
      {
        path: '/pos/shift',
        name: 'Quản lý ca',
        component: ShiftManagement,
      },
    ],
  },

  // Forum Routes
  {
    path: '/forum',
    name: 'Diễn đàn',
    icon: '💬',
    children: [
      {
        path: '/forum',
        name: 'Diễn đàn',
        component: ForumHome,
      },
      {
        path: '/forum/post/:id',
        name: 'Chi tiết bài viết',
        component: PostDetail,
      },
      {
        path: '/forum/create',
        name: 'Tạo bài viết',
        component: CreatePost,
      },
      {
        path: '/forum/category/:id',
        name: 'Danh mục',
        component: ForumCategory,
      },
    ],
  },
];

// Flatten routes for easier access
export const flattenRoutes = (routes) => {
  return routes.reduce((acc, route) => {
    if (route.children) {
      acc = [...acc, ...route.children];
    } else {
      acc.push(route);
    }
    return acc;
  }, []);
};

export default routes;
