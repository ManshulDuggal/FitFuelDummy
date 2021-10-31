import Image from "next/image";

const Navbar = ({ Icon }) => {
    return (
        <div>
            <ul className="flex flex-row max-w-xl  m-10 items-center justify-start ">
                <li className="flex items-center cursor-pointer">
                    <p className="font-light">Catagories</p>
                    <Icon
                        className="h-5 m-5 hover:rotate-180 transition-all duration-2 delay-25 "
                        alt="Not Found"
                    />
                </li>
                <li className="flex items-center cursor-pointer">
                    <p className="font-light">Brands</p>
                    <Icon
                        className="h-5 m-5 hover:rotate-180 transition-all duration-2 delay-25 "
                        alt="Not Found"
                    />
                </li>
                <li className="flex items-center cursor-pointer ">
                    <p className="font-light">Goals</p>
                    <Icon
                        className="h-5 m-5 hover:rotate-180 transition-all duration-2 delay-25 "
                        alt="Not Found"
                    />
                </li>
                <li className="flex items-center cursor-pointer">
                    <p className="font-light">Stock Clearance</p>
                    <Icon
                        className="h-5 m-5 hover:rotate-180 transition-all duration-2 delay-25 "
                        alt="Not Found"
                    />
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
