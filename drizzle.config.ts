import type { Config } from 'drizzle-kit';

export default {
  driver: 'better-sqlite',
  out: './src/database/migrations',
  dbCredentials: {
    url: './src/database/sqlite.db'
  },
  schema: './src/database/schema.ts'
} as Config