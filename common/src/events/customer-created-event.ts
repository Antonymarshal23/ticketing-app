import { Subjects } from './subjects';

export interface CustomerCreatedEvent {
  subject: Subjects.CustomerCreated;
  data: {
    id: string;
    email: string;
  };
}