import { useTranslation } from 'react-i18next';
import EventCreateForm from '../components/EventCreateForm.component';

export default function EventsCreatePage() {
  const { t } = useTranslation();

  return (
    <section
      id="events-create-page"
      className="flex-1 flex flex-col items-center justify-center animate-fade-in"
    >
      <div className="container mx-auto px-4">
        <h1 className="mb-8 text-4xl font-bold text-gray-800 dark:text-white text-center">
          {t('pages.create')}
        </h1>
        <EventCreateForm />
      </div>
    </section>
  );
}
