import { format } from "date-fns";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import InfoCard from "../components/InfoCard";
import Navbar from "../components/Navbar";


// @ts-ignore
const Search = ({searchResults}) => {

    const router = useRouter()
    const {location, startDate, endDate, noOfGuests} = router.query
    //@ts-ignore
    const formattedStartDate = format(new Date(startDate), 'dd MMMM yy')
    //@ts-ignore
    const formattedEndDate = format(new Date(endDate), 'dd MMMM yy')
    const range = `${formattedStartDate} - ${formattedEndDate}`

    return ( 
        <div>
            <Navbar placeholder={`${location} | ${range} | ${noOfGuests} guests`}/>
            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-sm">300+ Stays for {noOfGuests} number of guests</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="btn">Cancellation Flexibility</p>
                        <p className="btn">Type of Place</p>
                        <p className="btn">Price</p>
                        <p className="btn">Rooms and Beds</p>
                        <p className="btn">More filters</p>
                    </div>

                    <div className="flex flex-col">
                        {/* destructure props from api */}
                        {/* @ts-ignore */}
                        {searchResults.map(({imageUrl, name, description, star, price, total}) => (
                            // pass the api props into info card
                            // @ts-ignore
                            <InfoCard 
                                key={name}
                                img={imageUrl}
                                name={name}
                                price={`${price}`}
                                // do not have values for this api so have a backup hard coded string
                                description={description || 'Nice house'}
                                star={star || '5'}
                                location={`Stays in ${location}`}
                                total={total || '$50'}
                        />
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
 
export default Search;

export async function getServerSideProps() {
    const res = await fetch('https://cdn.rawgit.com/abbassiddiqi/airbnb-api/bbd1300a/flats.json')
    const searchResults = await res.json()
    return {
        props: {
            searchResults
        },
    }
}