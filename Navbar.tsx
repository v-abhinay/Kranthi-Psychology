import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                K
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-slate-800 leading-none">Kranthi</span>
                <span className="text-sm text-primary-600 font-medium">Psychology Clinic</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  isActive(link.path)
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-slate-500 hover:text-primary-600 hover:border-b-2 hover:border-primary-300'
                } px-1 pt-1 text-sm font-medium transition-colors duration-200 h-20 flex items-center`}
              >
                {link.label}
              </Link>
            ))}
            <a 
              href="tel:+919876543210" 
              className="flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full font-medium hover:bg-primary-100 transition-colors"
            >
              <Phone size={18} />
              <span>Book Appointment</span>
            </a>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="pt-2 pb-3 space-y-1 px-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive(link.path)
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                } block px-3 py-2 rounded-md text-base font-medium`}
              >
                {link.label}
              </Link>
            ))}
             <a 
              href="tel:+919876543210" 
              className="block mt-4 text-center bg-primary-600 text-white px-3 py-3 rounded-md text-base font-medium"
            >
              Call to Book
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;