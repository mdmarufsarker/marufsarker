import { motion } from "framer-motion";
import Link from "next/link";


export default function Hero() {
  return (
    <section
      id="home"
      className="max-w-container mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-xl font-titleFont tracking-wide text-textGreen"
      >
        Hi, I'm
      </motion.h3>
      <motion.h1
        className="text-4xl lgl:text-6xl font-heading font-semibold flex flex-col"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Maruf Sarker
        <span className="text-3xl mt-2 lgl:mt-4 font-heading font-semibold text-textDark flex flex-col">
          A Frontend Web Developer, Content <br /> Creator & Competitive
          Programmer
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        Experienced in building MERN stack and MEVN stack websites with full
        responsiveness, maintaining all the following parts like User-friendly,
        maintainability code, etc.{" "}
        <Link href="/contact">
          <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
            Learn More
            <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </span>
        </Link>
      </motion.p>
    </section>
  );
}
