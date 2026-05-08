import React, { useState } from 'react';
import { Banknote, Landmark, QrCode, CreditCard } from 'lucide-react';

const METHODS = [
  { id: 'cash', label: 'Tiền mặt', icon: Banknote },
  { id: 'transfer', label: 'Chuyển khoản', icon: Landmark },
  { id: 'qr', label: 'QR Code', icon: QrCode },
  { id: 'card', label: 'Thẻ ngân hàng', icon: CreditCard },
];

const PaymentMethods = () => {
  const [activeMethod, setActiveMethod] = useState('cash');

  return (
    <div className="mb-4 grid grid-cols-2 gap-2">
      {METHODS.map((method) => {
        const Icon = method.icon;
        const isActive = activeMethod === method.id;

        return (
          <button
            key={method.id}
            onClick={() => setActiveMethod(method.id)}
            className={`flex items-center gap-x-2 rounded-customer border p-2 transition-all ${
              isActive
                ? 'border-primary bg-primary/5 text-primary'
                : 'border-borderLight bg-surface text-placeholder hover:border-primary hover:text-primary'
            }`}
          >
            <Icon size={16} strokeWidth={2.5} />
            <span className="text-[10px] font-bold uppercase tracking-widest">{method.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default PaymentMethods;
