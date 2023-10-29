import Image from "next/image";
import Link from "next/link";

const cta = {
  subtitle: "تعرضت لابتزاز جنسي رقمي ؟",
  title: "أكسر حاجز الصمت, نحن معك",
  buttonAction: {
    text: "اتصل بنا",
    href: "#contact",
  },
};

export default function Hero() {
  return (
    <section
      //   style={{ width: "1920px", height: "500px" }}
      className=" bg-[url('/images/hero1.png')] flex flex-col items-center justify-center text-center h-[600px]  bg-center text-white  body-font"
    >
      {/* <Image
        className="absolute  inset-0"
        src="/images/hero.png"
        width={1920}
        height={800}
      /> */}

      <div className="bg-gray-100 px-12 py-6 rounded-lg bg-opacity-75">
        <span className="text-xl sm:text-2xl font-bold leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-600">
          {cta.subtitle}
        </span>

        <h1 className="sm:text-5xl text-gray-800 text-4xl font-bold title-font my-4 sm:my-8">
          {cta.title}
        </h1>
      </div>

      {/* <div className="relative container px-5 py-12  md:py-16 mx-auto opacity-100 ">
        <Link
            href={cta.buttonAction.href}
            className=" text-right w-fit font-bold text-xl  text-gray-900 bg-white border-0  py-2 px-6 hover:bg-gray-900 hover:text-white focus:outline-none rounded shadow-sm"
          >
            {cta.buttonAction.text}
          </Link>
      </div> */}
    </section>
  );
}
