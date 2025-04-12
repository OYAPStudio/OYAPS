// src/app/[username]/page.tsx

import { notFound } from 'next/navigation';
import Image from 'next/image';


// Mock data interface
interface MemberData {
  username: string;
  fullName: string;
  avatar: string;
  email: string;
  phone: string;
  university: string;
  graduationYear: number;
  department: string;
  location: string;
  bio: string;
  skills: string[];
  social?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    instagram?: string;
  };
}

// Mock data function - replace with actual API call
async function getMemberData(username: string): Promise<MemberData | null> {
  const mockMembers: Record<string, MemberData> = {
    'ali': {
      username: 'ali',
      fullName: 'Ali Mohammed',
      avatar: '/team/ali.png',
      email: 'ali@example.com',
      phone: '+1 234 567 8901',
      university: 'Al-Azhar University',
      graduationYear: 2023,
      department: 'Computer Science',
      location: 'Cairo, Egypt',
      bio: 'Software developer specializing in web applications and mobile development. Passionate about creating intuitive user experiences.',
      skills: ['JavaScript', 'React', 'Node.js', 'TypeScript', 'Mobile Development'],
      social: {
        linkedin: 'https://linkedin.com/in/alimohammed',
        github: 'https://github.com/alimohammed',
        twitter: 'https://twitter.com/alimohammed',
        instagram: 'https://instagram.com/alimohammed'
      }
    },
    'othman': {
      username: 'othman',
      fullName: 'Othman Ahmed',
      avatar: '/team/Othman.jpg',
      email: 'othman@example.com',
      phone: '+1 987 654 3210',
      university: 'Cairo University',
      graduationYear: 2022,
      department: 'Electrical Engineering',
      location: 'Alexandria, Egypt',
      bio: 'Electrical engineer with a focus on renewable energy systems. Interested in sustainable development and green technologies.',
      skills: ['Electrical Systems', 'Renewable Energy', 'CAD', 'Project Management', 'Solar Power'],
      social: {
        linkedin: 'https://linkedin.com/in/othmanahmed',
        github: 'https://github.com/othmanahmed'
      }
    },
    'yousif': {
      username: 'yousif',
      fullName: 'Yousif Khalid',
      avatar: '/team/Yousif.jpg',
      email: 'yousif@example.com',
      phone: '+1 555 123 4567',
      university: 'Cairo University',
      graduationYear: 2023,
      department: 'Computer Engineering',
      location: 'Cairo, Egypt',
      bio: 'Full-stack developer with expertise in modern web technologies. Focused on creating scalable and efficient applications.',
      skills: ['JavaScript', 'React', 'Node.js', 'AWS', 'Docker'],
      social: {
        linkedin: 'https://linkedin.com/in/yousifkhalid',
        github: 'https://github.com/yousifkhalid',
        twitter: 'https://twitter.com/yousifkhalid'
      }
    },
    'ezalden': {
      username: 'ezalden',
      fullName: 'Ezalden Mohammed',
      avatar: '/team/Ezalden.JPG',
      email: 'ezalden@example.com',
      phone: '+1 555 987 6543',
      university: 'Al-Azhar University',
      graduationYear: 2022,
      department: 'Information Technology',
      location: 'Alexandria, Egypt',
      bio: 'IT specialist with a strong background in systems administration and network security. Passionate about implementing robust IT solutions.',
      skills: ['Networking', 'Cybersecurity', 'Linux', 'Cloud Computing', 'System Administration'],
      social: {
        linkedin: 'https://linkedin.com/in/ezaldenmohammed',
        github: 'https://github.com/ezaldenmohammed'
      }
    }
  };
  
  return mockMembers[username] || null;
}

// Generate metadata
export async function generateMetadata({ params }) {
  const username = params.username;
  
  if (!username) {
    return {
      title: 'Member Not Found',
      description: 'Member profile not found',
    };
  }

  const member = await getMemberData(username);
  
  if (!member) {
    return {
      title: 'Member Not Found',
      description: 'Member profile not found',
    };
  }

  return {
    title: `${member.fullName} | OYAPS`,
    description: `${member.fullName}'s profile on OYAPS`,
  };
}

export default async function Page({ params }) {
  const username = params.username;
  
  if (!username) {
    notFound();
  }
  
  const member = await getMemberData(username);
  
  if (!member) {
    notFound();
  }

  // Banner image path
  const bannerImagePath = '/images/hero-3d.png'; // Using the banner from your website

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white">
      {/* Banner at the same width as content */}
      <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2d3859] h-40 rounded-b-lg relative overflow-hidden">
          {/* Banner image */}
          <div className="absolute inset-0">
            <Image 
              src={bannerImagePath} 
              alt="Profile Banner"
              fill
              sizes="100vw"
              priority
              className="object-cover opacity-20"
            />
          </div>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2d3859] to-[#1e293b] opacity-80"></div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile info with avatar */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mt-6 mb-6">
          <div className="flex-shrink-0 relative h-24 w-24">
            <Image 
              src={member.avatar} 
              alt={member.fullName} 
              fill
              className="rounded-full object-cover border-2 border-[#00b8d9]" 
            />
          </div>
          
          <div className="flex flex-col items-center sm:items-start flex-grow">
            <h1 className="text-xl font-bold text-white">{member.fullName}</h1>
            <div className="text-blue-400">@{member.username}</div>
            
            {/* Social Media Links */}
            <div className="flex gap-3 mt-2">
              {member.social?.linkedin && (
                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" 
                   className="text-gray-300 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              )}
              {member.social?.github && (
                <a href={member.social.github} target="_blank" rel="noopener noreferrer" 
                   className="text-gray-300 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              )}
              {member.social?.twitter && (
                <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" 
                   className="text-gray-300 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              )}
              {member.social?.instagram && (
                <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" 
                   className="text-gray-300 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153a4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772a4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              )}
            </div>
          </div>
          
          {/* Contact button */}
          <div className="mt-4 sm:mt-0">
            <a 
              href={`mailto:${member.email}?subject=Contact Request for ${member.fullName}`} 
              className="inline-block bg-[#00b8d9] hover:bg-[#00a0c0] text-white px-4 py-2 rounded-md transition-colors duration-200"
            >
              Contact Member
            </a>
          </div>
        </div>
        
        {/* Content Grid - Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Left column - Contact Info */}
          <div className="md:col-span-1">
            <div className="bg-[#121827] rounded-lg overflow-hidden mb-6">
              <div className="border-b border-[#1e293b] py-4 px-6">
                <h2 className="text-xl font-medium text-white">Contact Information</h2>
              </div>
              <div className="py-2 px-6">
                <div className="flex items-center py-3 text-white">
                  <svg className="w-5 h-5 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <a href={`mailto:${member.email}`} className="hover:text-blue-400 transition-colors duration-200">
                    {member.email}
                  </a>
                </div>
                <div className="flex items-center py-3 text-white">
                  <svg className="w-5 h-5 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <a href={`tel:${member.phone}`} className="hover:text-blue-400 transition-colors duration-200">
                    {member.phone}
                  </a>
                </div>
                <div className="flex items-center py-3 text-white">
                  <svg className="w-5 h-5 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>{member.location}</span>
                </div>
                <div className="flex items-center py-3 text-white">
                  <svg className="w-5 h-5 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                  </svg>
                  <span>{member.university}</span>
                </div>
                <div className="flex items-center py-3 text-white">
                  <svg className="w-5 h-5 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                  <span>{member.department}</span>
                </div>
                <div className="flex items-center py-3 text-white">
                  <svg className="w-5 h-5 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span>Class of {member.graduationYear}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="md:col-span-2 space-y-6">
            {/* About section */}
            <div className="bg-[#121827] rounded-lg overflow-hidden">
              <div className="border-b border-[#1e293b] py-4 px-6">
                <h2 className="text-xl font-medium text-white">About</h2>
              </div>
              <div className="py-4 px-6">
                <p className="text-white">{member.bio}</p>
              </div>
            </div>

            {/* Skills section */}
            <div className="bg-[#121827] rounded-lg overflow-hidden">
              <div className="border-b border-[#1e293b] py-4 px-6">
                <h2 className="text-xl font-medium text-white">Skills</h2>
              </div>
              <div className="py-4 px-6">
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, index) => (
                    <span key={index} className="bg-[#2e3b5c] text-white py-1.5 px-3 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}