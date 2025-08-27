import React from 'react';
import StatsCard from '../components/StatsCard';
import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  Package,
  ShoppingCart,
  AlertTriangle,
  Calendar,
  Activity
} from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1">Welcome back! Here's what's happening with your business today.</p>
        </div>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
          <button className="px-3 sm:px-4 py-2 text-sm text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            Export
          </button>
          <button className="px-3 sm:px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            New Transaction
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <StatsCard
          title="Total Revenue"
          value="$124,530"
          icon={DollarSign}
          trend={{ value: "+12.5% from last month", isPositive: true }}
        />
        <StatsCard
          title="Active Customers"
          value="1,247"
          icon={Users}
          trend={{ value: "+5.2% from last month", isPositive: true }}
        />
        <StatsCard
          title="Total Orders"
          value="342"
          icon={ShoppingCart}
          trend={{ value: "+8.1% from last month", isPositive: true }}
        />
        <StatsCard
          title="Inventory Items"
          value="1,896"
          icon={Package}
          trend={{ value: "-2.3% from last month", isPositive: false }}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
        {/* Recent Activity */}
        <div className="xl:col-span-2 bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">Recent Activity</h3>
            <button className="text-blue-600 text-xs sm:text-sm hover:text-blue-700">View All</button>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {[
              { action: 'New order received', details: 'Order #1234 from ABC Corp', time: '2 mins ago', type: 'order' },
              { action: 'Invoice paid', details: 'INV-2025-001 - $5,420.00', time: '15 mins ago', type: 'payment' },
              { action: 'Stock updated', details: 'Laptop inventory increased by 50 units', time: '1 hour ago', type: 'inventory' },
              { action: 'New customer registered', details: 'Tech Solutions Inc', time: '2 hours ago', type: 'customer' },
              { action: 'Purchase order approved', details: 'PO-2025-005 - $12,500.00', time: '3 hours ago', type: 'purchase' }
            ].map((activity, index) => (
              <div key={index} className="flex items-start sm:items-center space-x-3 sm:space-x-4 p-2 sm:p-3 hover:bg-gray-50 rounded-lg">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  activity.type === 'order' ? 'bg-blue-100 text-blue-600' :
                  activity.type === 'payment' ? 'bg-green-100 text-green-600' :
                  activity.type === 'inventory' ? 'bg-orange-100 text-orange-600' :
                  activity.type === 'customer' ? 'bg-purple-100 text-purple-600' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {activity.type === 'order' && <ShoppingCart size={14} className="sm:w-4 sm:h-4" />}
                  {activity.type === 'payment' && <DollarSign size={14} className="sm:w-4 sm:h-4" />}
                  {activity.type === 'inventory' && <Package size={14} className="sm:w-4 sm:h-4" />}
                  {activity.type === 'customer' && <Users size={14} className="sm:w-4 sm:h-4" />}
                  {activity.type === 'purchase' && <TrendingUp size={14} className="sm:w-4 sm:h-4" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs sm:text-sm text-gray-600 truncate sm:whitespace-normal">{activity.details}</p>
                </div>
                <span className="text-xs text-gray-500 flex-shrink-0">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions & Alerts */}
        <div className="space-y-4 sm:space-y-6">
          {/* Quick Actions */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Quick Actions</h3>
            <div className="space-y-2 sm:space-y-3">
              <button className="w-full text-left p-2 sm:p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <ShoppingCart size={14} className="sm:w-4 sm:h-4 text-blue-600" />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-gray-900">Create New Order</span>
                </div>
              </button>
              <button className="w-full text-left p-2 sm:p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <DollarSign size={14} className="sm:w-4 sm:h-4 text-green-600" />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-gray-900">Generate Invoice</span>
                </div>
              </button>
              <button className="w-full text-left p-2 sm:p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Package size={14} className="sm:w-4 sm:h-4 text-orange-600" />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-gray-900">Add Inventory</span>
                </div>
              </button>
              <button className="w-full text-left p-2 sm:p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Users size={14} className="sm:w-4 sm:h-4 text-purple-600" />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-gray-900">Add Customer</span>
                </div>
              </button>
            </div>
          </div>

          {/* Alerts */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Alerts</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-red-50 rounded-lg border border-red-200">
                <AlertTriangle size={14} className="sm:w-4 sm:h-4 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs sm:text-sm font-medium text-red-900">Low Stock Alert</p>
                  <p className="text-xs text-red-700">5 items are running low</p>
                </div>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <Calendar size={14} className="sm:w-4 sm:h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs sm:text-sm font-medium text-yellow-900">Overdue Invoices</p>
                  <p className="text-xs text-yellow-700">3 invoices are overdue</p>
                </div>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-blue-50 rounded-lg border border-blue-200">
                <Activity size={14} className="sm:w-4 sm:h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs sm:text-sm font-medium text-blue-900">System Update</p>
                  <p className="text-xs text-blue-700">New features available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;