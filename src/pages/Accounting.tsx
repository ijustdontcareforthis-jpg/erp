import React from 'react';

const Accounting: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Accounting & Finance</h1>
          <p className="text-gray-600 mt-1">Manage accounts, journal entries, and financial reporting</p>
        </div>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <div className="text-center text-gray-600">
          <h3 className="text-lg font-medium mb-2">Accounting & Finance Module</h3>
          <p className="mb-4">Complete accounting and financial management system coming soon</p>
          <div className="text-sm text-gray-500 space-y-1">
            <p>• Chart of accounts management</p>
            <p>• Journal entries and bookkeeping</p>
            <p>• Accounts payable and receivable</p>
            <p>• Financial statements and reports</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounting;