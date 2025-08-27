import React from 'react';
import { getStatusColor } from '../../utils/formatters';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'status';
  status?: string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'default', 
  status,
  className = '' 
}) => {
  const baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
  
  let variantClasses = 'bg-gray-100 text-gray-800';
  
  if (variant === 'status' && status) {
    variantClasses = getStatusColor(status);
  }
  
  const classes = `${baseClasses} ${variantClasses} ${className}`.trim();

  return (
    <span className={classes}>
      {children}
    </span>
  );
};

export default Badge;