import Link from "next/link";

const TopCategories = () => {
  return (
    <div>
      <h2 className="font-inter font-bold text-[17px] mb-3 pt-5 uppercase">Top 4 Category</h2>
      <ul className="list-none mt-2 font-poppins">
        <li className="mb-2">
          <Link className="text-[14px] hover:text-[#3DB765]"  href="/">
          Development
          </Link>
        </li>
        <li className="mb-2">
          <Link className="text-[14px] hover:text-[#3DB765]" href="/">
          Finance & Accounting
          </Link>
        </li>
        <li className="mb-2">
          <Link className="text-[14px] hover:text-[#3DB765]" href="/">
          Design
          </Link>
        </li>
        <li className="mb-2">
          <Link className="text-[14px] hover:text-[#3DB765]" href="/">
          Business
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TopCategories;
