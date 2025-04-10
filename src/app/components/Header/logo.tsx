import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return (
        <Link href="/">

        <Image
            src="/images/logo.png"
            alt="About Page"
            width={169}
            height={53}
        />

    </Link>
    );
};

export default Logo;
