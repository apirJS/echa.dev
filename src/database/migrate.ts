import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";

async function run() {
  const sqlite = new Database("src/database/app.db");
  const db = drizzle(sqlite)
  await migrate(db, { migrationsFolder: "src/database/migrations" });
  sqlite.close()
}

run()