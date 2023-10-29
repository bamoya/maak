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
    <section className="text-gray-600  bg-gray-50 body-font">
      <div className="container px-5 bg-white rounded-md shadow-md mb-12 py-12 mx-auto">
        <h1 className="text-center text-gray-900 text-6xl mb-10">
          ماذا نقدم لك
        </h1>
        <div className="flex flex-wrap gap-5  items-center justify-center">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className={`p-4 bg-[url('/images/cat-1.png')] shadow-md   rounded-lg lg:w-1/4`}
            >
              <div className="h-full  flex flex-col justify-center items-center px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                CATEGORY
              </h2> */}
                <div className="bg-gray-100 bg-opacity-50 px-6 py-3 rounded-lg">
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    {category.title}
                  </h1>
                  <Link
                    href={category.url}
                    className="text-amber-600 inline-flex items-center"
                  >
                    {category.button}
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
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
