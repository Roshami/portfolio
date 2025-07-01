import { useEffect, useState } from "react";
import { 
  Code, 
  Database, 
  Globe, 
  Server, 
  Palette, 
  Zap,
  GitBranch,
  Layers,
  Coffee,
  BookOpen
} from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "HTML", icon: <Code className="w-8 h-8" />, level: 90 },
        { name: "CSS", icon: <Palette className="w-8 h-8" />, level: 85 },
        { name: "JavaScript", icon: <Zap className="w-8 h-8" />, level: 80 },
        { name: "React", icon: <Layers className="w-8 h-8" />, level: 85 },
        { name: "Tailwind", icon: <Palette className="w-8 h-8" />, level: 90 },
      ]
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", icon: <Server className="w-8 h-8" />, level: 75 },
        { name: "Express", icon: <Zap className="w-8 h-8" />, level: 70 },
        { name: "PHP", icon: <Code className="w-8 h-8" />, level: 65 },
        { name: "Python", icon: <Coffee className="w-8 h-8" />, level: 70 },
        { name: "Java", icon: <Coffee className="w-8 h-8" />, level: 60 },
      ]
    },
    {
      title: "Database & Tools",
      icon: <Database className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "MongoDB", icon: <Database className="w-8 h-8" />, level: 75 },
        { name: "XAMPP", icon: <Server className="w-8 h-8" />, level: 80 },
        { name: "Git", icon: <GitBranch className="w-8 h-8" />, level: 85 },
      ]
    }
  ];

  const SkillCard = ({ skill, index, categoryIndex, categoryColor }) => (
    <div
      className={`relative group cursor-pointer transform transition-all duration-300 ${
        isVisible 
          ? `translate-y-0 opacity-100` 
          : 'translate-y-8 opacity-0'
      }`}
      style={{ 
        transitionDelay: `${(categoryIndex * 100) + (index * 50)}ms` 
      }}
      onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${index}`)}
      onMouseLeave={() => setHoveredSkill(null)}
    >
      <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
        <div className="flex flex-col items-center space-y-3">
          <div className={`p-3 rounded-full bg-gradient-to-r ${categoryColor} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
            <div className="text-white group-hover:animate-pulse">
              {skill.icon}
            </div>
          </div>
          <span className="text-white font-medium text-center">{skill.name}</span>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
            <div 
              className={`h-full bg-gradient-to-r ${categoryColor} transition-all duration-1000 ease-out`}
              style={{ 
                width: isVisible ? `${skill.level}%` : '0%',
                transitionDelay: `${(categoryIndex * 100) + (index * 50) + 200}ms`
              }}
            />
          </div>
          <span className="text-xs text-gray-400">{skill.level}%</span>
        </div>
        
        {/* Hover Tooltip */}
        {hoveredSkill === `${categoryIndex}-${index}` && (
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap z-10 animate-fade-in">
            Learned this!
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8" id="skills">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:32px_32px] opacity-20" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="flex items-center justify-center space-x-3 mb-6">
            <BookOpen className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              My Learning Journey
            </h2>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Exploring technologies and building skills across the full stack
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`transform transition-all duration-1000 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              {/* Category Header */}
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                <div className={`h-1 w-20 bg-gradient-to-r ${category.color} rounded-full`} />
              </div>

              {/* Skills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skillIndex}
                    skill={skill}
                    index={skillIndex}
                    categoryIndex={categoryIndex}
                    categoryColor={category.color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-green-400 rounded-full animate-pulse opacity-60" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse opacity-60" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-60" style={{ animationDelay: '1.5s' }} />
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Skills;