import { format as formatDate } from 'timeago.js';
import Comment from '@/app/contact/components/Comment';

interface Comment {
  profileImageUrl: string;
  name: string;
  message: string;
  nTimeAgo: string;
}

export default function Comments() {
  const comments: Comment[] = [
    {
      profileImageUrl: 'https://placehold.co/100x100/000000/FFFFFF/png',
      name: 'Hendra',
      message:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, libero!',
      nTimeAgo: formatDate('2022-01-01T00:00:00Z'),
    },
    {
      profileImageUrl: 'https://placehold.co/100x100/000000/FFFFFF/png',
      name: 'Suut Yono',
      message:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, libero! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, libero!',
      nTimeAgo: formatDate('2022-01-01T00:00:00Z'),
    },
    {
      profileImageUrl: 'https://placehold.co/100x100/000000/FFFFFF/png',
      name: 'Sutisna Sutisna Agus Kaktus Makan Takus',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, sint facilis! Sit, nostrum recusandae? Earum nihil iure enim id harum, eveniet repellendus nemo fugiat adipisci repellat quod dicta facere rerum quam porro itaque accusamus provident vel excepturi tenetur vero veniam. Libero iste porro qui ducimus, iusto, sapiente minus suscipit numquam quibusdam dolorem id et pariatur expedita repudiandae explicabo provident totam ut voluptas aspernatur. Omnis, exercitationem repellat consequatur beatae nostrum odio sequi asperiores, officia neque mollitia inventore rem eum qui commodi alias laborum quis quos quidem minus voluptatibus architecto nemo! Hic voluptatum doloribus, fugiat error itaque aut cupiditate nisi recusandae commodi? Really long message. lorem100',
      nTimeAgo: formatDate('2022-01-01T00:00:00Z'),
    },
    {
      profileImageUrl: 'https://placehold.co/100x100/000000/FFFFFF/png',
      name: 'Agus Caffuchino',
      message: 'Lorem ',
      nTimeAgo: formatDate('2022-01-01T00:00:00Z'),
    },
  ];

  return (
    <section className='p-3 flex flex-col gap-y-3 mt-6'>
      {comments.map(({ profileImageUrl, name, message, nTimeAgo }, index) => {
        return (
          <Comment
            key={index}
            profileImageUrl={profileImageUrl}
            name={name}
            message={message}
            nTimeAgo={nTimeAgo}
          />
        );
      })}
    </section>
  );
}
