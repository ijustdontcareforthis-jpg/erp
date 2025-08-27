import React from 'react';
import { Bell, User, Search, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Mobile menu button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
        >
          <Menu size={20} />
        </button>
        
        {/* Top Navigation Tabs */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-4 lg:space-x-6">
            <a href="#" className="text-blue-600 border-b-2 border-blue-600 pb-2 text-xs sm:text-sm font-medium">
              Dashboard
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 pb-2 text-xs sm:text-sm font-medium">
              Sales
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 pb-2 text-xs sm:text-sm font-medium">
              Inventory
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 pb-2 text-xs sm:text-sm font-medium">
              Finance
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 pb-2 text-xs sm:text-sm font-medium">
              HR
            </a>
          </nav>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Search */}
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search..."
              className="w-32 sm:w-48 lg:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>

          {/* Notifications */}
          <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
            <Bell size={18} className="sm:w-5 sm:h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Profile */}
          <button className="flex items-center space-x-2 p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <User size={14} className="sm:w-4 sm:h-4" />
            </div>
            <span className="hidden lg:inline text-sm font-medium">John Doe</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;