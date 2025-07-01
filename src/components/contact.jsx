import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

 const handleSubmit = (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  emailjs
    .sendForm('service_kwksgel', 'template_arvzfhj', form.current, {
      publicKey: 'V8spZnbLLBqL1O3QG',
    })
    .then(
      () => {
        console.log('SUCCESS!');
        setIsSubmitting(false);
        toast.success("Message sent successfully!");
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      },
      (error) => {
        console.log('FAILED...', error.text);
        setIsSubmitting(false);
        toast.error("Failed to send message. Please try again.");
      },
    );
};

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
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
      scale: 1.03,
      boxShadow: "0 5px 15px rgba(236, 72, 153, 0.4)",
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <motion.section 
      id="contact"
      className="py-16 px-4 sm:px-6 lg:px-8 "
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="inline-block mr-3">💬</span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Send Me a Message
            </span>
          </h2>
          
        </motion.div>

        <motion.div 
          className="max-w-lg mx-auto bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-xl border border-gray-700"
          variants={itemVariants}
          whileHover={{ 
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
            borderColor: "rgba(192, 132, 252, 0.5)"
          }}
        >
          <form ref={form} className="space-y-5" onSubmit={handleSubmit}>
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Your Name
              </label>
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none text-white placeholder-gray-400 transition-all"
                required
                whileFocus={{
                  scale: 1.01,
                  borderColor: "rgba(192, 132, 252, 1)",
                  boxShadow: "0 0 0 2px rgba(192, 132, 252, 0.3)"
                }}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Your Email
              </label>
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none text-white placeholder-gray-400 transition-all"
                required
                whileFocus={{
                  scale: 1.01,
                  borderColor: "rgba(192, 132, 252, 1)",
                  boxShadow: "0 0 0 2px rgba(192, 132, 252, 0.3)"
                }}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <motion.input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Your subject here..."
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none text-white placeholder-gray-400 transition-all"
                required
                whileFocus={{
                  scale: 1.01,
                  borderColor: "rgba(192, 132, 252, 1)",
                  boxShadow: "0 0 0 2px rgba(192, 132, 252, 0.3)"
                }}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows="5"
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none text-white placeholder-gray-400 resize-none transition-all"
                required
                whileFocus={{
                  scale: 1.01,
                  borderColor: "rgba(192, 132, 252, 1)",
                  boxShadow: "0 0 0 2px rgba(192, 132, 252, 0.3)"
                }}
              />
            </motion.div>

            <motion.div variants={itemVariants} className="pt-2">
              <motion.button
                type="submit"
                className={`w-full px-6 py-3 rounded-lg font-semibold text-white transition-all ${
                  isSubmitting 
                    ? 'bg-blue-700 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-cyan-000 to-blue-500 hover:from-cyan-000 hover:to-blue-600'
                }`}
                variants={buttonVariants}
                whileHover={!isSubmitting ? "hover" : {}}
                whileTap={!isSubmitting ? "tap" : {}}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center cursor-pointer justify-center">
                    Send Message <span className="ml-2">🚀</span>
                  </span>
                )}
              </motion.button>
            </motion.div>
          </form>
        </motion.div>

        
      </div>
    </motion.section>
  );
};

export default Contact;