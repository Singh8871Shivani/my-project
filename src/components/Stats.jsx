import React from 'react';

const Stats = () => {
  return (
    <div className="bg-white -mt-5">
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-white border border-red-400 rounded-lg shadow-md">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-red-600">100k+</h2>
            <p className="text-gray-600 mt-2">Meals per Year</p>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold text-red-600">1.6k+</h2>
            <p className="text-gray-600 mt-2">Amazing Volunteers</p>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold text-red-600">10K+</h2>
            <p className="text-gray-600 mt-2">Monthly Donors</p>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold text-red-600">10,372 +</h2>
            <p className="text-gray-600 mt-2">People Served</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
