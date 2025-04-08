import TopCategories from './TopCategories';
import QuickLinks from './QuickLinks';
import Support from './Support';
import OurApp from './OurApp';
import Copyright from './copyright';
import Image from 'next/image';
import Link from 'next/link';


const Footer = () => {
    return (
        <>
        <footer className='bg-[#F7F7F7] py-[60px]'>
            <div className="container mx-auto">
                <div className="flex">
                    <div className="w-[32%] ">


                        <Link href="/">

                            <Image
                                src="/images/logo.png"
                                alt="About Page"
                                width={169}
                                height={53}
                            />

                        </Link>
                        <p className="font-inter text-[14px] mt-3  leading-[24px] w-[75%]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <div className="social">

                            <a href="#">
                                <i class="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="#">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                            <a href="#">
                                <i class="fa-brands fa-linkedin-in"></i>
                            </a>
                            <a href="#">
                                <i class="fa-brands fa-square-twitter"></i>
                            </a>
                            <a href="#">
                                <i class="fa-brands fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                    <div className="w-[17%]">
                    <TopCategories />
                    </div>
                    <div className="w-[17%]">
                    <QuickLinks />
                    </div>
                    <div className="w-[17%]">
                    <Support/>
                    </div>
                    <div className="w-[17%]">
                  <OurApp/>
                    </div>
                </div>
            
                
            </div>
     

        </footer>
             <Copyright/>
             </>
    );
};

export default Footer;
