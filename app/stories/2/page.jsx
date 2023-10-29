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
            كنت فتاة شابة تعيش حياة عادية حتى حل ظلام{" "}
          </h1>
          <p className="leading-relaxed text-right text-lg">
            أنا لينا، كنت فتاة شابة تعيش حياة عادية حتى حل ظلام الابتزاز الجنسي
            الإلكتروني في حياتي. بدأت تلك الرسائل المزعجة تظهر في هاتفي وكانت
            كلماتها تثير الرعب في قلبي. لكني لم أفقد الأمل قررت التحدث مع والدي
            والبحث عن المساعدة. كانوا دعمًا كبيرًا بالنسبة لي وساعدوني في
            الاتصال بالشرطة الإلكترونية. قدموا لهم كل التفاصيل التي كانت لدي حول
            هذا المتحرش الغامض في الوقت نفسه، قررت تعزيز سلامتي الرقمية. قمت
            بتغيير كلمات المرور وتحسين إعدادات الخصوصية على حساباتي على وسائل
            التواصل الاجتماعي. كنت مصممة على تجنب مثل هذه الأمور في المستقبل بعد
            مضي بعض الوقت، تم التعرف على المتحرش وتم اتخاذ الإجراءات القانونية
            ضده. أخيرًا، شعرت بالراحة والأمان. اليوم، أنا هنا لأشارك قصتي
            ومعرفتي لمساعدة الآخرين في فهم أهمية السلامة الرقمية والوقوف ضد
            الابتزاز الجنسي عبر الإنترنت
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
