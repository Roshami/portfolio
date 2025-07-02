import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const titleVariants = {
    hidden: { 
      y: -50, 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 80, 
      opacity: 0,
      scale: 0.9,
      rotateX: 15
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        duration: 1.2
      }
    }
  };

  const paragraphVariants = {
    hidden: { 
      x: -30, 
      opacity: 0,
      filter: "blur(4px)"
    },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const skillBadgeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1.5 + i * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }),
    hover: {
      scale: 1.05,
      y: -2,
      transition: { duration: 0.2 }
    }
  };

  const skills = [
    { name: 'JavaScript', color: 'from-yellow-400 to-orange-500' },
    { name: 'React.js', color: 'from-cyan-400 to-blue-500' },
    { name: 'Node.js', color: 'from-green-400 to-emerald-500' },
    { name: 'Python', color: 'from-blue-400 to-indigo-500' },
    { name: 'Java', color: 'from-red-400 to-pink-500' },
    { name: 'MongoDB', color: 'from-green-500 to-teal-500' },
    { name: 'SQL', color: 'from-purple-400 to-violet-500' },
    { name: 'PHP', color: 'from-indigo-400 to-purple-500' }
  ];

  return (
    <motion.section
      ref={ref}
      id="about"
      className="relative min-h-screen text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y }}
          className="absolute top-20 right-10 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
          className="absolute bottom-20 left-10 w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 rounded-full blur-3xl"
        />
        
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div 
          variants={titleVariants}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              repeatDelay: 2 
            }}
            className="inline-block mb-4 sm:mb-6"
          >
            <span className="text-4xl sm:text-5xl lg:text-6xl">👨‍💻</span>
          </motion.div>
          
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
            variants={titleVariants}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          variants={cardVariants}
          whileHover={{ 
            scale: 1.01,
            rotateY: 2,
            boxShadow: "0 25px 50px rgba(59, 130, 246, 0.2)"
          }}
          className="relative bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl lg:rounded-[2rem] shadow-2xl p-6 sm:p-8 lg:p-12 border w-xs sm:w-100 md:w-150 lg:w-250 border-gray-700/50 hover:border-blue-400/50 transition-all duration-500 overflow-hidden group"
        >
          {/* Card Background Animation */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Animated Border */}
          <motion.div 
            className="absolute inset-0 rounded-2xl sm:rounded-3xl lg:rounded-[2rem] border-2 border-transparent bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
            animate={{
              background: [
                "linear-gradient(0deg, transparent, rgba(59,130,246,0.3), transparent)",
                "linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent)",
                "linear-gradient(180deg, transparent, rgba(59,130,246,0.3), transparent)",
                "linear-gradient(270deg, transparent, rgba(59,130,246,0.3), transparent)",
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <div className="relative z-10">
            {/* Introduction Paragraph */}
            <motion.p
              custom={0}
              variants={paragraphVariants}
              className="mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg lg:text-lg text-gray-200 text-justify"
            >
              Hi, I'm{' '}
              <motion.span 
                className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Roshami
              </motion.span>
              , an aspiring full-stack developer with a passion for building innovative and user-friendly web applications. As an undergraduate in{' '}
              <span className="text-blue-300 font-medium">Physical Science (Mathematics with Computer Science)</span> at{' '}
              <span className="text-blue-300 font-medium">South Eastern University of Sri Lanka</span>, and pursuing a{' '}
              <span className="text-blue-300 font-medium">Bachelor's in Information Technology (External)</span> at{' '}
              <span className="text-blue-300 font-medium">the University of Moratuwa</span>, I'm laying a strong foundation in both theoretical and practical aspects of technology.
            </motion.p>

            {/* Skills Section */}
            <motion.div
              custom={1}
              variants={paragraphVariants}
              className="mb-6 sm:mb-8"
            >
              <p className="leading-relaxed text-base sm:text-lg lg:text-lg text-gray-200 text-justify mb-4">
                I'm proficient in various technologies and love turning ideas into functional solutions through clean, efficient code:
              </p>
              
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-4">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    custom={index}
                    variants={skillBadgeVariants}
                    whileHover="hover"
                    className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r ${skill.color} text-white text-sm sm:text-sm font-medium shadow-lg cursor-pointer`}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Second Paragraph */}
            <motion.p
              custom={2}
              variants={paragraphVariants}
              className="mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg lg:text-lg text-gray-200 text-justify"
            >
              While I'm early in my journey, I'm driven by a curiosity to learn, experiment, and solve real-world problems with technology. Whether it's crafting dynamic front-end interfaces with{' '}
              <span className="text-cyan-300 font-medium">React</span> or building robust back-end systems with{' '}
              <span className="text-green-300 font-medium">Node.js</span> and{' '}
              <span className="text-green-300 font-medium">MongoDB</span>, I'm excited to create impactful digital experiences.
            </motion.p>

            {/* Final Paragraph */}
            <motion.p
              custom={3}
              variants={paragraphVariants}
              className="leading-relaxed text-base sm:text-lg lg:text-lg text-gray-200 text-justify"
            >
              When I'm not coding, you'll find me exploring new tech trends, tackling coding challenges, or applying my mathematical mindset to problem-solving. I'm eager to{' '}
              <motion.span 
                className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent font-semibold"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                collaborate, learn from others, and contribute to meaningful projects
              </motion.span>
              . Let's build something amazing together! 🚀
            </motion.p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12 sm:mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-4 -left-4 w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full blur-xl opacity-20 animate-pulse" />
      </div>
    </motion.section>
  );
};

export default AboutMe;