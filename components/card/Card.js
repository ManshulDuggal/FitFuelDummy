import CurrencyFormatter from "currency-formatter-react";
import Image from "next/dist/client/image";
import styles from "../../components/card/card.module.css";
import Cart from "../buttons/Cart";
const Card = ({ title, description, category, image, id, price }) => {
    return (
        <div className={styles.card}>
            <div className="p-5">
                <Image
                    src={image}
                    width={100}
                    height={100}
                    objectFit="contain"
                />
                <div className={styles.cardContent}>
                    <h5 className={styles.cardTitle}>{title}</h5>
                    <p className="">{description}</p>
                </div>
                <div className={styles.currency}>
                    <CurrencyFormatter value={price} currency="INR" />
                    <p>10 % off</p>
                </div>
                <Cart />
            </div>
        </div>
    );
};

export default Card;
