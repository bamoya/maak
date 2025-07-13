import Link from "next/link";

interface Category {
  title: string;
  url: string;
  imageUrl: string;
}

const categories: Category[] = [
  {
    title: "دليل المساعدة",
    url: "/aide",
    imageUrl: "/images/cat-1.png",
  },
  {
    title: "مساعدة نفسية و قانونية",
    url: "/aide/category",
    imageUrl: "/images/cat-2.png",
  },
  {
    title: "شارك تجربتك مع الناس",
    url: "/experience",
    imageUrl: "/images/cat-3.png",
  },
  {
    title: "قراءة تجارب الاخرين",
    url: "/stories",
    imageUrl: "/images/cat-4.png",
  },
  {
    title: "مستجدات",
    url: "/news",
    imageUrl: "/images/cat-5.png",
  },
];

const Categories: React.FC = () => {
  return (
    <section
      id="cat"
      className="text-gray-600  bg-gray-50 pt-24  pb-12 body-font"
    >
      <div className="container px-5 bg-white rounded-md shadow-md  py-12 mx-auto">
        <h1 className="text-center text-gray-900 text-4xl sm:text-6xl mb-10">
          ماذا نقدم لك
        </h1>
        <div className="flex flex-wrap gap-5  items-center justify-center">
          {categories.map((category) => (
            <div
              key={category.url}
              className="p-4 bg-cover shadow-md bg-center rounded-lg lg:w-1/4"
              style={{ backgroundImage: `url(${category.imageUrl})` }}
            >
              <div className="h-full flex flex-col justify-center items-center px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <div className="bg-gray-100 bg-opacity-50 px-6 py-3 rounded-lg">
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 pb-3">
                    {category.title}
                  </h1>
                  <Link
                    href={category.url}
                    className="text-amber-600 inline-flex items-center"
                  >
                    اضغط لقراءة المزيد
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
