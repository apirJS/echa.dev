import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import { db } from "@/database/db";

async function run() {
  await migrate(db, { migrationsFolder: "src/database/migrations" });
}

run()