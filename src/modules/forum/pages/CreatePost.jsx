import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ForumHeader from '../components/ForumHeader';
import ForumLeftSidebar from '../components/ForumLeftSidebar';

const MaterialIcon = ({ name, className = '', fill = false }) => (
  <span
    className={`material-symbols-outlined ${className}`}
    style={{ fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' 24` }}
  >
    {name}
  </span>
);

const POST_TYPES = [
  { key: 'wholesale', icon: 'storefront', label: 'Đăng bán sỉ' },
  { key: 'supply', icon: 'search_insights', label: 'Nguồn hàng' },
  { key: 'quote', icon: 'request_quote', label: 'Hỏi giá' },
  { key: 'trend', icon: 'trending_up', label: 'Chia sẻ xu hướng' },
  { key: 'trusted', icon: 'verified', label: 'Chia sẻ uy tín' },
];

const CATEGORY_OPTIONS = ['Vật liệu xây dựng', 'Thiết bị điện', 'Kim khí', 'Máy móc công nghiệp'];

const INITIAL_SPECS = [
  { id: 1, name: 'Độ phủ lý thuyết', value: '' },
  { id: 2, name: 'Thời gian khô', value: '' },
  { id: 3, name: 'Quy cách đóng gói', value: '' },
];

const sampleImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAVGxDaomtTUeAkSwJJr9wuZJaUKXCYvUplrHvbQVvfUcLNpkFdXbP7ik9P83z9pr3LRQYDkpBF9qAfxiSF5a64K2dn1ofuPHmpybpIR_sMMyyupGxN8iKxYCFPU4DBIU6_HDe4PvQJIBlFS9Bu5XOSiW_G-Dba0QA-polMr4uIiNEw2_fGY720PpxBiwFw7Y0mgQxDuTuF7MrzilniYC0m2Am_d8g8nqNt1lAjVuDhh_W7_RMDti4e-fzKytKWAsBVjzgRkYMY8gR6';

const quoteProduct = {
  image:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCnlusiF-0mwfqkYdH0Ya89uKwxkBZX147xtpYw71fYXzOy4qptu-Sm8CDlIJoUfGn_lWw7dqO_7nzMjOe_6YDEB-bGW8uxp0jaq5vOSQuBzLoBeO2qlG3z3MjrSH_d8VxQUmWjdJU68n6X4v8cYeHZEgYpqXXO3dElv2VkAdoGWLFiDk49dQT0e2UknM-al4qT43Ltyr7dkrvUscsva9PYy0ZCaN43LCSlf-qMrS3-VSY4twU07U2fVEikvrsLQSq-7HO1rlhkLG4W',
  name: 'Máy khoan động lực Bosch GSB 13 RE',
  description:
    'Máy khoan chuyên dụng công suất cao, thiết kế nhỏ gọn phù hợp thi công công trình.',
  sku: 'BOS-GSB-13',
  supplier: 'Bosch Vietnam',
};

export const CreatePost = () => {
  const navigate = useNavigate();
  const [postType, setPostType] = useState('quote');
  const [newTag, setNewTag] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: 'Cần báo giá thép xây dựng Hòa Phát số lượng lớn tại TP.HCM',
    category: CATEGORY_OPTIONS[0],
    area: 'TP.HCM & Miền Tây',
    content:
      'Tôi đang cần báo giá thép cuộn, thép cây thương hiệu Hòa Phát cho công trình tại TP.HCM. Ưu tiên đơn vị có CO/CQ đầy đủ và giao hàng nhanh...',
    tags: ['kim_khi', 'son_chong_tham'],
  });
  const [specRows, setSpecRows] = useState(INITIAL_SPECS);
  const [images, setImages] = useState([sampleImage]);
  const [quoteOptions, setQuoteOptions] = useState({
    attachProduct: true,
    showPrice: false,
    showStock: false,
    showSupplier: false,
  });

  const completionPercent = useMemo(() => {
    const checkpoints =
      postType === 'quote'
        ? [
            Boolean(formData.title.trim()),
            Boolean(formData.category.trim()),
            Boolean(formData.area.trim()),
            Boolean(formData.content.trim()),
            formData.tags.length > 0,
            quoteOptions.attachProduct,
            images.length > 0,
          ]
        : [
            Boolean(formData.title.trim()),
            Boolean(formData.category.trim()),
            Boolean(formData.area.trim()),
            Boolean(formData.content.trim()),
            formData.tags.length > 0,
            images.length > 0,
            specRows.some((row) => row.name.trim() && row.value.trim()),
          ];

    const done = checkpoints.filter(Boolean).length;
    return Math.round((done / checkpoints.length) * 100);
  }, [formData, images.length, postType, quoteOptions.attachProduct, specRows]);

  const progressOffset = useMemo(() => {
    const circumference = 364.42;
    return circumference - (completionPercent / 100) * circumference;
  }, [completionPercent]);

  const handleFormField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddTag = (event) => {
    if (event.key !== 'Enter') {
      return;
    }

    event.preventDefault();
    const normalizedTag = newTag.trim().toLowerCase().replace(/\s+/g, '_');

    if (!normalizedTag || formData.tags.includes(normalizedTag) || formData.tags.length >= 5) {
      return;
    }

    setFormData((prev) => ({ ...prev, tags: [...prev.tags, normalizedTag] }));
    setNewTag('');
  };

  const handleRemoveTag = (tagToRemove) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleSpecChange = (id, field, value) => {
    setSpecRows((prev) => prev.map((row) => (row.id === id ? { ...row, [field]: value } : row)));
  };

  const handleAddSpec = () => {
    const nextId = Date.now();
    setSpecRows((prev) => [...prev, { id: nextId, name: '', value: '' }]);
  };

  const handleRemoveSpec = (id) => {
    setSpecRows((prev) => (prev.length > 1 ? prev.filter((row) => row.id !== id) : prev));
  };

  const handleRemoveImage = (index) => {
    setImages((prev) => prev.filter((_, imageIndex) => imageIndex !== index));
  };

  const isQuotePost = postType === 'quote';

  const handlePublish = async () => {
    if (!formData.title.trim() || !formData.category.trim() || !formData.content.trim()) {
      alert('Vui lòng điền đầy đủ tiêu đề, tin tức ngành và nội dung bài viết.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(isQuotePost ? 'Đăng bài hỏi giá thành công (demo).' : 'Đăng bài nguồn hàng thành công (demo).');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background font-sans text-on-surface antialiased">
      <ForumHeader />

      <div className="mx-auto flex max-w-[1200px] gap-4 relative">
        <ForumLeftSidebar activeKey="" />

        <main className="min-w-0 flex-1 bg-surface pb-24 py-4 lg:pb-10">
          <div className="mx-auto w-full max-w-[1280px] px-4 pb-12 pt-8 md:px-8">
            <header className="mb-6">
              <h1 className="mb-2 text-3xl font-bold leading-tight text-on-surface md:text-4xl">
                {isQuotePost ? 'Đăng bài hỏi giá mới' : 'Đăng bài nguồn hàng mới'}
              </h1>
              <p className="text-sm text-on-surface-variant md:text-base">
                {isQuotePost
                  ? 'Điền đầy đủ thông tin để đối tác báo giá nhanh và chính xác hơn.'
                  : 'Điền đầy đủ thông tin để thu hút đối tác và khách hàng B2B tiềm năng.'}
              </p>
            </header>

            <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-12">
              <section className="space-y-6 xl:col-span-8">
                <div className="rounded-xl border border-outline-variant bg-white p-4 md:p-6">
                    <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">
                    1. Chọn loại bài đăng
                  </h3>
                  <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5">
                    {POST_TYPES.map((item) => {
                      const active = postType === item.key;

                      return (
                        <button
                          key={item.key}
                          type="button"
                          onClick={() => setPostType(item.key)}
                          className={`group flex min-h-24 flex-col items-center justify-center rounded-xl border p-3 text-center transition-all ${
                            active
                              ? 'border-2 border-primary-container bg-surface-container-low text-primary'
                              : 'border-outline-variant text-on-surface-variant hover:border-primary-container hover:text-primary'
                          }`}
                        >
                          <MaterialIcon name={item.icon} className="mb-2 text-[24px]" fill={active} />
                          <span className="text-xs font-medium md:text-sm">{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-5 rounded-xl border border-outline-variant bg-white p-4 md:p-6">
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                    2. Nội dung chi tiết
                  </h3>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-on-surface">
                      {isQuotePost ? 'Tiêu đề yêu cầu báo giá' : 'Tiêu đề bài đăng'}
                    </label>
                    <input
                      className="w-full rounded-xl border border-outline-variant bg-surface-bright px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-primary-container"
                      placeholder={
                        isQuotePost
                          ? 'Ví dụ: Cần báo giá thép xây dựng Hòa Phát số lượng lớn tại TP.HCM'
                          : 'Ví dụ: Cung cấp thép xây dựng Hòa Phát số lượng lớn tại TP.HCM'
                      }
                      type="text"
                      value={formData.title}
                      onChange={(event) => handleFormField('title', event.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-on-surface">Tin tức ngành</label>
                      <select
                        className="w-full appearance-none rounded-xl border border-outline-variant bg-surface-bright px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-primary-container"
                        value={formData.category}
                        onChange={(event) => handleFormField('category', event.target.value)}
                      >
                        {CATEGORY_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-on-surface">Khu vực</label>
                      <input
                        className="w-full rounded-xl border border-outline-variant bg-surface-bright px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-primary-container"
                        placeholder="Toàn quốc, Hà Nội, TP.HCM..."
                        type="text"
                        value={formData.area}
                        onChange={(event) => handleFormField('area', event.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-on-surface">
                      {isQuotePost ? 'Nội dung yêu cầu báo giá' : 'Nội dung bài viết'}
                    </label>
                    <div className="overflow-hidden rounded-xl border border-outline-variant">
                      <div className="flex gap-2 border-b border-outline-variant bg-slate-100 p-2">
                        <button type="button" className="rounded p-1 text-on-surface-variant hover:bg-white">
                          <MaterialIcon name="format_bold" className="text-[18px]" />
                        </button>
                        <button type="button" className="rounded p-1 text-on-surface-variant hover:bg-white">
                          <MaterialIcon name="format_italic" className="text-[18px]" />
                        </button>
                        <button type="button" className="rounded p-1 text-on-surface-variant hover:bg-white">
                          <MaterialIcon name="format_list_bulleted" className="text-[18px]" />
                        </button>
                        <button type="button" className="rounded p-1 text-on-surface-variant hover:bg-white">
                          <MaterialIcon name="link" className="text-[18px]" />
                        </button>
                      </div>
                      <textarea
                        className="w-full resize-none bg-surface-bright p-4 text-sm outline-none"
                        placeholder={
                          isQuotePost
                            ? 'Mô tả nhu cầu, số lượng, khu vực giao hàng, yêu cầu chứng từ...'
                            : 'Mô tả chi tiết về nguồn hàng, năng lực cung ứng...'
                        }
                        rows="6"
                        value={formData.content}
                        onChange={(event) => handleFormField('content', event.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-on-surface">Gắn thẻ bài viết (Tags)</label>
                    <div className="flex flex-wrap items-center gap-2 rounded-xl border border-outline-variant bg-surface-bright p-3">
                      {formData.tags.map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center gap-1 rounded-full bg-primary-container/10 px-3 py-1 text-xs font-medium text-primary md:text-sm"
                        >
                          #{tag}
                          <button
                            type="button"
                            onClick={() => handleRemoveTag(tag)}
                            className="leading-none text-primary/80 hover:text-primary"
                            aria-label={`Xóa thẻ ${tag}`}
                          >
                            <MaterialIcon name="close" className="text-[14px]" />
                          </button>
                        </span>
                      ))}
                      <input
                        className="min-w-[120px] flex-1 border-none bg-transparent p-0 text-sm outline-none focus:ring-0"
                        placeholder="Thêm thẻ mới..."
                        type="text"
                        value={newTag}
                        onChange={(event) => setNewTag(event.target.value)}
                        onKeyDown={handleAddTag}
                      />
                    </div>
                    <p className="text-xs text-on-surface-variant">
                      Nhập thẻ và nhấn Enter để thêm (Tối đa 5 thẻ)
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-on-surface">
                      {isQuotePost ? 'Ảnh minh hoạ' : 'Ảnh sản phẩm'}
                    </label>
                    <div className={isQuotePost ? 'grid grid-cols-2 gap-3 md:grid-cols-4' : 'grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5'}>
                      <button
                        type="button"
                        className="aspect-square rounded-xl border-2 border-dashed border-outline-variant text-on-surface-variant transition-all hover:border-primary-container hover:text-primary"
                      >
                        <span className="flex h-full flex-col items-center justify-center">
                          <MaterialIcon name="add_a_photo" className="text-[28px]" />
                          <span className="mt-1 text-[11px]">Tải ảnh</span>
                        </span>
                      </button>

                      {images.map((src, index) => (
                        <div
                          key={`${src}-${index}`}
                          className="group relative aspect-square overflow-hidden rounded-xl border border-outline-variant bg-slate-100"
                        >
                          <img src={src} alt="Ảnh sản phẩm" className="h-full w-full object-cover" />
                          <button
                            type="button"
                            onClick={() => handleRemoveImage(index)}
                            className="absolute right-1 top-1 rounded-full bg-error p-1 text-white opacity-0 transition-opacity group-hover:opacity-100"
                          >
                            <MaterialIcon name="close" className="text-[14px]" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {isQuotePost ? (
                  <div className="space-y-5 rounded-xl border border-outline-variant bg-white p-4 md:p-6">
                    <div className="mb-1 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <MaterialIcon name="inventory_2" className="text-[20px] text-primary" fill />
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                          3. Gắn sản phẩm từ kho (tuỳ chọn)
                        </h3>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-on-surface-variant">Gắn sản phẩm vào bài viết</span>
                        <label className="relative inline-flex cursor-pointer items-center">
                          <input
                            className="peer sr-only"
                            type="checkbox"
                            checked={quoteOptions.attachProduct}
                            onChange={(event) =>
                              setQuoteOptions((prev) => ({ ...prev, attachProduct: event.target.checked }))
                            }
                          />
                          <span className="h-6 w-11 rounded-full bg-slate-200 transition-colors after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-transform after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full" />
                        </label>
                      </div>
                    </div>

                    <div className="relative">
                      <MaterialIcon
                        name="search"
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[18px] text-slate-400"
                      />
                      <input
                        className="w-full rounded-xl border border-outline-variant bg-surface-bright py-3 pl-12 pr-4 text-sm outline-none transition-all focus:ring-2 focus:ring-primary-container"
                        placeholder="Tìm sản phẩm trong kho..."
                        type="text"
                      />
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                        SẢN PHẨM ĐÃ CHỌN
                      </p>
                      <div className="rounded-xl border border-outline-variant p-4">
                        <div className="mb-4 flex items-start gap-4">
                          <img
                            alt={quoteProduct.name}
                            className="h-20 w-20 rounded-lg border border-outline-variant object-cover"
                            src={quoteProduct.image}
                          />
                          <div className="min-w-0 flex-1">
                            <h4 className="mb-1 text-base font-semibold text-on-surface">
                              {quoteProduct.name}
                            </h4>
                            <p className="mb-2 text-xs text-on-surface-variant">{quoteProduct.description}</p>
                            <div className="flex flex-wrap gap-4 text-[10px] font-bold uppercase text-slate-400">
                              <span>SKU: {quoteProduct.sku}</span>
                              <span>NSX: {quoteProduct.supplier}</span>
                            </div>
                          </div>
                          <button type="button" className="flex flex-col items-center text-error">
                            <MaterialIcon name="delete" />
                            <span className="text-[10px] font-bold">Xóa khỏi bài</span>
                          </button>
                        </div>

                        <div className="grid grid-cols-1 gap-3 border-t border-slate-100 pt-4 md:grid-cols-3">
                          <div className="flex items-center justify-between rounded-lg bg-slate-50 p-2">
                            <span className="text-sm text-on-surface-variant">Hiển thị giá</span>
                            <label className="relative inline-flex cursor-pointer scale-75 items-center">
                              <input
                                className="peer sr-only"
                                type="checkbox"
                                checked={quoteOptions.showPrice}
                                onChange={(event) =>
                                  setQuoteOptions((prev) => ({ ...prev, showPrice: event.target.checked }))
                                }
                              />
                              <span className="after:content-[''] peer h-6 w-11 rounded-full bg-slate-300 transition-colors after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-transform peer-checked:bg-primary peer-checked:after:translate-x-full" />
                            </label>
                          </div>
                          <div className="flex items-center justify-between rounded-lg bg-slate-50 p-2">
                            <span className="text-sm text-on-surface-variant">Hiển thị tồn kho</span>
                            <label className="relative inline-flex cursor-pointer scale-75 items-center">
                              <input
                                className="peer sr-only"
                                type="checkbox"
                                checked={quoteOptions.showStock}
                                onChange={(event) =>
                                  setQuoteOptions((prev) => ({ ...prev, showStock: event.target.checked }))
                                }
                              />
                              <span className="after:content-[''] peer h-6 w-11 rounded-full bg-slate-300 transition-colors after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-transform peer-checked:bg-primary peer-checked:after:translate-x-full" />
                            </label>
                          </div>
                          <div className="flex items-center justify-between rounded-lg bg-slate-50 p-2">
                            <span className="text-sm text-on-surface-variant">Hiển thị nhà cung cấp</span>
                            <label className="relative inline-flex cursor-pointer scale-75 items-center">
                              <input
                                className="peer sr-only"
                                type="checkbox"
                                checked={quoteOptions.showSupplier}
                                onChange={(event) =>
                                  setQuoteOptions((prev) => ({ ...prev, showSupplier: event.target.checked }))
                                }
                              />
                              <span className="after:content-[''] peer h-6 w-11 rounded-full bg-slate-300 transition-colors after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-transform peer-checked:bg-primary peer-checked:after:translate-x-full" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="space-y-5 rounded-xl border border-outline-variant bg-white p-4 md:p-6">
                      <div className="mb-1 flex items-center justify-between gap-4">
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                          3. Thông tin giao thương
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-on-surface-variant">Hiển thị thông tin</span>
                          <label className="relative inline-flex cursor-pointer items-center">
                            <input
                              className="peer sr-only"
                              type="checkbox"
                              checked={formData.showTradeInfo}
                              onChange={(event) => handleFormField('showTradeInfo', event.target.checked)}
                            />
                            <span className="h-6 w-11 rounded-full bg-slate-200 transition-colors after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-transform after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full" />
                          </label>
                        </div>
                      </div>

                      {formData.showTradeInfo && (
                        <>
                          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                            <div className="space-y-2 md:col-span-2">
                              <label className="text-sm font-medium text-on-surface">Tên sản phẩm đại diện</label>
                              <input
                                className="w-full rounded-xl border border-outline-variant bg-surface-bright px-4 py-3 text-sm"
                                placeholder="Thép cuộn CB300-V"
                                type="text"
                                value={formData.productName}
                                onChange={(event) => handleFormField('productName', event.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-on-surface">Đơn vị</label>
                              <input
                                className="w-full rounded-xl border border-outline-variant bg-surface-bright px-4 py-3 text-sm"
                                placeholder="Tấn, Kg, Cái..."
                                type="text"
                                value={formData.unit}
                                onChange={(event) => handleFormField('unit', event.target.value)}
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-on-surface">Giá sỉ (VNĐ)</label>
                              <input
                                className="w-full rounded-xl border border-outline-variant bg-surface-bright px-4 py-3 text-sm"
                                placeholder="Thỏa thuận"
                                type="text"
                                value={formData.wholesalePrice}
                                onChange={(event) => handleFormField('wholesalePrice', event.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-on-surface">Giá lẻ (VNĐ)</label>
                              <input
                                className="w-full rounded-xl border border-outline-variant bg-surface-bright px-4 py-3 text-sm"
                                placeholder="Liên hệ"
                                type="text"
                                value={formData.retailPrice}
                                onChange={(event) => handleFormField('retailPrice', event.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-on-surface">MOQ (Tối thiểu)</label>
                              <input
                                className="w-full rounded-xl border border-outline-variant bg-surface-bright px-4 py-3 text-sm"
                                placeholder="100 đơn vị"
                                type="text"
                                value={formData.moq}
                                onChange={(event) => handleFormField('moq', event.target.value)}
                              />
                            </div>
                          </div>

                          <div className="flex flex-col gap-3 py-1 md:flex-row md:items-center md:gap-6">
                            <span className="text-sm font-medium text-on-surface">Trạng thái hàng:</span>
                            <label className="flex items-center gap-2 text-sm">
                              <input
                                type="radio"
                                name="stock"
                                checked={formData.stockStatus === 'in-stock'}
                                onChange={() => handleFormField('stockStatus', 'in-stock')}
                                className="text-primary focus:ring-primary-container"
                              />
                              Sẵn kho
                            </label>
                            <label className="flex items-center gap-2 text-sm">
                              <input
                                type="radio"
                                name="stock"
                                checked={formData.stockStatus === 'pre-order'}
                                onChange={() => handleFormField('stockStatus', 'pre-order')}
                                className="text-primary focus:ring-primary-container"
                              />
                              Hàng đặt trước (Pre-order)
                            </label>
                            <label className="flex items-center gap-2 text-sm">
                              <input
                                type="radio"
                                name="stock"
                                checked={formData.stockStatus === 'hidden'}
                                onChange={() => handleFormField('stockStatus', 'hidden')}
                                className="text-primary focus:ring-primary-container"
                              />
                              Không hiển thị
                            </label>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="space-y-5 rounded-xl border border-outline-variant bg-white p-4 md:p-6">
                      <div className="mb-1 flex items-center justify-between gap-4">
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                          4. Thông số kỹ thuật
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-on-surface-variant">Hiển thị thông tin</span>
                          <label className="relative inline-flex cursor-pointer items-center">
                            <input
                              className="peer sr-only"
                              type="checkbox"
                              checked={formData.showSpecInfo}
                              onChange={(event) => handleFormField('showSpecInfo', event.target.checked)}
                            />
                            <span className="h-6 w-11 rounded-full bg-slate-200 transition-colors after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-transform after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full" />
                          </label>
                        </div>
                      </div>

                      {formData.showSpecInfo && (
                        <>
                          <div className="grid grid-cols-1 gap-2 px-1 text-sm font-medium text-on-surface md:grid-cols-2">
                            <label>Tên thông số</label>
                            <label>Giá trị / Nội dung</label>
                          </div>

                          <div className="space-y-3">
                            {specRows.map((row) => (
                              <div key={row.id} className="flex flex-col gap-3 md:flex-row md:items-center">
                                <div className="flex-1">
                                  <input
                                    className="w-full rounded-xl border border-outline-variant bg-surface-bright px-4 py-3 text-sm"
                                    placeholder="Ví dụ: Độ phủ lý thuyết"
                                    type="text"
                                    value={row.name}
                                    onChange={(event) => handleSpecChange(row.id, 'name', event.target.value)}
                                  />
                                </div>
                                <div className="flex-1">
                                  <input
                                    className="w-full rounded-xl border border-outline-variant bg-surface-bright px-4 py-3 text-sm"
                                    placeholder="Ví dụ: 10-12 m²/lít"
                                    type="text"
                                    value={row.value}
                                    onChange={(event) => handleSpecChange(row.id, 'value', event.target.value)}
                                  />
                                </div>
                                <button
                                  type="button"
                                  onClick={() => handleRemoveSpec(row.id)}
                                  className="px-1 text-on-surface-variant transition-colors hover:text-error"
                                >
                                  <MaterialIcon name="delete" className="text-[22px]" />
                                </button>
                              </div>
                            ))}
                          </div>

                          <button
                            type="button"
                            onClick={handleAddSpec}
                            className="mt-1 flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                          >
                            <MaterialIcon name="add" className="text-[18px]" />
                            Thêm thông số khác
                          </button>
                        </>
                      )}
                    </div>
                  </>
                )}

                <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => alert('Chế độ xem trước đang được phát triển.')}
                    className="flex items-center gap-2 rounded-full border-2 border-outline px-6 py-3 text-sm font-semibold text-on-surface-variant transition-all hover:bg-surface-container"
                  >
                    <MaterialIcon name="visibility" className="text-[20px]" />
                    <span>Xem trước</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => alert('Đã lưu nháp (demo).')}
                    className="rounded-full border-2 border-primary px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary-fixed"
                  >
                    Lưu nháp
                  </button>
                  <button
                    type="button"
                    disabled={loading}
                    onClick={handlePublish}
                    className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-container disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? 'Đang đăng...' : isQuotePost ? 'Đăng bài hỏi giá' : 'Đăng bài nguồn hàng'}
                  </button>
                </div>
              </section>

              <aside className="space-y-6 xl:col-span-4">
                <div className="space-y-6 xl:sticky xl:top-24">
                  <div className="flex flex-col items-center rounded-xl border border-outline-variant bg-white p-4 text-center md:p-6">
                    <h3 className="mb-4 w-full text-left text-sm font-semibold text-on-surface">
                      Phần trăm hoàn thành
                    </h3>
                    <div className="relative mb-4 flex items-center justify-center">
                      <svg className="h-32 w-32 -rotate-90 transform" viewBox="0 0 128 128">
                        <circle
                          className="text-surface-container"
                          cx="64"
                          cy="64"
                          r="58"
                          fill="transparent"
                          stroke="currentColor"
                          strokeWidth="8"
                        />
                        <circle
                          className="text-primary"
                          cx="64"
                          cy="64"
                          r="58"
                          fill="transparent"
                          stroke="currentColor"
                          strokeWidth="10"
                          strokeLinecap="round"
                          strokeDasharray="364.42"
                          strokeDashoffset={progressOffset}
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold text-on-surface">{completionPercent}%</span>
                        <span className="text-[10px] font-medium uppercase tracking-wider text-on-surface-variant">
                          Hoàn thiện
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-on-surface-variant md:text-sm">
                      Hoàn thiện các thông tin còn thiếu để bài đăng uy tín hơn.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#b7cae9] bg-[#c9dbf4] p-4 md:p-6">
                    <div className="mb-4 flex items-center gap-2 text-[#005ea4]">
                      <MaterialIcon name="lightbulb" className="text-[18px]" />
                      <h3 className="text-xs font-bold uppercase tracking-[0.12em]">Mẹo đăng bài</h3>
                    </div>
                    <ul className="space-y-4 text-left">
                      <li className="flex gap-3">
                        <MaterialIcon name="radio_button_unchecked" className="text-[14px] text-[#005ea4]" />
                        <p className="text-sm leading-5 text-[#123457]">
                          Tiêu đề chứa tên thương hiệu và địa phương giúp tăng 40% lượt xem.
                        </p>
                      </li>
                      <li className="flex gap-3">
                        <MaterialIcon name="radio_button_unchecked" className="text-[14px] text-[#005ea4]" />
                        <p className="text-sm leading-5 text-[#123457]">
                          Sử dụng hình ảnh thực tế từ kho bãi để tạo niềm tin với khách hàng B2B.
                        </p>
                      </li>
                      <li className="flex gap-3">
                        <MaterialIcon name="radio_button_unchecked" className="text-[14px] text-[#005ea4]" />
                        <p className="text-sm leading-5 text-[#123457]">
                          Mô tả chi tiết năng lực cung ứng để thu hút đối tác mua số lượng lớn.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </main>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t border-outline-variant bg-white px-4 md:hidden">
        <button type="button" onClick={() => navigate('/forum')} className="flex flex-col items-center gap-1 text-slate-500">
          <MaterialIcon name="dashboard" className="text-[20px]" />
          <span className="text-[10px]">Tổng quan</span>
        </button>
        <button type="button" className="flex flex-col items-center gap-1 text-primary">
          <MaterialIcon name="add_circle" className="text-[20px]" fill />
          <span className="text-[10px] font-bold">Đăng tin</span>
        </button>
        <button type="button" className="flex flex-col items-center gap-1 text-slate-500">
          <MaterialIcon name="forum" className="text-[20px]" />
          <span className="text-[10px]">Tin nhắn</span>
        </button>
        <button type="button" className="flex flex-col items-center gap-1 text-slate-500">
          <MaterialIcon name="person" className="text-[20px]" />
          <span className="text-[10px]">Cá nhân</span>
        </button>
      </footer>
    </div>
  );
};

export default CreatePost;
