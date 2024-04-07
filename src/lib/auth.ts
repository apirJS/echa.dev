import type { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import { getEnv } from '@/utils';

const nextAuthOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: getEnv('GOOGLE_CLIENT_ID'),
      clientSecret: getEnv('GOOGLE_CLIENT_SECRET'),
    }),
    GitHubProvider({
      clientId: getEnv('GITHUB_CLIENT_ID'),
      clientSecret: getEnv('GITHUB_SECRET_ID'),
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24
  },
  secret: getEnv('NEXTAUTH_SECRET'),
  pages: {
    signIn: '/contact',
    signOut: '/contact',
    error: '/contact',
    verifyRequest: '/contact',
    newUser: '/contact',
  }
};

export { nextAuthOptions };
