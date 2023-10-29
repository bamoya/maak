import { MdAccountBalance, MdOutlinePsychologyAlt } from "react-icons/md";
import { FaHandsPraying } from "react-icons/fa6";
import Link from "next/link";

const page = () => {
  return (
    <section className="text-gray-600 font-messiri body-font">
      <div className=" px-5 py-24 my-16 mx-auto  flex flex-wrap">
        <div className="lg:w-2/3 mx-auto">
          <div className="flex gap-5 flex-wrap justify-center items-center -mx-2">
            <div className="px-2 w-[300px] h-[200px] ">
              <div className="flex flex-wrap w-full bg-gray-100  p-5 h-full items-center justify-center  rounded-lg  relative">
                <MdAccountBalance
                  size={80}
                  className="absolute text-white -top-12 left-1/2 transform -translate-x-1/2 p-4 bg-amber-500  rounded-full   "
                />
                <div className="text-center relative z-10 w-full">
                  <h2 className="text-xl text-gray-900 text-center font-medium title-font mb-2">
                    التدخلات السيكواجتماعية والقانونية
                  </h2>
                  {/* <p className="leading-relaxed">
                    Skateboard +1 mustache fixie paleo lumbersexual.
                  </p> */}
                  <Link
                    href="/aide/category/legal"
                    className="mt-3 text-amber-500 text-right inline-flex items-center"
                  >
                    اقرأ المزيد
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="px-2 w-[300px] h-[200px] ">
              <div className="flex flex-wrap w-full bg-gray-100 p-5 h-full items-center justify-center rounded-lg  relative">
                {/* <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                  src="https://dummyimage.com/542x420"
                /> */}

                <MdOutlinePsychologyAlt
                  size={80}
                  className="absolute text-white -top-12 left-1/2 transform -translate-x-1/2 p-4 bg-amber-500  rounded-full   "
                />
                <div className="text-center relative z-10 w-full">
                  <h2 className="text-xl text-gray-900 text-center font-medium title-font mb-2">
                    التدخلات السيكولوجية و النفسية
                  </h2>
                  {/* <p className="leading-relaxed">
                    Skateboard +1 mustache fixie paleo lumbersexual.
                  </p> */}
                  <Link
                    href="/aide/category/psycho"
                    className="mt-3 text-right text-amber-500  inline-flex items-center"
                  >
                    اقرأ المزيد
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
