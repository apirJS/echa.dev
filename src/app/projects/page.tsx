import Project from '@/app/projects/components/Project';

interface Project {
  title: string;
  desc: string;
  img: string;
  tags: string[];
  githubURL?: string;
  demoURL?: string;
  stack?: string[];
}

const projects: Project[] = [
  {
    title: 'KanBan Board',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi obcaecati nemo blanditiis unde perferendis dicta reprehenderit consectetur ex soluta a.',
    img: 'https://placehold.co/600x400/000000/ffffff',
    tags: [
      'ReactJS',
      'NextJS',
      'ExpressJS',
      'tag 10',
      'tag 10',
      'tag 10',
      'tag 10',
      'tag 10',
      'tag 10',
    ],
    githubURL: 'https://github.com/project1',
    demoURL: 'https://demo.project1.com',
  },
  {
    title: 'project 2',
    desc: 'desc 2',
    img: 'https://placehold.co/600x400/000000/ffffff',
    tags: ['tag 3', 'tag 4'],
    githubURL: 'https://github.com/project2',
    demoURL: 'https://demo.project2.com',
  },
  {
    title: 'project 3',
    desc: 'desc 3',
    img: 'https://placehold.co/600x400/000000/ffffff',
    tags: ['tag 5', 'tag 6'],
    githubURL: 'https://github.com/project3',
    demoURL: 'https://demo.project3.com',
  },
  {
    title: 'project 4',
    desc: 'desc 4',
    img: 'https://placehold.co/600x400/000000/ffffff',
    tags: ['tag 7', 'tag 8'],
    githubURL: 'https://github.com/project4',
    demoURL: 'https://demo.project4.com',
  },
  {
    title: 'project 5',
    desc: 'desc 5',
    img: 'https://placehold.co/600x400/000000/ffffff',
    tags: ['tag 9', 'tag 10'],
    githubURL: 'https://github.com/project5',
    demoURL: 'https://demo.project5.com',
  },
];

export default function Projects() {
  return (
    <main className='grid grid-cols-1 sm:grid-cols-2 gap-5 '>
      {projects.map((project, index) => {
        return (
          <Project
            key={index}
            title={project.title}
            desc={project.desc}
            img={project.img}
            tags={project.tags}
            githubURL={project.githubURL}
            demoURL={project.demoURL}
            stack={project.stack}
          />
        );
      })}
    </main>
  );
}
