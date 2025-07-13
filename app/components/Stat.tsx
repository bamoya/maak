import { AiOutlineMan, AiOutlineWoman } from "react-icons/ai";

const Stat: React.FC = () => {
  return (
    <section className="text-gray-600 bg-gray-50 py-16 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-6xl text-2xl font-medium  title-font text-gray-900">
            احصائيات
          </h1>
          <p className="lg:w-2/3 text-center  mt-5 mx-auto leading-relaxed text-lg">
            أوضح تقرير أمني للنيابة العامة، صدر سنة 2022 عن تعرض 1.5 مليون ضحية
            للابتزاز الجنسي. ومنذ يوليوز 2023، أعلن المركز المغربي للحماية من
            الابتزاز الإلكتروني أن 23.10 بالمئة من حالات العنف السيبيراني هي
            عبارة عن ابتزاز وتحرش جنسي، وهو رقم كبير
          </p>
        </div>
        <div className="flex flex-wrap justify-center -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 bg-white text-center shadow-md border-gray-200 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="text-amber-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                1.5 M
              </h2>
              <p className="leading-relaxed">شخص</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 bg-white text-center  shadow-md border-gray-200 px-4 py-6 rounded-lg">
              <AiOutlineWoman className="text-orange-500 w-12 h-12 mb-3 inline-block" />
              {/* <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="text-amber-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
              </svg> */}
              <h2 className="title-font font-medium text-3xl text-gray-900">
                80%
              </h2>
              <p className="leading-relaxed">امرأة</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 bg-white text-center shadow-md border-gray-200 px-4 py-6 rounded-lg">
              <AiOutlineMan className="text-amber-500 w-12 h-12 mb-3 inline-block" />

              <h2 className="title-font font-medium text-3xl text-gray-900">
                10%
              </h2>
              <p className="leading-relaxed">رجل</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stat;
