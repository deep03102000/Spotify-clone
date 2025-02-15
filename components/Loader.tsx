import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-900 text-white">
      <div
        className="w-12 h-12 border-4 border-t-transparent border-gray-300 rounded-full animate-spin"
        style={{
          borderTopColor: '#007bff', // Optional custom color
        }}
      ></div>
      <p className="mt-4 text-lg font-semibold">Loading...</p>
    </div>
  );
};

export default Loader;
