import React, { useState } from 'react';
import { ChevronUp, ChevronDown, Eye, Edit, MoreHorizontal } from 'lucide-react';
import { TableColumn } from '../../types';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

interface DataTableProps {
  columns: TableColumn[];
  data: any[];
  onView?: (item: any) => void;
  onEdit?: (item: any) => void;
  onDelete?: (item: any) => void;
  showActions?: boolean;
  selectable?: boolean;
  className?: string;
}

const DataTable: React.FC<DataTableProps> = ({
  columns,
  data,
  onView,
  onEdit,
  onDelete,
  showActions = true,
  selectable = false,
  className = ''
}) => {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

  const handleSort = (columnKey: string) => {
    if (sortColumn === columnKey) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(columnKey);
      setSortDirection('asc');
    }
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedItems(new Set(data.map(item => item.id)));
    } else {
      setSelectedItems(new Set());
    }
  };

  const handleSelectItem = (itemId: string, checked: boolean) => {
    const newSelected = new Set(selectedItems);
    if (checked) {
      newSelected.add(itemId);
    } else {
      newSelected.delete(itemId);
    }
    setSelectedItems(newSelected);
  };

  const sortedData = React.useMemo(() => {
    if (!sortColumn) return data;
    
    return [...data].sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];
      
      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sortColumn, sortDirection]);

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {selectable && (
              <th className="px-6 py-3 text-left">
                <input
                  type="checkbox"
                  className="rounded border-gray-300"
                  checked={selectedItems.size === data.length && data.length > 0}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                />
              </th>
            )}
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column.sortable ? (
                  <button
                    className="flex items-center space-x-1 hover:text-gray-700"
                    onClick={() => handleSort(column.key)}
                  >
                    <span>{column.label}</span>
                    {sortColumn === column.key ? (
                      sortDirection === 'asc' ? (
                        <ChevronUp size={14} />
                      ) : (
                        <ChevronDown size={14} />
                      )
                    ) : (
                      <div className="w-3.5 h-3.5" />
                    )}
                  </button>
                ) : (
                  column.label
                )}
              </th>
            ))}
            {showActions && (
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {sortedData.map((item, index) => (
            <tr key={item.id || index} className="hover:bg-gray-50">
              {selectable && (
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300"
                    checked={selectedItems.has(item.id)}
                    onChange={(e) => handleSelectItem(item.id, e.target.checked)}
                  />
                </td>
              )}
              {columns.map((column) => (
                <td key={column.key} className="px-6 py-4 whitespace-nowrap">
                  {column.render ? (
                    column.render(item[column.key], item)
                  ) : column.key === 'status' ? (
                    <Badge variant="status" status={item[column.key]}>
                      {item[column.key]}
                    </Badge>
                  ) : (
                    <div className="text-sm text-gray-900">{item[column.key]}</div>
                  )}
                </td>
              ))}
              {showActions && (
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex items-center space-x-2">
                    {onView && (
                      <Button
                        variant="ghost"
                        size="sm"
                        icon={Eye}
                        onClick={() => onView(item)}
                        className="p-1"
                      />
                    )}
                    {onEdit && (
                      <Button
                        variant="ghost"
                        size="sm"
                        icon={Edit}
                        onClick={() => onEdit(item)}
                        className="p-1"
                      />
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      icon={MoreHorizontal}
                      className="p-1"
                    />
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;