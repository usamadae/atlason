// components/footer/footer.tsx
import TopCategories from './TopCategories'; // Adjust path as necessary
import QuickLinks from './QuickLinks';
import Support from './Support';
import OurApp from './OurApp';
import Copyright from './copyright';
import Image from 'next/image';
import Link from 'next/link';

interface FooterProps {
  categories: { id: number; categoryName: string }[]; // Define the type of categories you are passing
}

const Footer = ({ categories }: FooterProps) => {
  return (
    <>
      <footer className="bg-[#F7F7F7] md:py-[60px] py-[40px]">
        <div className="container mx-auto px-5">
          <div className="flex lg:flex-nowrap flex-wrap gap-y-5">
            <div className="w-full lg:w-[32%]">
              <Link href="/">
                <Image src="/images/logo.png" alt="About Page" width={169} height={53} />
              </Link>
              <p className="font-inter text-[14px] mt-3 leading-[24px] w-[75%]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <div className="social">
                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#"><i className="fa-brands fa-square-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-youtube"></i></a>
              </div>
            </div>

            <div className="lg:w-[17%] md:w-[25%] w-[50%]">
              {/* Pass categories to TopCategories */}
              <TopCategories categories={categories} />
            </div>

            <div className="lg:w-[17%] md:w-[25%] w-[50%]">
              <QuickLinks />
            </div>
            <div className="lg:w-[17%] md:w-[25%] w-[50%]">
              <Support />
            </div>
            <div className="lg:w-[17%] md:w-[25%] w-[50%]">
              <OurApp />
            </div>
          </div>
        </div>
      </footer>
      <Copyright />
    </>
  );
};

export default Footer;
