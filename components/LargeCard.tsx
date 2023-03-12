import Image from 'next/image'

//@ts-ignore
const LargeCard = ({ name, description, buttonText }) => {
    return ( 
        <div className="relative py-16 cursor-pointer">
            <div className="relative h-96 min-w-[300px]">
                <Image 
                    src='/largecard.jpg'
                    layout='fill' 
                    objectFit='cover'
                    alt=''
                />
            </div>
            <div className='absolute top-32 left-12'>
                <h3 className="text-4xl mb-3 w-64">{name}</h3>
                <p>{description}</p>
                <button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 hover:shadow-xl active:scale-90 transition duration-150'>{buttonText}</button>
            </div>
        </div>
        
    );
}
 
export default LargeCard;