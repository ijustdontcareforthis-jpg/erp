import React from 'react';
import Input from '../ui/Input';
import Select from '../ui/Select';
import { FilterOption } from '../../types';

interface FormFieldProps {
  type: 'text' | 'email' | 'tel' | 'url' | 'password' | 'number' | 'date' | 'select' | 'textarea';
  name: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  error?: string;
  required?: boolean;
  options?: FilterOption[];
  rows?: number;
  fullWidth?: boolean;
  className?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  type,
  name,
  label,
  placeholder,
  value,
  onChange,
  error,
  required = false,
  options = [],
  rows = 3,
  fullWidth = true,
  className = ''
}) => {
  const commonProps = {
    name,
    value,
    onChange,
    placeholder,
    required,
    fullWidth,
    className
  };

  if (type === 'select') {
    return (
      <Select
        {...commonProps}
        label={label}
        error={error}
        options={options}
      />
    );
  }

  if (type === 'textarea') {
    const textareaClasses = `
      w-full px-3 py-2 text-sm border border-gray-300 rounded-lg 
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
      transition-colors resize-vertical
      ${error ? 'border-red-300 focus:ring-red-500' : ''}
      ${className}
    `.trim();

    return (
      <div className={fullWidth ? 'w-full' : ''}>
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <textarea
          {...commonProps}
          rows={rows}
          className={textareaClasses}
        />
        {error && (
          <p className="mt-1 text-sm text-red-600">{error}</p>
        )}
      </div>
    );
  }

  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <Input
        type={type}
        {...commonProps}
        error={error}
      />
    </div>
  );
};

export default FormField;