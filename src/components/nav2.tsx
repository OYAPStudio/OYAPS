"use client";

import { Home, User, Briefcase, FileText } from "lucide-react";
import { useState, useEffect } from "react";

export function NavBarDemo() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Home", url: "#home", icon: Home },
    { name: "Projects", url: "#projects", icon: Briefcase },
    { name: "Book", url: "#contact", icon: FileText },
    { name: "Team", url: "#US", icon: User },
  ];

  const handleScroll = (id: string) => {
    if (id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      setActiveSection("home");
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScrollSpy = () => {
      const isAtTop = window.scrollY < 50;
      setIsScrolled(window.scrollY > 20);
      
      if (isAtTop) {
        setActiveSection("home");
        return;
      }

      const sections = navItems.map(item => ({
        id: item.url.replace("#", ""),
        element: document.getElementById(item.url.replace("#", ""))
      }));

      const currentSection = sections.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="fixed top-4 sm:top-4 left-0 right-0 z-50 px-3">
      <nav className={`
        w-fit mx-auto transition-all duration-300
        ${isScrolled ? 'bg-gray-900/95 shadow-lg' : 'bg-gray-900/80'}
        backdrop-blur-md rounded-full border border-gray-800/50
      `}>
        <div className="flex items-center justify-center h-11 sm:h-12">
          {navItems.map((item) => {
            const isActive = activeSection === item.url.replace("#", "");
            const Icon = item.icon;
            const isHome = item.url === "#home";
            
            return (
              <button
                key={item.url}
                onClick={() => handleScroll(item.url.replace("#", ""))}
                className={`
                  relative flex items-center
                  px-2 sm:px-3 py-1.5
                  rounded-full transition-all duration-300 group
                  ${isActive 
                    ? 'text-blue-400 bg-gray-800/70' 
                    : 'text-gray-400 hover:text-gray-200'}
                  ${isHome && !isScrolled ? 'hover:-translate-y-1' : 'hover:bg-gray-800/50'}
                `}
              >
                <Icon className={`
                  transition-all duration-300
                  ${isHome && isActive ? '-translate-y-1' : ''}
                  ${!isHome && isActive ? 'scale-110' : ''}
                `} />
                <span className={`
                  hidden sm:block ml-2 transition-all duration-300 text-xs sm:text-sm
                  ${isActive ? 'opacity-100 max-w-16 sm:max-w-16' : 'opacity-0 max-w-0'}
                  overflow-hidden whitespace-nowrap
                `}>
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}