import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-bounce">
          <img src="/icon.svg" alt="Loading" className="w-16 h-16" />
        </div>
        <div className="text-gray-700 dark:text-gray-300 font-medium">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default Loader;
