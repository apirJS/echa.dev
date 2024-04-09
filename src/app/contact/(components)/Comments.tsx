"use client"
import Comment from '@/app/contact/(components)/Comment';
import { useEffect, useState } from 'react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)

interface Comment {
  imageUrl: string;
  name: string;
  content: string;
  createdAt: string;
}

export default function Comments() {
  const [comments, setComments ] = useState<Comment[]>([])

  async function fetchComments(): Promise<void> {
    const res = await fetch('/api/comments', { method: 'GET' });
    const { data } = await res.json();
    setComments(data)
  }

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <section className='p-3 flex flex-col gap-y-3 mt-2'>
      {comments.map(({ imageUrl, name, content, createdAt }, index) => {
        return (
          <Comment
            key={index}
            imageUrl={imageUrl}
            name={name}
            content={content}
            nTimeAgo={new TimeAgo('en_US').format(new Date(createdAt))}
          />
        );
      })}
    </section>
  );
}
