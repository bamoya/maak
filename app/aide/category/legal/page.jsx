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
          <h1 className="font-bold text-5xl text-center pb-5">
            التدخلات السيكواجتماعية والقانونية
          </h1>
          {/* <p className="leading-relaxed text-right text-lg">
            قد يكون اختبار رسائل أو مُكالمات تبتزك جنسيا أمرا صعبا للغاية من
            الناحية النفسية. لذلك نُريدك أن تعلم بداية أنك لست لوحدك، نحن معك
            وهنا لمُساعدتك
          </p> */}
          <h1 className=" text-right font-semibold text-xl text-green-600 pt-5">
            هل تعلم؟
          </h1>
          <p className="leading-relaxed text-right text-lg">
            أن القوانين الدولية والوطنية تحمي من جميع انواع العنف ولا سيما العنف
            الرقمي؟ (الابتزاز الجنسي)
          </p>
          <h1 className=" text-right font-semibold text-xl text-green-600  pt-5">
            كيف ذلك؟{" "}
          </h1>
          <h1 className="font-semibold text-lg text-right">
            {" "}
            القوانين الدولية
          </h1>
          <ul className="leading-relaxed  text-right text-lg ">
            <li className="text-right">
              نجد الاتفاقية الدولية لمكافحة الجريمة السيبرانية التي تعزز التعاون
              الدولي لحماية ضحايا العنف السيبراني
            </li>
            <li className="text-right">
              مشروع قانون حماية الاطفال على الانترنيت الساعي الى الحماية من
              الاستغلال الجنسي والتحرش والابتزاز الرقمي
            </li>
          </ul>

          <h1 className="font-semibold text-lg text-right"> القانون الوطني</h1>
          <ul className="leading-relaxed  text-right text-lg ">
            <li className="text-right">
              يجرم القانون 103.13 في فصله 447.1 العنف الرقمي، بما في ذلك
              الابتزاز الجنسي وفق مقتضيات تضمن الوقاية والحماية والعقوبة والتكفل
              بالأشخاص ضحايا العنف الرقمي
            </li>
            <li className="text-right">
              ينص الفصل 447.2 من نفس القانون على عقوبات حبسية من سنة إلى 3سنوات
              وغرامة مالية من 2.000 إلى 20.000، لكل من قام بفعل التشهير أو
              الابتزاز الجنسي كنوع من العنف الرقمي
            </li>
            <li className="text-right">
              يسن الفصل 447.3 عن عقوبة حبسية تتراوح من سنة إلى 5 سنوات وغرامة من
              5.000 إلى 50.000 في حالة العود لفعل العنف الرقمي
            </li>
          </ul>

          <h1 className=" text-right font-semibold text-xl text-green-600  pt-5">
            هل تعلم؟
          </h1>
          <p className="leading-relaxed text-right text-lg ">
            أنه في حالة رغبتك الاستفادة من كل القوانين المذكورة اعلاه التواصل مع
            " الخلية الاكلينيكية" بكلية الحقوق لتقديم خدمات المرافقة والتوجيه
            تحت اشراف متخصصين في القانون ومحامون واساتذة جامعيين
          </p>

          <ul className="leading-relaxed  text-right text-lg  ">
            <li className="text-right">
              adalajust2005@gmail.com, +2125377738468
            </li>
            <li className="text-right">
              الاتصال بالرقم الوطني لضحايا العنف الرقمي، 3018
            </li>
            <li className="text-right">
              الاتصال بالجهات القضائية المختصة على الرقم 19 للشرطة، 177 للدرك
            </li>
            <li className="text-right">
              الاتصال برقم الطوارئ القصوى من خط المساعدة HEC. ما عليك سوى إرسال
              "emchelp" إلى الرقم +212 624 40 58 89 وسيقومون بالاتصال بك مرة
              أخرى
            </li>
            <li className="text-right">
              يمكنك العثور على المساعدة على موقع evigilence.ma وهو خط مساعدة
              وطني للأشخاص الذين يعانون من هذه الحالة.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default page;
