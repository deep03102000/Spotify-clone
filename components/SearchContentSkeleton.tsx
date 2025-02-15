import React from "react";

const SearchContentSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-4 w-full px-6">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="flex items-start gap-x-4 w-full animate-pulse"
        >
          <div className="h-16 w-16 bg-gray-700 rounded-md"></div>
          <div className="flex-1">
            <div className="h-6 bg-gray-700 rounded-md w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-600 rounded-md w-1/2"></div>
          </div>
          <div className="h-6 w-6 bg-gray-700 rounded-full"></div>
        </div>
      ))}
    </div>
  );
};

export default SearchContentSkeleton;
