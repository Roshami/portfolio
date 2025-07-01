import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.section
      id="about"
      className="text-white py-20 px-6 md:px-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 justify-center flex"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <span className="inline-block mr-3">👨‍💻</span> 
        <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">About Me</span>
      </motion.h2>
      

      <motion.div
        className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg rounded-3xl shadow-xl p-8 md:p-12 border border-gray-700 hover:shadow-blue-900/30 transition-shadow"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <motion.p
          className="mb-6 leading-relaxed text-base md:text-lg text-gray-200 text-justify"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Hi, I’m Roshami, an aspiring full-stack developer with a passion for building innovative and user-friendly web applications. As an undergraduate in{' '}
          <b className="text-blue-300">Physical Science (Mathematics with Computer Science)</b> at{' '}
          <b className="text-blue-300">South Eastern University of Sri Lanka</b>, and pursuing a{' '}
          <b className="text-blue-300">Bachelor’s in Information Technology (External)</b> at{' '}
          <b className="text-blue-300">the University of Moratuwa</b>, I’m laying a strong foundation in both theoretical and practical aspects of technology.
        </motion.p>

        <motion.p
          className="mb-6 leading-relaxed text-base md:text-lg text-gray-200 text-justify"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          I’m proficient in{' '}
          <b className="text-green-300">JavaScript, React.js, Node.js, Python, Java, SQL, PHP,</b> and{' '}
          <b className="text-green-300">MongoDB</b>, and I love turning ideas into functional solutions through clean, efficient code. While I’m early in my journey, I’m driven by a curiosity to learn, experiment, and solve real-world problems with technology. Whether it’s crafting dynamic front-end interfaces with React or building robust back-end systems with Node.js and MongoDB, I’m excited to create impactful digital experiences.
        </motion.p>

        <motion.p
          className="leading-relaxed text-base md:text-lg text-gray-200 text-justify"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          When I’m not coding, you’ll find me exploring new tech trends, tackling coding challenges, or applying my mathematical mindset to problem-solving. I’m eager to collaborate, learn from others, and contribute to meaningful projects. Let’s build something amazing together!
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default AboutMe;