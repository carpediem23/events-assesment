import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

export default function EventListHeaderRow(): ReactNode {
  const { t } = useTranslation();
  return (
    <tr>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
        {t('table.header.title')}
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
        {t('table.header.description')}
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
        {t('table.header.startDate')}
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
        {t('table.header.endDate')}
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
        {t('table.header.actions')}
      </th>
    </tr>
  );
}
