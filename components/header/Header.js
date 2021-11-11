import Image from "next/image";
import Logo from "../../Images/logo.svg";
import HeaderItem from "./HeaderItem";
import { ShoppingCartIcon, HomeIcon, SearchIcon } from "@heroicons/react/solid";
import styles from "./header.module.css";
const Header = () => {
    return (
        <header className={styles.headerBar}>
            <Image
                className="object-contain"
                src={Logo}
                width={50}
                height={50}
            />
            <div className={styles.headerItems}>
                <HeaderItem title="Home" Icon={HomeIcon} />
                <HeaderItem title="Search" Icon={SearchIcon} />
                <HeaderItem title="Cart" Icon={ShoppingCartIcon} />
            </div>
        </header>
    );
};

export default Header;
