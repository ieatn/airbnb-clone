import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'

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
          {/* FETCH FROM API */}
          {exploreData.map((data) => (
            <div key={data.id}>
              <p>{data.name}</p>
              <img src={data.imageUrl} alt={data.name} />
              <p>{`${data.price} ${data.priceCurrency}`}</p>
              <p>{`${data.lat}, ${data.lng}`}</p>
            </div>
          ))}

        </section>
      </main>

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
