import React from "react";

const Skeleton: React.FC = () => {
  return (
    <div className="animate-pulse flex flex-col space-y-4 h-full w-full bg-neutral-900 p-6">
      {/* Header Skeleton */}
      <div className="flex items-center gap-x-5">
        <div className="bg-gray-700 h-20 w-20 rounded-lg"></div>
        <div className="flex flex-col space-y-2">
          <div className="bg-gray-700 h-4 w-24 rounded"></div>
          <div className="bg-gray-700 h-8 w-48 rounded"></div>
        </div>
      </div>

      {/* Song List Skeleton */}
      <div className="flex flex-col space-y-4 mt-10">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="flex items-center gap-x-4">
            <div className="bg-gray-700 h-12 w-12 rounded-lg"></div>
            <div className="flex-1 space-y-2">
              <div className="bg-gray-700 h-4 w-1/2 rounded"></div>
              <div className="bg-gray-700 h-4 w-1/3 rounded"></div>
            </div>
            <div className="bg-gray-700 h-6 w-6 rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skeleton;
