import Link from "next/link";
import Image from "next/image";

const OurApp = () => {
    return (
        <div>
            <h2 className="font-inter font-bold text-[17px] mb-3 pt-5 uppercase">Downlaod our app</h2>
            <div className="appbutton">
                <div class="flex flex-col items-start space-y-2">
                    <a href="your-app-store-link" class="flex items-center border gap-x-3 border-black-400  px-8 py-1 hover:border-[#3DB765] transition">
                        <Image
                            src="/images/appstore.png"
                            alt="About Page"
                            width={20}
                            height={20}
                        />
                        <span className="flex flex-col">
                            <span class="text-[10px] font-poppins font-normal">Download now</span>
                            <span class="font-medium">App Store</span>
                        </span>
                    </a>

                    <a href="your-app-store-link" class="flex items-center border gap-x-3 border-black-400  px-8 py-1 hover:border-[#3DB765] transition">
                        <Image
                            src="/images/playstore.png"
                            alt="About Page"
                            width={20}
                            height={20}
                        />
                        <span className="flex flex-col">
                            <span class="text-[10px] font-poppins font-normal">Download now</span>
                            <span class="font-medium">Play Store</span>
                        </span>
                    </a>

                    
                </div>
            </div>
        </div>
    );
};

export default OurApp;
