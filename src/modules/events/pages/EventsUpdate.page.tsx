import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import EventUpdateForm from '../components/EventUpdateForm.component';
import useEventsStore from '../api/Events.store';
import Loader from '@/components/common/Loader.component';

export default function EventsUpdatePage() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const { fetchEventById, loading, currentEvent } = useEventsStore();

  useEffect(() => {
    if (id) {
      fetchEventById(id);
    }
  }, [id, fetchEventById]);

  if (loading || !currentEvent) {
    return <Loader />;
  }

  return (
    <section
      id="events-update-page"
      className="flex-1 flex flex-col items-center justify-center animate-fade-in"
    >
      <div className="container mx-auto px-4">
        <h1 className="mb-8 text-4xl font-bold text-gray-800 dark:text-white text-center">
          {t('pages.update')}
        </h1>
        <EventUpdateForm event={currentEvent} />
      </div>
    </section>
  );
}
