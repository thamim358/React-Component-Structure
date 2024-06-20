import React from 'react';

const DashBoard = () => {
  return (
    <div className="px-4 py-6 md:px-10 md:py-8">
      {/* Section 1 */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Recent Activities</h2>
        <ul className="divide-y divide-gray-200">
          <li className="py-2">Activity 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li className="py-2">Activity 2 - Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
          <li className="py-2">Activity 3 - Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</li>
        </ul>
      </div>

      {/* Section 2 */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Users</h3>
            <p className="text-xl font-bold">1200</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Revenue</h3>
            <p className="text-xl font-bold">$50,000</p>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Tasks</h2>
        <ul className="divide-y divide-gray-200">
          <li className="py-2 flex items-center">
            <span className="bg-green-500 text-white px-2 py-1 rounded-md mr-2">Completed</span>
            Task 1 - Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>
          <li className="py-2 flex items-center">
            <span className="bg-yellow-500 text-white px-2 py-1 rounded-md mr-2">In Progress</span>
            Task 2 - Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </li>
          <li className="py-2 flex items-center">
            <span className="bg-red-500 text-white px-2 py-1 rounded-md mr-2">Pending</span>
            Task 3 - Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;