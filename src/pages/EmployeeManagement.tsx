import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter,
  Users,
  Calendar,
  Clock,
  DollarSign,
  Download,
  Eye,
  Edit,
  MoreHorizontal
} from 'lucide-react';
import StatsCard from '../components/StatsCard';

const EmployeeManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState('employees');

  const tabs = [
    { id: 'employees', label: 'Employees', icon: Users },
    { id: 'attendance', label: 'Attendance', icon: Clock },
    { id: 'payroll', label: 'Payroll', icon: DollarSign },
    { id: 'leave', label: 'Leave Management', icon: Calendar },
  ];

  const employees = [
    {
      id: 'EMP001',
      name: 'John Smith',
      email: 'john.smith@company.com',
      department: 'Engineering',
      position: 'Senior Developer',
      startDate: '2023-01-15',
      status: 'Active',
      salary: '$85,000'
    },
    {
      id: 'EMP002',
      name: 'Sarah Johnson',
      email: 'sarah.j@company.com',
      department: 'Marketing',
      position: 'Marketing Manager',
      startDate: '2022-08-20',
      status: 'Active',
      salary: '$75,000'
    },
    {
      id: 'EMP003',
      name: 'Mike Wilson',
      email: 'mike.w@company.com',
      department: 'Sales',
      position: 'Sales Representative',
      startDate: '2024-03-10',
      status: 'Active',
      salary: '$55,000'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Employee Management</h1>
          <p className="text-gray-600 mt-1">Manage your workforce, attendance, and payroll</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus size={16} className="mr-2" />
          Add Employee
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Employees"
          value="142"
          icon={Users}
          trend={{ value: "+3 this month", isPositive: true }}
        />
        <StatsCard
          title="Present Today"
          value="128"
          icon={Clock}
          trend={{ value: "90.1% attendance", isPositive: true }}
        />
        <StatsCard
          title="Monthly Payroll"
          value="$485,200"
          icon={DollarSign}
          trend={{ value: "+2.5% vs last month", isPositive: true }}
        />
        <StatsCard
          title="Pending Leave Requests"
          value="12"
          icon={Calendar}
          trend={{ value: "3 urgent", isPositive: false }}
        />
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-4 sm:space-x-6 lg:space-x-8 px-3 sm:px-4 md:px-6 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-1 sm:space-x-2 py-3 sm:py-4 border-b-2 font-medium text-xs sm:text-sm transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                  }`}
                >
                  <Icon size={14} className="sm:w-4 sm:h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-3 sm:p-4 md:p-6">
          {activeTab === 'employees' && (
            <div className="space-y-4 sm:space-y-6">
              {/* Search and Filters */}
              <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 items-stretch lg:items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} />
                  <input
                    type="text"
                    placeholder="Search employees..."
                    className="w-full pl-7 sm:pl-10 pr-3 sm:pr-4 py-1.5 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:flex-shrink-0">
                  <select className="px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>All Departments</option>
                    <option>Engineering</option>
                    <option>Marketing</option>
                    <option>Sales</option>
                    <option>HR</option>
                  </select>
                  <select className="px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Inactive</option>
                    <option>On Leave</option>
                  </select>
                </div>
              </div>

              {/* Employee Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Employee
                      </th>
                      <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Department
                      </th>
                      <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Position
                      </th>
                      <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Start Date
                      </th>
                      <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {employees.map((employee) => (
                      <tr key={employee.id} className="hover:bg-gray-50">
                        <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-blue-600 font-medium text-xs sm:text-sm">
                                {employee.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div className="ml-2 sm:ml-4 min-w-0">
                              <div className="text-xs sm:text-sm font-medium text-gray-900 truncate">{employee.name}</div>
                              <div className="text-xs sm:text-sm text-gray-500 truncate">{employee.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                          {employee.department}
                        </td>
                        <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                          {employee.position}
                        </td>
                        <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                          {employee.startDate}
                        </td>
                        <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                            {employee.status}
                          </span>
                        </td>
                        <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex items-center space-x-2">
                            <button className="text-blue-600 hover:text-blue-700 p-1 rounded">
                              <Eye size={12} className="sm:w-3.5 sm:h-3.5" />
                            </button>
                            <button className="text-gray-600 hover:text-gray-700 p-1 rounded">
                              <Edit size={12} className="sm:w-3.5 sm:h-3.5" />
                            </button>
                            <button className="text-gray-600 hover:text-gray-700 p-1 rounded">
                              <MoreHorizontal size={12} className="sm:w-3.5 sm:h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'attendance' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Attendance Tracking</h3>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                  <button className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Download size={14} className="inline mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">Export</span>
                  </button>
                  <input
                    type="date"
                    className="px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                <p className="text-center text-gray-600">Attendance tracking interface would be implemented here</p>
                <p className="text-center text-xs sm:text-sm text-gray-500 mt-2">Features: Clock in/out, timesheet management, attendance reports</p>
              </div>
            </div>
          )}

          {activeTab === 'payroll' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Payroll Management</h3>
                <button className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-green-600 text-white rounded-lg hover:bg-green-700">
                  Run Payroll
                </button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                <div className="bg-white p-3 sm:p-4 md:p-6 border border-gray-200 rounded-lg">
                  <h4 className="text-sm sm:text-base font-medium text-gray-900 mb-2">Current Period</h4>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600">Jan 2025</p>
                  <p className="text-xs sm:text-sm text-gray-600">Bi-weekly payroll</p>
                </div>
                <div className="bg-white p-3 sm:p-4 md:p-6 border border-gray-200 rounded-lg">
                  <h4 className="text-sm sm:text-base font-medium text-gray-900 mb-2">Total Gross</h4>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-green-600">$485,200</p>
                  <p className="text-xs sm:text-sm text-gray-600">Before deductions</p>
                </div>
                <div className="bg-white p-3 sm:p-4 md:p-6 border border-gray-200 rounded-lg sm:col-span-2 md:col-span-1">
                  <h4 className="text-sm sm:text-base font-medium text-gray-900 mb-2">Net Payroll</h4>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">$362,400</p>
                  <p className="text-xs sm:text-sm text-gray-600">After deductions</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                <p className="text-center text-gray-600">Payroll processing interface would be implemented here</p>
                <p className="text-center text-xs sm:text-sm text-gray-500 mt-2">Features: Salary calculation, tax deductions, pay slip generation</p>
              </div>
            </div>
          )}

          {activeTab === 'leave' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Leave Management</h3>
                <div className="flex space-x-2 sm:space-x-3">
                  <select className="px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-lg">
                    <option>All Requests</option>
                    <option>Pending</option>
                    <option>Approved</option>
                    <option>Rejected</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                <div className="bg-white p-3 sm:p-4 border border-gray-200 rounded-lg">
                  <h4 className="text-xs sm:text-sm font-medium text-gray-900 mb-1">Pending Requests</h4>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-600">12</p>
                </div>
                <div className="bg-white p-3 sm:p-4 border border-gray-200 rounded-lg">
                  <h4 className="text-xs sm:text-sm font-medium text-gray-900 mb-1">Approved This Month</h4>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-green-600">28</p>
                </div>
                <div className="bg-white p-3 sm:p-4 border border-gray-200 rounded-lg">
                  <h4 className="text-xs sm:text-sm font-medium text-gray-900 mb-1">Total Days Used</h4>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600">156</p>
                </div>
                <div className="bg-white p-3 sm:p-4 border border-gray-200 rounded-lg">
                  <h4 className="text-xs sm:text-sm font-medium text-gray-900 mb-1">Available Days</h4>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">284</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                <p className="text-center text-gray-600">Leave management interface would be implemented here</p>
                <p className="text-center text-xs sm:text-sm text-gray-500 mt-2">Features: Leave requests, approvals, balance tracking, calendar view</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeManagement;