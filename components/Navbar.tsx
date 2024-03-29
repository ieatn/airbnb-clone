import Image from 'next/image'
import {
    SearchIcon,
    GlobeAltIcon,
    UserCircleIcon,
    UsersIcon,
    MenuIcon
} from '@heroicons/react/solid'
import { useState } from 'react';
// date picker
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
// router
import { useRouter } from 'next/router';

//@ts-ignore
const Navbar = ({placeholder}) => {
    const [searchInput, setSearchInput] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    const [noOfGuests, setnoOfGuests] = useState(1)

    const router = useRouter()



    //@ts-ignore
    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    const resetInput = () => {
        setSearchInput('')
    }

    const search = () => {
        router.push({
            // route to search page
            pathname: '/search',
            // change url and also send in this object to destructure
            query: {
                location: searchInput,
                //@ts-ignore
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests,
            }
        })
    }
   

    return ( 
        <nav className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
            {/* LEFT */}
            <div className='relative flex cursor-pointer'>
                {/* LOGO */}
                <Image onClick={() => router.push('/')} src='/logo.png' width={150} height={150} alt='logo' />
            </div>
            {/* MIDDLE */}
            <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
                <input 
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400' 
                    type="text" 
                    placeholder={placeholder || 'Start your search'}
                />
                <SearchIcon className='hidden h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:inline-flex md:mx-2' />
            </div>
            {/* RIGHT */}
            <div className='flex space-x-4 items-center justify-end text-gray-500'>
                <p className='hidden md:inline cursor-pointer'>Become a host</p>
                <GlobeAltIcon className='h-6 cursor-pointer'/>
                <div className='flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer'>
                    <MenuIcon className='h-6'/>
                    <UserCircleIcon className='h-6'/>
                </div>
            </div>
            
            {/* DATE PICKER */}
            {/* from https://github.com/hypeserver/react-date-range */}
            {/* npm i --save react date-fns */}
            {/* npm i --save react-date-range */}
            {searchInput && (
                <div className='flex flex-col col-span-3 mx-auto'>
                    <DateRangePicker 
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors = {['#FD5B61']}
                        onChange={handleSelect}
                    />
                    <div className='flex items-center border-b mb-4'>
                        <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
                        <UsersIcon className='h-5' />
                        {/* @ts-ignore */}
                        <input className='w-12 pl-2 text-lg outline-none text-red-400' type="number" min={1} value={noOfGuests} onChange={(e) => setnoOfGuests(e.target.value)} />
                    </div>
                    <div className='flex'>
                        <button className='flex-grow text-gray-500' onClick={resetInput}>Cancel</button>
                        <button className='flex-grow text-red-400' onClick={search}>Search</button>
                    </div>
                </div>
            )} 
        </nav>
    );
}
 
export default Navbar;