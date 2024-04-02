declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_CLIENT_ID: string;
      GITHUB_SECRET_ID: string;
      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;
      NEXT_PUBLIC_SECRET: string;
      NEXTAUTH_URL: string;
      NEXTAUTH_SECRET: string;
    }
  }
}
