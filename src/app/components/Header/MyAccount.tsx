import Link from "next/link";

type MyAccountProps = {
  toggleRightPanel?: () => void;
};

const MyAccount = ({ toggleRightPanel }: MyAccountProps) => {
  return (
    <div className="flex font-inter gap-3 md:flex-row flex-col">
      <Link
        href="/"
        className="text-[16px] font-normal text-white py-3 px-5 bg-[#3DB765] hover:bg-black transition"
        onClick={toggleRightPanel}
      >
        Create Account
      </Link>
      <Link
        href="/login"
        className="text-[16px] font-normal text-white py-3 px-5 bg-black hover:bg-[#3DB765] transition"
        onClick={toggleRightPanel}
      >
        Sign In
      </Link>
    </div>
  );
};

export default MyAccount;
