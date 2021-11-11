const HeaderItem = ({ title, Icon }) => {
    return (
        <div className="flex flex-col items-center cursor-pointer group w-14 sm:20w hover:text-white">
            <Icon className="h-10 w-5 group-hover:animate-pulse  " />
            <p className="opacity-0 group-hover:opacity-100 animate-bounce bg-black-50 font-light tracking-widest ">
                {title}
            </p>
        </div>
    );
};

export default HeaderItem;
