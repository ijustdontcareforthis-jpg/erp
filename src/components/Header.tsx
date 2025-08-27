import React from 'react';
import { Bell, User, Search, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Top Navigation Tabs */}
        <div className="flex items-center space-x-8">
          <nav className="flex space-x-6">
            <a href="#" className="text-blue-600 border-b-2 border-blue-600 pb-2 text-sm font-medium">
              Dashboard
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 pb-2 text-sm font-medium">
              Sales
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 pb-2 text-sm font-medium">
              Inventory
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 pb-2 text-sm font-medium">
              Finance
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 pb-2 text-sm font-medium">
              HR
            </a>
          </nav>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Notifications */}
          <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Profile */}
          <button className="flex items-center space-x-2 p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <User size={16} />
            </div>
            <span className="hidden md:inline text-sm font-medium">John Doe</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;