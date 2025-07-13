import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react"; // Using lucide-react for consistency

// Centralized data object for all page content
const psychoSupportData = {
  backLink: "/aide/category",
  pageTitle: "لست لوحدك",
  introParagraph: "قد يكون اختبار رسائل أو مُكالمات تبتزك جنسيا أمرا صعبا للغاية من الناحية النفسية. لذلك نُريدك أن تعلم بداية أنك لست لوحدك، نحن معك وهنا لمُساعدتك.",
  importance: {
    question: "ما أهمية الصحة النفسية في هذه الحالة؟",
    answer: "باختصار، فإن صحتك النفسية مهمة جدا، فبمقدور النفسية الجيدة أن تكون سببا رئيسيا في سعادتك ورفاهك، وعاملا قويا يُمكنك من مواجهة ضغوطات الحياة. بينما في المُقابل، قد تؤدي الصحة النفسية المريضة والهشة إلى جعل الأمور أكثر تعقيدا وصعوبة بالنسبة لك، وكما يقولون، فإن \"الخوف نصف المرض\" لذا حاول أن تُحافظ على هدوء واستقرار حالتك النفسية.",
  },
  advice: {
    title: "هنا بعض النصائح التي قد تساعدك في الحفاظ على سلامة صحتك النفسية",
    tips: [
      {
        title: "عبر عن نفسك:",
        description: "لا تدع أحاسيسك وأفكارك حبيسة ذهنك، بل حاول أن تخرجها وتعبر عنها. لك كامل الحرية في اختيار أسلوبك المُفضل في التعبير، ك: الكتابة في مُذكرتك الخاصة، التحدث مع نفسك، أو مع صديق أو قريب لك، مُمارسة الرياضة، الحصول على وقت من التأمل، الغناء.",
      },
      {
        title: "تحدث مع شخص تثق فيه:",
        description: "حاول أن تتحدث عما تمر به مع شخص تثق فيه، شريطة أن يكون هذا الشخص مُنصتا وجليسا جيدا. سيسمح لك ذلك بالتفريغ عن الشحنة السلبية التي بداخلك، والشعور بالدعم وبارتياح نفسي.",
      },
      {
        title: "ابحث عن معلومات وإرشادات حول الصحة النفسية:",
        description: "لكي تكون قادرا على فهم كيفية التعامل مع صحتك النفسية بشكل جيد، لا بد من تثقيف نفسك وتعلم بعض الإرشادات حول الصحة النفسية التي بإمكانها مُساعدتك على تجاوز الضغوطات والعراقيل من هذا النوع.",
      },
      {
        title: "اقرأ عن تجارب أشخاص آخرين تعرضوا للابتزاز الجنسي:",
        description: "معرفة أنك لست الوحيد الذي مر أو يمر من هذا الموقف قد يُساعد في التخفيف من مشاعر الخوف والقلق الذي تشعر به. لذا لا تبخل على نفسك بالبحث والتواصل للتعرف على التجارب التي عاشها أشخاص آخرين وقعوا ضحية للابتزاز الجنسي أو نوع آخر من العنف السيبيراني.",
      },
      {
        title: "امنح نفسك الوقت والمجال للراحة والاسترخاء:",
        description: "في مثل هذا الموقف، احرص على أن تنعم بالقسط الكافي من الراحة والاسترخاء، سيُمكنك ذلك من الحفاظ على استقرارك الذهني، وبالتالي، ترتيب أفكارك ومعرفة كيفية التعامل مع الوضع بأكثر حكمة.",
      },
      {
        title: "تحد الخرافات وساهم في زيادة التوعية:",
        description: "لا تنسى أنك لست الوحيد الذي مر أو يمر بهذا المُشكل، فالكثير من الأشخاص قد يقعون ضحية للابتزاز الجنسي الرقمي، لذا حاول أن تجعل من تجربتك نموذجا لتوعية الآخرين حول ظاهرة الابتزاز الجنسي الرقمي ومخاطرها.",
      },
    ],
  },
  support: {
    callToAction: "إذا كنت تشعر بأنك في حاجة للدعم النفسي لا تتردد في التواصل مع أخصائيينا النفسانيين من خلال مسح الماسح الضوئي لرمز الاستجابة السريعة الموجود الآتي، أو عبر النقر على الرابط الموجود أسفله.",
    partnershipInfo: "عقب شراكتنا مع خلية الدعم النفسي بكلية علوم التربية يمكنك الاستفادة من خدمات المساعدة النفسية و الاجتماعية من خلال النقر على الرابط اسفله أو عبر مسح الرمز.",
    link: "https://cutt.ly/cspfse",
    qrCodeImage: "/images/qr.jpeg",
  },
};

const PsychoSupportPage = () => {
  return (
    <section className="text-gray-600 font-messiri body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="w-full mx-auto text-center">
          {/* Back Button */}
          <div className="text-amber-500 text-right mb-5">
            <Link href={psychoSupportData.backLink} className="border-amber-500 border w-fit p-4 rounded-full inline-block">
              <ArrowLeft size={25} />
            </Link>
          </div>

          <h1 className="font-bold text-5xl text-center -mt-4 pb-5">{psychoSupportData.pageTitle}</h1>
          <p className="leading-relaxed text-right text-lg">{psychoSupportData.introParagraph}</p>

          {/* Importance Section */}
          <h2 className="text-right font-semibold text-xl text-green-600 pt-5">{psychoSupportData.importance.question}</h2>
          <p className="leading-relaxed text-right text-lg">{psychoSupportData.importance.answer}</p>

          {/* Advice Section */}
          <h2 className="text-right font-semibold text-xl text-green-600 pt-5">{psychoSupportData.advice.title}</h2>
          <ul className="leading-relaxed text-right text-lg space-y-2 mt-2">
            {psychoSupportData.advice.tips.map((tip, index) => (
              <li key={index}>
                <span className="font-semibold">{tip.title} </span>
                {tip.description}
              </li>
            ))}
          </ul>

          {/* Support Section */}
          <p className="leading-relaxed text-right text-lg pt-5">{psychoSupportData.support.callToAction}</p>

          <div className="leading-relaxed font-semibold text-amber-500 text-center text-lg pt-24">
            <p>{psychoSupportData.support.partnershipInfo}</p>
            <div className="flex gap-5 justify-center pt-5 items-center flex-col sm:flex-row">
              <Link href={psychoSupportData.support.link} className="text-gray-800 hover:text-amber-600 underline" target="_blank" rel="noopener noreferrer">
                {psychoSupportData.support.link}
              </Link>
              <Image
                src={psychoSupportData.support.qrCodeImage}
                width={150}
                height={150}
                className="rounded-lg"
                alt="QR code for psychological support"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PsychoSupportPage;