import { db } from '@/database/db';
import { comments, users } from './schema';

async function run(): Promise<void> {
  await db.insert(users).values([
    { imageUrl: 'dummy1.jpg', name: 'User 1' },
    { imageUrl: 'dummy2.jpg', name: 'User 2' },
    { imageUrl: 'dummy3.jpg', name: 'User 3' },
    { imageUrl: 'dummy4.jpg', name: 'User 4' },
    { imageUrl: 'dummy5.jpg', name: 'User 5' },
    { imageUrl: 'dummy6.jpg', name: 'User 6' },
    { imageUrl: 'dummy7.jpg', name: 'User 7' },
    { imageUrl: 'dummy8.jpg', name: 'User 8' },
    { imageUrl: 'dummy9.jpg', name: 'User 9' },
    { imageUrl: 'dummy10.jpg', name: 'User 10'},
  ]);

  await db.insert(comments).values([
    { userId: 1, content: 'Comment 1' },
    { userId: 2, content: 'Comment 2' },
    { userId: 3, content: 'Comment 3' },
    { userId: 4, content: 'Comment 4' },
    { userId: 5, content: 'Comment 5' },
    { userId: 6, content: 'Comment 6' },
    { userId: 7, content: 'Comment 7' },
    { userId: 8, content: 'Comment 8' },
    { userId: 9, content: 'Comment 9' },
    { userId: 10, content: 'Comment 10' },
  ]);
}

run()


