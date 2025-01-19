import { httpClient } from '@/services/Http.service';
import { IEvent, IEventFormInputs } from '../types/index.type';

class EventsService {
  private static instance: EventsService;

  private constructor() {}

  public static getInstance(): EventsService {
    if (!EventsService.instance) {
      EventsService.instance = new EventsService();
    }
    return EventsService.instance;
  }

  async getAllEvents(): Promise<IEvent[]> {
    try {
      const response = await httpClient.get<IEvent[]>('/events');
      return response || [];
    } catch (error) {
      console.error('Error fetching events:', error);
      throw error;
    }
  }

  async getEventById(id: string): Promise<IEvent> {
    try {
      const response = await httpClient.get<IEvent>(`/events/${id}`);
      if (!response) {
        throw new Error('Event not found');
      }
      return response;
    } catch (error) {
      console.error('Error fetching event:', error);
      throw error;
    }
  }

  async createEvent(eventData: IEventFormInputs): Promise<IEvent> {
    try {
      const response = await httpClient.post<IEvent>('/events', eventData);

      if (!response) {
        throw new Error('Failed to create event');
      }

      return response;
    } catch (error) {
      console.error('Error creating event:', error);
      throw error;
    }
  }

  async updateEvent(id: string, eventData: IEventFormInputs): Promise<IEvent> {
    try {
      const response = await httpClient.put<IEvent>(`/events/${id}`, eventData);
      if (!response) {
        throw new Error('Failed to update event');
      }
      return response;
    } catch (error) {
      console.error('Error updating event:', error);
      throw error;
    }
  }

  async deleteEvent(id: string): Promise<void> {
    try {
      await httpClient.delete(`/events/${id}`);
    } catch (error) {
      console.error('Error deleting event:', error);
      throw error;
    }
  }
}

export const eventsService = EventsService.getInstance();
