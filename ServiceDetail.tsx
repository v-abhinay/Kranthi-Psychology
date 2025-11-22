import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Check, Calendar, ArrowLeft } from 'lucide-react';
import { SERVICES } from '../constants';
import Button from '../components/Button';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-slate-900">Service not found</h1>
        <Link to="/services" className="text-primary-600 mt-4 hover:underline">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <div className="bg-primary-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/services" className="inline-flex items-center text-slate-500 hover:text-primary-600 mb-8 transition-colors">
                <ArrowLeft size={18} className="mr-2" /> Back to Services
            </Link>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="bg-white p-4 rounded-2xl shadow-sm text-primary-600">
                {service.icon && <service.icon size={48} />}
            </div>
            <div>
                <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">{service.title}</h1>
                <p className="text-xl text-slate-600 max-w-2xl">{service.shortDescription}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-12">
                
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
                    <p className="text-lg text-slate-700 leading-relaxed">{service.fullDescription}</p>
                </section>

                {service.commonProblems && (
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Common Issues We Address</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {service.commonProblems.map((prob, idx) => (
                                <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                    <p className="text-slate-800 font-medium">{prob}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">How It Helps (Benefits)</h2>
                    <ul className="space-y-3">
                        {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mt-0.5">
                                    <Check size={14} strokeWidth={3} />
                                </span>
                                <span className="text-slate-700 text-lg">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {service.process && (
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Process</h2>
                        <div className="space-y-6">
                            {service.process.map((step, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="flex-col flex items-center">
                                        <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-sm">
                                            {idx + 1}
                                        </div>
                                        {idx !== service.process!.length - 1 && <div className="w-0.5 h-full bg-slate-200 mt-2"></div>}
                                    </div>
                                    <div className="pb-6">
                                        <h3 className="text-lg font-bold text-slate-900">{step}</h3>
                                        <p className="text-slate-600">Structured session focused on progress and understanding.</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-primary-100 sticky top-24">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Is this for you?</h3>
                    <p className="text-slate-600 mb-6 text-sm">Ideally suited for:</p>
                    <ul className="space-y-3 mb-8">
                        {service.whoIsItFor.map((item, idx) => (
                            <li key={idx} className="text-slate-700 text-sm flex items-start gap-2">
                                <span className="text-primary-500">•</span> {item}
                            </li>
                        ))}
                    </ul>

                    <div className="bg-primary-50 p-6 rounded-xl text-center">
                        <h4 className="font-bold text-slate-900 mb-2">Ready to start?</h4>
                        <p className="text-sm text-slate-600 mb-4">Take the first step towards healing today.</p>
                        <Button to="/contact" className="w-full justify-center">
                            <Calendar size={18} className="mr-2" /> Book Session
                        </Button>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;