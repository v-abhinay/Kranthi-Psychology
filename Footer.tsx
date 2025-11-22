import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { SERVICES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand & About */}
          <div>
            <div className="flex items-center gap-2 mb-4 text-white">
              <div className="w-8 h-8 bg-primary-500 rounded-md flex items-center justify-center font-bold">K</div>
              <span className="text-xl font-bold">Kranthi Clinic</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              A professional psychology clinic offering counselling, psychotherapy, and emotional support in a safe, judgment-free space. We are dedicated to your mental well-being and growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-primary-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-primary-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-primary-400 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link to={`/services/${service.id}`} className="hover:text-primary-400 transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="flex-shrink-0 text-primary-500" size={18} />
                <span>123 Healing Street, Wellness Colony,<br />Hyderabad, India 500001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="flex-shrink-0 text-primary-500" size={18} />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="flex-shrink-0 text-primary-500" size={18} />
                <a href="mailto:help@kranthiclinic.com" className="hover:text-white transition-colors">help@kranthiclinic.com</a>
              </li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Important Note</h3>
            <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-primary-500">
              <p className="text-xs leading-relaxed text-slate-400">
                <strong>Disclaimer:</strong> Content on this website is for informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment.
              </p>
              <p className="text-xs leading-relaxed text-slate-400 mt-2">
                If you are in a life-threatening situation or emergency, please call your local emergency number immediately.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Kranthi Psychology Clinic. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/contact" className="hover:text-white">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;