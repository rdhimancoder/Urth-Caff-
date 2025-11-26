import React from 'react';
import { APP_NAME, FOOTER_LINKS, SOCIAL_MEDIA_ICONS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand Info */}
        <div className="flex flex-col items-center md:items-start">
          <a href="#" className="text-2xl font-bold text-green-500 mb-4 hover:text-green-400 transition duration-300">
            {APP_NAME}
          </a>
          <p className="text-sm leading-relaxed max-w-xs">
            Pioneering organic, heirloom coffee and healthy, delicious cuisine since 1989.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {FOOTER_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-400 hover:text-green-500 transition duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media & Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
          <div className="flex justify-center md:justify-start space-x-6 mb-6">
            {Object.entries(SOCIAL_MEDIA_ICONS).map(([key, path]) => (
              <a
                key={key}
                href={`#${key}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition duration-300"
                aria-label={key}
              >
                <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>
          <p className="text-sm">Email: info@urthcaffe.com</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
