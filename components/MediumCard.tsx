{/* @ts-ignore */}
const MediumCard = ({ img, name, price }) => {
    return ( 
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
            <div className="relative h-80 w-80">
                <img className="rounded-xl" src={img} />
            </div>
            <h3 className="text-2xl mt-3">{name}</h3>
        </div>
    );  
}
 
export default MediumCard;