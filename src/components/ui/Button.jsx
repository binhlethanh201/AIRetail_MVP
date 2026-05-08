import React from 'react';

const Button = ({
  children,
  variant = 'add',
  space = 'customer',
  className = '',
  disabled = false,
  ...props
}) => {
  const baseStyles =
    'uppercase font-bold tracking-btn px-4 py-2 transition-all inline-flex items-center justify-center gap-2 focus:outline-none';

  const stateStyles = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'hover:brightness-90 active:scale-95';

  const radiusStyles = space === 'admin' ? 'rounded-admin' : 'rounded-customer';

  let variantStyles = '';

  switch (variant) {
    case 'add':
      variantStyles = space === 'admin' ? 'bg-admin text-surface' : 'bg-primary text-surface';
      break;

    case 'edit':
      variantStyles =
        space === 'admin'
          ? 'bg-bodyAdmin border border-borderLight text-textAdmin'
          : 'bg-surface border border-borderLight text-textMain';
      break;

    case 'delete':
      variantStyles =
        space === 'admin'
          ? 'bg-surface border border-dangerBorder text-dangerAdmin'
          : 'bg-surface border border-dangerBorder text-danger';
      break;

    case 'confirm':
      variantStyles = 'bg-success text-surface';
      break;

    default:
      variantStyles = 'bg-primary text-surface';
  }

  const combinedClasses =
    `${baseStyles} ${stateStyles} ${radiusStyles} ${variantStyles} ${className}`.trim();

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
