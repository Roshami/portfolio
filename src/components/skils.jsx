import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delay: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10,
        mass: 0.5
      }
    },
    hover: {
      y: -8,
      boxShadow: "0 15px 30px rgba(0, 118, 255, 0.15)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const skillItemVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(30, 41, 59, 0.5)",
      transition: { 
        type: "spring", 
        stiffness: 300,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: "/frontend/html.png" },
        { name: "CSS", icon: "/frontend/css.png" },
        { name: "JavaScript", icon: "/frontend/js.png" },
        { name: "React", icon: "/frontend/react.png" },
        { name: "Tailwind", icon: "/frontend/tailwindCss.png" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "/backend/nodejs.png" },
        { name: "Express", icon: "/backend/express.png" },
        { name: "PHP", icon: "/backend/php.svg" },
        { name: "Python", icon: "/backend/python.png" },
        { name: "Java", icon: "/backend/java.svg" },
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MongoDB", icon: "/backend/mongodb.svg" },
        { name: "XAMPP", icon: "/backend/xampp.png" },
        { name: "Git", icon: "/backend/git.png" },
      ]
    }
  ];

  return (
    <motion.section 
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b"
      id="skills"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={itemVariants}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-block mr-3">📚</span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              My Learning Journey
            </span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Technologies I've worked with and continue to explore
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={cardVariants}
              whileHover="hover"
              className="bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-700 hover:border-blue-400 transition-all duration-300 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              
              <motion.h3 
                variants={itemVariants}
                className="text-xl md:text-2xl font-semibold mb-6 text-center text-white"
              >
                {category.title}
              </motion.h3>

              <div className={`grid grid-cols-3 gap-3 ${category.skills.length % 3 !== 0 ? 'justify-items-center' : ''}`}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={itemVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="bg-gray-900/30 backdrop-blur-md p-3 sm:p-4 rounded-xl shadow-md flex flex-col items-center group relative hover:bg-gray-900/50 transition-all duration-200"
                    custom={skillIndex}
                  >
                    <motion.div 
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                      className="w-10 h-10 sm:w-12 sm:h-12 mb-2 flex items-center justify-center"
                    >
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-full h-full object-contain filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-300" 
                        loading="lazy"
                      />
                    </motion.div>
                    <span className="text-xs sm:text-sm text-center text-gray-300 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      whileHover={{ opacity: 1, y: 0, scale: 1 }}
                      className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 px-2 py-1 rounded text-xs whitespace-nowrap shadow-lg border border-gray-700"
                    >
                      <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                        Mastered!
                      </span>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-gray-400 italic">
            "The only way to learn a new programming language is by writing programs in it." - Dennis Ritchie
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;