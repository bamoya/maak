import Link from "next/link";

const page = () => {
  return (
    <section className="text-gray-600 font-messiri body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="mt-1 text-gray-500 text-sm">12 Jun 2023</span>
            </div>
            <div className="md:flex-grow text-right">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                كانت حياتي عادية قبل هذا اليوم المشؤوم
              </h2>
              <p className="leading-relaxed">
                كانت حياتي عادية قبل هذا اليوم المشؤوم. كنت أشارك صوري الشخصية
                مع صديق واحد فقط على تطبيق المراسلة، ولكن هذا الصديق انتهك الثقة
                وبدأ في نشر تلك الصور بدون إذني. لم يكن لدي خيار سوى أن أواجه
                هذا الواقع المرير
              </p>
              <Link
                href={"/stories/1"}
                className="text-amber-500 inline-flex items-center mt-4"
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
            </div>
          </div>
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="mt-1 text-gray-500 text-sm">31 Junary 2023</span>
            </div>
            <div className="md:flex-grow text-right">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                كنت فتاة شابة تعيش حياة عادية حتى حل ظلام الابتزاز
              </h2>
              <p className="leading-relaxed">
                أنا لينا، كنت فتاة شابة تعيش حياة عادية حتى حل ظلام الابتزاز
                الجنسي الإلكتروني في حياتي. بدأت تلك الرسائل المزعجة تظهر في
                هاتفي وكانت كلماتها تثير الرعب في قلبي. لكني لم أفقد الأمل
              </p>
              <Link
                href={"/stories/2"}
                className="text-amber-500 inline-flex items-center mt-4"
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
            </div>
          </div>
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="text-sm text-gray-500">1 May 2022</span>
            </div>
            <div className="md:flex-grow text-right">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                أشارك تجربتي مع الابتزاز الجنسي الرقمي
              </h2>
              <p className="leading-relaxed">
                أردت أن أشارك تجربتي مع الابتزاز الجنسي الرقمي الذي تعرضت له،
                لكي أساهم في إلهام ودعم الآخرين. من المهم جدًا التحدث عن تجربتك
                مع مُشكل ما واجهك في الحياة، لأنك لا تعرف أبدًا من الذي يعاني
                ويحتاج إلى بعض الطاقة الإيجابية للتغلب على اليوم التالي
              </p>
              <Link
                href={"/stories/3"}
                className="text-amber-500 inline-flex items-center mt-4"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
