import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';
import Button from '../components/Button';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* Header */}
      <div className="bg-white py-16 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Services</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            We offer a comprehensive range of psychological services tailored to meet diverse emotional and mental health needs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col h-full">
              <div className="p-8 flex-grow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center">
                    {service.icon && <service.icon size={24} />}
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">{service.title}</h2>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.fullDescription}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-3">Key Benefits</h4>
                  <ul className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="text-primary-500 mt-1">•</span> {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-slate-50 px-8 py-4 border-t border-slate-100 flex justify-between items-center">
                <span className="text-sm text-slate-500 font-medium">Who is this for?</span>
                <Link to={`/services/${service.id}`} className="text-primary-600 font-bold flex items-center hover:text-primary-700 transition-colors">
                  Details <ArrowRight size={18} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-primary-900 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Not sure which service you need?</h2>
          <p className="text-primary-200 mb-8 max-w-2xl mx-auto">
            Book a preliminary consultation, and our experts will guide you to the right therapy plan tailored for your specific situation.
          </p>
          <Button to="/contact" variant="primary" className="bg-white text-primary-900 hover:bg-primary-50">
            Book Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;