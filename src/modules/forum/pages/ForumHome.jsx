/**
 * ForumHome Page - Trang chủ diễn đàn
 */

import { useState, useEffect } from 'react';
import { Card } from '../../../shared/components/Card';
import { Button } from '../../../shared/components/Button';
import { PostCard } from '../components/PostCard';
import { CategoryTabs } from '../components/CategoryTabs';
import { TrendInsightCard } from '../components/TrendInsightCard';
import { mockCategories, mockPosts, mockTrends } from '../data/forumMockData';

export const ForumHome = () => {
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setPosts(mockPosts);
  }, []);

  const filteredPosts = posts.filter((post) => {
    const matchCategory = !selectedCategory || post.category === selectedCategory;
    const matchSearch = !searchTerm || post.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleLike = (postId) => {
    setPosts(
      posts.map((p) =>
        p.id === postId ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 } : p
      )
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Diễn đàn</h1>
          <p className="mt-1 text-gray-600">Chia sẻ kinh nghiệm, xu hướng bán hàng</p>
        </div>
        <Button variant="primary">+ Đăng bài thảo luận</Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Card>
          <div className="py-4 text-center">
            <div className="text-3xl font-bold text-blue-600">{mockPosts.length}</div>
            <p className="mt-1 text-sm text-gray-600">Bài viết</p>
          </div>
        </Card>
        <Card>
          <div className="py-4 text-center">
            <div className="text-3xl font-bold text-green-600">1,245</div>
            <p className="mt-1 text-sm text-gray-600">Thành viên</p>
          </div>
        </Card>
        <Card>
          <div className="py-4 text-center">
            <div className="text-3xl font-bold text-purple-600">3,890</div>
            <p className="mt-1 text-sm text-gray-600">Bình luận</p>
          </div>
        </Card>
        <Card>
          <div className="py-4 text-center">
            <div className="text-3xl font-bold text-orange-600">852</div>
            <p className="mt-1 text-sm text-gray-600">Lượt yêu thích</p>
          </div>
        </Card>
      </div>

      {/* Categories & Search */}
      <Card>
        <div className="space-y-4">
          <CategoryTabs
            categories={mockCategories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          <input
            type="text"
            placeholder="Tìm kiếm bài viết..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border-2 border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
          />
        </div>
      </Card>

      {/* Trending Insights */}
      <Card header="Xu hướng nổi bật">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {mockTrends.map((trend) => (
            <TrendInsightCard key={trend.id} trend={trend} type="trend" />
          ))}
        </div>
      </Card>

      {/* Posts List */}
      <Card header={`Bài viết (${filteredPosts.length})`}>
        <div className="space-y-4">
          {filteredPosts.length === 0 ? (
            <p className="py-8 text-center text-gray-500">Không tìm thấy bài viết nào</p>
          ) : (
            filteredPosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                onLike={() => handleLike(post.id)}
                onClick={() => console.log('View post:', post.id)}
              />
            ))
          )}
        </div>
      </Card>
    </div>
  );
};

export default ForumHome;
