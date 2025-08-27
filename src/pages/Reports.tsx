import React from 'react';

const Reports: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600 mt-1">Generate insights with comprehensive business reports</p>
        </div>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <div className="text-center text-gray-600">
          <h3 className="text-lg font-medium mb-2">Reports & Analytics Module</h3>
          <p className="mb-4">Advanced reporting and business intelligence coming soon</p>
          <div className="text-sm text-gray-500 space-y-1">
            <p>• Financial reports and statements</p>
            <p>• Sales and inventory analytics</p>
            <p>• Custom report builder</p>
            <p>• Dashboard with KPIs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;