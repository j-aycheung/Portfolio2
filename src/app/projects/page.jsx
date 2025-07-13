import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import Link from 'next/link'

export const metadata = {
  title: 'Projects',
  description:
    'A showcase of Jay Cheung’s real-world React, Next.js, and data-driven projects.',
}

const projects = [
  {
    name: 'Taiyo Seafood Dashboard',
    description:
      'A B2B dashboard for inventory, reporting, and customer-specific analytics. Built with Next.js, Tailwind CSS, and Supabase. Features category filters, sorting, pagination, and SSR/SSG for optimal performance. Deployed on Netlify with CI/CD. View project for live demo and code.',
    link: {
      href: 'https://taiyoseafoodmd.com/',
      label: 'Visit Live Site',
      type: 'live',
    },
    showcase: 'taiyo',
  },
  {
    name: 'Outreachr',
    description:
      'A job outreach assistant that generates recruiter search links and email templates. Built with Next.js, Tailwind CSS, and Framer Motion for animated, mobile-friendly UX. 100% client-side for speed and privacy.',
    link: {
      href: 'https://github.com/j-aycheung/outreachr',
      label: 'View Code',
      type: 'code',
    },
    showcase: 'outreachr',
  },
  {
    name: 'MoodTune',
    description:
      'A Spotify mood-based playlist generator. Uses OAuth 2.0, mood-to-genre mapping, and Material-UI/Framer Motion for a polished experience. SEO-optimized for music discovery.',
    link: {
      href: 'https://github.com/j-aycheung/moodtune',
      label: 'View Code',
      type: 'code',
    },
    showcase: 'moodtune',
  },
  {
    name: 'Trifora',
    description:
      'A Reddit-like web app with posting, voting, and commenting. Managed sprints and usability testing with Zenhub. Built with React and Node.js.',
    showcase: 'trifora',
  },
  {
    name: 'Data Visualizer',
    description:
      'Real-time data visualization from APIs like CoinGecko and Disease.sh. Built with React, Recharts, Material-UI, and Axios. Features interactive charts and tooltips.',
    showcase: 'datavisualizer',
  },
  {
    name: 'SiftSwift',
    description:
      'A Python tool for file organization, duplicate cleanup, and nested directory search. Features a drag-and-drop interface. Built with Customtkinter.',
    showcase: 'siftswift',
  },
  {
    name: 'SafeKey',
    description:
      'A local, cryptographically secure password generator with clipboard auto-clear. Fully offline and built with Python and Customtkinter.',
    showcase: 'safekey',
  },
]

export default function Projects() {
  return (
    <SimpleLayout
      title="Projects"
      intro="A selection of my favorite projects, focused on React, Next.js, and data-driven solutions. Most are open-source—click below to view code or try a live demo."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <Card.Title as="h3">{project.name}</Card.Title>
            <Card.Description>{project.description}</Card.Description>
            {project.link && project.link.type === 'code' && (
              <Card.Cta>
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300"
                >
                  {project.link.label}
                </a>
              </Card.Cta>
            )}
            {project.link && project.link.type === 'live' && (
              <Card.Cta>
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300"
                >
                  {project.link.label}
                </a>
              </Card.Cta>
            )}
            {!project.link && project.showcase && (
              <Card.Cta>
                <Link
                  href={`/showcase/${project.showcase}`}
                  className="inline-flex items-center text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300"
                >
                  View App
                </Link>
              </Card.Cta>
            )}
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
