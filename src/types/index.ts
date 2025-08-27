export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive';
  avatar?: string;
}

export interface Company {
  id: string;
  name: string;
  businessType: string;
  taxId: string;
  industry: string;
  address: string;
  city: string;
  zipCode: string;
  phone: string;
  email: string;
  website: string;
}

export interface Invoice {
  id: string;
  customer: string;
  email: string;
  date: string;
  dueDate: string;
  amount: string;
  status: 'Draft' | 'Sent' | 'Paid' | 'Overdue';
}

export interface Employee {
  id: string;
  name: string;
  email: string;
  department: string;
  position: string;
  startDate: string;
  status: 'Active' | 'Inactive' | 'On Leave';
  salary: string;
  avatar?: string;
}

export interface StatsCardData {
  title: string;
  value: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  className?: string;
}

export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  render?: (value: any, row: any) => React.ReactNode;
}

export interface FilterOption {
  label: string;
  value: string;
}

export interface TabItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number }>;
}