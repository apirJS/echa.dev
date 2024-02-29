import Image from 'next/image';

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
    title: 'project 1',
    desc: 'desc 1',
    img: 'img 1',
    tags: ['tag 1', 'tag 2'],
    githubURL: 'https://github.com/project1',
    demoURL: 'https://demo.project1.com',
  },
  {
    title: 'project 2',
    desc: 'desc 2',
    img: 'img 2',
    tags: ['tag 3', 'tag 4'],
    githubURL: 'https://github.com/project2',
    demoURL: 'https://demo.project2.com',
  },
  {
    title: 'project 3',
    desc: 'desc 3',
    img: 'img 3',
    tags: ['tag 5', 'tag 6'],
    githubURL: 'https://github.com/project3',
    demoURL: 'https://demo.project3.com',
  },
  {
    title: 'project 4',
    desc: 'desc 4',
    img: 'img 4',
    tags: ['tag 7', 'tag 8'],
    githubURL: 'https://github.com/project4',
    demoURL: 'https://demo.project4.com',
  },
  {
    title: 'project 5',
    desc: 'desc 5',
    img: 'img 5',
    tags: ['tag 9', 'tag 10'],
    githubURL: 'https://github.com/project5',
    demoURL: 'https://demo.project5.com',
  },
];

export default function Projects() {
  return (
    <main className='grid grid-cols-2 gap-5'>
      {projects.map((project, index) => {
        return (
          <div className='border rounded-sm p-2' key={index}>
            <Image
              src=''
              alt={project.title}
              width={300}
              height={200}
              className='border'
            />
            <div>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div>
                {project.tags.map((tag, index) => {
                  return <span key={index}>{tag}</span>;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
}
