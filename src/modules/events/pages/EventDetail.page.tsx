import { ReactNode, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import Button from '@/components/common/Button.component';
import { TEventDetailParams } from '../types/index.type';
import useEventsStore from '../api/Events.store';
import LoadingIndicator from '../components/LoadingIndicator.component';
import ErrorIndicator from '../components/ErrorIndicator.component';
import NoDataIndicator from '../components/NoDataIndicator.component';
import EventCard from '../components/EventCard.component';

export default function EventDetail(): ReactNode {
  const { t } = useTranslation();
  const { id } = useParams<TEventDetailParams>();
  const { fetchEventById, currentEvent, loading, error } = useEventsStore();
  const navigate = useNavigate();
  const onBackButton = () => navigate(-1);

  useEffect(() => {
    if (id) {
      fetchEventById(id);
    }
  }, [id, fetchEventById]);

  return (
    <section
      id="event-detail-page"
      className="w-full md:w-1/2 mx-auto flex-1 flex flex-col items-center justify-center animate-fade-in p-4"
    >
      {currentEvent && <EventCard event={currentEvent} />}
      {loading && <LoadingIndicator />}
      {!currentEvent && <NoDataIndicator />}
      {error && <ErrorIndicator message={error} />}
      <Button className="mt-4" variant="secondary" onClick={onBackButton}>
        {t('buttons.back')}
      </Button>
    </section>
  );
}
