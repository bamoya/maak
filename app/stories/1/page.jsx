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
            كانت حياتي عادية قبل هذا اليوم المشؤوم{" "}
          </h1>
          <p className="leading-relaxed text-right text-lg">
            كانت حياتي عادية قبل هذا اليوم المشؤوم. كنت أشارك صوري الشخصية مع
            صديق واحد فقط على تطبيق المراسلة، ولكن هذا الصديق انتهك الثقة وبدأ
            في نشر تلك الصور بدون إذني. لم يكن لدي خيار سوى أن أواجه هذا الواقع
            المرير تم تهديدي بنشر المزيد من الصور إذا لم ألبي طلبات المتحرش. كان
            الخوف يسيطر علي وكنت أشعر بالعجز. لكنني قررت أن لا أستسلم للابتزاز
            تحدثت مع والدي وكانا داعمين بشكل كبير. ساعدوني في التواصل مع الشرطة
            ومتخصصين في سلامة الإنترنت. كانوا هناك لدعمي وتقديم المشورة بعد
            تحقيق شامل، تم التعرف على المتحرش وتم اتخاذ الإجراءات القانونية ضده.
            شعرت بالإعتصام وبدأت أستعيد حياتي اليوم، أنا هنا لأشارك قصتي من أجل
            توعية الآخرين بأهمية السلامة الرقمية والمساهمة في منع حوادث الابتزاز
            الجنسي عبر الإنترنت
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
