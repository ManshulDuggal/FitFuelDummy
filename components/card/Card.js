import CurrencyFormatter from "currency-formatter-react";
import Image from "next/dist/client/image";
import styles from "../../components/card/card.module.css";
const Card = ({ title, description, category, image, id, price }) => {
    return (
        <div className={styles.Card}>
            <div className="p-5">
                <Image
                    src={image}
                    width={200}
                    height={200}
                    objectFit="contain"
                />
                <div className="w-80 text-justify m-4">
                    <h5 className="font-bold">{title}</h5>
                    <p className="">{description}</p>
                </div>
                <div className="flex felx-row justify-between my-8">
                    <CurrencyFormatter value={price} currency="INR" />

                    <p className="">10 % off</p>
                </div>
                <button className="bg-yellow-300 px-80 py-2 text-sm">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Card;
