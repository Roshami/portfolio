import { motion } from "framer-motion";
import { BsDownload, BsGithub, BsLinkedin } from "react-icons/bs";


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
      className="bg-gradient-to-b from-gray-900/50 to-gray-900 py-6 px-4 sm:px-6 lg:px-8 border-t border-gray-800"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          

          {/* Copyright */}
          <motion.p 
            className="text-gray-500 text-sm"
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