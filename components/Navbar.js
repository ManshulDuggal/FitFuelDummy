import Image from "next/image";

const Navbar = ({ Icon }) => {
    return (
        <nav className="">
            <ul className="flex flex-row max-w-xl ml-5 items-center">
                <li className="flex cursor-pointer">
                    <p className="font-light">Catagories</p>
                    <Icon
                        className="h-5 m-1 ml-3 hover:rotate-180 transition-all duration-2 delay-25"
                        alt="Not Found"
                    />
                </li>
                <li className="flex ml-2 cursor-pointer">
                    <p className="font-light">Brands</p>
                    <Icon
                        className="h-5 m-1 ml-3 hover:rotate-180 transition-all duration-2 delay-25 "
                        alt="Not Found"
                    />
                </li>
                <li className="flex m-2 cursor-pointer ">
                    <p className="font-light">Goals</p>
                    <Icon
                        className="h-5 m-1 ml-3 hover:rotate-180 transition-all duration-2 delay-25 "
                        alt="Not Found"
                    />
                </li>
                <li className="flex m-2 cursor-pointer">
                    <p className="font-light">Stock Clearance</p>
                    <Icon
                        className="h-5 m-1 ml-3 hover:rotate-180 transition-all duration-2 delay-25 "
                        alt="Not Found"
                    />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
