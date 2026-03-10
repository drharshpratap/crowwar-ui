import { ChatMessage, UserProfile } from '../types';
import { users } from './users';

export interface MessageConversation {
  id: string;
  participant: UserProfile;
  messages: ChatMessage[];
  unread?: number;
}

export const messageThreads: MessageConversation[] = [
  {
    id: 'conv-01',
    participant: users[0],
    unread: 2,
    messages: [
      {
        id: 'msg-01',
        sender: users[0],
        message: 'Still accepting bids for the 488 Pista.',
        timestamp: new Date(Date.now() - 3600 * 1000).toISOString(),
        isMine: false
      },
      {
        id: 'msg-02',
        sender: users[0],
        message: 'Reserve has been confirmed at $295,000.',
        timestamp: new Date(Date.now() - 1800 * 1000).toISOString(),
        isMine: false
      }
    ]
  },
  {
    id: 'conv-02',
    participant: users[1],
    messages: [
      {
        id: 'msg-03',
        sender: users[1],
        message: 'Would you like the F1-inspired package added?',
        timestamp: new Date(Date.now() - 7200 * 1000).toISOString(),
        isMine: false
      },
      {
        id: 'msg-04',
        sender: users[1],
        message: 'The photos will be updated later today.',
        timestamp: new Date(Date.now() - 3600 * 1000).toISOString(),
        isMine: false
      }
    ]
  },
  {
    id: 'conv-03',
    participant: users[2],
    unread: 1,
    messages: [
      {
        id: 'msg-05',
        sender: users[2],
        message: 'Vehicle will be shipped with a dry service.',
        timestamp: new Date(Date.now() - 5400 * 1000).toISOString(),
        isMine: false
      },
      {
        id: 'msg-06',
        sender: users[2],
        message: 'Let me know if you need inspection reports updated.',
        timestamp: new Date(Date.now() - 2000 * 1000).toISOString(),
        isMine: false
      }
    ]
  }
];

export const flatMessages: ChatMessage[] = messageThreads.flatMap((thread) => thread.messages);
