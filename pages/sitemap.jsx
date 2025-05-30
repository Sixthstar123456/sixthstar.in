import { motion } from 'framer-motion';
import React, { useState } from 'react';

const sitemap = [
  'Web Hosting',
  'Company',
  'Insights',
  
];

const sitemapLinks = {
  'Web Hosting': [
    { label: 'Carbonio Mail Features', url: '/carbonio-mail-features' },
    { label: 'Carbonio Community Edition', url: 'carbonio-community-edition' },
    { label: 'High Availability', url: '/high-availability' },
    { label: 'Carbonio Telecommunication', url: '/carbonio-telecommunication' },
  ],
  'Company': [
    { label: 'About Us', url: '/about-us' },
    { label: 'Why Sixthstar', url: '/why-sixthstar' },
     { label: 'contactus', url: '/contactus' },
  
  ],
  'Insights': [
    { label: 'Blogs', url: '/ssl-certificate' },
   
  ],

};

const linkImages = {
  'Carbonio Mail Features': 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747906421/migration_carbonio-2_lwojqj.webp',
  'Carbonio Community Edition': 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747821091/interfaccia_carbonio_CE_lmxi8o.webp',
  'High Availability': 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747829314/cap-3-3_qvpg74.png',
  'Carbonio Telecommunication': 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1748078036/carbonio_public_sector_h8irdx.png',
  'About Us': 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1748598255/Untitled_500_x_300_px_500_x_500_px_4_ads2or.png',
  'Why Sixthstar': 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1748587111/Untitled_500_x_300_px_500_x_500_px_brbnzw.png',
  'Sitemap': 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1748499958/carbonio_telco_operators_cxxjbh.png',
  'contactus': 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1748586834/Untitled_500_x_300_px_b7rr58.png',
  'Blogs': 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1748494652/Untitled_design_44_wyxmrv.png',
};

export default function CloudSiteMap() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hideHeadingSection, setHideHeadingSection] = useState(null);
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="flex flex-col md:flex-row p-10 space-y-6 md:space-y-0 md:space-x-10 pt-20">
      {/* Left Menu */}
      <div className="md:w-1/4 flex justify-center items-start">
        <ul className="space-y-4 text-gray-700 text-lg font-medium py-8 px-4">
          {sitemap.map((item, idx) => (
            <li
              key={idx}
              className={`border-b pb-2 transition cursor-pointer ${
                activeSection === item
                  ? 'border-blue-500 text-blue-600 font-semibold'
                  : ''
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Content */}
      <div className="md:w-3/4 space-y-10">
        {Object.entries(sitemapLinks).map(([section, links]) => (
          <div key={section} className="relative pt-20">
            {/* Heading with animation */}
            <motion.h2
              className="text-xl font-semibold text-gray-800 mb-4 -mt-16"
              animate={{ opacity: hideHeadingSection === section ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {section}
            </motion.h2>

            <div className="flex flex-wrap gap-3 relative">
              {links.map(({ label, url }, i) => (
                <div
                  key={i}
                  className="relative"
                  onMouseEnter={() => {
                    setHoveredLink(label);
                    setActiveSection(section);
                    if (i === 0) setHideHeadingSection(section);
                  }}
                  onMouseLeave={() => {
                    setHoveredLink(null);
                    setHideHeadingSection(null);
                    setActiveSection(null);
                  }}
                >
                  <a
                    href={url}
                    className="px-4 py-2 border border-blue-400 text-blue-600 rounded text-sm hover:bg-blue-50 transition block"
                  >
                    {label}
                  </a>

                  {hoveredLink === label && (
                    <motion.div
                      className="absolute bottom-full left-0 mb-2 z-10 w-28"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={linkImages[label]}
                        alt={label}
                        className="w-[100px] h-auto "
                      />
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
            <hr className="my-6 border-t" />
          </div>
        ))}
      </div>
    </div>
  );
}
