import { notFound } from 'next/navigation'
import Image from 'next/image'
import { SimpleLayout } from '@/components/SimpleLayout'

const showcaseProjects = {
  taiyo: {
    name: 'Taiyo Seafood Dashboard',
    images: ['/images/projects/taiyo1.jpg', '/images/projects/taiyo2.jpg'],
  },
  trifora: {
    name: 'Trifora',
    images: ['/images/projects/trifora1.jpg', '/images/projects/trifora2.jpg'],
  },
  siftswift: {
    name: 'SiftSwift',
    images: ['/images/projects/siftswift1.png'],
  },
  safekey: {
    name: 'SafeKey',
    images: ['/images/projects/safekey1.png'],
  },
  datavisualizer: {
    name: 'Data Visualizer',
    images: ['/images/projects/datavisualizer1.png'],
  },
  outreachr: {
    name: 'Outreachr',
    images: [],
  },
  moodtune: {
    name: 'MoodTune',
    images: [],
  },
}

export default function ShowcaseProject({ params }) {
  const { project } = params
  const data = showcaseProjects[project]
  if (!data) return notFound()
  return (
    <SimpleLayout
      title={data.name + ' Screenshots'}
      intro={`Screenshots for ${data.name}.`}
    >
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {data.images.length === 0 ? (
          <div className="col-span-2 text-center text-zinc-500 dark:text-zinc-400">
            No screenshots available for this project yet.
          </div>
        ) : (
          data.images.map((src, idx) => (
            <figure
              key={idx}
              className="flex flex-col items-center overflow-hidden rounded-xl bg-zinc-100 shadow-md dark:bg-zinc-800"
            >
              <Image
                src={src}
                alt={data.name + ' screenshot'}
                className="h-96 w-full object-contain"
                width={800}
                height={600}
              />
            </figure>
          ))
        )}
      </div>
    </SimpleLayout>
  )
}
