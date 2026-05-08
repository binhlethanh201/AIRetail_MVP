/**
 * Constants - Các hằng số dùng chung
 */

export const COLORS = {
  PRIMARY: '#1e40af',
  SECONDARY: '#64748b',
  SUCCESS: '#16a34a',
  WARNING: '#ea580c',
  DANGER: '#dc2626',
  INFO: '#0891b2',
};

export const PAYMENT_METHODS = {
  CASH: 'cash',
  CARD: 'card',
  TRANSFER: 'transfer',
  WALLET: 'wallet',
};

export const PAYMENT_METHOD_LABELS = {
  [PAYMENT_METHODS.CASH]: 'Tiền mặt',
  [PAYMENT_METHODS.CARD]: 'Thẻ',
  [PAYMENT_METHODS.TRANSFER]: 'Chuyển khoản',
  [PAYMENT_METHODS.WALLET]: 'Ví điện tử',
};

export const ORDER_STATUS = {
  PENDING: 'pending',
  PROCESSING: 'processing',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
};

export const ORDER_STATUS_LABELS = {
  [ORDER_STATUS.PENDING]: 'Chờ xử lý',
  [ORDER_STATUS.PROCESSING]: 'Đang xử lý',
  [ORDER_STATUS.COMPLETED]: 'Hoàn thành',
  [ORDER_STATUS.CANCELLED]: 'Đã hủy',
};

export const STOCK_STATUS = {
  IN_STOCK: 'in_stock',
  LOW_STOCK: 'low_stock',
  OUT_OF_STOCK: 'out_of_stock',
};

export const STOCK_STATUS_LABELS = {
  [STOCK_STATUS.IN_STOCK]: 'Còn hàng',
  [STOCK_STATUS.LOW_STOCK]: 'Hàng sắp hết',
  [STOCK_STATUS.OUT_OF_STOCK]: 'Hết hàng',
};

export const LOW_STOCK_THRESHOLD = 10; // Cảnh báo khi tồn kho < 10

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_PAGE_SIZE: 20,
  PAGE_SIZES: [10, 20, 50, 100],
};

export default {
  COLORS,
  PAYMENT_METHODS,
  PAYMENT_METHOD_LABELS,
  ORDER_STATUS,
  ORDER_STATUS_LABELS,
  STOCK_STATUS,
  STOCK_STATUS_LABELS,
  LOW_STOCK_THRESHOLD,
  PAGINATION,
};
