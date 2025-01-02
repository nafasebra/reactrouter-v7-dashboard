import React from 'react';

export default function Setting() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Settings</h1>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Setting Item 1</span>
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Setting Item 2</span>
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Setting Item 3</span>
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
          </div>
        </div>
      </div>
    </div>
  );
};
