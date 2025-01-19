import { lazy, ReactNode, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import Loader from '@/components/common/Loader.component';
import EventsCreatePage from './pages/EventsCreate.page';
import EventsUpdatePage from './pages/EventsUpdate.page';
import EventDetail from './pages/EventDetail.page';
import EventsHeader from './components/EventsHeader.component';

const EventsPage = lazy(() => import('./pages/Events.page'));

export default function EventsModule(): ReactNode {
  return (
    <Suspense fallback={<Loader />}>
      <section
        id="events-module"
        className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-gray-300 dark:from-gray-900 dark:to-gray-800"
      >
        <EventsHeader />
        <Routes>
          <Route index element={<EventsPage />} />
          <Route path="create" element={<EventsCreatePage />} />
          <Route path=":id" element={<EventDetail />} />
          <Route path="edit/:id" element={<EventsUpdatePage />} />
        </Routes>
      </section>
    </Suspense>
  );
}
