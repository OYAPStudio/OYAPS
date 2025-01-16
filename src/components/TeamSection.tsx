"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  portfolio: string;
  email: string;
  works: {
    title: string;
    description: string;
    link: string;
  }[];
}

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    { 
      id: 1,
      name: "Ali Saad",
      role: "Web Designer & Cybersecurity Enthusiast",
      image: "/team/ali.png",
      portfolio: "https://speedo.oyaps.com",
      email: "ali2005saad12@gmail.com",
      works: [
        {
          title: "SunWay Kindergarten",
          description: "Smart Childcare, Attendance, and Financial Management",
          link: "https://sunwayiq.com"
        },
        {
          title: "BreachTracker",
          description: "Detect Breaches, Secure Credentials, Take Control",
          link: "https://sunwayiq.com"
        },
        {
          title: "NTU Exam System",
          description: "Elevating Exam and Homework Management for NTU Students",
          link: "https://sunwayiq.com"
        },
        {
          title: "Rubber Duckey V5",
          description: "16 Ready-to-Use HID Scripts Built with Arduino",
          link: "https://sunwayiq.com"
        }
      ]
    },
    { 
      id: 2,
      name: "Yousif Abd-Alwahab",
      role: "Web Designer & Ai",
      image: "/team/ali.png",
      portfolio: "https://nuk.oyaps.com",
      email: "ali2005saad12@gmail.com",
      works: [
        {
          title: "Project 1",
          description: "A beautiful web design project",
          link: "https://project1.com"
        }
      ]
    },
    { 
      id: 3,
      name: "Ali Saad",
      role: "Web Designer",
      image: "/team/ali.png",
      portfolio: "https://speedo.oyaps.com",
      email: "ali2005saad12@gmail.com",
      works: [
        {
          title: "Project 1",
          description: "A beautiful web design project",
          link: "https://project1.com"
        }
      ]
    },
    { 
      id: 4,
      name: "Ali Saad",
      role: "Web Designer",
      image: "/team/ali.png",
      portfolio: "https://speedo.oyaps.com",
      email: "ali2005saad12@gmail.com",
      works: [
        {
          title: "Project 1",
          description: "A beautiful web design project",
          link: "https://project1.com"
        }
      ]
    },
  ];

  return (
    <section className="py-20 px-8 bg-gray-900">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-16"
      >
        Our Team
      </motion.h2>

       {/* Changed flex to grid and added responsive columns */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full bg-gray-800 rounded-lg overflow-hidden cursor-pointer group hover:bg-gray-700 transition-colors duration-300"
            onClick={() => setSelectedMember(member)}
          >
            <div className="relative h-48 w-full">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-cyan-400 mb-4">{member.role}</p>
              <a
                href={member.portfolio}
                className="text-cyan-300 hover:text-cyan-400 transition-colors inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                View Portfolio
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for member details */}
      {selectedMember && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            // Close modal if clicking the backdrop (outside the modal)
            if (e.target === e.currentTarget) {
              setSelectedMember(null);
            }
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-gray-800 rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="relative h-48 w-48 rounded-lg overflow-hidden">
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{selectedMember.name}</h3>
                <p className="text-cyan-400 mb-4">{selectedMember.role}</p>
                <a
                  href={`mailto:${selectedMember.email}`}
                  className="text-cyan-300 hover:text-cyan-400 block mb-4 transition-colors"
                >
                  {selectedMember.email}
                </a>
                <h4 className="text-xl font-bold mb-4">Recent Works</h4>
                <div className="space-y-4">
                  {selectedMember.works.map((work, index) => (
                    <div key={index} className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors">
                      <h5 className="font-bold mb-2">{work.title}</h5>
                      <p className="text-gray-300 mb-2">{work.description}</p>
                      <a
                        href={work.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-300 hover:text-cyan-400 transition-colors"
                      >
                        View Project →
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default TeamSection;