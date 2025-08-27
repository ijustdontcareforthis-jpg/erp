import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import InvoiceManagement from './pages/InvoiceManagement';
import CompanySetup from './pages/CompanySetup';
import EmployeeManagement from './pages/EmployeeManagement';
import SupplierManagement from './pages/SupplierManagement';
import InventoryManagement from './pages/InventoryManagement';
import SalesManagement from './pages/SalesManagement';
import Accounting from './pages/Accounting';
import TaxManagement from './pages/TaxManagement';
import Reports from './pages/Reports';
import CoffeeDemo from './pages/CoffeeDemo';
import './App.css';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="flex min-h-screen bg-gray-50">
          <Sidebar 
            collapsed={sidebarCollapsed} 
            isOpen={sidebarOpen}
            onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
            onClose={() => setSidebarOpen(false)}
          />
          <div className={`flex-1 flex flex-col transition-all duration-300 ${
            sidebarCollapsed ? 'lg:ml-16' : 'lg:ml-64'
          } ml-0`}>
            <Header onMenuClick={() => setSidebarOpen(true)} />
            <main className="flex-1 overflow-y-auto">
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/invoices" element={<InvoiceManagement />} />
                  <Route path="/company-setup" element={<CompanySetup />} />
                  <Route path="/employees" element={<EmployeeManagement />} />
                  <Route path="/suppliers" element={<SupplierManagement />} />
                  <Route path="/inventory" element={<InventoryManagement />} />
                  <Route path="/sales" element={<SalesManagement />} />
                  <Route path="/accounting" element={<Accounting />} />
                  <Route path="/taxes" element={<TaxManagement />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/coffee-demo" element={<CoffeeDemo />} />
                </Routes>
              </div>
            </main>
          </div>
          
          {/* Mobile overlay */}
          {sidebarOpen && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;