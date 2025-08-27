import {
  LayoutDashboard,
  Building2,
  Users,
  Truck,
  Package,
  ShoppingCart,
  Calculator,
  FileText,
  Receipt,
  BarChart3
} from 'lucide-react';

export const NAVIGATION_ITEMS = [
  {
    section: 'Main',
    items: [
      { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard }
    ]
  },
  {
    section: 'Operations',
    items: [
      { name: 'Company Setup', path: '/company-setup', icon: Building2 },
      { name: 'Employees', path: '/employees', icon: Users },
      { name: 'Suppliers', path: '/suppliers', icon: Truck },
      { name: 'Inventory', path: '/inventory', icon: Package },
      { name: 'Sales', path: '/sales', icon: ShoppingCart }
    ]
  },
  {
    section: 'Finance',
    items: [
      { name: 'Accounting', path: '/accounting', icon: Calculator },
      { name: 'Invoices', path: '/invoices', icon: FileText },
      { name: 'Taxes', path: '/taxes', icon: Receipt },
      { name: 'Reports', path: '/reports', icon: BarChart3 }
    ]
  }
];