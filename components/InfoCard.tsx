import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";


{/* @ts-ignore */}
const InfoCard = ({img, location, name, description, star, price, total}) => {
    return ( 
        <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg pr-4 transition duration-200 ease-out first:border-t first:">
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
                <img className="rounded-2xl" src={img} />
            </div>
            <div className="flex flex-col flex-grow pl-5">
                <div className="flex justify-between">
                    <p>{location}</p>
                    <HeartIcon className="h-7 cursor-pointer" />
                </div>
            </div>
            <h4 className="text-xl">{name}</h4>
            <div className="border-b w-10 pt-2">
                <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
            </div>
            <div className="flex justify-between items-end pt-5">
                <p className="flex items-center">
                    <StarIcon className="h-5 text-red-400"  />{star}
                </p>
                <div>
                    <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
                    <p className="text-right">{total}</p>
                </div>
            </div>

        </div>
    );
}
 
export default InfoCard;