import React, { forwardRef } from 'react';

const Input = forwardRef(
  ({ label, error, space = 'customer', icon: Icon, className = '', ...props }, ref) => {
    const isError = !!error;
    const baseStyles =
      'w-full bg-surface placeholder-placeholder transition-colors focus:outline-none focus:ring-0';

    const paddingStyles = Icon ? 'py-2 pl-10 pr-3' : 'py-2 px-3';

    const radiusStyles = space === 'admin' ? 'rounded-admin' : 'rounded-customer';
    const textStyles =
      space === 'admin' ? 'text-textAdmin font-medium' : 'text-textMain font-medium';

    let borderStyles = 'border border-borderLight';
    if (isError) {
      borderStyles = space === 'admin' ? 'border border-dangerAdmin' : 'border border-danger';
    } else {
      borderStyles += space === 'admin' ? ' focus:border-admin' : ' focus:border-primary';
    }

    const combinedClasses =
      `${baseStyles} ${paddingStyles} ${radiusStyles} ${textStyles} ${borderStyles} ${className}`.trim();

    const errorTextColor = space === 'admin' ? 'text-dangerAdmin' : 'text-danger';

    return (
      <div className="flex w-full flex-col gap-y-1">
        {label && (
          <label className="text-[11px] font-bold uppercase tracking-widest text-placeholder">
            {label}
          </label>
        )}

        <div className="relative w-full">
          {Icon && (
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-placeholder">
              <Icon size={18} strokeWidth={2} />
            </span>
          )}
          <input ref={ref} className={combinedClasses} {...props} />
        </div>

        {isError && (
          <span className={`text-[11px] ${errorTextColor} mt-0.5`}>
            {typeof error === 'string' ? error : 'Dữ liệu không hợp lệ'}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
