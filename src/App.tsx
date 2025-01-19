import { ReactNode } from 'react';
import { AppContextProvider } from './App.context';
import AppRouter from './App.router';

function App(): ReactNode {
  return (
    <main id="event-assesment-app">
      <AppContextProvider>
        <AppRouter />
      </AppContextProvider>
    </main>
  );
}

export default App;
