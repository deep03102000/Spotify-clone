import React from "react";

const PageContentSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-8">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="bg-gray-700 h-40 w-full rounded-lg flex-shrink-0"
        ></div>
      ))}
    </div>
  );
};

export default PageContentSkeleton;
