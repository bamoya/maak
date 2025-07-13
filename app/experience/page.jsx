import Link from "next/link";
// Replaced icons with lucide-react for consistency
import { ArrowLeft, ArrowRight, Eye, MessageCircle } from "lucide-react";

// All news article data is now centralized in this array
const newsArticles = [
  {
    category: "هكاثون",
    title: "Hackathon العنف السيبيراني",
    description: "تنظم اللجنة الجهوية لحقوق الإنسان الرباط- سلا- القنيطرة، بشراكة مع المعهد العالي للإعلام والاتصال النسخة الأولى من برنامج هاكاتون Hackathon تحت عنوان العنف السيبيراني.",
    link: "/news/1",
    views: "1.2K",
    comments: 6,
  },
  {
    category: "ندوة",
    title: "ندوة حول موضوع تطور أشكال الابتزاز السيبراني وسبل التصدي لها",
    description: "تنظم المؤسسة جمعية الامان ندوة حول موضوع تطور أشكال الابتزاز السيبراني وسبل التصدي لها وذلك يوم 4 نونبر 2023 على الساعة 10:00 صباحا.",
    link: "/news/2",
    views: "1.2K",
    comments: 6,
  },
  // You can easily add more news articles here
];

const NewsPage = () => {
  return (
    <section className="text-gray-600 font-messiri body-font overflow-hidden">
      <div className="container px-5 py-32 mx-auto">
        {/* Back Button */}
        <div className="text-amber-500 text-right mb-8">
          <Link href="/" className="border-amber-500 border w-fit p-4 rounded-full inline-block">
            <ArrowLeft size={25} />
          </Link>
        </div>

        <div className="flex text-right flex-wrap -m-12">
          {/* Loop over the newsArticles array to render each article card */}
          {newsArticles.map((article, index) => (
            <div key={index} className="p-12 md:w-1/2 text-right flex flex-col items-start">
              <span className="inline-block py-1 px-2 rounded bg-amber-50 text-amber-500 text-xs font-medium tracking-widest">
                {article.category}
              </span>
              <h2 className="sm:text-3xl text-2xl w-full title-font font-medium text-gray-900 mt-4 mb-4">
                {article.title}
              </h2>
              <p className="leading-relaxed mb-8">{article.description}</p>
              <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                <Link href={article.link} className="text-amber-500 inline-flex items-center group">
                  اقرأ المزيد
                  <ArrowRight className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-1" />
                </Link>
                <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <Eye className="w-4 h-4 mr-1" />
                  {article.views}
                </span>
                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  {article.comments}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsPage;