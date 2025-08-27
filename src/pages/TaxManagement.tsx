import React from 'react';

const TaxManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tax Management</h1>
          <p className="text-gray-600 mt-1">Configure taxes, manage compliance, and generate reports</p>
        </div>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <div className="text-center text-gray-600">
          <h3 className="text-lg font-medium mb-2">Tax Management Module</h3>
          <p className="mb-4">Complete tax configuration and compliance system coming soon</p>
          <div className="text-sm text-gray-500 space-y-1">
            <p>• VAT/GST configuration and setup</p>
            <p>• Tax calculation and reporting</p>
            <p>• Compliance management</p>
            <p>• Tax return preparation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxManagement;