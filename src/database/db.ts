import Database from 'better-sqlite3';
import { eq, relations } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import { integer, text, sqliteTable } from 'drizzle-orm/sqlite-core';

const sqlite = new Database('./sqlite.db');
const db = drizzle(sqlite) ;

const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  imageUrl: text('imageUrl').notNull(),
} );

const usersRelations = relations(users, ({ many }) => ({
  comments: many(comments),
}));

const comments = sqliteTable('comments', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  comment: text('comment').notNull(),
  userId: integer('userId').notNull(),
});

const commentsRelations = relations(comments, ({ one }) => ({
  user: one(users, { fields: [comments.userId], references: [users.id] }),
}));

// await migrate(db, { migrationsFolder: './migrations' })

export { users, comments, usersRelations, commentsRelations }
