import Image from "next/image";
import * as motion from "motion/react-client";
type ImgType = {
  link: string;
  alt: string;
};
const imageList: ImgType[] = [
  { link: "/assets/typescript-logo.png", alt: "typescript logo" },
  { link: "/assets/react.png", alt: "react logo" },
  { link: "/assets/nodejs.png", alt: "nodejs logo" },
  { link: "/assets/nextjs.jpg", alt: "nextjs" },
  { link: "/assets/js.webp", alt: "javascript" },
  { link: "/assets/tailwind.png", alt: "javascript" },
  { link: "/assets/zustand.jpg", alt: "javascript" },
  { link: "/assets/framer.png", alt: "javascript" },
  { link: "/assets/express.png", alt: "javascript" },
];
export default function About() {
  return (
    <section className="min-h-[100vh] p-10 ">
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
        className="text-6xl font-bold text-center uppercase"
      >
        Skills
      </motion.h1>
      <div className="flex flex-col justify-center items-center gap-15">
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-2xl uppercase"
        >
          I have experience in using these framework and library in my project{" "}
        </motion.p>
        <div className="grid grid-cols-6 gap-5">
          {imageList.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "linear" }}
              viewport={{ once: false, amount: 0.5 }}
              key={index}
            >
              <Image
                src={item.link}
                width={80}
                height={70}
                alt={item.alt}
                key={index}
                className="w-18 h-18 rounded-full grayscale-100 hover:grayscale-0 hover:shadow-[0px_0px_30px_rgba(255,0,0,0.8)]"
              />
            </motion.div>
          ))}
        </div>
        <motion.div
            initial={{ opacity: 0, x:-100}}
            whileInView={{ opacity: 1, x:0}}
            transition={{ duration: 0.5, ease: "linear" }}
            viewport={{ once: false, amount: 0.8}}
        >
          <p className="text-[1.5rem]">
            🔥Passion in learn new technology to serve for my work.
          </p>
          <p className="text-[1.5rem]">
            🔥Have certain knowledge in FE (frontend) && BE (backend).
          </p>
          <p className="text-[1.5rem]">
            🔥Apply third library like zustand to manage state.
          </p>
          <p></p>
        </motion.div>
      </div>
    </section>
  );
}
