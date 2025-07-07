import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const cardVariants = {
    hidden: { 
      scale: 0.8, 
      opacity: 0,
      y: 50,
      rotateY: -15
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        mass: 0.8
      }
    },
    hover: {
      y: -12,
      scale: 1.02,
      rotateY: 2,
      boxShadow: "0 25px 50px rgba(59, 130, 246, 0.25)",
      transition: { 
        duration: 0.4, 
        ease: [0.23, 1, 0.32, 1] 
      }
    }
  };

  const skillItemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 150,
        damping: 10
      }
    }),
    hover: {
      scale: 1.1,
      y: -4,
      backgroundColor: "rgba(30, 41, 59, 0.8)",
      boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
      transition: { 
        type: "spring", 
        stiffness: 400,
        damping: 10
      }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  const iconVariants = {
    hover: {
      rotate: [0, -8, 8, -4, 4, 0],
      scale: 1.2,
      transition: { 
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  const tooltipVariants = {
    hidden: { 
      opacity: 0, 
      y: 15, 
      scale: 0.8,
      filter: "blur(4px)"
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const skillCategories = [
    {
      title: "Frontend Development",
      gradient: "from-blue-500 to-cyan-400",
      bgGradient: "from-blue-500/20 to-cyan-400/20",
      borderColor: "border-blue-400/50",
      skills: [
        { name: "HTML5", level: 95, color: "text-orange-400", icon:"/frontend/html.png"  },
        { name: "CSS3", level: 90, color: "text-blue-400", icon:"/frontend/css.png"  },
        { name: "JavaScript", level: 50, color: "text-yellow-400", icon:"/frontend/js.png"  },
        { name: "React", level: 50, color: "text-cyan-400", icon:"/frontend/react.png"  },
        { name: "Tailwind", level: 92, color: "text-teal-400", icon:"/frontend/tailwindCss.png"  },
      ]
    },
    {
      title: "Backend Development",
      gradient: "from-purple-500 to-pink-400",
      bgGradient: "from-purple-500/20 to-pink-400/20",
      borderColor: "border-purple-400/50",
      skills: [
        { name: "Node.js", level: 35, color: "text-green-400", icon:"/backend/nodejs.png" },
        { name: "Express", level: 50, color: "text-gray-300", icon:"/backend/express.png" },
        { name: "PHP", level: 50, color: "text-indigo-400", icon:"/backend/php.svg" },
        { name: "Python", level: 25, color: "text-yellow-300", icon:"/backend/python.png" },
        { name: "Java", level: 50, color: "text-red-400", icon:"/backend/java.svg" },
      ]
    },
    {
      title: "Database & DevOps",
      gradient: "from-green-500 to-emerald-400",
      bgGradient: "from-green-500/20 to-emerald-400/20",
      borderColor: "border-green-400/50",
      skills: [
        { name: "MongoDB", level: 85, color: "text-green-500", icon:"/database/mongodb.svg" },
        { name: "MySQL", level: 88, color: "text-orange-400", icon:"/database/mysql.svg" },
        { name: "Git", level: 70, color: "text-red-400", icon:"/database/git.png" },
        
      ]
    }
  ];

  return (
    <motion.section 
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
      className="min-h-screen py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      id="skills"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div 
          variants={titleVariants}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              repeatDelay: 3 
            }}
            className="inline-block mb-4"
          >
            <span className="text-4xl sm:text-5xl lg:text-6xl">🚀</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
            variants={titleVariants}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight block">
              Technical Arsenal
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Crafting digital experiences with cutting-edge technologies and passionate dedication to continuous learning
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={cardVariants}
              whileHover="hover"
              className={`group relative bg-slate-800/40 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border ${category.borderColor} hover:border-opacity-100 transition-all duration-500 overflow-hidden`}
            >
              {/* Card Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Animated Border */}
              <motion.div 
                className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-transparent bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                animate={{
                  background: [
                    "linear-gradient(0deg, transparent, rgba(255,255,255,0.1), transparent)",
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                    "linear-gradient(180deg, transparent, rgba(255,255,255,0.1), transparent)",
                    "linear-gradient(270deg, transparent, rgba(255,255,255,0.1), transparent)",
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <div className="relative z-10">
                <motion.h3 
                  className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                  variants={titleVariants}
                >
                  {category.title}
                </motion.h3>

                <div className="space-y-4 sm:space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={skillItemVariants}
                      custom={skillIndex}
                      whileHover="hover"
                      whileTap="tap"
                      className="relative group/skill"
                    >
                      <div className="bg-slate-900/60 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-slate-600/50 hover:border-slate-400/50 transition-all duration-300 relative overflow-hidden">
                        {/* Skill Progress Background */}
                        <motion.div 
                          className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover/skill:opacity-10 transition-opacity duration-300`}
                          initial={{ x: "-100%" }}
                          whileHover={{ x: `${skill.level - 100}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                        
                        <div className="relative z-10 flex items-center justify-between">
                          <div className="flex items-center space-x-3 sm:space-x-4">
                            <motion.div
                              variants={iconVariants}
                              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
                            >
                              <img src={skill.icon} alt={skill.name} className={`w-full h-full object-contain filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-300 ${skill.color}`}/>
                                
                              
                            </motion.div>
                            <span className="text-sm sm:text-base lg:text-lg font-medium text-white group-hover/skill:text-blue-200 transition-colors">
                              {skill.name}
                            </span>
                          </div>
                          
                          {/* Proficiency Level */}
                          <div className="flex items-center space-x-2">
                            <div className="w-16 sm:w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
                              <motion.div 
                                className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ delay: skillIndex * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
                              />
                            </div>
                            <span className="text-xs sm:text-sm text-gray-400 font-medium min-w-[2rem]">
                              {skill.level}%
                            </span>
                          </div>
                        </div>

                        {/* Hover Tooltip */}
                        <motion.div 
                          variants={tooltipVariants}
                          initial="hidden"
                          whileHover="visible"
                          className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-900 px-3 py-2 rounded-lg text-xs whitespace-nowrap shadow-xl border border-slate-600 pointer-events-none"
                        >
                          <span className={`bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent font-semibold`}>
                            Proficiency: {skill.level}%
                          </span>
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45 border-r border-b border-slate-600" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote Section */}
        <motion.div 
          className="mt-16 sm:mt-20 lg:mt-24 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            className="bg-slate-800/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-600/50 max-w-4xl mx-auto"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)"
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl mb-4"
            >
              💡
            </motion.div>
            <blockquote className="text-gray-300 italic text-base sm:text-lg lg:text-xl leading-relaxed">
              "The only way to learn a new programming language is by writing programs in it."
            </blockquote>
            <cite className="block mt-4 text-sm sm:text-base text-gray-400 font-medium">
              — Dennis Ritchie
            </cite>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;