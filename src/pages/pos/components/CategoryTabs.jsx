import React, { useState } from 'react';

const CATEGORIES = [
  { id: 'all', name: 'Tất cả' },
  { id: 'machinery', name: 'Máy móc' },
  { id: 'hand-tools', name: 'Dụng cụ cầm tay' },
  { id: 'construction', name: 'Vật liệu xây dựng' },
  { id: 'painting', name: 'Sơn & Chống thấm' },
  { id: 'fasteners', name: 'Bulong & Ốc vít' },
  { id: 'general-hardware', name: 'Kim khí tổng hợp' },
  { id: 'electrical', name: 'Thiết bị điện' },
  { id: 'plumbing', name: 'Vật tư ngành nước' },
];

const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="custom-scrollbar mb-6 flex select-none items-center gap-x-2 overflow-x-auto pb-2">
      {CATEGORIES.map((cat) => {
        const isActive = activeTab === cat.id;

        return (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`whitespace-nowrap rounded-full px-5 py-2 text-xs font-bold transition-all duration-200 ${
              isActive
                ? 'bg-primary text-surface shadow-md shadow-primary/20'
                : 'border border-borderLight bg-surface text-placeholder hover:border-primary hover:text-primary'
            } `}
          >
            {cat.name}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryTabs;
