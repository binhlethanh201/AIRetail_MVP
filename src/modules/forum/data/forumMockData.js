/**
 * Mock data cho Forum Module
 */

export const mockCategories = [
  { id: 1, name: 'Thời trang', icon: '👔', postCount: 45 },
  { id: 2, name: 'Phụ kiện', icon: '👜', postCount: 32 },
  { id: 3, name: 'Giày dép', icon: '👟', postCount: 28 },
  { id: 4, name: 'Công nghệ', icon: '📱', postCount: 15 },
  { id: 5, name: 'Xu hướng bán hàng', icon: '📊', postCount: 22 },
];

export const mockPosts = [
  {
    id: 1,
    title: 'Cách chọn áo sơ mi nam phù hợp với từng dáng người',
    content: 'Bài viết chia sẻ kinh nghiệm chọn áo sơ mi nam...',
    author: 'Nguyễn Văn A',
    category: 'Thời trang',
    date: '2024-05-08',
    views: 125,
    likes: 42,
    comments: 8,
    liked: false,
  },
  {
    id: 2,
    title: 'Xu hướng bán quần áo online năm 2024',
    content: 'Những xu hướng nổi bật trong lĩnh vực bán hàng online...',
    author: 'Trần Thị B',
    category: 'Xu hướng bán hàng',
    date: '2024-05-07',
    views: 89,
    likes: 23,
    comments: 5,
    liked: true,
  },
];

export const mockComments = [
  {
    id: 1,
    author: 'Người dùng 1',
    content: 'Bài viết rất hữu ích, cảm ơn bạn!',
    date: '2024-05-08',
    likes: 2,
  },
  {
    id: 2,
    author: 'Người dùng 2',
    content: 'Mình cũng có ý kiến tương tự',
    date: '2024-05-08',
    likes: 1,
  },
];

export const mockTrends = [
  {
    id: 1,
    title: 'Quần áo cao cấp bán chạy nhất tháng 5',
    trend: 'up',
    percentage: 35,
  },
  {
    id: 2,
    title: 'Giày thể thao được ưa chuộng',
    trend: 'up',
    percentage: 28,
  },
  {
    id: 3,
    title: 'Phụ kiện bán chậm lại',
    trend: 'down',
    percentage: -12,
  },
];

export const mockSuggestions = [
  {
    id: 1,
    productName: 'Áo sơ mi nam cao cấp',
    reason: 'Được yêu cầu nhiều lần',
    votes: 15,
  },
  {
    id: 2,
    productName: 'Giày thể thao cao cấp',
    reason: 'Xu hướng tăng cao',
    votes: 12,
  },
];

const mockData = {
  mockCategories,
  mockPosts,
  mockComments,
  mockTrends,
  mockSuggestions,
};

export default mockData;
