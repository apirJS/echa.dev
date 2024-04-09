import type { Config } from 'drizzle-kit';

const config: Config =  {
  driver: 'better-sqlite',
  out: './src/database/migrations',
  schema: './src/database/schema.ts',
  dbCredentials: {
    url: './src/database/app.db'
  }
}

export default config