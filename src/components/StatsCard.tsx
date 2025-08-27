import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  icon?: LucideIcon;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  className?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  className = '' 
}) => {
  return (
    <div className={`bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200 ${className}`}>
      <div className="flex items-start sm:items-center justify-between">
        <div className="flex-1">
          <p className="text-xs sm:text-sm font-medium text-gray-600">{title}</p>
          <p className="text-lg sm:text-2xl font-bold text-gray-900 mt-1">{value}</p>
          {trend && (
            <div className={`flex items-center mt-1 sm:mt-2 text-xs sm:text-sm ${
              trend.isPositive ? 'text-green-600' : 'text-red-600'
            }`}>
              <span>{trend.value}</span>
            </div>
          )}
        </div>
        {Icon && (
          <div className="flex-shrink-0 ml-2 sm:ml-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-lg flex items-center justify-center">
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;