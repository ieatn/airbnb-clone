import Image from "next/image";

const Banner = () => {
    return ( 
        // change heights on all sizes
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2x:h-[700px]">
            {/* wow very cool, either use width or layout, this makes image cover whole screen */}
            <Image src='/home.jpg' layout="fill" objectFit="cover" alt="" />
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg text-white">Not sure where to go? Perfect.</p>
                <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">I'm Flexible</button>
            </div>
        </div>

    );
}
 
export default Banner;