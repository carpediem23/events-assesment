import { useTranslation } from 'react-i18next';

export default function Welcome() {
  const { t } = useTranslation();
  return (
    <div
      id="welcome"
      className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="animate-bounce">
          <img src="/icon.svg" alt="Loading" className="w-32 h-32" />
        </div>
        <div className="text-gray-700 font-medium">{t('welcome')}</div>
      </div>
    </div>
  );
}
