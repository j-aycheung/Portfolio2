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
  title: 'About',
  description:
    'I’m Jay Cheung, a React/Next.js developer based in Middle Village, NY. I build modern web apps and data tools with a focus on clarity, performance, and user experience.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt="Jay Cheung portrait"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center lg:order-first lg:row-span-2">
          <section className="prose-zinc prose max-w-none text-base dark:prose-invert sm:text-lg">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              Hi, I&apos;m Jay. I build tools that help people move faster with
              data and code.
            </h1>
            <p>
              I'm a self-motivated developer who enjoys building tools that are
              equal parts functional and delightful. I graduated with a B.S. in
              Computer Science from the University at Buffalo, and since then,
              I’ve focused on using <b>React</b>, <b>Next.js</b>, and
              <b>Supabase</b> to create B2B dashboards, job outreach utilities,
              and automation systems that scale.
            </p>
            <p>
              At FTI Consulting, I currently help legal teams uncover sensitive
              data through structured analysis and classification tools.
              Previously, at Jarellsj, I worked on internal platforms for
              seafood sales teams — implementing everything from product
              catalogs to authentication and SQL-driven inventory tracking.
            </p>
            <p>
              I also enjoy teaching. I&apos;ve mentored students in Python, Lua,
              and Unreal Engine as an online instructor at iD Tech. I find that
              helping others debug their thinking improves my own.
            </p>
            <h3 className="mb-2 mt-10 text-xl font-semibold">
              What I’m Into Right Now:
            </h3>
            <ul className="mb-6">
              <li>
                Experimenting with <b>SSG/SSR tradeoffs</b> in large Next.js
                apps
              </li>
              <li>
                Building productivity tools with <b>client-only architecture</b>
              </li>
              <li>
                Exploring <b>Framer Motion</b> for micro-interactions
              </li>
              <li>
                Writing small <b>Python utilities</b> to automate manual
                workflows
              </li>
            </ul>
            <h3 className="mb-2 mt-10 text-xl font-semibold">
              Outside of code...
            </h3>
            <p>When I&apos;m not coding, I&apos;m probably:</p>
            <ul className="mb-6">
              <li>Reading visual novels or manga</li>
              <li>Walking aimlessly while thinking through UI flows</li>
            </ul>
            <p>
              Let&apos;s connect if you&apos;re working on something interesting
              or just want to swap ideas!
            </p>
          </section>
          <div className="mt-10 lg:pl-0">
            <ul role="list" className="space-y-2">
              <SocialLink
                href="https://github.com/j-aycheung"
                icon={GitHubIcon}
              >
                GitHub
              </SocialLink>
              <SocialLink href="mailto:jaycheung321@gmail.com" icon={MailIcon}>
                jaycheung321@gmail.com
              </SocialLink>
              <SocialLink href="tel:2317304595" icon={MailIcon}>
                (231) 730-4595
              </SocialLink>
              <li className="flex text-sm text-zinc-600 dark:text-zinc-400">
                <span className="font-medium">Location:</span>&nbsp;Middle
                Village, NY
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  )
}
