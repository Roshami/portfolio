import { motion } from "framer-motion";
import { BsDownload, BsGithub, BsLinkedin } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
        damping: 10
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 5px 15px rgba(168, 85, 247, 0.4)",
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <motion.footer 
      className="bg-gradient-to-b from-gray-900/50 to-gray-900 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Social Links */}
          <motion.div 
            className="flex justify-center space-x-4 sm:space-x-6"
            variants={containerVariants}
          >
            <motion.a
              href="https://github.com/Roshami"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-800/50 backdrop-blur-sm p-3 sm:p-4 rounded-full border border-gray-700 hover:border-purple-500 transition-all duration-300"
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.div variants={iconVariants}>
                <BsGithub 
                  className="text-gray-400 group-hover:text-purple-400 transition-colors duration-300" 
                  size={20} 
                />
              </motion.div>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/roshami-thashmantha-7773182a6"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-800/50 backdrop-blur-sm p-3 sm:p-4 rounded-full border border-gray-700 hover:border-blue-500 transition-all duration-300"
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.div variants={iconVariants}>
                <BsLinkedin 
                  className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300" 
                  size={20} 
                />
              </motion.div>
            </motion.a>

            <motion.a
              href="mailto:your.email@example.com"
              className="group bg-gray-800/50 backdrop-blur-sm p-3 sm:p-4 rounded-full border border-gray-700 hover:border-green-500 transition-all duration-300"
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.div variants={iconVariants}>
                <MdOutlineMail 
                  className="text-gray-400 group-hover:text-green-400 transition-colors duration-300" 
                  size={20} 
                />
              </motion.div>
            </motion.a>
          </motion.div>

          {/* Resume Button */}
          <motion.button
            className="group bg-gradient-to-r from-purple-600/30 to-purple-800/30 backdrop-blur-sm px-6 py-3 rounded-lg border border-purple-500/30 hover:border-purple-400 cursor-pointer transition-all duration-300 flex items-center space-x-2"
            variants={itemVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => window.open("public/pdf/cv.pdf", "_blank")}
          >
            <BsDownload 
              className="text-purple-400 group-hover:text-white transition-colors duration-300" 
              size={18} 
            />
            <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
              Download Resume
            </span>
          </motion.button>

          {/* Copyright */}
          <motion.p 
            className="text-gray-500 text-sm mt-8"
            variants={itemVariants}
          >
            © {new Date().getFullYear()} Roshami Thashmantha. All rights reserved.
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;