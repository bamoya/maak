import Image from "next/image";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

const page = () => {
  return (
    <section className="text-gray-600 font-messiri body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className=" w-full mx-auto text-center">
          <div className="text-amber-500 text-right mb-5 justify-center border-amber-500 border w-fit p-4 rounded-full ">
            <Link href={"/aide/category"}>
              <BiArrowBack size={25} />
            </Link>
          </div>
          <h1 className="font-bold text-5xl text-center -mt-4 pb-5">
            لست لوحدك
          </h1>
          <p className="leading-relaxed text-right text-lg">
            قد يكون اختبار رسائل أو مُكالمات تبتزك جنسيا أمرا صعبا للغاية من
            الناحية النفسية. لذلك نُريدك أن تعلم بداية أنك لست لوحدك، نحن معك
            وهنا لمُساعدتك
          </p>
          <h1 className=" text-right font-semibold text-xl text-green-600 pt-5">
            ما أهمية الصحة النفسية في هذه الحالة؟
          </h1>
          <p className="leading-relaxed text-right text-lg">
            باختصار، فإن صحتك النفسية مهمة جدا، فبمقدور النفسية الجيدة أن تكون
            سببا رئيسيا في سعادتك ورفاهك، وعاملا قويا يُمكنك من مواجهة ضغوطات
            الحياة. بينما في المُقابل، قد تؤدي الصحة النفسية المريضة والهشة إلى
            جعل الأمور أكثر تعقيدا وصعوبة بالنسبة لك، وكما يقولون، فإن "الخوف
            نصف المرض" لذا حاول أن تُحافظ على هدوء واستقرار حالتك النفسية
          </p>
          <h1 className=" text-right font-semibold text-xl text-green-600  pt-5">
            هنا بعض النصائح التي قد تساعدك في الحفاظ على سلامة صحتك النفسية
          </h1>
          <ul className="leading-relaxed  text-right text-lg ">
            <li className="text-right">
              <span className="font-semibold">عبر عن نفسك: </span>
              لا تدع أحاسيسك وأفكارك حبيسة ذهنك، بل حاول أن تخرجها وتعبر عنها.
              لك كامل الحرية في اختيار أسلوبك المُفضل في التعبير، ك: الكتابة في
              مُذكرتك الخاصة، التحدث مع نفسك، أو مع صديق أو قريب لك، مُمارسة
              الرياضة، الحصول على وقت من التأمل، الغناء
            </li>
            <li className="text-right">
              <span className="font-semibold"> تحدث مع شخص تثق فيه: </span>حاول
              أن تتحدث عما تمر به مع شخص تثق فيه، شريطة أن يكون هذا الشخص مُنصتا
              وجليسا جيدا. سيسمح لك ذلك بالتفريغ عن الشحنة السلبية التي بداخلك،
              والشعور بالدعم وبارتياح نفسي
            </li>
            <li className="text-right">
              <span className="font-semibold">
                {" "}
                ابحث عن معلومات وإرشادات حول الصحة النفسية:{" "}
              </span>
              لكي تكون قادرا على فهم كيفية التعامل مع صحتك النفسية بشكل جيد، لا
              بد من تثقيف نفسك وتعلم بعض الإرشادات حول الصحة النفسية التي
              بإمكانها مُساعدتك على تجاوز الضغوطات والعراقيل من هذا النوع
            </li>
            <li className="text-right">
              <span className="font-semibold">
                {" "}
                اقرأ عن تجارب أشخاص آخرين تعرضوا للابتزاز الجنسي:{" "}
              </span>
              معرفة أنك لست الوحيد الذي مر أو يمر من هذا الموقف قد يُساعد في
              التخفيف من مشاعر الخوف والقلق الذي تشعر به. لذا لا تبخل على نفسك
              بالبحث والتواصل للتعرف على التجارب التي عاشها أشخاص آخرين وقعوا
              ضحية للابتزاز الجنسي أو نوع آخر من العنف السيبيراني
            </li>
            <li className="text-right">
              <span className="font-semibold">
                {" "}
                امنح نفسك الوقت والمجال للراحة والاسترخاء:{" "}
              </span>
              في مثل هذا الموقف، احرص على أن تنعم بالقسط الكافي من الراحة
              والاسترخاء، سيُمكنك ذلك من الحفاظ على استقرارك الذهني، وبالتالي،
              ترتيب أفكارك ومعرفة كيفية التعامل مع الوضع بأكثر حكمة
            </li>
            <li className="text-right">
              <span className="font-semibold">
                {" "}
                تحد الخرافات وساهم في زيادة التوعية:{" "}
              </span>
              لا تنسى أنك لست الوحيد الذي مر أو يمر بهذا المُشكل، فالكثير من
              الأشخاص قد يقعون ضحية للابتزاز الجنسي الرقمي، لذا حاول أن تجعل من
              تجربتك نموذجا لتوعية الآخرين حول ظاهرة الابتزاز الجنسي الرقمي
              ومخاطرها
            </li>
          </ul>
          <p className="leading-relaxed text-right text-lg pt-5">
            إذا كنت تشعر بأنك في حاجة للدعم النفسي لا تتردد في التواصل مع
            أخصائيينا النفسانيين من خلال مسح الماسح الضوئي لرمز الاستجابة
            السريعة الموجود الآتي، أو عبر النقر على الرابط الموجود أسفله
          </p>

          <div className="leading-relaxed font-semibold text-amber-500 text-center text-lg pt-24">
            <h1>
              عقب شراكتنا مع خلية الدعم النفسي بكلية علوم التربية يمكنك
              الاستفادة من خدمات المساعدة النفسية و الاجتماعية من خلال النقر على
              الرابط اسفله أو عبر مسح الرمز
            </h1>
            <div className="flex gap-5 justify-center  pt-5 items-center">
              <Link href={"https://cutt.ly/cspfse"} className="text-gray-800 ">
                https://cutt.ly/cspfse
              </Link>
              <Image
                src="/images/qr.jpeg"
                width={150}
                height={150}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
