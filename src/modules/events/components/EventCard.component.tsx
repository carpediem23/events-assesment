import { ReactNode } from 'react';
import { IEventCardProps } from '../types/index.type';

export default function EventCard({ event }: IEventCardProps): ReactNode {
  return (
    <div className="w-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md mt-8">
      <div className="flex items-center mb-6">
        <div
          className="w-4 h-4 rounded-full mr-3"
          style={{ backgroundColor: event.color }}
        />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {event.title}
        </h1>
      </div>
      <div className="space-y-4">
        <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="block text-sm font-medium text-gray-500 dark:text-gray-400">
              Start Date
            </span>
            <span className="text-gray-900 dark:text-white">
              {new Date(event.startDate).toLocaleDateString()}
            </span>
          </div>
          <div>
            <span className="block text-sm font-medium text-gray-500 dark:text-gray-400">
              End Date
            </span>
            <span className="text-gray-900 dark:text-white">
              {new Date(event.endDate).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
