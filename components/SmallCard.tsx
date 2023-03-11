import Image from "next/image";

const SmallCard = ({ img, name, price }) => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      {/* LEFT */}
      <div className="relative h-16 w-16">
        <img className="rounded-lg" src={img} />
      </div>
      {/* RIGHT */}
      <div>
        <h2>{name}</h2>
        <h3 className="text-gray-500">{price}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
