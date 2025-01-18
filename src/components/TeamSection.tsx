"use client"
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, memo } from 'react';

interface Work {
  title: string;
  description: string;
  link: string;
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  portfolio: string;
  email: string;
  works: Work[];
}

const TeamMemberCard = memo(function TeamMemberCard({ 
  member, 
  index, 
  onSelect 
}: { 
  member: TeamMember; 
  index: number; 
  onSelect: (member: TeamMember) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full bg-gray-800 rounded-lg overflow-hidden cursor-pointer group hover:bg-gray-700 transition-colors duration-300"
      onClick={() => onSelect(member)}
    >
      <div className="relative h-48 w-full">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={index < 4}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
        <p className="text-cyan-400 mb-4">{member.role}</p>
        {member.portfolio && (
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
        )}
      </div>
    </motion.div>
  );
});

const MemberModal = memo(function MemberModal({ 
  member, 
  onClose 
}: { 
  member: TeamMember; 
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-gray-800 rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        aria-label="Close modal"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="relative h-48 w-48 rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 768px) 192px, 192px"
            className="object-cover"
            priority
          />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2 text-white">{member.name}</h3>
          <p className="text-cyan-400 mb-4">{member.role}</p>
          <a
            href={`mailto:${member.email}`}
            className="text-cyan-300 hover:text-cyan-400 block mb-4 transition-colors"
          >
            {member.email}
          </a>
          <h4 className="text-xl font-bold mb-4 text-white">Recent Works</h4>
          <div className="space-y-4">
            {member.works.map((work, index) => (
              <div 
                key={`${member.id}-work-${index}`}
                className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors"
              >
                <h5 className="font-bold mb-2 text-white">{work.title}</h5>
                <p className="text-gray-300 mb-2">{work.description}</p>
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-cyan-400 transition-colors inline-flex items-center"
                >
                  View Project
                  <span className="ml-1">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
});

const teamMembers: TeamMember[] = [
  { 
    id: 1,
    name: "Ali Saad",
    role: "Web Designer & Cybersecurity Enthusiast",
    image: "/team/ali.png",
    portfolio: "https://speedo.oyaps.com",
    email: "ali@oyaps.com",
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
    role: "Web Designer & AI Developer",
    image: "/team/Yousif.jpg",
    portfolio: "https://nuk.oyaps.com",
    email: "yousif@oyaps.com",
    works: [
      {
        title: "SunWay Kindergarten",
        description: "Smart Childcare, Attendance, and Financial Management",
        link: "https://sunwayiq.com"
      },
      {
        title: "NTU Exam System",
        description: "Elevating Exam and Homework Management for NTU Students",
        link: "https://sunwayiq.com"
      },
      {
        title: "Smart Scheduling System",
        description: "System help universities to generate and manage the schedule easliy using AI",
        link: "https://sunwayiq.com"
      },
      {
        title: "Scopus gate",
        description: "Digital gate for Northern technical university`s researchs on scopus",
        link: "https://sunwayiq.com"
      },
      {
        title: "AI Chat",
        description: "AI chat bot to answer students' inquiries at the university",
        link: "https://chat.ntu.edu.iq"
      }
    ]
  },
  { 
    id: 3,
    name: "Ezalden Mamon",
    role: "Web Designer & Web Development",
    image: "/team/Ezalden.JPG",
    portfolio: "",
    email: "ezalden@oyaps.com",
    works: [
      {
        title: "SunWay Kindergarten",
        description: "Smart Childcare, Attendance, and Financial Management",
        link: "https://sunwayiq.com"
      },
      {
        title: "NTU Exam System",
        description: "Elevating Exam and Homework Management for NTU Students",
        link: "https://sunwayiq.com"
      },
      {
        title: "Smart Scheduling System",
        description: "System help universities to generate and manage the schedule easliy using AI",
        link: "https://sunwayiq.com"
      },
      {
        title: "Scopus gate",
        description: "Digital gate for Northern technical university`s researchs on scopus",
        link: "https://sunwayiq.com"
      },
      {
        title: "AI Chat",
        description: "AI chat bot to answer students' inquiries at the university",
        link: "https://chat.ntu.edu.iq"
      }
    ]
  },
  { 
    id: 4,
    name: "Othman Yahya",
    role: "AI Developer",
    image: "/team/Othman.jpg",
    portfolio: "",
    email: "othman@oyaps.com",
    works: [
      {
        title: "SunWay Kindergarten",
        description: "Smart Childcare, Attendance, and Financial Management",
        link: "https://sunwayiq.com"
      },
      {
        title: "NTU Exam System",
        description: "Elevating Exam and Homework Management for NTU Students",
        link: "https://sunwayiq.com"
      },
      {
        title: "Smart Scheduling System",
        description: "System help universities to generate and manage the schedule easliy using AI",
        link: "https://sunwayiq.com"
      },
      {
        title: "Scopus gate",
        description: "Digital gate for Northern technical university`s researchs on scopus",
        link: "https://sunwayiq.com"
      },
      {
        title: "AI Chat",
        description: "AI chat bot to answer students' inquiries at the university",
        link: "https://chat.ntu.edu.iq"
      }
    ]
  }
];

function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section id="US" className="py-20 px-8 bg-gray-900">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-center mb-16 text-white"
      >
        Our Team
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={member.id}
            member={member}
            index={index}
            onSelect={setSelectedMember}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedMember && (
          <div 
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedMember(null)}
          >
            <MemberModal
              member={selectedMember}
              onClose={() => setSelectedMember(null)}
            />
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default TeamSection;