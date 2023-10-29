import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

const page = () => {
  return (
    <section className="text-gray-600 font-messiri body-font">
      <div className="container px-5 py-28 mx-auto">
        <div className=" w-full mx-auto text-center">
          <div className="text-amber-500 text-right mb-5 justify-center border-amber-500 border w-fit p-4 rounded-full ">
            <Link href={"/stories"}>
              <BiArrowBack size={25} />
            </Link>
          </div>
          <h1 className="font-bold text-5xl text-center pb-5">
            تجربتي مع الابتزاز الجنسي الرقمي{" "}
          </h1>
          <p className="leading-relaxed text-right text-lg">
            «أردت أن أشارك تجربتي مع الابتزاز الجنسي الرقمي الذي تعرضت له، لكي
            أساهم في إلهام ودعم الآخرين. من المهم جدًا التحدث عن تجربتك مع مُشكل
            ما واجهك في الحياة، لأنك لا تعرف أبدًا من الذي يعاني ويحتاج إلى بعض
            الطاقة الإيجابية للتغلب على اليوم التالي.» مريم، 25 سنة «لقد كانت من
            أصعب الأوقات التي مررت بها في حياتي، أن تتلقى أبشع خيانة من شخص وثقت
            فيه. لم أكن أتوقع يوما أن من كنت أعتبره منبع أمان لي سيبتزني ويمس
            بكرامتي وسمعتي. لكني أعترف أنني أخطأت عندما قررت الوثوق بشخص لا
            أعرفه، وسمحت له بالدخول إلى حياتي. لذا، فإذا كنت في موقع أن أقدم
            نصيحة لأحد ما فستكون أن يلتزم الحذر في التعامل مع الفضاء الرقمي،
            وعدم الوثوق بأي شخص.»
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
