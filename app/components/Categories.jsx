import Link from "next/link";

const categories = [
  {
    title: "هل تحتاج المساعدة",
    button: "اضغط لقراءة المزيد",
    url: "/aide",
    img: "/images/cat-1.jpeg",
  },
  {
    title: "مساعدة اجتماعية و قضائية",
    button: "اضغط لقراءة المزيد",
    url: "/aide/category",
    img: "/images/cat-2.jpeg",
  },
  {
    title: "شارك تجربتك مع الناس",
    button: "اضغط لقراءة المزيد",
    url: "/experience",
    img: "/images/cat-3.jpeg",
  },
  {
    title: "قراءة تجارب الاخرين",
    button: "اضغط لقراءة المزيد",
    url: "/stories",
    img: "/images/cat-4.jpeg",
  },
  {
    title: "مستجدات",
    button: "اضغط لقراءة المزيد",
    url: "/news",
    img: "/images/cat-5.jpeg",
  },
];

function Categories() {
  return (
    <section
      id="cat"
      className="text-gray-600  bg-gray-50 pt-24  pb-12 body-font"
    >
      <div className="container px-5 bg-white rounded-md shadow-md  py-12 mx-auto">
        <h1 className="text-center text-gray-900 text-6xl mb-10">
          ماذا نقدم لك
        </h1>
        <div className="flex flex-wrap gap-5  items-center justify-center">
          <div
            className={`p-4 bg-[url('/images/cat-1.png')] shadow-md bg-center  rounded-lg lg:w-1/4`}
          >
            <div className="h-full  flex flex-col justify-center items-center px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                CATEGORY
              </h2> */}
              <div className="bg-gray-100 bg-opacity-50 px-6 py-3 rounded-lg">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 pb-3">
                  دليل المساعدة
                </h1>
                <Link
                  href={"/aide"}
                  className="text-amber-600 inline-flex items-center"
                >
                  اضغط لقراءة المزيد
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
              </div>

              {/* <p className="leading-relaxed mb-3">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p> */}
            </div>
          </div>

          <div
            className={`p-4 bg-[url('/images/cat-2.png')] shadow-md  bg-center rounded-lg lg:w-1/4`}
          >
            <div className="h-full  flex flex-col justify-center items-center px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                CATEGORY
              </h2> */}
              <div className="bg-gray-100 bg-opacity-50 px-6 py-3 rounded-lg">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  مساعدة نفسية و قانونية
                </h1>
                <Link
                  href={"/aide/category"}
                  className="text-amber-600 inline-flex items-center"
                >
                  اضغط لقراءة المزيد
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
              </div>

              {/* <p className="leading-relaxed mb-3">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p> */}
            </div>
          </div>

          <div
            className={`p-4 bg-[url('/images/cat-3.png')] shadow-md  bg-center rounded-lg lg:w-1/4`}
          >
            <div className="h-full  flex flex-col justify-center items-center px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                CATEGORY
              </h2> */}
              <div className="bg-gray-100 bg-opacity-50 px-6 py-3 rounded-lg">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  شارك تجربتك مع الناس
                </h1>
                <Link
                  href={"/experience"}
                  className="text-amber-600 inline-flex items-center"
                >
                  اضغط لقراءة المزيد
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
              </div>

              {/* <p className="leading-relaxed mb-3">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p> */}
            </div>
          </div>

          <div
            className={`p-4 bg-[url('/images/cat-4.png')] shadow-md bg-center  rounded-lg lg:w-1/4`}
          >
            <div className="h-full  flex flex-col justify-center items-center px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                CATEGORY
              </h2> */}
              <div className="bg-gray-100 bg-opacity-50 px-6 py-3 rounded-lg">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  قراءة تجارب الاخرين
                </h1>
                <Link
                  href={"/stories"}
                  className="text-amber-600 inline-flex items-center"
                >
                  اضغط لقراءة المزيد
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
              </div>

              {/* <p className="leading-relaxed mb-3">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p> */}
            </div>
          </div>

          <div
            className={`p-4 bg-[url('/images/cat-5.png')] shadow-md  bg-center rounded-lg lg:w-1/4`}
          >
            <div className="h-full  flex flex-col justify-center items-center px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                CATEGORY
              </h2> */}
              <div className="bg-gray-100 bg-opacity-50 px-6 py-3 rounded-lg">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  مستجدات
                </h1>
                <Link
                  href={"/news"}
                  className="text-amber-600 inline-flex items-center"
                >
                  اضغط لقراءة المزيد
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
              </div>

              {/* <p className="leading-relaxed mb-3">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
