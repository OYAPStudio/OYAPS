"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';

const SocialSection = () => {
  const socialLinks = [
    {
      platform: 'Instagram',
      url: 'https://instagram.com/oyaps',
      icon: '/social/instagram.png'
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com/oyaps',
      icon: '/social/twitter.png'
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/company/oyaps',
      icon: '/social/linkedin.png'
    },
    {
      platform: 'Telegram',
      url: 'https://t.me/oyaps',
      icon: '/social/telegram.png'
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/oyaps',
      icon: '/social/github.png'
    }
  ];

  return (
    <section className="py-20 px-8 bg-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12"
        >
          Connect With Us
        </motion.h2>
        
        <div className="flex justify-center flex-wrap gap-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors p-4">
                <div className="relative w-full h-full">
                  <Image
                    src={link.icon}
                    alt={`${link.platform} icon`}
                    fill
                    className="object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100"
                  />
                </div>
              </div>
              <span className="mt-2 block text-sm">{link.platform}</span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-gray-400"
        >
          <p className="mb-4">
            Get in touch with us through our social media channels
          </p>
          <p>
            Or email us at:{' '}
            <a
              href="mailto:contact@oyaps.com"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              contact@oyaps.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialSection;