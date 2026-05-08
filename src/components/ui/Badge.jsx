import React from 'react';

const Badge = ({ children, variant = 'default', space = 'customer', className = '', ...props }) => {
  const baseStyles =
    'inline-flex items-center px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap';
  const radiusStyles = space === 'admin' ? 'rounded-admin' : 'rounded-customer';
  let variantStyles = '';

  switch (variant) {
    case 'success':
      variantStyles = 'bg-success/10 text-success border border-success/20';
      break;

    case 'warning':
      variantStyles = 'bg-warning/15 text-[#B28600] border border-warning/30';
      break;

    case 'danger':
      variantStyles =
        space === 'admin'
          ? 'bg-dangerBorder text-dangerAdmin border border-dangerBorder'
          : 'bg-dangerBorder text-danger border border-dangerBorder';
      break;

    case 'primary':
      variantStyles =
        space === 'admin'
          ? 'bg-admin/10 text-admin border border-admin/20'
          : 'bg-primary/10 text-primary border border-primary/20';
      break;

    default:
      variantStyles = 'bg-surface border border-borderLight text-placeholder';
      break;
  }

  const combinedClasses = `${baseStyles} ${radiusStyles} ${variantStyles} ${className}`.trim();

  return (
    <span className={combinedClasses} {...props}>
      {children}
    </span>
  );
};

export default Badge;
