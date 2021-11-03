import Image from "next/dist/client/image";
const Card = ({ title, description, category, image, id, price }) => {
    return (
        <div className="flex flex-col cursor-pointer  bg-white m-2 flex-grow text-black justify-center items-center text-center">
            <div className="p-5">
                <Image
                    src={image}
                    width={200}
                    height={200}
                    objectFit="contain"
                />
                <div className="w-60 text-justify m-4 ">
                    <h5 className="font-bold">{title}</h5>
                    <p className="">{description}</p>
                </div>
                <div className="flex felx-row justify-between my-8">
                    <p>{price}</p>
                    <p className="">10 % off</p>
                </div>
                <button className="bg-yellow-300 px-20 py-2 text-sm">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Card;
