import React from 'react';

const SupplierManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Supplier Management</h1>
          <p className="text-gray-600 mt-1">Manage suppliers, purchase orders, and procurement</p>
        </div>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <div className="text-center text-gray-600">
          <h3 className="text-lg font-medium mb-2">Supplier Management Module</h3>
          <p className="mb-4">Complete supplier and purchasing workflow coming soon</p>
          <div className="text-sm text-gray-500 space-y-1">
            <p>• Supplier master data management</p>
            <p>• Purchase order creation and tracking</p>
            <p>• Goods receipt notes (GRN)</p>
            <p>• Supplier performance analytics</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierManagement;