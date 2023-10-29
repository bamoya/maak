import Image from "next/image";
import Link from "next/link";
import { BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";

const social = {
  instagram: "https://www.instagram.com/maaknet4/",
  facebook: "https://web.facebook.com/maak.net4",
};

const company = {
  name: "dima m3ak",
  logo: "/images/logo.png",
};

const Footer = () => {
  return (
    <div className="text-gray-600 bg-gray-100 border-t-2 border-gray-300 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link
          href={"#"}
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
        >
          <Image
            alt={company.name}
            width={100}
            height={60}
            src={company.logo}
          />
          {/* <span className="ml-3 text-xl">{company.name}</span> */}
        </Link>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © {new Date().getFullYear()}
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link href={social.facebook} className="text-gray-500 ">
            <BiLogoFacebook className="w-8 h-8 text-gray-500" />
          </Link>
          <Link href={social.instagram} className="ml-3 text-gray-500">
            <BiLogoInstagram className="w-8 h-8 text-gray-500" />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
