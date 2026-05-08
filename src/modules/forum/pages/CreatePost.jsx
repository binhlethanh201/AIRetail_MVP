/**
 * CreatePost Page - Tạo bài viết mới
 */

import { useState } from 'react';
import { Card } from '../../../shared/components/Card';
import { Button } from '../../../shared/components/Button';
import { Input } from '../../../shared/components/Input';
import { mockCategories } from '../data/forumMockData';

export const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    content: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.category || !formData.content) {
      alert('Vui lòng điền đầy đủ thông tin');
      return;
    }

    setLoading(true);
    try {
      // Giả lập gọi API
      setTimeout(() => {
        console.log('Post created:', formData);
        alert('Đăng bài thành công!');
        setFormData({ title: '', category: '', content: '' });
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error creating post:', error);
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Đăng bài thảo luận mới</h1>
        <p className="mt-1 text-gray-600">Chia sẻ kinh nghiệm, câu hỏi hoặc xu hướng của bạn</p>
      </div>

      {/* Form */}
      <Card>
        <div className="space-y-6">
          {/* Title */}
          <div>
            <Input
              label="Tiêu đề bài viết *"
              placeholder="Nhập tiêu đề bài viết"
              value={formData.title}
              onChange={(e) => handleChange('title', e.target.value)}
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Danh mục *</label>
            <select
              value={formData.category}
              onChange={(e) => handleChange('category', e.target.value)}
              className="w-full rounded-lg border-2 border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              required
            >
              <option value="">Chọn danh mục</option>
              {mockCategories.map((cat) => (
                <option key={cat.id} value={cat.name}>
                  {cat.icon} {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Content */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Nội dung *</label>
            <textarea
              value={formData.content}
              onChange={(e) => handleChange('content', e.target.value)}
              placeholder="Viết nội dung bài viết..."
              className="w-full resize-none rounded-lg border-2 border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              rows="10"
              required
            />
            <p className="mt-2 text-xs text-gray-500">
              Viết chi tiết, rõ ràng để bài viết của bạn được nhiều người quan tâm
            </p>
          </div>

          {/* Preview */}
          <div className="rounded-lg bg-gray-50 p-4">
            <h3 className="mb-2 font-semibold text-gray-900">Xem trước</h3>
            <div className="rounded border border-gray-200 bg-white p-4">
              <h2 className="text-lg font-bold text-gray-900">{formData.title || 'Tiêu đề'}</h2>
              <div className="mb-3 mt-2 flex gap-2">
                <span className="rounded bg-gray-200 px-2 py-1 text-sm text-gray-700">
                  {formData.category || 'Danh mục'}
                </span>
              </div>
              <p className="line-clamp-3 whitespace-pre-wrap text-sm text-gray-700">
                {formData.content || 'Nội dung bài viết'}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button variant="secondary" className="flex-1">
              Hủy bỏ
            </Button>
            <Button onClick={handleSubmit} loading={loading} variant="primary" className="flex-1">
              Đăng bài
            </Button>
          </div>
        </div>
      </Card>

      {/* Tips */}
      <Card header="💡 Mẹo viết bài tốt">
        <ul className="space-y-2 text-sm text-gray-700">
          <li>✓ Sử dụng tiêu đề rõ ràng, có kích thích sự tò mò</li>
          <li>✓ Chia nhỏ nội dung thành các đoạn dễ đọc</li>
          <li>✓ Kèm theo ví dụ cụ thể hoặc dữ liệu hỗ trợ</li>
          <li>✓ Lưu ý tính chuyên biệt và tính thực tiễn</li>
          <li>✓ Kêu gọi cộng đồng chia sẻ ý kiến của họ</li>
        </ul>
      </Card>
    </div>
  );
};

export default CreatePost;
