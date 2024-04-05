import type { Config } from 'drizzle-kit';

const config: Config =  {
  driver: 'better-sqlite',
  out: './src/database/migrations',
  schema: './src/database/schema.ts'
}

export default config