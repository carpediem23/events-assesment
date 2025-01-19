import { ReactNode } from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import EventList from '../components/EventsList.component';
import Button from '@/components/common/Button.component';

export default function EventsPage(): ReactNode {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const onCreateButtonClicked = () => navigate('/events/create');

  return (
    <section
      id="events-page"
      className="flex-1 flex flex-col items-center justify-center animate-fade-in"
    >
      <div className="container mx-auto px-4">
        <h1 className="mb-8 text-4xl font-bold text-gray-800 dark:text-white text-center">
          {t('pages.events')}
        </h1>
        <EventList />
        <Button
          className="mt-4"
          variant="primary"
          onClick={onCreateButtonClicked}
        >
          {t('buttons.add')}
        </Button>
      </div>
    </section>
  );
}
