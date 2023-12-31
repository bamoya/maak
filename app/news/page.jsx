import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

const page = () => {
  return (
    <section className="text-gray-600 font-messiri body-font overflow-hidden">
      <div className="container px-5 py-32 mx-auto">
        <div className="text-amber-500 text-right mb-8 justify-center border-amber-500 border w-fit p-4 rounded-full ">
          <Link href={"/"}>
            <BiArrowBack size={25} />
          </Link>
        </div>
        <div className="flex text-right flex-wrap -m-12">
          <div className="p-12 md:w-1/2 text-right flex flex-col items-start">
            <span className="inline-block py-1 px-2  items-end rounded bg-amber-50 text-amber-500 text-xs font-medium tracking-widest">
              هكاثون
            </span>
            <h2 className="sm:text-3xl text-2xl w-full title-font font-medium text-gray-900 mt-4 mb-4">
              Hackathon العنف السيبيراني{" "}
            </h2>
            <p className="leading-relaxed mb-8">
              تنظم اللجنة الجهوية لحقوق الإنسان الرباط- سلا- القنيطرة، بشراكة مع
              المعهد العالي للإعلام والاتصال النسخة الأولى من برنامج هاكاتون
              Hackathon تحت عنوان العنف السيبيراني
            </p>
            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
              <Link
                href={"/news/1"}
                className="text-amber-500 inline-flex items-center"
              >
                اقرأ المزيد
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
                6
              </span>
            </div>
          </div>
          <div className="p-12 md:w-1/2 text-right flex flex-col items-start">
            <span className="inline-block py-1 px-2 rounded bg-amber-50 text-amber-500 text-xs font-medium tracking-widest">
              ندوة
            </span>
            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
              ندوة حول موضوع تطور أشكال الابتزاز السيبراني وسبل التصدي لها
            </h2>
            <p className="leading-relaxed mb-8">
              تنظم المؤسسة جمعية الامان ندوة حول موضوع تطور أشكال الابتزاز
              السيبراني وسبل التصدي لها وذلك يوم 4 نونبر 2023 على
              الساعة 10:00 صباحا
            </p>
            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
              <Link
                href={"/news/2"}
                className="text-amber-500 inline-flex items-center"
              >
                اقرأ المزيد
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
