import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div className='bg-[rgb(69,69,69)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Beyond the Box Education</title>
      </Head>

      {/* { Header } */}
      <Header />

      {/* { Hero } */}
      <section id='hero' className='snap-center'>
        <Hero />
      </section>

      {/* { About } */}

      {/* { Experience } */}

      {/* { Skills } */}

      {/* { Projects } */}

      {/* { Contact Me } */}

    </div>
  )
}
