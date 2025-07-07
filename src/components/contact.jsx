import { useRef, useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = (e) => {
    // Validate form data
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return;
    }

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
        setSubmitStatus(null)
      },
      (error) => {
        console.log('FAILED...', error.text);
        setIsSubmitting(false);
        toast.error("Failed to send message. Please try again.");
      },
    );
             
  };

  const inputClasses = (fieldName) => `
    w-full px-4 py-3 bg-gray-700/50 border-2 rounded-xl outline-none text-white placeholder-gray-400 
    transition-all duration-300 transform
    ${focusedField === fieldName 
      ? 'border-purple-500 bg-gray-700/70 scale-[1.02] shadow-lg shadow-purple-500/20' 
      : 'border-gray-600 hover:border-gray-500'
    }
  `;

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
    <div className="min-h-screen  py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div 
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center justify-center mb-6">
            <span className="text-4xl md:text-5xl mr-4 animate-pulse">💬</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-8">
            Have a question or want to work together? I'd love to hear from you. 
            Send me a message and I'll respond as soon as possible.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info Section */}
          <div 
            className={`transform transition-all duration-700 delay-200 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse"></span>
                Let's Connect
              </h3>
              
              <div className="space-y-6 overflow-auto">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-blue-600/20 p-3 rounded-lg group-hover:bg-blue-600/30 transition-colors duration-300">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <p className="text-gray-400 ">thashmantharoshami@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-green-600/20 p-3 rounded-lg group-hover:bg-green-600/30 transition-colors duration-300">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Phone</h4>
                    <p className="text-gray-400">+94 (70) 382 4405</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-purple-600/20 p-3 rounded-lg group-hover:bg-purple-600/30 transition-colors duration-300">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Location</h4>
                    <p className="text-gray-400 w-60">Koskolawatta, Malwala Junction, Malwala, Ratnapura, Sri Lanka</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <h4 className="text-white font-semibold mb-4">Follow Me</h4>
                
                <motion.div 
                            className="flex justify-right space-x-4 sm:space-x-6"
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
                
                            
                          </motion.div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className={`transform transition-all duration-700 delay-400 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-3 h-3 bg-purple-500 rounded-full mr-3 animate-pulse"></span>
                Send Message
              </h3>

              <form className="space-y-6" ref={form} onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}
                      placeholder="John Doe"
                      className={inputClasses('name')}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      placeholder="john@example.com"
                      className={inputClasses('email')}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => handleFocus('subject')}
                    onBlur={handleBlur}
                    placeholder="What's this about?"
                    className={inputClasses('subject')}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    placeholder="Tell me about your project or idea..."
                    rows="6"
                    className={`${inputClasses('message')} resize-none`}
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className={`w-full px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 transform relative cursor-pointer overflow-hidden group ${
                      isSubmitting 
                        ? 'bg-gray-600 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30'
                    }`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center ">
                        Send Message
                        <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </span>
                    )}
                    
                    {/* Shimmer effect */}
                    {!isSubmitting && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    )}
                  </button>
                </div>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-600/20 border border-green-600/50 rounded-xl">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-green-400 font-semibold">Message sent successfully! I'll get back to you soon.</span>
                    </div>
                  </div>
                )}
                
              </form>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div 
          className={`text-center mt-16 transform transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-300 mb-6">Let's discuss how we can bring your ideas to life</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
              <a
                href="public/pdf/cv.pdf"
                download
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;