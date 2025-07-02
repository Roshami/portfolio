import { useState, useEffect } from "react";

const Projects = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Projects data
    const projects = [
        {
            title: "KV-Audio",
            description: "A modern full-stack rental platform for audio equipment with booking, reviews, and admin management features.",
            techFrontend: ["React", "TailwindCSS", "React Router"],
            techBackend: ["Node.js", "Express", "MongoDB"],
            image: "https://placehold.co/600x400/1f2937/60a5fa?text=KV+Audio",
            github: "https://github.com/Roshami/kv-audio-frontend.git",
            live: "https://kv-audio-frontend-kohl.vercel.app/",
        },
        {
            title: "Grand Haven Hotel",
            description: "A modern and user-friendly website showcasing The Grand Haven Hotel's facilities, rooms, and booking options.",
            techFrontend: ["HTML", "CSS", "JavaScript"],
            techBackend: [],
            image: "https://placehold.co/600x400/1f2937/f59e0b?text=Hotel+Website",
            github: "https://github.com/Roshami/Grand-Haven-Hotel.git",
            live: "https://roshami.github.io/Grand-Haven-Hotel/index.html",
        },
        {
            title: "Grinny-Online-Store",
            description: "An e-commerce website for Grinny-Online-Store, offering a variety of hair bands, ribbons, and stylish accessories.",
            techFrontend: ["HTML", "CSS"],
            techBackend: [],
            image: "https://placehold.co/600x400/1f2937/ec4899?text=E-Commerce+Store",
            github: "https://github.com/Roshami/Grinny-Online-Store.git",
            live: "#",
        },
    ];

    const openModal = (project) => {
        setSelectedProject(project);
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedProject(null);
        document.body.style.overflow = 'unset';
    };

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        };

        if (modalOpen) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [modalOpen]);

    return (
        <div className="min-h-screen  py-16 px-4">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Header Section */}
                <div 
                    className={`text-center mb-16 transform transition-all duration-1000 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                >
                    <div className="inline-flex items-center justify-center mb-4">
                        <span className="text-4xl md:text-5xl mr-4 animate-bounce">🛠️</span>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            My Projects
                        </h2>
                    </div>
                    <p className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                        Explore my latest work and creative experiments that showcase modern web development
                    </p>
                    <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`group transform transition-all duration-700 ${
                                isVisible 
                                    ? 'translate-y-0 opacity-100' 
                                    : 'translate-y-20 opacity-0'
                            }`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <div 
                                className="relative bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-xl overflow-hidden cursor-pointer h-full flex flex-col
                                           hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 
                                           transition-all duration-500 group-hover:bg-gray-800/80"
                                onClick={() => openModal(project)}
                            >
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                {/* Content */}
                                <div className="relative z-10 p-6 flex-grow flex flex-col">
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm mb-6 leading-relaxed line-clamp-3">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-xs font-semibold text-blue-400 mb-2 uppercase tracking-wide">
                                                Frontend
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.techFrontend.map((tech, i) => (
                                                    <span 
                                                        key={i} 
                                                        className="bg-blue-900/30 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-800/50 
                                                                   hover:bg-blue-800/40 hover:border-blue-600 transition-all duration-300"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        {project.techBackend.length > 0 && (
                                            <div>
                                                <h4 className="text-xs font-semibold text-cyan-400 mb-2 uppercase tracking-wide">
                                                    Backend
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.techBackend.map((tech, i) => (
                                                        <span 
                                                            key={i} 
                                                            className="bg-cyan-900/30 text-cyan-300 text-xs px-3 py-1 rounded-full border border-cyan-800/50
                                                                       hover:bg-cyan-800/40 hover:border-cyan-600 transition-all duration-300"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Hover indicator */}
                                    <div className="mt-4 text-gray-400 text-xs flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span>Click to view details</span>
                                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Enhanced Modal */}
            {modalOpen && selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div 
                        className="absolute inset-0 bg-black/80 backdrop-blur-md animate-fade-in"
                        onClick={closeModal}
                    />
                    
                    {/* Modal Content */}
                    <div className={`relative bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-600/50 transform transition-all duration-300 ${
                        modalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                    }`}>
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors z-20 
                                       bg-gray-700/50 hover:bg-gray-600/50 rounded-full p-2 backdrop-blur-sm"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="p-8 sm:p-12">
                            {/* Project Title */}
                            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                {selectedProject.title}
                            </h2>

                            {/* Project Image */}
                            <div className="relative mb-8 rounded-xl overflow-hidden shadow-2xl">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-64 sm:h-80 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>

                            {/* Description */}
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold mb-4 text-gray-200 flex items-center">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                    Description
                                </h3>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    {selectedProject.description}
                                </p>
                            </div>

                            {/* Tech Stack Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-blue-400 flex items-center">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                        Frontend Technologies
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {selectedProject.techFrontend.map((tech, i) => (
                                            <span 
                                                key={i}
                                                className="bg-blue-900/40 text-blue-300 px-4 py-2 rounded-lg text-sm font-medium border border-blue-800/50
                                                           hover:bg-blue-800/50 hover:border-blue-600 transition-all duration-300 shadow-lg"
                                                style={{ animationDelay: `${i * 100}ms` }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-cyan-400 flex items-center">
                                        <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                                        Backend Technologies
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {selectedProject.techBackend.length > 0 ? (
                                            selectedProject.techBackend.map((tech, i) => (
                                                <span 
                                                    key={i}
                                                    className="bg-cyan-900/40 text-cyan-300 px-4 py-2 rounded-lg text-sm font-medium border border-cyan-800/50
                                                               hover:bg-cyan-800/50 hover:border-cyan-600 transition-all duration-300 shadow-lg"
                                                    style={{ animationDelay: `${i * 100}ms` }}
                                                >
                                                    {tech}
                                                </span>
                                            ))
                                        ) : (
                                            <span className="text-gray-400 italic">Frontend only project</span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href={selectedProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-gray-700/80 hover:bg-gray-600/80 text-white px-8 py-4 rounded-xl text-center font-semibold transition-all duration-300 
                                               flex items-center justify-center gap-3 border border-gray-600/50 hover:border-gray-500 shadow-lg hover:shadow-xl"
                                >
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                    View Source Code
                                </a>
                                
                                {selectedProject.live !== "#" ? (
                                    <a
                                        href={selectedProject.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-center font-semibold transition-all duration-300 
                                                   flex items-center justify-center gap-3 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105"
                                    >
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        Live Demo
                                    </a>
                                ) : (
                                    <div className="flex-1 bg-gray-600/50 text-gray-400 px-8 py-4 rounded-xl text-center font-semibold cursor-not-allowed
                                                    flex items-center justify-center gap-3">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L5.636 5.636" />
                                        </svg>
                                        Demo Not Available
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out;
                }
                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
};

export default Projects;