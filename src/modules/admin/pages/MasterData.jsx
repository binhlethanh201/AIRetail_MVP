import React from 'react';
import { Database, Megaphone, Plus, Edit2, Trash2, Send, Globe } from 'lucide-react';
import { MOCK_CATEGORIES, MOCK_BROADCASTS } from '../data/mockData';

const MasterData = () => {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-black text-textAdmin uppercase">Quản lý Dữ liệu Lõi & Vận hành</h1>
          <p className="mt-1 text-sm text-placeholder">Chuẩn hóa danh mục cho AI OCR và điều phối thông báo toàn hệ thống</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <div className="rounded-admin border border-borderLight bg-white overflow-hidden shadow-sm">
          <div className="flex items-center justify-between border-b border-borderLight px-6 py-4 bg-[#FAFAFA]">
            <div className="flex items-center gap-2">
              <Database size={18} className="text-admin" />
              <h2 className="text-sm font-black uppercase tracking-widest text-textAdmin">Cây danh mục chuẩn</h2>
            </div>
            <button className="flex items-center gap-1 rounded-admin bg-admin px-3 py-1.5 text-[10px] font-bold text-white hover:bg-black transition-all">
              <Plus size={14} /> THÊM NHÓM MỚI
            </button>
          </div>
          
          <div className="p-4">
            <div className="space-y-2">
              {MOCK_CATEGORIES.map((cat) => (
                <div key={cat.id} className="flex items-center justify-between p-3 rounded-admin border border-borderLight hover:border-admin group transition-all">
                  <div className="flex items-center gap-4">
                    <div className="text-xs font-bold text-placeholder">{cat.id}</div>
                    <div>
                      <div className="text-sm font-bold text-textAdmin">{cat.name}</div>
                      <div className="text-[10px] font-semibold text-placeholder">
                        {cat.items} mã hàng chuẩn • Cập nhật: {cat.lastUpdate}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 hover:bg-bodyAdmin rounded text-placeholder hover:text-admin"><Edit2 size={14} /></button>
                    <button className="p-1.5 hover:bg-error-container rounded text-placeholder hover:text-error"><Trash2 size={14} /></button>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 p-3 bg-bodyAdmin rounded-admin text-[11px] text-placeholder italic">
              * Lưu ý: Danh mục này được đồng bộ trực tiếp với Model AI OCR để tự động phân loại hóa đơn đầu vào cho khách hàng.
            </p>
          </div>
        </div>

        <div className="rounded-admin border border-borderLight bg-white overflow-hidden shadow-sm">
          <div className="flex items-center justify-between border-b border-borderLight px-6 py-4 bg-[#FAFAFA]">
            <div className="flex items-center gap-2">
              <Megaphone size={18} className="text-[#CC0000]" />
              <h2 className="text-sm font-black uppercase tracking-widest text-textAdmin">Thông báo toàn hệ thống</h2>
            </div>
            <button className="flex items-center gap-1 rounded-admin bg-[#CC0000] px-3 py-1.5 text-[10px] font-bold text-white hover:bg-red-800 transition-all">
              <Send size={14} /> TẠO TIN MỚI
            </button>
          </div>

          <div className="p-6 space-y-6">
            {MOCK_BROADCASTS.map((bc) => (
              <div key={bc.id} className="relative pl-6 border-l-2 border-borderLight hover:border-admin transition-colors">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-white bg-admin"></div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-[9px] font-black uppercase px-1.5 py-0.5 rounded ${
                    bc.status === 'scheduled' ? 'bg-[#FBC02D]/20 text-[#8f4e00]' : 'bg-[#2D6A4F]/10 text-[#2D6A4F]'
                  }`}>
                    {bc.status === 'scheduled' ? 'Đã lên lịch' : 'Đã gửi'}
                  </span>
                  <span className="text-[10px] font-bold text-placeholder uppercase tracking-widest">{bc.time}</span>
                </div>
                <h4 className="text-sm font-bold text-textAdmin">{bc.title}</h4>
                <div className="flex items-center gap-1 mt-1 text-[11px] font-medium text-placeholder">
                  <Globe size={12} /> Đối tượng: {bc.target}
                </div>
              </div>
            ))}
            
            <div className="pt-4 mt-4 border-t border-borderLight">
              <div className="rounded-admin bg-admin p-4 text-white">
                <h4 className="text-xs font-black uppercase mb-2 flex items-center gap-2">
                  <Megaphone size={14} /> Soạn tin nhanh (Quick Broadcast)
                </h4>
                <textarea 
                  className="w-full bg-white/10 border border-white/20 rounded px-3 py-2 text-xs placeholder:text-white/40 focus:outline-none focus:bg-white/20"
                  placeholder="Nhập nội dung thông báo khẩn cấp..."
                  rows="2"
                ></textarea>
                <div className="flex justify-end mt-2">
                  <button className="text-[10px] font-black uppercase bg-white text-admin px-4 py-1.5 rounded-admin hover:bg-gray-200">
                    Gửi ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MasterData;