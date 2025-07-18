import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="w-full min-h-screen flex flex-col justify-center items-center px-6 md:px-20 bg-neutral-950 text-white">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold text-center leading-tight tracking-tight"
      >
        Hi, I’m{" "}
        <span className="text-indigo-500">Samarth Dhoble</span>
        <br />
        <span className="text-xl md:text-2xl font-semibold text-gray-400">
          <Typewriter
            words={["Frontend Developer", "Full Stack Developer", "Building Scalable Solutions"]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-6 text-gray-400 max-w-xl text-center text-lg"
      >
        I love building interactive web interfaces and learning cutting-edge tech. Currently mastering MERN stack and leveling up my React skills.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="mt-8 flex gap-6"
      >
        <a
          href="/samarth_dhoble.pdf"
          download
          className="px-6 py-3 rounded-xl border-2 border-gray-800 text-white font-semibold bg-neutral-900 hover:bg-white hover:text-black flex items-center gap-2 transition-all duration-300"
        >
          <Download size={18} />
          Resume
        </a>

        <a
          href="#projects"
          className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition duration-300">
          View Projects
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
