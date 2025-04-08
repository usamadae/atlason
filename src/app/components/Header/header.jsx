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
                <div className="w-33%">
                <Logo/>
                </div>
                <div className="w-33%">
                <BrowseCategory/>
                </div>
                <div className="w-33%">
                <SearchField/>
                </div>



            </div>
            <div className="w-[50%] flex  gap-x-5 items-center justify-end">
                <div className="w-33%">
               <HeaderIcon/>
                </div>
                <div className="w-33%">
         <MyAccount />
                </div>
                <div className="w-33%">
         
                </div>



            </div>
        </div>
       </div>
       </header>
       </>
    );
};

export default Header;
