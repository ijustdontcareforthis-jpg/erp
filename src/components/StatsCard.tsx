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
    <div className={`bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-sm border border-gray-200 ${className}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-xs sm:text-sm font-medium text-gray-600 truncate">{title}</p>
          <p className="text-base sm:text-lg md:text-2xl font-bold text-gray-900 mt-0.5 sm:mt-1">{value}</p>
          {trend && (
            <div className={`flex items-center mt-1 text-xs sm:text-sm ${
              trend.isPositive ? 'text-green-600' : 'text-red-600'
            }`}>
              <span className="truncate">{trend.value}</span>
            </div>
          )}
        </div>
        {Icon && (
          <div className="flex-shrink-0 ml-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-blue-50 rounded-lg flex items-center justify-center">
              <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;