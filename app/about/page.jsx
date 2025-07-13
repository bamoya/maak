import Link from "next/link";
import { Facebook, Twitter, Linkedin } from 'lucide-react'; // Import icons
import Image from "next/image";

const aboutPageData = {
  title: 'من نحن',
  description: 'مؤسسة معاك هي منظمة غير ربحية تهدف إلى التوعية ضد الابتزاز الإلكتروني الجنسي ومكافحته. تعمل هذه المؤسسة على توفير المعلومات والتوجيه للأفراد والجماعات بشأن مخاطر الابتزاز الإلكتروني الجنسي وكيفية الوقاية منه. يمكن أن تتضمن أنشطة المؤسسة إقامة حملات توعية، وورش عمل، وتقديم موارد تثقيفية، ودعم للضحايا. تهدف معاك إلى تشجيع التوعية والتحسيس بخطورة هذا النوع من الاعتداءات وتعزيز السلوكيات الإيجابية على الإنترنت والمساهمة في خلق بيئة آمنة على الإنترنت للجميع.',
  teamTitle: 'فريقنا',
  teamMembers: [
    {
      name: 'محمد ياسين باسم',
      role: 'مبرمج',
      image: '/images/yassine.jpeg',
      socials: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      }
    },
    {
      name: 'إلياس لزرق',
      role: 'مسؤول التنسيق والتمويل',
      image: '/images/ilyas.jpeg',
      socials: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      }
    },
    {
      name: 'أمينة أفنيدا',
      role: 'مسؤولة الإعلام و التواصل',
      image: '/images/amina.jpeg',
      socials: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      }
    },
    {
      name: 'وهيبة فوزي الأمراني',
      role: 'منسقة الشؤون القانونية والاجتماعية',
      image: '/images/wahiba.jpeg',
      socials: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      }
    },
    {
      name: 'Simbou Gail',
      role: 'مسؤولة العلاقات الاجتماعية',
      image: '/images/gall.jpeg',
      socials: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      }
    },
  ]
};

const AboutPage = () => {
  return (
    <section className="text-gray-600 body-font font-messiri">
      <div className="container px-5 py-24 mx-auto">
        {/* About Section */}
        <h1 className="font-bold text-5xl text-center pb-8">{aboutPageData.title}</h1>
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
          <p className="leading-relaxed text-lg">
            {aboutPageData.description}
          </p>
        </div>

        {/* Team Section */}
        <div className="flex flex-col pt-24 text-center w-full mb-16">
          <h1 className="font-bold text-5xl text-center pb-8">{aboutPageData.teamTitle}</h1>
        </div>

        {/* Team Member Cards - Looping over the array */}
        <div className="flex gap-5 items-stretch justify-center flex-wrap -m-4">
          {aboutPageData.teamMembers.map((member, index) => (
            <div key={index} className="p-4 border border-gray-300 rounded-lg lg:w-1/4 md:w-1/2 flex">
              <div className="h-full flex flex-col items-center text-center">
                <Image
                  alt={`team-member-${member.name}`}
                  className="flex-shrink-0 rounded-lg w-full h-96 object-cover object-top mb-4"
                  src={member.image}
                />
                <div className="w-full mt-auto">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    {member.name}
                  </h2>
                  <h3 className="text-gray-500 mb-3">{member.role}</h3>
                  <span className="inline-flex gap-2">
                    <Link href={member.socials.facebook} className="text-gray-500 hover:text-gray-700">
                      <Facebook size={20} />
                    </Link>
                    <Link href={member.socials.twitter} className="text-gray-500 hover:text-gray-700">
                      <Twitter size={20} />
                    </Link>
                    <Link href={member.socials.linkedin} className="text-gray-500 hover:text-gray-700">
                      <Linkedin size={20} />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;