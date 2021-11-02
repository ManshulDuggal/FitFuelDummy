import Image from "next/image";
import Logo from "../Images/logo.svg";
import HeaderItem from "./HeaderItem";
import { ShoppingCartIcon, HomeIcon, SearchIcon } from "@heroicons/react/solid";

const Header = () => {
    return (
        <header className="flex flex-col ml-5 sm:flex-row justify-between items-center h-auto">
            <Image
                className="object-contain"
                src={Logo}
                width={50}
                height={50}
            />
            <div className="flex flex-grow text-xs justify-evenly max-w-md sm:flex-row m-5">
                <HeaderItem title="Home" Icon={HomeIcon} />
                <HeaderItem title="Search" Icon={SearchIcon} />
                <HeaderItem title="Cart" Icon={ShoppingCartIcon} />
            </div>
        </header>
    );
};

export default Header;
