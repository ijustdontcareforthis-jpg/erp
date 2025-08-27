import React from 'react';
import { StatsCardData } from '../../types';
import StatsCard from '../StatsCard';

interface StatsGridProps {
  stats: StatsCardData[];
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}

const StatsGrid: React.FC<StatsGridProps> = ({
  stats,
  columns = 4,
  className = ''
}) => {
  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <div className={`grid ${gridClasses[columns]} gap-6 ${className}`}>
      {stats.map((stat, index) => (
        <StatsCard
          key={index}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          trend={stat.trend}
          className={stat.className}
        />
      ))}
    </div>
  );
};

export default StatsGrid;