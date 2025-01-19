import { ReactNode, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Alert from '@/components/common/Alert.component';
import useEventsStore from '../api/Events.store';
import EventListRow from './EventListRow.component';
import EventListHeaderRow from './EventListHeaderRow.component';
import NoDataIndicator from './NoDataIndicator.component';
import ErrorIndicator from './ErrorIndicator.component';
import LoadingIndicator from './LoadingIndicator.component';

export default function EventsList(): ReactNode {
  const { t } = useTranslation();
  const { fetchEvents, events, error, loading, deleteEvent } = useEventsStore();
  const [eventToDelete, setEventToDelete] = useState<string | null>(null);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const handleDelete = async () => {
    if (eventToDelete) {
      try {
        await deleteEvent(eventToDelete);
      } catch (error) {
        console.error('Failed to delete event:', error);
      }
      setEventToDelete(null);
    }
  };

  return (
    <div id="events-list" className="overflow-x-auto h-[50vh]">
      <table className="min-w-full bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-700 rounded-lg overflow-hidden animate-fade-in">
        <thead className="bg-gray-100 dark:bg-gray-700 sticky top-0">
          <EventListHeaderRow />
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700 overflow-y-auto">
          {events.map((event) => (
            <EventListRow
              key={event.id}
              event={event}
              onDeleteClick={() => setEventToDelete(event.id)}
            />
          ))}
        </tbody>
      </table>
      {loading && <LoadingIndicator />}
      {events.length === 0 && !error && <NoDataIndicator />}
      {error && <ErrorIndicator message={error} />}
      <Alert
        isOpen={!!eventToDelete}
        title={t('alerts.deleteEvent.title')}
        message={t('alerts.deleteEvent.message')}
        variant="error"
        onConfirm={handleDelete}
        onCancel={() => setEventToDelete(null)}
      />
    </div>
  );
}
