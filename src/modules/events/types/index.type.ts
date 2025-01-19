interface IEvent {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  color: string;
  cratedAt: string;
  updatedAt: string;
}

interface IEventFormInputs {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  color: string;
}

interface IEventStore {
  events: IEvent[];
  loading: boolean;
  error: string | null;
  fetchEvents: () => Promise<void>;
  postError: string | null;
  createEvent: (data: IEventFormInputs) => Promise<IEvent>;
  updateEvent: (id: string, data: IEventFormInputs) => Promise<IEvent>;
  currentEvent: IEvent | null;
  fetchEventById: (id: string) => Promise<void>;
  deleteEvent: (id: string) => Promise<void>;
}

type TEventListRowProps = {
  event: IEvent;
  onDeleteClick: () => void;
};

type TErrorIndicatorProps = {
  message: string;
};

type TEventDetailParams = {
  id: string;
};

interface IEventCardProps {
  event: IEvent;
}

export type {
  IEvent,
  IEventStore,
  TEventListRowProps,
  IEventFormInputs,
  TErrorIndicatorProps,
  IEventCardProps,
  TEventDetailParams,
};
