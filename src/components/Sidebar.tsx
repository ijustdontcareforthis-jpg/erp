import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { NAVIGATION_ITEMS } from '../constants/navigation';

interface SidebarProps {
  collapsed: boolean;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, isOpen, onToggle, onClose }) => {
  const location = useLocation();

  const handleLinkClick = () => {
    // Close mobile sidebar when a link is clicked
    onClose();
  };

  return (
    <div className={`fixed left-0 top-0 h-full bg-slate-900 text-white transition-all duration-300 z-40 ${
      // Desktop behavior
      collapsed ? 'lg:w-16' : 'lg:w-64'
    } ${
      // Mobile behavior
      isOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-full lg:translate-x-0'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-700">
        {(!collapsed || isOpen) && (
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              ERP
            </div>
            <span className="ml-2 text-lg font-semibold">System</span>
          </div>
        )}
        <div className="flex items-center space-x-2">
          {/* Close button for mobile */}
          <button
            onClick={onClose}
            className="lg:hidden p-1 rounded-md hover:bg-slate-700 transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          {/* Toggle button for desktop */}
          <button
            onClick={onToggle}
            className="hidden lg:block p-1 rounded-md hover:bg-slate-700 transition-colors"
          >
            {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-6">
        {NAVIGATION_ITEMS.map((section) => (
          <div key={section.section}>
            <div className="px-3 mt-6 first:mt-0">
              {(!collapsed || isOpen) && (
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-3">
                  {section.section}
                </p>
              )}
            </div>
            
            <ul className="space-y-1 px-3">
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={handleLinkClick}
                      className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                      }`}
                      title={(collapsed && !isOpen) ? item.name : undefined}
                    >
                      <Icon size={18} />
                      {(!collapsed || isOpen) && <span className="ml-3 text-sm">{item.name}</span>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;