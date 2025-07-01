import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const Intro = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { scrollY } = useScroll();
    
    // Parallax effects
    const y1 = useTransform(scrollY, [0, 300], [0, -50]);
    const y2 = useTransform(scrollY, [0, 300], [0, -100]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    useEffect(() => {
        setIsVisible(true);
        
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            setIsVisible(false);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.15,
                delayChildren: 0.2,
                duration: 0.8
            }
        }
    };

    const itemVariants = {
        hidden: { 
            y: 60, 
            opacity: 0,
            scale: 0.8
        },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 15,
                mass: 0.8,
                duration: 0.8
            }
        }
    };

    const floatingVariants = {
        float: {
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const glowVariants = {
        glow: {
            boxShadow: [
                "0 0 20px rgba(59, 130, 246, 0.3)",
                "0 0 40px rgba(147, 51, 234, 0.4)",
                "0 0 20px rgba(59, 130, 246, 0.3)"
            ],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const textGradientVariants = {
        animate: {
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            transition: {
                duration: 5,
                repeat: Infinity,
                ease: "linear"
            }
        }
    };

    return (
        <section 
            id="intro" 
            className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Orbs */}
                <motion.div
                    style={{ x: mousePosition.x, y: mousePosition.y }}
                    className="absolute top-20 left-20 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    style={{ x: -mousePosition.x, y: -mousePosition.y }}
                    className="absolute bottom-20 right-20 w-40 h-40 md:w-56 md:h-56 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.4, 0.2, 0.4]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                
                {/* Floating Particles */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0]
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            <motion.div
                style={{ y: y1, opacity }}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={containerVariants}
                className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10"
            >
                <motion.div 
                    variants={itemVariants}
                    className="relative bg-gray-900/40 backdrop-blur-2xl p-6 sm:p-8 lg:p-12 rounded-3xl shadow-2xl border border-gray-700/30 hover:border-gray-600/50 transition-all duration-500"
                    whileHover={{ scale: 1.02 }}
                >
                    {/* Animated Border Gradient */}
                    <motion.div
                        className="absolute inset-0 rounded-3xl  blur-sm -z-10"
                        animate={{
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />

                    {/* Profile Section */}
                    <motion.div 
                        className="relative flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-12 mb-8"
                        variants={itemVariants}
                    >
                        {/* Profile Image */}
                        <motion.div
                            className="relative flex-shrink-0"
                            variants={floatingVariants}
                            animate="float"
                        >
                            <motion.div
                                className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72"
                                variants={glowVariants}
                                animate="glow"
                            >
                                <motion.img
                                    initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    transition={{ 
                                        duration: 1.2,
                                        type: "spring",
                                        bounce: 0.4,
                                        delay: 0.3
                                    }}
                                    whileHover={{ 
                                        scale: 1.05,
                                        rotate: 5,
                                        transition: { duration: 0.3 }
                                    }}
                                    src="public/profile/dp.jpeg"
                                    alt="Roshami Thashmantha"
                                    className="w-full h-full rounded-full object-cover select-none pointer-events-none border-4 border-white/20 shadow-2xl cursor-pointer"
                                />
                                
                                {/* Rotating Ring */}
                                <motion.div
                                    animate={{
                                        rotate: [0, 360],
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 12,
                                        ease: "linear",
                                    }}
                                    className="absolute inset-0 rounded-full border-2 border-dashed border-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-60"
                                />
                                
                                {/* Pulsing Glow */}
                                <motion.div
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.3, 0.6, 0.3]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-xl -z-10"
                                />
                            </motion.div>
                        </motion.div>

                        {/* Text Content */}
                        <div className="flex-1 text-center lg:text-left space-y-6">
                            <motion.div variants={itemVariants}>
                                <motion.h1 
                                    className="text-4xl sm:text-5xl lg:text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-size-200 bg-pos-0"
                                    variants={textGradientVariants}
                                    animate="animate"
                                    whileHover={{ 
                                        scale: 1.05,
                                        textShadow: "0 0 20px rgba(147, 51, 234, 0.5)"
                                    }}
                                    style={{
                                        backgroundSize: "200% 200%"
                                    }}
                                >
                                    Hi, I'm Roshami
                                </motion.h1>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <motion.p 
                                    className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-semibold"
                                    whileHover={{ 
                                        color: "#a855f7",
                                        scale: 1.02
                                    }}
                                >
                                    Full Stack Developer
                                </motion.p>
                            </motion.div>

                            

                            <motion.div variants={itemVariants}>
                                <motion.p 
                                    className="mt-6 text-sm sm:text-base lg:text-lg text-gray-400 max-w-md mx-auto lg:mx-0 italic font-light leading-relaxed"
                                    whileHover={{ 
                                        scale: 1.02,
                                        color: "#d1d5db",
                                        textShadow: "0 0 10px rgba(255,255,255,0.3)"
                                    }}
                                >
                                    "Every expert was once a beginner. Every pro was once an amateur."
                                </motion.p>
                            </motion.div>

                            
                        </div>
                    </motion.div>

                    {/* Decorative Elements */}
                    <motion.div 
                        style={{ y: y2 }}
                        className="absolute -bottom-10 -left-10 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-2xl -z-10"
                        animate={{
                            scale: [1, 1.3, 1],
                            rotate: [0, 180, 360]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div 
                        style={{ y: y1 }}
                        className="absolute -top-10 -right-10 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-2xl -z-10"
                        animate={{
                            scale: [1.2, 1, 1.2],
                            rotate: [360, 180, 0]
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.div>

                {/* Enhanced Scroll Indicator */}
                <motion.div 
                    className="mt-16 flex flex-col items-center justify-center"
                    variants={itemVariants}
                    style={{ y: y1 }}
                >
                    <motion.p 
                        className="text-sm text-gray-400 mb-4 font-medium"
                        animate={{ 
                            opacity: [0.4, 1, 0.4],
                            y: [0, -5, 0]
                        }}
                        transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        Scroll to explore
                    </motion.p>
                    <motion.div
                        animate={{ 
                            y: [0, 15, 0],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                            duration: 1.5, 
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="p-2 rounded-full bg-gray-800/30 backdrop-blur-sm border border-gray-600/30"
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-6 w-6 text-gray-400" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                            />
                        </svg>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Intro;