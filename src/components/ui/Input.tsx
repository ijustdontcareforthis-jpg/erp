import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  icon: Icon,
  iconPosition = 'left',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors';
  const errorClasses = error ? 'border-red-300 focus:ring-red-500' : '';
  const iconClasses = Icon ? (iconPosition === 'left' ? 'pl-8 sm:pl-10' : 'pr-8 sm:pr-10') : '';
  const widthClasses = fullWidth ? 'w-full' : '';
  
  const inputClasses = `
    px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm
    ${baseClasses}
    ${errorClasses}
    ${iconClasses}
    ${widthClasses}
    ${className}
  `.trim();

  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {label && (
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className={`absolute ${iconPosition === 'left' ? 'left-2 sm:left-3' : 'right-2 sm:right-3'} top-1/2 transform -translate-y-1/2`}>
            <Icon size={14} className="sm:w-4 sm:h-4 text-gray-400" />
          </div>
        )}
        <input className={inputClasses} {...props} />
      </div>
      {error && (
        <p className="mt-1 text-xs sm:text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Input;