import Image from 'next/image'
import Link from 'next/link'
import { SimpleLayout } from '@/components/SimpleLayout'

const showcaseProjects = [
  {
    slug: 'taiyo',
    name: 'Taiyo Seafood Dashboard',
    image: '/images/projects/taiyo1.jpg',
  },
  {
    slug: 'trifora',
    name: 'Trifora',
    image: '/images/projects/trifora1.jpg',
  },
  {
    slug: 'siftswift',
    name: 'SiftSwift',
    image: '/images/projects/siftswift1.png',
  },
  {
    slug: 'safekey',
    name: 'SafeKey',
    image: '/images/projects/safekey1.png',
  },
  {
    slug: 'datavisualizer',
    name: 'Data Visualizer',
    image: '/images/projects/datavisualizer1.png',
  },
]

export const metadata = {
  title: 'Project Showcase',
  description: 'Screenshots of Jay Cheung’s projects and apps.',
}

export default function Showcase() {
  return (
    <SimpleLayout
      title="Project Showcase"
      intro="A visual gallery of my recent projects. Click any image to view it larger."
    >
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {showcaseProjects.map((project) => (
          <div
            key={project.slug}
            className="flex flex-col items-center overflow-hidden rounded-xl bg-zinc-100 shadow-md dark:bg-zinc-800"
          >
            <Image
              src={project.image}
              alt={project.name + ' screenshot'}
              className="h-64 w-full object-contain"
              width={600}
              height={400}
            />
            <div className="p-4 text-center text-base font-medium text-zinc-700 dark:text-zinc-200">
              {project.name}
            </div>
            <Link
              href={`/showcase/${project.slug}`}
              className="mb-4 rounded bg-teal-500 px-4 py-2 text-white transition hover:bg-teal-600 dark:bg-teal-400 dark:hover:bg-teal-300"
            >
              View App
            </Link>
          </div>
        ))}
      </div>
    </SimpleLayout>
  )
}
