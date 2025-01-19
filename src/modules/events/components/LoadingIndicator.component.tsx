import { ReactNode } from 'react';

export default function LoadingIndicator(): ReactNode {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-12 w-12 rounded-full border-4 border-gray-200 border-t-blue-600 animate-spin"></div>
    </div>
  );
}
