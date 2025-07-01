import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaHome, FaTools, FaRegStar, FaBars, FaTimes } from "react-icons/fa";
import { IoIosFolderOpen } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
import Intro from "../components/into";
import AboutMe from "../components/about";
import Skils from "../components/skils";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Footer from "../components/footer";

const Home = () => {
    const [activeSection, setActiveSection] = useState("intro");
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const sections = ["intro", "about", "skills", "projects", "contact"];

    const navIcons = [
        { icon: <FaHome className="text-xl md:text-2xl" />, to: "intro", label: "Home" },
        { icon: <IoPersonCircle className="text-2xl md:text-3xl" />, to: "about", label: "About" },
        { icon: <FaTools className="text-xl md:text-2xl" />, to: "skills", label: "Skills" },
        { icon: <IoIosFolderOpen className="text-xl md:text-2xl" />, to: "projects", label: "Projects" },
        { icon: <FaEnvelope className="text-xl md:text-2xl" />, to: "contact", label: "Contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (let id of sections) {
                const element = document.getElementById(id);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(id);
                        break;
                    }
                }
            }

            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <div className='min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden'>
            {/* Animated Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
                {[...Array(50)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            opacity: Math.random() * 0.5 + 0.1
                        }}
                        animate={{
                            y: [null, Math.random() * window.innerHeight],
                            opacity: [null, Math.random() * 0.3 + 0.1]
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "linear"
                        }}
                    >
                        <FaRegStar className="text-white/20" size={Math.random() * 15 + 5} />
                    </motion.div>
                ))}
            </div>

            {/* Scroll to Top Button */}
            <AnimatePresence>
                {isScrolled && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white p-3 rounded-full shadow-2xl z-50 transition-all duration-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Mobile Menu Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="fixed top-6 left-6 lg:hidden bg-gray-800/80 backdrop-blur-md text-white p-3 rounded-full shadow-lg z-50 border border-gray-700"
            >
                {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </motion.button>

            {/* Desktop Navigation Sidebar */}
            <motion.nav 
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className='hidden lg:flex fixed left-0 top-0 h-full w-25 bg-gray-800/30 backdrop-blur-xl border-r border-gray-700/50 z-40 flex-col items-center justify-center space-y-8'
            >
                {navIcons.map((item, index) => (
                    <motion.button
                        key={item.to}
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.1, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection(item.to)}
                        className={`relative w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group ${
                            activeSection === item.to
                                ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-purple-500/30 shadow-lg shadow-purple-500/20"
                                : "text-gray-400 hover:text-white hover:bg-gray-700/30"
                        }`}
                        aria-label={item.label}
                    >
                        {item.icon}
                        
                        {/* Tooltip */}
                        <span className="absolute left-full ml-4 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                            {item.label}
                        </span>
                        
                        {/* Active indicator */}
                        {activeSection === item.to && (
                            <motion.div
                                layoutId="activeIndicator"
                                className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                    </motion.button>
                ))}
            </motion.nav>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.nav
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "-100%", opacity: 0 }}
                            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                            className="fixed left-0 top-0 h-full w-64 bg-gray-800/95 backdrop-blur-xl border-r border-gray-700 z-50 lg:hidden flex flex-col pt-20"
                        >
                            {navIcons.map((item, index) => (
                                <motion.button
                                    key={item.to}
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.1, duration: 0.3 }}
                                    whileHover={{ scale: 1.02, x: 10 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => scrollToSection(item.to)}
                                    className={`flex items-center space-x-4 px-6 py-4 transition-all duration-300 ${
                                        activeSection === item.to
                                            ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border-r-2 border-purple-500"
                                            : "text-gray-300 hover:text-white hover:bg-gray-700/30"
                                    }`}
                                >
                                    {item.icon}
                                    <span className="font-medium">{item.label}</span>
                                </motion.button>
                            ))}
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>

            {/* Main Content Area */}
            <div className='lg:ml-20 relative z-10'>
                <motion.section 
                    id="intro" 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="min-h-screen flex flex-col items-center justify-center px-6 relative"
                >
                    <Intro />
                </motion.section>

                <motion.section 
                    id="about" 
                    className="min-h-screen flex items-center justify-center py-20 px-6"
                >
                    <AboutMe />
                </motion.section>

                <motion.section 
                    id="skills" 
                    className="min-h-screen flex items-center justify-center py-20 px-6"
                >
                    <Skils />
                </motion.section>

                <motion.section 
                    id="projects" 
                    className="min-h-screen flex items-center justify-center py-20 px-6"
                >
                    <Projects />
                </motion.section>

                <motion.section 
                    id="contact" 
                    className="min-h-screen flex items-center justify-center py-20 px-6"
                >
                    <Contact />
                </motion.section>

                <footer className="bg-gray-900/50 backdrop-blur-xl border-t border-gray-700/50 mt-20">
                    <Footer />
                    
                </footer>
            </div>
        </div>
    );
};

export default Home;