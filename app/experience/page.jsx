import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

const page = () => {
  return (
    <div className="container mx-auto py-24">
      <div className="text-amber-500 text-right mb-5 justify-center border-amber-500 border w-fit p-4 rounded-full ">
        <Link href={"/"}>
          <BiArrowBack size={25} />
        </Link>
      </div>
      <div className="flex flex-col font-messiri h-full justify-center items-center ">
        <h1 className="text-center  text-gray-900 text-6xl mb-10">
          شارك تجربتك مع الناس
        </h1>
        <div className="relative flex-col  items-center justify-end mb-4 w-1/2">
          <label className="leading-7 inline-block  text-right w-full text-sm text-gray-600">
            العنوان
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="w-full bg-white text-right rounded border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4 w-1/2">
          <label className="leading-7 inline-block  text-right w-full text-sm text-gray-600">
            الموضوع
          </label>

          <textarea
            className="w-full bg-white text-right rounded border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            id="w3review"
            name="w3review"
            rows="4"
            cols="50"
          ></textarea>
        </div>
        <button className="text-white bg-amber-500 border-0 py-2 px-6 focus:outline-none hover:bg-amber-600 rounded text-lg">
          أنشر
        </button>
      </div>
    </div>
  );
};

export default page;
