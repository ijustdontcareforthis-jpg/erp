import React from 'react';

const SalesManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Sales Management</h1>
          <p className="text-gray-600 mt-1">Manage customers, orders, quotes, and sales processes</p>
        </div>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <div className="text-center text-gray-600">
          <h3 className="text-lg font-medium mb-2">Sales Management Module</h3>
          <p className="mb-4">Complete sales and customer management system coming soon</p>
          <div className="text-sm text-gray-500 space-y-1">
            <p>• Customer master data management</p>
            <p>• Sales quotes and order processing</p>
            <p>• POS interface for retail operations</p>
            <p>• Sales analytics and reporting</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesManagement;