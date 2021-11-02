const ProductsSection = ({ items }) => {
    return (
        <div>
            <div>
                {items.map((items) => (
                    <h1>{items.slug}</h1>
                ))}
            </div>
        </div>
    );
};

export default ProductsSection;
