import Image from "next/image";
import * as motion from "motion/react-client";

export default function Contact() {
  return (
    <motion.div
      initial={{ y: 100, scale: 0 }}
      whileInView={{ y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.7 }}
      transition={{ duration: 0.5, ease: "linear" }}
      className="h-[70vh] flex justify-around -mt-30 items-center py-5"
    >
      <div>
        <div className="w-[100%] mb-10">
          <h1 className="text-6xl font-bold">Contact to me!</h1>
          <p className="text-[1.5rem] text-gray-500 ml-2">
            Discuss about work and some awesome ideas with me
          </p>
        </div>
        <div className="w-[100%]">
          <ul className="flex gap-5">
            <li className="flex items-center gap-2 group overflow-hidden w-12 hover:w-40 duration-500 transition-all">
              <i className="bx bxl-facebook-circle text-3xl bg-blue-700 rounded-full p-2 hover:bg-white hover:text-black cursor-pointer duration-300 z-99"></i>
              <a
                href="https://www.facebook.com/people/Nguy%E1%BB%85n-Huy/pfbid0dNH8yXSXbRVjKiqNQgkh7AxkwpxRmLGNa2PFpHRGzQCm8Bk4ikpFBUk4E8Ejgg6el/"
                className="text-white transform-[translateX(-200%)] group-hover:transform-[translateX(0%)] duration-500 delay-100 transition-transform whitespace-nowrap"
              >
                Link facebook
              </a>
            </li>
            <li className="flex items-center gap-2 group overflow-hidden w-12 hover:w-36 duration-500 transition-all">
              <i className="bx bx-phone text-3xl bg-green-500 rounded-full p-2 hover:bg-white hover:text-black cursor-pointer duration-300 z-99"></i>
              <p className="text-white transform-[translateX(-200%)] group-hover:transform-[translateX(0%)] duration-500 delay-100 transition-transform">
                0982267701
              </p>
            </li>
            <li className="flex items-center gap-2 group overflow-hidden w-12 hover:w-70 duration-500 transition-all">
              <i className="bx bxl-gmail text-3xl bg-red-500 rounded-full p-2 hover:bg-white hover:text-black cursor-pointer duration-300 z-99"></i>
              <p className="text-white transform-[translateX(-200%)] group-hover:transform-[translateX(0%)] duration-500 delay-100 transition-transform">
                nguyenhuyjobs@gmail.com
              </p>
            </li>
          </ul>
        </div>
      </div>
      <Image src="/assets/contact.png" width={300} height={250} alt="contact" />
    </motion.div>
  );
}
