import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'

export default function Home() {
  return (
    <div className='bg-[rgb(69,69,69)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Beyond the Box Education</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <Header />

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* { Experience } */}
      <section id='experience' className='snap-center'>
        <WorkExperience />
      </section>

      {/* { Skills } */}

      {/* { Projects } */}

      {/* { Contact Me } */}

    </div>
  )
}
