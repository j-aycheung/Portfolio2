import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/tg1.png'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Home',
  description:
    'I’m Jay Cheung, a React/Next.js developer based in Middle Village, NY. I build modern web apps and data tools with a focus on clarity, performance, and user experience.',
}

export default function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Jay Cheung – React/Next.js Developer in New York
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m a full-stack developer focused on building modern, performant
            web apps and data tools. I specialize in React, Next.js, and
            TypeScript, with experience in B2B dashboards, automation, and
            interactive data visualizations. I thrive in agile teams and love
            mentoring others.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/j-aycheung"
              icon={GitHubIcon}
              aria-label="GitHub"
            />
            <SocialLink
              href="mailto:jaycheung321@gmail.com"
              icon={MailIcon}
              aria-label="Email"
            />
          </div>
        </div>
      </Container>

      <Container className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          Technical Skills
        </h2>
        <ul className="mt-4 grid grid-cols-1 gap-2 text-base text-zinc-600 sm:grid-cols-2 dark:text-zinc-400">
          <li>
            <span className="font-medium">Languages:</span> JavaScript,
            TypeScript, Python, SQL, C, C++, Scala, Lua, Assembly
          </li>
          <li>
            <span className="font-medium">Frameworks & Tools:</span> React,
            Next.js (App Router), Node.js, Tailwind CSS, Supabase, Docker, Git,
            PostgreSQL, MongoDB, Material-UI, Framer Motion, Recharts, Axios
          </li>
          <li>
            <span className="font-medium">Platforms:</span> GitHub, Netlify,
            CI/CD (GitHub Actions), Relativity, Streamlit
          </li>
          <li>
            <span className="font-medium">Practices:</span> Agile methodologies,
            unit testing, component-driven development, API integration
          </li>
        </ul>
      </Container>

      <Container className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          Experience
        </h2>
        <ul className="mt-4 space-y-6">
          <li>
            <span className="font-semibold">Documentation Analyst</span> – FTI
            Consulting (Remote){' '}
            <span className="text-zinc-400">Feb 2025 – Present</span>
            <ul className="ml-6 mt-1 list-disc text-base text-zinc-600 dark:text-zinc-400">
              <li>
                Analyzed documents for PII/PHI and business-sensitive data
              </li>
              <li>
                Created structured data cards for breach assessment and
                compliance
              </li>
              <li>Worked in e-discovery tools like Relativity</li>
              <li>Participated in regular updates with legal teams</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Full-Stack Development Intern</span>{' '}
            – Jarellsj (Remote){' '}
            <span className="text-zinc-400">Oct 2024 – Feb 2025</span>
            <ul className="ml-6 mt-1 list-disc text-base text-zinc-600 dark:text-zinc-400">
              <li>
                Built a B2B catalog with filtering, sorting, and SKU search
                using Next.js and Tailwind CSS
              </li>
              <li>
                Integrated Supabase authentication and role-based PostgreSQL
                access
              </li>
              <li>Used SSR and SSG in Next.js for optimized performance</li>
              <li>Authored SQL queries for backend automation and logging</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Online Instructor</span> – iD Tech
            (Remote) <span className="text-zinc-400">Mar 2024 – Jun 2024</span>
            <ul className="ml-6 mt-1 list-disc text-base text-zinc-600 dark:text-zinc-400">
              <li>
                Taught Python, Lua, and Unreal Engine in personalized sessions
              </li>
              <li>Created individualized lesson plans</li>
              <li>
                Improved student confidence through debugging and mentorship
              </li>
            </ul>
          </li>
        </ul>
      </Container>

      <Container className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          Education
        </h2>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
          <span className="font-semibold">
            Bachelor of Science in Computer Science
          </span>
          , University at Buffalo{' '}
          <span className="text-zinc-400">Aug 2019 – Dec 2023</span>
        </p>
      </Container>
    </>
  )
}
