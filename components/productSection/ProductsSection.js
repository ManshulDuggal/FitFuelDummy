import Card from "../card/Card";
import styles from "./product.module.css";
Card;
const ProductsSection = ({ products }) => {
    return (
        <div>
            <div className={styles.productlist}>
                {products.map(
                    ({ title, id, price, description, category, image }) => (
                        <Card
                            title={title}
                            id={id}
                            price={price}
                            category={category}
                            description={description}
                            image={image}
                            key={id}
                        />
                    )
                )}
            </div>
        </div>
    );
};

export default ProductsSection;
