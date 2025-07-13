import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'My Stack',
  description:
    'A deeper look at the tools and practices I use to build modern web applications.',
}

export default function Stack() {
  return (
    <SimpleLayout
      title="My Stack"
      intro="Here’s a deeper look at the tools I rely on to build clean, fast, and scalable applications. I prioritize developer efficiency, modular design, and user experience."
    >
      <div className="prose max-w-2xl dark:prose-invert">
        <h3>🧠 Languages & Frameworks</h3>
        <ul>
          <li>
            <b>JavaScript / TypeScript</b> – My bread and butter for both
            frontend and backend work. I prefer TypeScript for its type safety,
            which makes refactoring and scaling much easier.
          </li>
          <li>
            <b>Python</b> – Ideal for quick automation scripts and data
            visualization tools. I’ve used it for building internal tools like
            file sorters and secure password generators.
          </li>
          <li>
            <b>SQL</b> – I write raw SQL queries to maintain control and
            transparency over data operations, especially in reporting and
            logging workflows.
          </li>
          <li>
            <b>React</b> – My go-to for building reactive, component-based UIs.
            I use hooks extensively and keep components focused and reusable.
          </li>
          <li>
            <b>Next.js (App Router)</b> – I build production apps with App
            Router for the flexibility of SSR, SSG, and API routing out of the
            box. It makes SEO and performance tuning a breeze.
          </li>
          <li>
            <b>Node.js</b> – For simple backend logic and APIs, Node.js lets me
            ship features quickly without leaving the JavaScript ecosystem.
          </li>
        </ul>
        <h3>🎨 Styling & UI</h3>
        <ul>
          <li>
            <b>Tailwind CSS</b> – Utility-first styling that lets me build fast
            without writing bloated CSS. It’s perfect for rapid prototyping and
            polished UIs.
          </li>
          <li>
            <b>Framer Motion</b> – I use it to add delightful animations and
            transitions that improve the user experience without getting in the
            way.
          </li>
          <li>
            <b>Material-UI (MUI)</b> – When I want out-of-the-box components
            that are production-ready and accessible, MUI speeds things up.
          </li>
        </ul>
        <h3>🛠️ Tools & Platforms</h3>
        <ul>
          <li>
            <b>Supabase</b> – My preferred backend-as-a-service. I use it for
            auth, Postgres storage, and real-time updates. It keeps my stack
            lightweight and serverless.
          </li>
          <li>
            <b>PostgreSQL</b> – A robust, relational database I use for
            structured data. I write custom SQL queries for tasks like inventory
            validation and user activity logging.
          </li>
          <li>
            <b>Netlify</b> – I deploy most of my projects here. Its CI/CD flow,
            instant rollbacks, and edge function support are perfect for solo
            dev workflows.
          </li>
          <li>
            <b>Git & GitHub</b> – I follow a Git-flow branching strategy and
            leverage GitHub Actions for CI, linting, and automatic deployment.
          </li>
          <li>
            <b>Docker</b> – I containerize development environments and
            databases for consistency across machines.
          </li>
          <li>
            <b>VS Code</b> – My primary code editor with a tuned setup for
            ESLint, Prettier, GitLens, and Tailwind IntelliSense.
          </li>
        </ul>
        <h3>⚙️ Dev Practices I Live By</h3>
        <ul>
          <li>
            Component-driven development — small, focused components = easier
            maintenance
          </li>
          <li>RESTful API integration with clear separation of concerns</li>
          <li>SSR/SSG in Next.js to balance SEO and performance</li>
          <li>
            Writing readable and optimized SQL queries for backend workflows
          </li>
          <li>CI/CD with GitHub Actions for safe, consistent deployments</li>
          <li>
            Always leave better logs — they’re your best teammate in debugging
          </li>
        </ul>
        <p>
          I’m always exploring new tools, but this stack gives me the right
          balance of speed, control, and scale — whether I’m building a
          dashboard for sales reps or a client-facing MVP.
        </p>
      </div>
    </SimpleLayout>
  )
}
