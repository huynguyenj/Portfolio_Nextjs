import GridBox from "./common/GridBox";
import * as motion from "motion/react-client";

export default function ProjectsSection() {
  return (
    <section className="min-h-[100vh] p-10 flex flex-col lg:flex-row gap-5 items-center overflow-hidden">
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.8 }}
        className="text-6xl text-center uppercase"
      >
        Projects
      </motion.h1>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.8 }}
        className="h-50 w-1 bg-white hidden lg:block"
      ></motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.8 }}
        className="grid xl:grid-cols-2 gap-2"
      >
        <GridBox
          title="Koicare System"
          description="🚀This website allow user to take care their koi, tracking their development, buy and sold items to take care koi."
          image="/assets/Logo.png"
          link="https://github.com/huynguyenj/Project_KoicareSystem"
        />
        <GridBox
          title="Claim System"
          description="🚀This website manage OT for each employee and checking claim request, pay OT. "
          image="/assets/claim_website.png"
          link="https://github.com/huynguyenj/claim_website"
        />
      </motion.div>
    </section>
  );
}
