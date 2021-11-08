import styles from "./cart.module.css";
const Cart = () => {
    return (
        <div>
            <button className={styles.btnCart}>
                {" "}
                <p class={styles.btnText}> Add to Cart</p>
            </button>
        </div>
    );
};

export default Cart;
