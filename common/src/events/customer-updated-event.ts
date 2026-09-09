import { Subjects } from './subjects';

export interface CustomerUpdatedEvent {
  subject: Subjects.CustomerUpdated;
  data: {
    id: string;
    email: string;
  };
}