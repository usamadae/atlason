import Logo from "./logo";
import BrowseCategory from "./BrowseCategory";
import SearchField from "./SearchField";
import HeaderIcon from "./HeaderIcon";
import MyAccount from "./MyAccount";

const Header = () => {
    return (
        <>
            <header className="bg-[#F7F7F7] py-[20px]">
                <div className="container mx-auto">
                    <div className="flex">
                        <div className="w-[50%] flex justify-center gap-x-5  items-center justify-items-start">
                            <div className="w-auto">
                                <Logo />
                            </div>
                            <div className="w-auto">
                                <BrowseCategory />
                            </div>
                            <div className="w-auto">
                                <SearchField />
                            </div>



                        </div>
                        <div className="w-[50%] flex  gap-x-5 items-center justify-end">
                            <div className="w-auto ">
                                <HeaderIcon />
                            </div>
                            <div className="w-auto">
                                <MyAccount />
                            </div>
                            <div className="w-auto hidden">

                            </div>



                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
