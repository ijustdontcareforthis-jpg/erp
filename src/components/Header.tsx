import React from 'react';
import { Bell, User, Search, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-3 sm:px-4 md:px-6 py-3 sm:py-4">
      <div className="flex items-center justify-between">
        {/* Mobile menu button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-1.5 sm:p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
        >
          <Menu size={18} className="sm:w-5 sm:h-5" />
        </button>
        
        {/* Top Navigation Tabs */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <nav className="flex space-x-3 md:space-x-4 lg:space-x-6">
            <a href="#" className="text-blue-600 border-b-2 border-blue-600 pb-2 text-xs md:text-sm font-medium whitespace-nowrap">
              Dashboard
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 pb-2 text-xs md:text-sm font-medium whitespace-nowrap">
              Sales
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 pb-2 text-xs md:text-sm font-medium whitespace-nowrap">
              Inventory
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 pb-2 text-xs md:text-sm font-medium whitespace-nowrap">
              Finance
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 pb-2 text-xs md:text-sm font-medium whitespace-nowrap">
              HR
            </a>
          </nav>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3">
          {/* Search */}
          <div className="relative hidden sm:block">
            <Search className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} />
            <input
              type="text"
              placeholder="Search..."
              className="w-24 sm:w-32 md:w-48 lg:w-64 pl-7 sm:pl-9 pr-2 sm:pr-3 py-1.5 sm:py-2 border border-gray-300 rounded-md sm:rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
            />
          </div>

          {/* Notifications */}
          <button className="relative p-1.5 sm:p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md sm:rounded-lg">
            <Bell size={16} className="sm:w-5 sm:h-5" />
            <span className="absolute top-0.5 sm:top-1 right-0.5 sm:right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Profile */}
          <button className="flex items-center space-x-1 sm:space-x-2 p-1.5 sm:p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md sm:rounded-lg">
            <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <User size={12} className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
            </div>
            <span className="hidden md:inline text-xs sm:text-sm font-medium">John Doe</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;