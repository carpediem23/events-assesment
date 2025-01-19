import { ReactNode } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import HomePage from './modules/home/pages/index.page';
import EventsModule from './modules/events/index.module';

export default function AppRouter(): ReactNode {
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="events/*" element={<EventsModule />} />
        <Route path="*" element={<p>404 not found</p>} />
      </Routes>
    </Router>
  );
}
