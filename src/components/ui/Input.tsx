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
  const iconClasses = Icon ? (iconPosition === 'left' ? 'pl-10' : 'pr-10') : '';
  const widthClasses = fullWidth ? 'w-full' : '';
  
  const inputClasses = `
    px-3 py-2 text-sm
    ${baseClasses}
    ${errorClasses}
    ${iconClasses}
    ${widthClasses}
    ${className}
  `.trim();

  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className={`absolute ${iconPosition === 'left' ? 'left-3' : 'right-3'} top-1/2 transform -translate-y-1/2`}>
            <Icon size={16} className="text-gray-400" />
          </div>
        )}
        <input className={inputClasses} {...props} />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Input;