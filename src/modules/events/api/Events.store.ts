import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { IEventStore, IEventFormInputs, IEvent } from '../types/index.type';
import { eventsService } from '../services/Events.service';

const useEventsStore = create<IEventStore>()(
  devtools(
    (set, get) => ({
      events: [],
      loading: false,
      error: null,
      fetchEvents: async () => {
        if (get().loading) return;

        try {
          set({ loading: true, error: null });
          const data = await eventsService.getAllEvents();
          set({ events: data, loading: false });
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : 'An error occurred',
            loading: false,
          });
          throw error;
        }
      },
      postError: null,
      createEvent: async (eventData: IEventFormInputs): Promise<IEvent> => {
        if (get().loading) {
          throw new Error('Another operation is in progress');
        }

        try {
          set({ loading: true, postError: null });
          const newEvent = await eventsService.createEvent(eventData);
          if (!newEvent) {
            throw new Error('Failed to create event');
          }

          set((state) => ({
            events: [...state.events, newEvent],
            loading: false,
            postError: null,
          }));

          return newEvent;
        } catch (error) {
          const errorMessage =
            error instanceof Error ? error.message : 'Failed to create event';
          set({ postError: errorMessage, loading: false });
          throw new Error(errorMessage);
        }
      },
      currentEvent: null,
      fetchEventById: async (id: string) => {
        if (get().loading) return;

        try {
          set({ loading: true, error: null });
          const event = await eventsService.getEventById(id);
          set({ currentEvent: event, loading: false });
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : 'An error occurred',
            loading: false,
          });
          throw error;
        }
      },
      updateEvent: async (
        id: string,
        eventData: IEventFormInputs,
      ): Promise<IEvent> => {
        if (get().loading) {
          throw new Error('Another operation is in progress');
        }

        try {
          set({ loading: true, postError: null });
          const updatedEvent = await eventsService.updateEvent(id, eventData);
          if (!updatedEvent) {
            throw new Error('Failed to update event');
          }

          set((state) => ({
            events: state.events.map((event) =>
              event.id === id ? updatedEvent : event,
            ),
            loading: false,
            postError: null,
          }));

          return updatedEvent;
        } catch (error) {
          const errorMessage =
            error instanceof Error ? error.message : 'Failed to update event';
          set({ postError: errorMessage, loading: false });
          throw new Error(errorMessage);
        }
      },
      deleteEvent: async (id: string): Promise<void> => {
        if (get().loading) {
          throw new Error('Another operation is in progress');
        }

        try {
          set({ loading: true, error: null });
          await eventsService.deleteEvent(id);

          set((state) => ({
            events: state.events.filter((event) => event.id !== id),
            loading: false,
            error: null,
          }));
        } catch (error) {
          const errorMessage =
            error instanceof Error ? error.message : 'Failed to delete event';
          set({ error: errorMessage, loading: false });
          throw new Error(errorMessage);
        }
      },
    }),
    {
      name: 'Events Store',
      enabled: process.env.NODE_ENV === 'development',
    },
  ),
);

export default useEventsStore;
