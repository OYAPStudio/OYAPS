"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useRef } from 'react';

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
      title: "BreachTracker",
      description: "Detect Breaches, Secure Credentials, Take Control",
      image: "/projects/breachtracker.png",
      categories: ["security", "Web"],
      link: "https://breachtracker.oyaps.com",
      technologies: ["PHP", "JavaScript", "MySQL"],
      features: [
        "Breach detection",
        "Real-time monitoring",
        "Automated alerts"
      ]
    },
    {
      id: 3,
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
        id: 4,
        title: "NTU Exam System",
        description: "Elevating Exam and Homework Management for NTU Students",
        image: "/projects/ntu.png",
        categories: ["Web", "education"],
        link: "https://ntu.oyaps.com",
        technologies: ["Vue.js", "Firebase", "Express"],
        features: [
          "Online exams",
          "Automated grading",
          "Progress tracking"
        ]
      },
    // Add more projects here
  ];

  const categories = ['all', 'Web', 'security', 'education', 'management'];

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

  return (
    <section id="projects" className="py-20 px-8 bg-gray-900 scroll-mt-20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-8"
      >
        Our Projects
      </motion.h2>

      {/* Categories Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => toggleCategory(category)}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              selectedCategories.includes(category)
                ? 'bg-cyan-500 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Projects Slider */}
      <div className="relative max-w-7xl mx-auto">
        {/* Navigation Buttons */}
        <button
          onClick={slidePrev}
          className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-gray-800/80 text-white transition-opacity ${
            currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'
          }`}
          disabled={currentSlide === 0}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={slideNext}
          className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-gray-800/80 text-white transition-opacity ${
            currentSlide >= filteredProjects.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'
          }`}
          disabled={currentSlide >= filteredProjects.length - 1}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Projects Container */}
        <div 
          ref={sliderRef}
          className="flex snap-x snap-mandatory overflow-x-hidden scroll-smooth gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-none w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] snap-center"
            >
              <div className="bg-gray-800 rounded-lg overflow-hidden group h-full">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.categories.map((category, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-700 rounded-full text-xs text-cyan-400">
                        {category}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-gray-400">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-700 rounded-md text-xs text-cyan-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-2 text-gray-400">Key Features</h4>
                    <ul className="list-disc list-inside text-sm text-gray-300">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
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
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;