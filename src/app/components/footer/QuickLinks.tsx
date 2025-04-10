import Link from "next/link";

const QuickLinks = () => {
  return (
    <div>
      <h2 className="font-inter font-bold text-[17px] pt-5 mb-3 uppercase">Quick Links</h2>
      <ul className="list-none mt-2 font-poppins">
        <li className="mb-2">
          <Link className="text-[14px] hover:text-[#3DB765]" href="/">
          About
          </Link>
        </li>
        <li className="mb-2">
          <Link className="text-[14px] hover:text-[#3DB765]" href="/">
          Become Instructor
          </Link>
        </li>
        <li className="mb-2">
          <Link className="text-[14px] hover:text-[#3DB765]" href="/">
          Contact
          </Link>
        </li>
        <li className="mb-2">
          <Link className="text-[14px] hover:text-[#3DB765]" href="/">
          Career
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;
