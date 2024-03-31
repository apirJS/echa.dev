import { getEnv } from '@/utils'
import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'

const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: getEnv('GITHUB_CLIENT_ID', ''),
      clientSecret: getEnv('GITHUB_SECRET_ID', '')
    })
  ]
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }