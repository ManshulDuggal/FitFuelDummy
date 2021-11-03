import Card from "./Card";

Card;
const ProductsSection = ({ products }) => {
    return (
        <div>
            <div>
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
