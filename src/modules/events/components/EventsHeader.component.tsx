import { useAppState } from '@/App.context';

export default function EventsHeader() {
  const { state, toggleDarkMode } = useAppState();

  return (
    <header className="flex flex-row justify-end p-4">
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
      >
        {state.isDarkMode ? '🌞' : '🌙'}
      </button>
    </header>
  );
}
