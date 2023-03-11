import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

const Home: NextPage = ({exploreData}) => {

  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Banner />
      
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>

        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
            {/* FETCH FROM API */}
            {exploreData.map((i) => (
              <SmallCard 
                key={i.name}
                img={i.imageUrl}
                name={i.name}
                price={`${i.price} ${i.priceCurrency}`}
                location={`${i.lat}, ${i.lng}`}
              />
            ))}
          </div>
        </section>

        {/* npm i tailwind-scrollbar-hide then go to tailwind.config and add plugin */}
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {/* only want 4 from array */}
            {exploreData?.slice(0,4).map(({imageUrl, name}) => (
              <MediumCard 
                key={name}
                img={imageUrl}
                name={name}
              />
            ))}
          </div>
        </section>

        <section>
          <LargeCard 
            name='The Greatest Outdoors'
            description='Wishlists curated by Airbnb.'
            buttonText='Get Inspired'
          />
        </section>

      </main>

      <Footer />

    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://cdn.rawgit.com/abbassiddiqi/airbnb-api/bbd1300a/flats.json')
  const exploreData = await res.json()
  return {
    props: {
      exploreData
    }
  }
}


export default Home
