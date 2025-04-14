import Link from "next/link";
import Image from "next/image";

const OurApp = () => {
    return (
        <div>
            <h2 className="font-inter font-bold md:text-[17px] text-[14px] mb-3 pt-5 uppercase">Downlaod our app</h2>
            <div className="appbutton">
                <div className="flex flex-col items-start space-y-2">
                    <a href="your-app-store-link" className="flex items-center border gap-x-3 border-black-400  md:px-8 px-4 py-1 hover:border-[#3DB765] transition">
                        <Image
                            src="/images/appstore.png"
                            alt="About Page"
                            width={20}
                            height={20}
                        />
                        <span className="flex flex-col">
                            <span className="text-[10px] font-poppins font-normal">Download now</span>
                            <span className="font-medium">App Store</span>
                        </span>
                    </a>

                    <a href="your-app-store-link" className="flex items-center border gap-x-3 border-black-400 md:px-8 px-4 py-1 hover:border-[#3DB765] transition">
                        <Image
                            src="/images/playstore.png"
                            alt="About Page"
                            width={20}
                            height={20}
                        />
                        <span className="flex flex-col">
                            <span className="text-[10px] font-poppins font-normal">Download now</span>
                            <span className="font-medium">Play Store</span>
                        </span>
                    </a>

                    
                </div>
            </div>
        </div>
    );
};

export default OurApp;
