import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react"; // Replaced with lucide-react

const legalData = {
  backLink: "/aide/category",
  title: "التدخلات القانونية",
  images: {
    main1: "/images/legal.png",
    main2: "/images/legal1.png",
    questionIcon: "/images/question.png",
    howIcon: "/images/how.png",
    solutionIcon: "/images/sol.png",
  },
  sections: [
    {
      type: "info",
      icon: "/images/question.png",
      title: "هل تعلم؟",
      content: "أن القوانين الدولية والوطنية تحمي من جميع انواع العنف ولا سيما العنف الرقمي؟ (الابتزاز الجنسي)",
    },
    {
      type: "list",
      icon: "/images/how.png",
      title: "كيف ذلك؟",
      subsections: [
        {
          title: "القوانين الدولية",
          points: [
            "نجد الاتفاقية الدولية لمكافحة الجريمة السيبرانية التي تعزز التعاون الدولي لحماية ضحايا العنف السيبراني.",
            "مشروع قانون حماية الاطفال على الانترنيت الساعي الى الحماية من الاستغلال الجنسي والتحرش والابتزاز الرقمي.",
          ],
        },
        {
          title: "القانون الوطني",
          points: [
            "يجرم القانون 103.13 في فصله 447.1 العنف الرقمي، بما في ذلك الابتزاز الجنسي وفق مقتضيات تضمن الوقاية والحماية والعقوبة والتكفل بالأشخاص ضحايا العنف الرقمي.",
            "ينص الفصل 447.2 من نفس القانون على عقوبات حبسية من سنة إلى 3 سنوات وغرامة مالية من 2.000 إلى 20.000، لكل من قام بفعل التشهير أو الابتزاز الجنسي كنوع من العنف الرقمي.",
            "يسن الفصل 447.3 عن عقوبة حبسية تتراوح من سنة إلى 5 سنوات وغرامة من 5.000 إلى 50.000 في حالة العود لفعل العنف الرقمي.",
          ],
        },
      ],
    },
    {
      type: "info",
      icon: "/images/sol.png",
      title: "هل تعلم؟",
      content: "أنه في حالة رغبتك الاستفادة من كل القوانين المذكورة اعلاه التواصل مع \"الخلية الاكلينيكية\" بكلية الحقوق لتقديم خدمات المرافقة والتوجيه تحت اشراف متخصصين في القانون ومحامون واساتذة جامعيين.",
    },
  ],
  contacts: {
    title: "Contacts",
    points: [
      "adalajust2005@gmail.com, +2125377738468",
      "الاتصال بالرقم الوطني لضحايا العنف الرقمي، 3018",
      "الاتصال بالجهات القضائية المختصة على الرقم 19 للشرطة، 177 للدرك.",
      "الاتصال برقم الطوارئ القصوى من خط المساعدة HEC. ما عليك سوى إرسال \"emchelp\" إلى الرقم +212 624 40 58 89 وسيقومون بالاتصال بك مرة أخرى.",
      "يمكنك العثور على المساعدة على موقع evigilence.ma وهو خط مساعدة وطني للأشخاص الذين يعانون من هذه الحالة.",
    ],
  },
};

const LegalInterventionsPage = () => {
  return (
    <section className="text-gray-600 font-messiri body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="w-full mx-auto">
          {/* Back Button */}
          <div className="text-amber-500 text-right mb-5">
            <Link
              href={legalData.backLink}
              className="border-amber-500 border w-fit p-4 rounded-full inline-block"
            >
              <ArrowLeft size={25} />
            </Link>
          </div>

          <h1 className="font-bold text-5xl text-center pb-5">{legalData.title}</h1>

          <div className="flex flex-col md:flex-row gap-12">
            {/* Left Column with Images */}
            <div className="w-full md:w-1/2 flex flex-col justify-between gap-5 mt-8">
              <Image src={legalData.images.main1} className="rounded-lg" height={1080} width={1920} alt="Legal intervention visual 1" />
              <Image src={legalData.images.main2} className="rounded-lg" height={1080} width={1920} alt="Legal intervention visual 2" />
            </div>

            {/* Right Column with Text Content */}
            <div className="w-full md:w-1/2">
              {legalData.sections.map((section, index) => (
                <div key={index} className="mb-6">
                  <div className="flex flex-row-reverse items-center">
                    <Image src={section.icon} width={60} height={60} alt={`${section.title} icon`} />
                    <h2 className="text-right font-semibold text-xl text-green-600 pt-5 pr-2">{section.title}</h2>
                  </div>
                  {section.type === "info" ? (
                    <p className="leading-relaxed text-right text-lg">{section.content}</p>
                  ) : (
                    section.subsections.map((sub, subIndex) => (
                      <div key={subIndex} className="mt-2">
                        <h3 className="font-semibold text-lg text-right">{sub.title}</h3>
                        <ul className="list-disc list-inside text-right leading-relaxed text-lg">
                          {sub.points.map((point, pointIndex) => (
                            <li key={pointIndex}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    ))
                  )}
                </div>
              ))}

              {/* Contact Information */}
              <div className="mt-6">
                <ul className="list-disc list-inside text-right leading-relaxed text-lg">
                  {legalData.contacts.points.map((contact, index) => (
                    <li key={index}>{contact}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalInterventionsPage;