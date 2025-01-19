import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { TEventListRowProps } from '../types/index.type';
import { useNavigate } from 'react-router';

export default function EventListRow({
  event,
  onDeleteClick,
}: TEventListRowProps): ReactNode {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const onDelete = () => onDeleteClick();
  const onEdit = () => navigate(`/events/edit/${event.id}`);
  const onShow = () => navigate(`/events/${event.id}`);

  return (
    <tr key={event.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div
            className="w-3 h-3 rounded-full mr-2"
            style={{ backgroundColor: event.color }}
          />
          <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
            {event.title}
          </span>
        </div>
      </td>
      <td className="px-6 py-4">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {event.description}
        </span>
      </td>
      <td className="px-6 py-4">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {new Date(event.startDate).toLocaleDateString()}
        </span>
      </td>
      <td className="px-6 py-4">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {new Date(event.endDate).toLocaleDateString()}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <button
          onClick={onShow}
          className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 mr-4"
        >
          {t('table.actions.show')}
        </button>
        <button
          onClick={onEdit}
          className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300 mr-4"
        >
          {t('table.actions.edit')}
        </button>
        <button
          onClick={onDelete}
          className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
        >
          {t('table.actions.delete')}
        </button>
      </td>
    </tr>
  );
}
