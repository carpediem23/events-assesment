import { useTranslation } from 'react-i18next';

export default function NoDataIndicator() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center p-8 text-gray-500">
      <h3 className="text-lg font-medium mb-2">
        {t('components.noDataIndicatorTitle')}
      </h3>
      <p className="text-sm">{t('components.noDataIndicatorDescription')}</p>
    </div>
  );
}
