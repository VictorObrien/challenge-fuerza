import { User } from './user.interface';

export interface Journal {
  id?: string;
  title: string;
  type: 'private' | 'public';
  createdAt?: string;
  updatedAt?: string;
  userId?: string;
  entryIds: string[] | null;
}

export interface CreateJournalFormData {
  title: string;
}

export interface CreateJournalResponse {
  journal: Journal;
  user: User;
}

export interface GetJournalProps {
  journals: Journal[];
}
