/**
 * PostDetail Page - Chi tiết bài viết
 */

import { useState } from 'react';
import { Card } from '../../../shared/components/Card';
import { Button } from '../../../shared/components/Button';
import { CommentBox } from '../components/CommentBox';
import { VoteButton } from '../components/VoteButton';
import { Badge } from '../../../shared/components/Badge';
import { formatDate } from '../../../shared/utils/formatDate';
import { mockPosts, mockComments } from '../data/forumMockData';

export const PostDetail = ({ postId = 1 }) => {
  const post = mockPosts.find((p) => p.id === postId);
  const [comments, setComments] = useState(mockComments);
  const [isVoted, setIsVoted] = useState(post?.liked || false);
  const [voteCount, setVoteCount] = useState(post?.likes || 0);

  const handleVote = () => {
    setIsVoted(!isVoted);
    setVoteCount(isVoted ? voteCount - 1 : voteCount + 1);
  };

  const handleAddComment = async (commentText) => {
    const newComment = {
      id: comments.length + 1,
      author: 'Bạn',
      content: commentText,
      date: new Date().toISOString(),
      likes: 0,
    };
    setComments([...comments, newComment]);
  };

  const relatedPosts = mockPosts.filter((p) => p.id !== postId).slice(0, 3);

  if (!post) {
    return <div className="py-8 text-center text-gray-500">Bài viết không tìm thấy</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {/* Main Content */}
      <div className="space-y-6 lg:col-span-2">
        {/* Post Detail */}
        <Card>
          {/* Header */}
          <div className="mb-6">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h1 className="mb-3 text-3xl font-bold text-gray-900">{post.title}</h1>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-sm text-gray-600">•</span>
                  <span className="text-sm text-gray-600">{formatDate(post.date)}</span>
                </div>
              </div>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 border-y border-gray-200 py-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                {post.author[0]}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{post.author}</p>
                <p className="text-sm text-gray-600">Thành viên tích cực</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-sm mb-6 max-w-none">
            <p className="leading-relaxed text-gray-700">{post.content}</p>
            <p className="mt-4 leading-relaxed text-gray-700">
              Đây là nội dung đầy đủ của bài viết. Bạn có thể mở rộng phần này với thêm nhiều nội
              dung, hình ảnh, bảng biểu,...
            </p>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between border-y border-gray-200 py-4">
            <div className="flex gap-4 text-sm text-gray-600">
              <span>👁️ {post.views} lượt xem</span>
              <span>💬 {comments.length} bình luận</span>
            </div>
            <VoteButton isVoted={isVoted} voteCount={voteCount} onClick={handleVote} />
          </div>
        </Card>

        {/* Comments */}
        <Card>
          <CommentBox comments={comments} onAddComment={handleAddComment} />
        </Card>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        {/* Author Card */}
        <Card header="Về tác giả">
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
              {post.author[0]}
            </div>
            <h3 className="font-semibold text-gray-900">{post.author}</h3>
            <p className="mt-1 text-sm text-gray-600">Thành viên kể từ 2024</p>
            <p className="mt-2 text-xs text-gray-500">
              Người bán hàng tích cực, có kinh nghiệm về thời trang
            </p>
            <Button variant="primary" className="mt-4 w-full">
              Theo dõi
            </Button>
          </div>
        </Card>

        {/* Related Posts */}
        <Card header="Bài viết liên quan">
          <div className="space-y-4">
            {relatedPosts.map((relPost) => (
              <div
                key={relPost.id}
                className="border-b border-gray-200 pb-4 last:border-0 last:pb-0"
              >
                <p className="cursor-pointer text-sm font-medium text-gray-900 hover:text-blue-600">
                  {relPost.title}
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs text-gray-500">{formatDate(relPost.date)}</span>
                  <span className="text-xs text-gray-600">💬 {relPost.comments}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Share */}
        <Card>
          <Button variant="outline" className="mb-2 w-full">
            📱 Chia sẻ
          </Button>
          <Button variant="outline" className="w-full">
            🚩 Báo cáo
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default PostDetail;
