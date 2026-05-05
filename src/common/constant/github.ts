import { PERSON_HANDLE } from '@/common/constant/personal';

export const GITHUB_ACCOUNTS = [
  {
    username: PERSON_HANDLE,
    token: process.env.GITHUB_READ_USER_TOKEN_PERSONAL,
    endpoint: '/api/github?type=personal',
    type: 'personal',
    is_active: true,
  },
];
