import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Projects = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    // Projects data
    const projects = [
        {
            title: "KV-Audio",
            description: "A modern full-stack rental platform for audio equipment with booking, reviews, and admin management features.",
            techFrontend: ["React", "TailwindCSS", "React Router"],
            techBackend: ["Node.js", "Express", "MongoDB"],
            image: "https://placehold.co/600x400?text=KV+Audio",
            github: "https://github.com/Roshami/kv-audio-frontend.git",
            live: "https://kv-audio-frontend-kohl.vercel.app/",
        },
        {
            title: "Grand Haven Hotel",
            description: "A modern and user-friendly website showcasing The Grand Haven Hotel’s facilities, rooms, and booking options.",
            techFrontend: ["HTML", "CSS", "JavaScript"],
            techBackend: [],
            image: "https://placehold.co/600x400?text=E-Commerce",
            github: "https://github.com/Roshami/Grand-Haven-Hotel.git",
            live: "https://roshami.github.io/Grand-Haven-Hotel/index.html",
        },
        {
            title: "Grinny-Online-Store",
            description: "An e-commerce website for Grinny-Online-Store, offering a variety of hair bands, ribbons, and stylish accessories.",
            techFrontend: ["HTML", "CSS"],
            techBackend: [],
            image: "https://placehold.co/600x400?text=Task+Manager",
            github: "https://github.com/Roshami/Grinny-Online-Store.git",
            live: "#",
        },
    ];

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const projectItem = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const modalVariants = {
        hidden: { 
            opacity: 0,
            scale: 0.8,
            transition: { duration: 0.2 }
        },
        visible: { 
            opacity: 1,
            scale: 1,
            transition: { 
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.section 
            id="projects"
            className="min-h-screen py-16 "
            initial="hidden"
            animate="visible"
            variants={container}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        <span className="inline-block mr-3">🛠️</span>
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                            My Projects
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Some of my recent work and experiments
                    </p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                    variants={container}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={projectItem}
                            className="perspective-1000"
                            whileHover={{ y: -5 }}
                        >
                            <div className="relative h-full transform-style-preserve-3d transition-all duration-500">
                                <motion.div
                                    className="card-front bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl shadow-lg p-6 h-full flex flex-col cursor-pointer hover:border-blue-400 hover:shadow-blue-500/20 transition-all duration-300"
                                    onClick={() => {
                                        setSelectedProject(project);
                                        setModalOpen(true);
                                    }}
                                    whileHover={{ 
                                        scale: 1.03,
                                        boxShadow: "0 10px 25px rgba(0, 118, 255, 0.2)"
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                                        <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                                    </div>
                                    <div className="mt-auto">
                                        <div className="mb-3">
                                            <h4 className="text-xs font-medium text-gray-400 mb-1">Frontend</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.techFrontend.map((tech, i) => (
                                                    <span 
                                                        key={i} 
                                                        className="bg-gray-700/80 text-xs px-2 py-1 rounded-full text-gray-300"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-medium text-gray-400 mb-1">Backend</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.techBackend.map((tech, i) => (
                                                    <span 
                                                        key={i} 
                                                        className="bg-gray-700/80 text-xs px-2 py-1 rounded-full text-gray-300"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {modalOpen && selectedProject && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div 
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                            onClick={() => setModalOpen(false)}
                        />
                        
                        <motion.div
                            className="relative bg-gray-800/90 backdrop-blur-lg rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        >
                            <button
                                onClick={() => setModalOpen(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10 cursor-pointer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="p-6 sm:p-8">
                                <motion.h2 
                                    className="text-2xl sm:text-3xl font-bold mb-4 text-white"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {selectedProject.title}
                                </motion.h2>

                                <motion.img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-48 sm:h-64 object-cover rounded-lg mb-6"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                />

                                <motion.div
                                    className="mb-6"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <h3 className="text-lg font-semibold mb-2 text-gray-300">Description</h3>
                                    <p className="text-gray-400">{selectedProject.description}</p>
                                </motion.div>

                                <motion.div
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3 text-gray-300">Frontend</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.techFrontend.map((tech, i) => (
                                                <motion.span 
                                                    key={i}
                                                    className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-800"
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ 
                                                        delay: 0.6 + i * 0.1,
                                                        type: "spring",
                                                        stiffness: 300
                                                    }}
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold mb-3 text-gray-300">Backend</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.techBackend.map((tech, i) => (
                                                <motion.span 
                                                    key={i}
                                                    className="bg-cyan-900/30 text-cyan-300 px-3 py-1 rounded-full text-sm border border-cyan-800"
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ 
                                                        delay: 0.7 + i * 0.1,
                                                        type: "spring",
                                                        stiffness: 300
                                                    }}
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div 
                                    className="flex flex-col sm:flex-row gap-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    <a
                                        href={selectedProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg text-center font-medium transition-colors flex items-center justify-center gap-2"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                        View Code
                                    </a>
                                    <a
                                        href={selectedProject.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-lg text-center font-medium transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/20"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        Live Demo
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.section>
    );
};

export default Projects;