import React, { useState } from 'react';
import { Plus, Search, Filter, Download, Columns, AlertTriangle } from 'lucide-react';
import { Invoice, StatsCardData, TableColumn } from '../types';
import PageHeader from '../components/layout/PageHeader';
import StatsGrid from '../components/layout/StatsGrid';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import Button from '../components/ui/Button';
import DataTable from '../components/tables/DataTable';
import { formatCurrency, formatDate } from '../utils/formatters';

const InvoiceManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [customerFilter, setCustomerFilter] = useState('All Customers');
  const [dateRangeFilter, setDateRangeFilter] = useState('Last 30 days');

  const invoices: Invoice[] = [
    {
      id: 'INV-2025-001',
      customer: 'ABC Corporation',
      email: 'john@abccorp.com',
      date: 'Jan 15, 2025',
      dueDate: 'Feb 14, 2025',
      amount: '$5,420.00',
      status: 'Sent'
    },
    {
      id: 'INV-2025-002',
      customer: 'XYZ Limited',
      email: 'billing@xyzltd.com',
      date: 'Jan 16, 2025',
      dueDate: 'Feb 15, 2025',
      amount: '$2,850.00',
      status: 'Paid'
    },
    {
      id: 'INV-2025-003',
      customer: 'Tech Solutions Inc',
      email: 'accounts@techsol.com',
      date: 'Jan 10, 2025',
      dueDate: 'Jan 25, 2025',
      amount: '$8,750.00',
      status: 'Overdue'
    },
    {
      id: 'INV-2025-004',
      customer: 'Global Enterprises',
      email: 'finance@global.com',
      date: 'Jan 18, 2025',
      dueDate: 'Feb 17, 2025',
      amount: '$3,200.00',
      status: 'Draft'
    },
    {
      id: 'INV-2025-005',
      customer: 'Retail Partners LLC',
      email: 'orders@retail.com',
      date: 'Jan 20, 2025',
      dueDate: 'Feb 19, 2025',
      amount: '$1,890.00',
      status: 'Sent'
    }
  ];

  const statsData: StatsCardData[] = [
    {
      title: 'Total Invoices',
      value: '1,247',
      icon: undefined,
      trend: { value: '+12 this month', isPositive: true }
    },
    {
      title: 'Outstanding',
      value: '$45,230',
      icon: undefined,
      trend: { value: '+5.2% vs last month', isPositive: true }
    },
    {
      title: 'Overdue',
      value: '$12,450',
      icon: AlertTriangle,
      trend: { value: '3 invoices', isPositive: false }
    },
    {
      title: 'Paid This Month',
      value: '$89,340',
      icon: undefined,
      trend: { value: '+8.1% vs last month', isPositive: true }
    }
  ];

  const columns: TableColumn[] = [
    {
      key: 'id',
      label: 'Invoice #',
      sortable: true,
      render: (value) => (
        <div className="text-sm font-medium text-blue-600 hover:text-blue-700 cursor-pointer">
          {value}
        </div>
      )
    },
    {
      key: 'customer',
      label: 'Customer',
      sortable: true,
      render: (value, row) => (
        <div>
          <div className="text-sm font-medium text-gray-900">{value}</div>
          <div className="text-sm text-gray-500">{row.email}</div>
        </div>
      )
    },
    {
      key: 'date',
      label: 'Date',
      sortable: true,
      render: (value) => <div className="text-sm text-gray-900">{formatDate(value)}</div>
    },
    {
      key: 'dueDate',
      label: 'Due Date',
      sortable: true,
      render: (value) => <div className="text-sm text-gray-900">{formatDate(value)}</div>
    },
    {
      key: 'amount',
      label: 'Amount',
      sortable: true,
      render: (value) => <div className="text-sm font-medium text-gray-900">{formatCurrency(value)}</div>
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true
    }
  ];

  const statusOptions = [
    { label: 'All Status', value: '' },
    { label: 'Draft', value: 'draft' },
    { label: 'Sent', value: 'sent' },
    { label: 'Paid', value: 'paid' },
    { label: 'Overdue', value: 'overdue' }
  ];

  const customerOptions = [
    { label: 'All Customers', value: '' },
    { label: 'ABC Corporation', value: 'abc' },
    { label: 'XYZ Limited', value: 'xyz' },
    { label: 'Tech Solutions Inc', value: 'tech' }
  ];

  const dateRangeOptions = [
    { label: 'Last 30 days', value: '30' },
    { label: 'Last 60 days', value: '60' },
    { label: 'Last 90 days', value: '90' },
    { label: 'This Year', value: 'year' }
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      <PageHeader
        title="Invoice Management"
        description="Manage all your invoices and billing"
        actions={[
          {
            label: 'New Invoice',
            onClick: () => console.log('New invoice'),
            variant: 'primary',
            icon: Plus
          }
        ]}
      />

      <StatsGrid stats={statsData} />

      <Card>
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 items-stretch lg:items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Input
              type="text"
              placeholder="Invoice number, customer name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              icon={Search}
              fullWidth
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:flex-shrink-0">
            <Select
              options={statusOptions}
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            />

            <Select
              options={customerOptions}
              value={customerFilter}
              onChange={(e) => setCustomerFilter(e.target.value)}
            />

            <Select
              options={dateRangeOptions}
              value={dateRangeFilter}
              onChange={(e) => setDateRangeFilter(e.target.value)}
            />

            <Button variant="outline" icon={Filter}>
              <span className="hidden sm:inline">Apply Filters</span>
              <span className="sm:hidden">Filter</span>
            </Button>
          </div>
        </div>
      </Card>

      <Card padding="none">
        <div className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">Invoices</h3>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Button variant="outline" size="sm" icon={Download}>
                <span className="hidden sm:inline">Export</span>
              </Button>
              <Button variant="outline" size="sm" icon={Columns}>
                <span className="hidden sm:inline">Columns</span>
              </Button>
            </div>
          </div>
        </div>

        <DataTable
          columns={columns}
          data={invoices}
          selectable
          onView={(invoice) => console.log('View invoice:', invoice)}
          onEdit={(invoice) => console.log('Edit invoice:', invoice)}
        />

        <div className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs sm:text-sm text-gray-700">
              Showing 1 to 5 of 1,247 results
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <button className="px-2 sm:px-3 py-1 text-xs sm:text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50">
                Previous
              </button>
              <button className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-blue-600 text-white rounded">
                1
              </button>
              <button className="px-2 sm:px-3 py-1 text-xs sm:text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50">
                2
              </button>
              <button className="px-2 sm:px-3 py-1 text-xs sm:text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50">
                3
              </button>
              <button className="px-2 sm:px-3 py-1 text-xs sm:text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default InvoiceManagement;