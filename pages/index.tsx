import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'

export default function Home() {
  return (
    <div className='bg-[rgb(69,69,69)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Beyond the Box Education</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      {/* { Header } */}
      <Header />

      {/* { Hero } */}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      {/* { About } */}
      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* { Experience } */}

      {/* { Skills } */}

      {/* { Projects } */}

      {/* { Contact Me } */}

    </div>
  )
}
