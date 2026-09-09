import { Subjects } from './subjects';

export interface CustomerDeletedEvent {
  subject: Subjects.CustomerDeleted;
  data: {
    id: string;
  };
}