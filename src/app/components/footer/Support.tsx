import Link from "next/link";

const Support = () => {
  return (
    <div>
      <h2 className="font-inter font-bold text-[17px] pt-5 mb-3 uppercase">Support</h2>
      <ul className="list-none mt-2 font-poppins">
        <li className="mb-2">
          <Link className="text-[14px] hover:text-[#3DB765]" href="/">
          Help Center
          </Link>
        </li>
        <li className="mb-2">
          <Link className="text-[14px] hover:text-[#3DB765]" href="/">
          FAQs
          </Link>
        </li>
        <li className="mb-2">
          <Link className="text-[14px] hover:text-[#3DB765]" href="/">
          Terms & Condition
          </Link>
        </li>
        <li className="mb-2">
          <Link className="text-[14px] hover:text-[#3DB765]" href="/">
          Privacy Policy
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Support;
