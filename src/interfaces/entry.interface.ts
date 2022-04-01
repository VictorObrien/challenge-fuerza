import { Journal } from './journal.interface';
import { User } from './user.interface';

export interface Entry {
  id?: string;
  title: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
  journalId?: string;
}

export interface CreateNoteFormData {
  title: string;
  content: string;
}

export interface CreateNoteResponse {
  journal: Journal;
  user: User;
}

export interface ParamsProps {
  journalId: string;
}
export interface ParamsNoteContentProps {
  journalId: string;
  noteId: string;
}

export interface GetNotesProps {
  entries: Entry[];
}
