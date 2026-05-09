/**
 * PostDetail Page - Chi tiết bài viết
 */

import { useMemo, useState } from 'react';
import postDetailMockData from '../data/postDetailMockData';

const MaterialIcon = ({ name, className = '', fill = false }) => (
  <span
    className={`material-symbols-outlined ${className}`}
    style={{
      fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' 20`,
    }}
  >
    {name}
  </span>
);

const getInitials = (name) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();

const Avatar = ({ name, className = '', size = 'md' }) => {
  const sizeStyles = {
    sm: 'h-8 w-8 text-[10px]',
    md: 'h-10 w-10 text-xs',
    lg: 'h-12 w-12 text-sm',
  };

  return (
    <div
      className={`inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#1E6BB8] to-[#005296] font-bold text-white ${sizeStyles[size]} ${className}`}
    >
      {getInitials(name)}
    </div>
  );
};

const ProductThumbnail = ({ name }) => (
  <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-[#EFF4FF] to-[#C7DBFF] border border-[#D9E6FF] flex flex-col items-center justify-center px-2 text-center">
    <MaterialIcon name="ink_pen" className="text-[#005296] text-2xl mb-1" fill />
    <span className="text-[10px] font-bold text-[#005296] leading-tight line-clamp-3">{name}</span>
  </div>
);

export const PostDetail = ({ postId = 1 }) => {
  const [commentText, setCommentText] = useState('');
  const [isSaved, setIsSaved] = useState(false);
  const [isVoted, setIsVoted] = useState(false);
  const [voteCount, setVoteCount] = useState(124);
  const [sortBy, setSortBy] = useState('newest');
  const [commentCount, setCommentCount] = useState(46);
  const post = postDetailMockData.post;
  const [comments, setComments] = useState(postDetailMockData.comments);

  const sortedComments = useMemo(() => {
    const ordered = [...comments];
    if (sortBy === 'oldest') {
      return ordered.reverse();
    }

    return ordered;
  }, [comments, sortBy]);

  const relatedPosts = postDetailMockData.relatedPosts;
  const trends = postDetailMockData.trends;

  const handleAddComment = () => {
    if (commentText.trim()) {
      const newComment = {
        id: Date.now(),
        author: 'Bạn',
        role: null,
        time: 'Vừa xong',
        content: commentText.trim(),
        likes: 0,
        isBest: false,
        replies: [],
      };

      setComments((currentComments) => [newComment, ...currentComments]);
      setCommentCount((currentCount) => currentCount + 1);
      setCommentText('');
    }
  };

  const primaryButtonClass = 'bg-[#005296] text-white hover:bg-[#00457f]';
  const secondaryButtonClass = 'bg-[#E5EEFF] text-[#005296] hover:bg-[#D9E6FF]';
  const ghostButtonClass = 'text-[#005296] hover:bg-[#EFF4FF]';

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Top NavBar */}
      <header className="fixed top-0 w-full flex items-center justify-between px-6 h-16 bg-white border-b border-slate-200 z-50">
        <div className="flex items-center gap-8">
          <span className="text-xl font-bold text-[#1E6BB8] tracking-tight">B2B Hardware Retail</span>
          <div className="hidden md:flex relative group">
            <MaterialIcon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
            <input
              className="pl-10 pr-4 py-2 bg-[#F8FAFC] border-none rounded-full w-80 text-sm focus:ring-2 focus:ring-[#1E6BB8] transition-all"
              placeholder="Tìm kiếm thảo luận, sản phẩm..."
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className={`px-5 py-2 rounded-full font-medium transition-colors ${primaryButtonClass}`}>
            Đăng bài
          </button>
          <button className="p-2 hover:bg-slate-50 rounded-full transition-colors relative">
            <MaterialIcon name="notifications" className="text-on-surface-variant" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-[#ba1a1a] rounded-full"></span>
          </button>
          <button className="p-1 border-2 border-slate-100 rounded-full">
            <MaterialIcon name="account_circle" className="text-3xl text-on-surface-variant" />
          </button>
        </div>
      </header>

      <div className="flex pt-16 max-w-[1440px] mx-auto">
        {/* Left Sidebar */}
        <aside className="hidden lg:flex fixed left-0 top-16 h-[calc(100vh-64px)] w-64 bg-[#F8FAFC] border-r border-slate-200 flex-col pt-4 overflow-y-auto px-4 gap-6">
          {/* Forum Section */}
          <div>
            <h3 className="px-4 text-xs font-bold uppercase tracking-wider text-outline mb-2">DIỄN ĐÀN</h3>
            <nav className="space-y-1">
              <button
                type="button"
                onClick={() => window.location.assign('/forum')}
                className="flex w-full items-center gap-3 px-4 py-2.5 bg-white text-[#1E6BB8] border-r-4 border-[#1E6BB8] font-bold shadow-sm rounded-sm text-left"
              >
                <MaterialIcon name="forum" />
                <span className="text-sm">Trang chủ diễn đàn</span>
              </button>
              <button
                type="button"
                className="flex w-full items-center gap-3 px-4 py-2.5 text-slate-500 hover:bg-slate-100 transition-all rounded-lg text-left"
              >
                <MaterialIcon name="category" />
                <span className="text-sm">Chuyên mục</span>
              </button>
              <button
                type="button"
                className="flex w-full items-center gap-3 px-4 py-2.5 text-slate-500 hover:bg-slate-100 transition-all rounded-lg text-left"
              >
                <MaterialIcon name="chat" />
                <span className="text-sm">Thảo luận</span>
              </button>
              <button
                type="button"
                className="flex w-full items-center gap-3 px-4 py-2.5 text-slate-500 hover:bg-slate-100 transition-all rounded-lg text-left"
              >
                <MaterialIcon name="article" />
                <span className="text-sm">Bài viết của tôi</span>
              </button>
              <button
                type="button"
                className="flex w-full items-center gap-3 px-4 py-2.5 text-slate-500 hover:bg-slate-100 transition-all rounded-lg text-left"
              >
                <MaterialIcon name="bookmark" />
                <span className="text-sm">Bài đã lưu</span>
              </button>
            </nav>
          </div>

          {/* Trends Section */}
          <div>
            <h3 className="px-4 text-xs font-bold uppercase tracking-wider text-outline mb-2">XU HƯỚNG & DỮ LIỆU</h3>
            <nav className="space-y-1">
              <button type="button" className="flex w-full items-center gap-3 px-4 py-2.5 text-slate-500 hover:bg-slate-100 transition-all rounded-lg text-left">
                <MaterialIcon name="trending_up" />
                <span className="text-sm">Xu hướng kim khí</span>
              </button>
              <button type="button" className="flex w-full items-center gap-3 px-4 py-2.5 text-slate-500 hover:bg-slate-100 transition-all rounded-lg text-left">
                <MaterialIcon name="leaderboard" />
                <span className="text-sm">Top sản phẩm bán chạy</span>
              </button>
              <button type="button" className="flex w-full items-center gap-3 px-4 py-2.5 text-slate-500 hover:bg-slate-100 transition-all rounded-lg text-left">
                <MaterialIcon name="new_releases" />
                <span className="text-sm">Sản phẩm mới</span>
              </button>
              <button type="button" className="flex w-full items-center gap-3 px-4 py-2.5 text-slate-500 hover:bg-slate-100 transition-all rounded-lg text-left">
                <MaterialIcon name="monitoring" />
                <span className="text-sm">Biến động giá</span>
              </button>
            </nav>
          </div>

          {/* Business Connection Section */}
          <div>
            <h3 className="px-4 text-xs font-bold uppercase tracking-wider text-outline mb-2">KẾT NỐI KINH DOANH</h3>
            <nav className="space-y-1">
              <button type="button" className="flex w-full items-center gap-3 px-4 py-2.5 text-slate-500 hover:bg-slate-100 transition-all rounded-lg text-left">
                <MaterialIcon name="handshake" />
                <span className="text-sm">Nguồn hàng</span>
              </button>
              <button type="button" className="flex w-full items-center gap-3 px-4 py-2.5 text-slate-500 hover:bg-slate-100 transition-all rounded-lg text-left">
                <MaterialIcon name="sell" />
                <span className="text-sm">Đăng bán giá sỉ</span>
              </button>
            </nav>
          </div>

          {/* Management Section */}
          <div className="mb-8">
            <h3 className="px-4 text-xs font-bold uppercase tracking-wider text-outline mb-2">QUẢN LÝ</h3>
            <nav className="space-y-1">
              <button type="button" className="flex w-full items-center gap-3 px-4 py-2.5 text-slate-500 hover:bg-slate-100 transition-all rounded-lg text-left">
                <MaterialIcon name="inventory_2" />
                <span className="text-sm">Gợi ý nhập hàng</span>
              </button>
            </nav>
          </div>

          {/* Bottom Settings / Help (match ForumHome) */}
          <div className="mt-auto border-t border-slate-100 px-2 pt-4">
            <button className="flex items-center gap-3 px-3 py-1.5 text-[13px] text-[#7C8B9A] transition-all hover:text-[#1E6BB8]">
              <MaterialIcon name="settings" className="text-[20px]" /> Cài đặt
            </button>
            <button className="flex items-center gap-3 px-3 py-1.5 text-[13px] text-[#7C8B9A] transition-all hover:text-[#1E6BB8]">
              <MaterialIcon name="help_outline" className="text-[20px]" /> Trợ giúp
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 px-4 py-8 max-w-[calc(1440px-256px)]">
          <div className="max-w-[1000px] mx-auto flex flex-col gap-6">
            {/* Post Card */}
            <article className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              {/* Post Header */}
              <header className="bg-[#F1F5F9] px-6 py-4 flex justify-between items-center border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <Avatar name={post.author} size="lg" />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-on-surface">{post.author}</span>
                      <span className="bg-secondary-container text-on-secondary-container text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">
                        {post.authorRole}
                      </span>
                    </div>
                    <span className="text-xs text-outline">Đã đăng {post.date} • {post.views.toLocaleString()} lượt xem</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {post.tags.map((tag, idx) => (
                    <span key={idx} className="bg-[#E5EEFF] text-[#005296] px-3 py-1 rounded-full text-xs font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </header>

              {/* Post Content */}
              <div className="p-6">
                <h1 className="font-bold text-2xl mb-4 text-on-surface">{post.title}</h1>

                {/* Trend Info */}
                <div className="flex items-center gap-4 mb-6 bg-surface-container-low p-3 rounded-lg border border-primary-fixed">
                  <div className="flex items-center gap-1 text-[#005296] font-bold text-sm">
                    <MaterialIcon name="trending_up" className="text-base" />
                    📊 {post.trend}
                  </div>
                  <div className="h-4 w-[1px] bg-outline-variant"></div>
                  <div className="flex items-center gap-1 text-on-surface-variant text-sm">
                    <MaterialIcon name="location_on" className="text-base" />
                    {post.location}
                  </div>
                </div>

                {/* Post Text */}
                <div className="text-body-md text-on-surface-variant leading-relaxed space-y-4 mb-8">
                  <p>{post.content}</p>
                  <p>{post.content2}</p>
                </div>

                {/* Product Card */}
                <div className="p-4 border border-slate-200 rounded-xl bg-surface-container-lowest flex items-center gap-6 group hover:border-primary-container transition-colors mb-8">
                  <ProductThumbnail name={post.product.name} />
                  <div className="flex-1">
                    <h4 className="font-bold text-lg text-on-surface">{post.product.name}</h4>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-xl font-bold text-primary">{post.product.price}</span>
                      <span className="text-[#1F8A4C] text-sm font-bold flex items-center">
                        <MaterialIcon name="arrow_upward" className="text-base" />
                        {post.product.trend}
                      </span>
                    </div>
                  </div>
                  <button className={`px-6 py-2 rounded-full font-medium flex items-center gap-2 transition-colors ${primaryButtonClass}`}>
                    <MaterialIcon name="add_shopping_cart" fill />
                    Thêm vào kho
                  </button>
                </div>
              </div>

              {/* Post Footer */}
              <footer className="px-6 py-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center bg-slate-100 rounded-full p-1">
                    <button
                      onClick={() => {
                        setIsVoted(!isVoted);
                        setVoteCount(isVoted ? voteCount - 1 : voteCount + 1);
                      }}
                      className="flex items-center gap-1 px-3 py-1 hover:bg-white rounded-full transition-all text-on-surface-variant"
                    >
                      <MaterialIcon name="thumb_up" fill={isVoted} />
                      <span className="text-xs font-bold">{voteCount}</span>
                    </button>
                    <div className="w-[1px] h-4 bg-slate-300"></div>
                    <button className="flex items-center px-3 py-1 hover:bg-white rounded-full transition-all text-on-surface-variant">
                      <MaterialIcon name="thumb_down" />
                    </button>
                  </div>
                  <button
                    onClick={() => setIsSaved(!isSaved)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${ghostButtonClass}`}
                  >
                    <MaterialIcon name="bookmark" fill={isSaved} />
                    <span className="text-xs font-bold">Lưu</span>
                  </button>
                  <button className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${ghostButtonClass}`}>
                    <MaterialIcon name="share" />
                    <span className="text-xs font-bold">Chia sẻ</span>
                  </button>
                </div>
                <button className="text-error text-xs font-bold flex items-center gap-1 hover:bg-error-container/20 px-3 py-2 rounded-full transition-all">
                  <MaterialIcon name="report" />
                  Báo cáo
                </button>
              </footer>
            </article>

            {/* Comments Section */}
            <section className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-bold text-2xl text-on-surface">Bình luận ({commentCount})</h3>
                <div className="flex items-center gap-2 text-outline">
                  <span className="text-xs">Sắp xếp theo:</span>
                  <button
                    onClick={() => setSortBy(sortBy === 'newest' ? 'oldest' : 'newest')}
                    className={`px-3 py-1.5 rounded-full font-bold text-xs flex items-center gap-1 transition-colors ${secondaryButtonClass}`}
                  >
                    {sortBy === 'newest' ? 'Mới nhất' : 'Cũ nhất'}
                    <MaterialIcon name="expand_more" className="text-base" />
                  </button>
                </div>
              </div>

              {/* Comment Input */}
              <div className="flex gap-4 mb-8 items-start">
                <Avatar name="Current user" size="md" />
                <div className="flex-1 rounded-2xl border border-[#D9E6FF] bg-white p-0 shadow-[0_1px_0_rgba(0,69,127,0.04)]">
                  <textarea
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    className="w-full border-none bg-white rounded-2xl p-4 focus:ring-2 focus:ring-[#1E6BB8] focus:border-transparent resize-none min-h-[112px] text-sm text-on-surface-variant placeholder:text-outline"
                    placeholder="Chia sẻ ý kiến của bạn..."
                  />
                  <div className="flex justify-end mt-2">
                    <button
                      onClick={handleAddComment}
                      className={`px-6 py-2 rounded-full font-medium transition-colors ${primaryButtonClass}`}
                    >
                      Gửi bình luận
                    </button>
                  </div>
                </div>
              </div>

              {/* Comments List */}
              <div className="space-y-6">
                {sortedComments.map((comment) => (
                  <div key={comment.id}>
                    {/* Best Answer Highlight */}
                    <div className={`relative rounded-2xl p-6 ${comment.isBest ? 'border border-[#B9D7FF] bg-[#F4F8FF]' : 'border border-[#E5EAF2] bg-white'}`}>
                      {comment.isBest && (
                        <div className="absolute -top-3 left-6 bg-[#1E6BB8] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase flex items-center gap-1 shadow-sm">
                          <MaterialIcon name="verified" className="text-xs" fill />
                          Câu trả lời hữu ích nhất
                        </div>
                      )}
                      <div className="flex gap-4">
                        <Avatar name={comment.author} size="md" />
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className="font-bold text-sm">{comment.author}</span>
                            {comment.role && (
                              <span className="bg-[#E5EEFF] text-[#005296] text-[8px] px-1.5 py-0.5 rounded-full font-bold uppercase">
                                {comment.role}
                              </span>
                            )}
                            <span className="text-xs text-outline">{comment.time}</span>
                          </div>
                          <p className="text-body-md text-on-surface-variant mb-3 leading-relaxed">{comment.content}</p>
                          <div className="flex items-center gap-6">
                            <button className={`flex items-center gap-1 font-bold text-xs px-3 py-1 rounded-full ${secondaryButtonClass}`}>
                              <MaterialIcon name="thumb_up" />
                              {comment.likes}
                            </button>
                            <button className="text-[#005296] font-bold text-xs hover:underline transition-colors">
                              Trả lời
                            </button>
                          </div>

                          {/* Replies */}
                          {comment.replies && (
                            <div className="space-y-4 mt-6 pl-6 border-l-2 border-[#E5EEFF]">
                              {comment.replies.map((reply) => (
                                <div key={reply.id} className="flex gap-4">
                                  <Avatar name={reply.author} size="sm" />
                                  <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-2 mb-1">
                                      <span className="font-bold text-sm">{reply.author}</span>
                                      {reply.role && (
                                        <span className="bg-[#E5EEFF] text-[#005296] text-[8px] px-1.5 py-0.5 rounded-full font-bold uppercase">
                                          {reply.role}
                                        </span>
                                      )}
                                      <span className="text-xs text-outline">{reply.time}</span>
                                    </div>
                                    <p className="text-body-md text-on-surface-variant mb-2 leading-relaxed">{reply.content}</p>
                                    <button className="text-[#005296] font-bold text-xs hover:underline transition-colors">
                                      Trả lời
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <button className={`w-full mt-6 py-3 font-bold border rounded-xl transition-colors ${secondaryButtonClass} border-[#B9D7FF]`}>
                  Xem thêm bình luận
                </button>
              </div>
            </section>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="hidden xl:flex w-80 flex-col gap-6 py-8 pr-6 sticky top-16 h-fit">
          {/* Product Trends */}
          <section className="bg-white rounded-xl border border-slate-200 p-4">
            <h4 className="font-bold text-on-surface flex items-center gap-2 mb-4 text-sm">
              <MaterialIcon name="trending_up" className="text-primary" />
              Xu hướng sản phẩm
            </h4>
            <ul className="space-y-4">
              {trends.map((trend, idx) => (
                <li key={idx} className="flex items-center justify-between group">
                  <span className="text-sm text-on-surface-variant group-hover:text-primary transition-colors cursor-pointer">
                    {trend.name}
                  </span>
                  <span className={`${trend.isPositive ? 'text-green-600' : 'text-error'} text-xs font-bold`}>
                    {trend.change}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Related Posts */}
          <section className="bg-white rounded-xl border border-slate-200 p-4">
            <h4 className="font-bold text-on-surface mb-4 text-sm">Bài viết liên quan</h4>
            <div className="space-y-4">
              {relatedPosts.map((relPost) => (
                <button key={relPost.id} type="button" className="block w-full text-left group cursor-pointer">
                  <p className="text-sm font-medium text-on-surface line-clamp-2 group-hover:text-primary-container transition-colors">
                    {relPost.title}
                  </p>
                  <span className="text-[10px] text-outline mt-1 block">
                    {relPost.comments} bình luận • {relPost.date}
                  </span>
                </button>
              ))}
            </div>
          </section>

          {/* Tags */}
          <section className="bg-white rounded-xl border border-slate-200 p-4">
            <h4 className="font-bold text-on-surface mb-4 text-sm">Tags liên quan</h4>
            <div className="flex flex-wrap gap-2">
              {postDetailMockData.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-[#F1F5F9] rounded-full text-xs text-[#475569] cursor-pointer hover:bg-[#E5EEFF] hover:text-[#005296] transition-all"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* Guidelines */}
          <section className="p-6 bg-[#EFF4FF] rounded-2xl border border-transparent">
            <div className="flex items-center gap-2 mb-3">
              <h4 className="font-bold text-[#0B1C30] text-h3 leading-tight">Quy định cộng đồng</h4>
            </div>
            <p className="text-body-md leading-relaxed text-[#4B5563] font-medium max-w-[470px]">
              Vui lòng tuân thủ quy tắc ứng xử văn minh. Không đăng tin rác, quảng cáo không đúng chuyên mục. Các bài viết sai quy định sẽ bị gỡ bỏ không báo trước.
            </p>
            <button type="button" className="text-[#005296] font-bold text-body-md mt-4 inline-block text-left">
              Xem chi tiết
            </button>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default PostDetail;
