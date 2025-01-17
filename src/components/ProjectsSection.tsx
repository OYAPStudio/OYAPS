"use client"
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  categories: string[];
  link: string;
  technologies: string[];
  features: string[];
}

const ProjectsSection = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>(['all']);
    const sliderRef = useRef<HTMLDivElement>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isInView, setIsInView] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "SunWay Kindergarten",
      description: "Smart Childcare, Attendance, and Financial Management",
      image: "/images/sunway.jpg",
      categories: ["Web", "management"],
      link: "https://sunwayiq.com",
      technologies: ["Next.js", "React", "MySQL"],
      features: [
        "Attendance tracking",
        "Financial management",
        "Parent communication"
      ]
    },
    {
      id: 2,
      title: "NTU Exam System",
      description: "Elevating Exam and Homework Management for NTU Students",
      image: "/images/NTU-V1.png",
      categories: ["Web", "education"],
      link: "https://ntu.edu.iq",
      technologies: ["PHP", "JavaScript", "MySQL"],
      features: [
        "Online exams",
        "Automated grading",
        "Progress tracking"
      ]
    },
    {
        id: 3,
        title: "Smart Scheduling System",
        description: "An AI-powered system that simplifies schedule creation for schools and universities, saving time, avoiding conflicts, and ensuring efficient resource management.",
        image: "/images/schedule.jpg",
        categories: ["Web", "education","management"],
        link: "https://ntu.oyaps.com",
        technologies: ["Artificial Intelligence", "MySQL", "NEXT JS"],
        features: [
          "Generate a schedule free of any conflicts in seconds",
          "High flexibility",
          "Powered with AI",
          "Suitable for many institutions such as schools and universities",
          "Easy to generate and manage the schedule"
        ]
      },
      {
        id: 4,
        title: "Scopus Gate",
        description: "A gateway for Scopus-indexed research linked to Northern Technical University, featuring detailed statistics, charts, and insights to showcase research impact and trends.",
        image: "/images/scopus.jpg",
        categories: ["Web", "education"],
        link: "https://ntu.oyaps.com",
        technologies: ["Python", "NEXT JS"],
        features: [
          "Research Analytics",
          "Author Profiles",
          "Collaboration Insights",
          "Search & Filters",
          "User-Friendly Interface"
        ]
      },
      {
        id: 5,
        title: "AI Chat Bot",
        description: "An AI-powered chatbot for Northern Technical University students, enabling inquiries and support in Arabic, English, and Kurdish, providing quick, accurate, and multilingual assistance for academic and administrative questions.",
        image: "/images/bot.jpg",
        categories: ["Web", "education"],
        link: "https://chat.ntu.edu.iq",
        technologies: ["Artificial Intelligence", "NEXT JS"],
        features: [
          "Multi language bot",
          "24/7 Availability",
          "Academic Assistance",
          "Personalized Responses, customized answers based on user-specific data",
          "Secure and Confidential"
        ]
      },
    // Add more projects here
  ];

  const categories = ['all', 'Web', 'security', 'education', 'management'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleCategory = (category: string) => {
    if (category === 'all') {
      setSelectedCategories(['all']);
      return;
    }

    setSelectedCategories(prev => {
      const newCategories = prev.filter(c => c !== 'all');
      if (newCategories.includes(category)) {
        const result = newCategories.filter(c => c !== category);
        return result.length === 0 ? ['all'] : result;
      } else {
        return [...newCategories, category];
      }
    });
  };

  const filteredProjects = projects.filter(project => 
    selectedCategories.includes('all') ? true : 
    project.categories.some(cat => selectedCategories.includes(cat))
  );

  const slideNext = () => {
    if (sliderRef.current) {
      const width = sliderRef.current.offsetWidth;
      sliderRef.current.scrollBy({ left: width, behavior: 'smooth' });
      setCurrentSlide(prev => Math.min(prev + 1, filteredProjects.length - 1));
    }
  };

  const slidePrev = () => {
    if (sliderRef.current) {
      const width = sliderRef.current.offsetWidth;
      sliderRef.current.scrollBy({ left: -width, behavior: 'smooth' });
      setCurrentSlide(prev => Math.max(prev - 1, 0));
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <section id="projects" className="relative py-20 px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Digital background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {/* Animated grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#232323_1px,transparent_1px),linear-gradient(to_bottom,#232323_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          
          {/* Glowing orbs */}
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-[128px] animate-pulse"></div>
    <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-[128px] animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-300% animate-gradient"
        >
          Our Projects
        </motion.h2>

        {/* Categories Filter */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => toggleCategory(category)}
              className={`px-6 py-2 rounded-xl transition-all duration-300 shadow-lg backdrop-blur-sm border border-gray-700/50 ${
                selectedCategories.includes(category)
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-transparent'
                  : 'bg-gray-800/50 text-gray-400 hover:text-white hover:border-cyan-500/50'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={slidePrev}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-gray-800/80 text-white transition-all duration-300 backdrop-blur-sm border border-gray-700/50 ${
              currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]'
            }`}
            disabled={currentSlide === 0}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={slideNext}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-gray-800/80 text-white transition-all duration-300 backdrop-blur-sm border border-gray-700/50 ${
              currentSlide >= filteredProjects.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]'
            }`}
            disabled={currentSlide >= filteredProjects.length - 1}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          <AnimatePresence>
            <motion.div 
              ref={sliderRef}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex snap-x snap-mandatory overflow-x-hidden scroll-smooth gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-none w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] snap-center"
                >
                  <motion.div 
                    className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden h-full border border-gray-700/50 shadow-lg hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                    whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                    </div>

                    <div className="relative p-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.categories.map((category, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1 bg-gray-700/50 backdrop-blur-sm rounded-full text-xs text-cyan-400 border border-cyan-400/20"
                          >
                            {category}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-gray-300 mb-4 transition-all duration-300 ease-in-out">
                        {project.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold mb-2 text-gray-400">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <span 
                              key={i} 
                              className="px-2 py-1 bg-gray-700/50 backdrop-blur-sm rounded-md text-xs text-cyan-300 border border-cyan-300/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold mb-2 text-gray-400">Key Features</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, i) => (
                            <motion.li 
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-center text-sm text-gray-300"
                            >
                              <svg className="w-4 h-4 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 group/button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Project
                        <svg
                          className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover/button:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </motion.a>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;