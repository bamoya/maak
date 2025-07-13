import Link from "next/link";
import { Landmark, BrainCircuit, ArrowLeft, ArrowRight } from "lucide-react";

const helpCategories = [
  {
    title: "التدخلات القانونية",
    href: "/aide/category/legal",
    Icon: Landmark, // Assigning the component directly
  },
  {
    title: "التدخلات النفسية",
    href: "/aide/category/psycho",
    Icon: BrainCircuit, // Assigning the component directly
  },
];

const AidePage = () => {
  return (
    <section className="text-gray-600 container px-5 py-16 mx-auto font-messiri body-font">
      {/* Back Button */}
      <div className="text-amber-500 mb-5">
        <Link
          href="/"
          className="border-amber-500 border w-fit p-4 rounded-full inline-block"
          aria-label="Return to homepage"
        >
          <ArrowLeft size={25} />
        </Link>
      </div>

      {/* Categories Section */}
      <div className="px-5 py-24 my-16 mx-auto flex flex-wrap">
        <div className="lg:w-2/3 mx-auto">
          <div className="flex gap-5 flex-wrap justify-center items-center -mx-2">
            {/* Loop over the categories array to create cards dynamically */}
            {helpCategories.map((category) => (
              <div key={category.href} className="px-2 w-[300px] h-[200px]">
                <div className="flex flex-wrap w-full bg-gray-100 p-5 h-full items-center justify-center rounded-lg relative">
                  {/* Render the icon component from the data object */}
                  <category.Icon
                    size={80}
                    className="absolute text-white -top-12 left-1/2 transform -translate-x-1/2 p-4 bg-amber-500 rounded-full"
                    strokeWidth={1.5}
                  />
                  <div className="text-center relative z-10 w-full">
                    <h2 className="text-xl text-gray-900 text-center font-medium title-font mb-2">
                      {category.title}
                    </h2>
                    <Link
                      href={category.href}
                      className="mt-3 text-amber-500 text-right inline-flex items-center group"
                    >
                      اقرأ المزيد
                      <ArrowRight className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AidePage;