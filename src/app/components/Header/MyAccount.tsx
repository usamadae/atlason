import Link from "next/link";
const MyAccount = () => {
    return (
       <>
       <div className="flex font-inter gap-3">
        <Link className="text-[16px] font-normal text-white py-3 px-5 bg-[#3DB765] hover:bg-black transition" href='/'>
        Create Account
        </Link>
        <Link className="text-[16px] font-normal text-white py-3 px-5 bg-black hover:bg-[#3DB765] transition" href='/login'>
        Sign In
        </Link>
       </div>
       </>
    );
};

export default MyAccount;
