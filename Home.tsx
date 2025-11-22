import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MessageCircle, Calendar, Phone } from 'lucide-react';
import Button from '../components/Button';
import { SERVICES, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-primary-50 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
            <img src="https://picsum.photos/1920/1080?grayscale&blur=2" alt="Background pattern" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
              Restoring Balance, <span className="text-primary-600">Healing Minds.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              Find your path to emotional wellness with professional, empathetic support. 
              Whether you are struggling with relationships, career stress, or anxiety, 
              we provide a safe space for you to heal and grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact" variant="primary" className="shadow-lg shadow-primary-500/30">
                Book a Counselling Session <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button to="/services" variant="outline">
                Explore Our Services
              </Button>
            </div>
            <p className="mt-6 text-sm text-slate-500 flex items-center gap-2">
              <CheckCircle2 size={16} className="text-primary-600" /> Confidential & Judgment-Free
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Kranthi Psychology Clinic?</h2>
            <p className="text-slate-600">
              We understand that taking the first step towards therapy can be difficult. 
              Our clinic is designed to make that journey as comfortable and effective as possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Psychologists",
                desc: "Professionally trained and experienced therapists dedicated to your care."
              },
              {
                title: "Personalized Approach",
                desc: "Tailored therapy plans that address your unique emotional needs and goals."
              },
              {
                title: "Safe Environment",
                desc: "A strictly confidential, warm, and judgment-free space for open expression."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-4 font-bold text-xl">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-primary-600 font-semibold tracking-wide uppercase text-sm">Our Expertise</span>
              <h2 className="text-3xl font-bold text-slate-900 mt-2">Comprehensive Mental Health Care</h2>
            </div>
            <Link to="/services" className="hidden md:flex items-center text-primary-600 font-medium hover:text-primary-700">
              View All Services <ArrowRight size={20} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.slice(0, 4).map((service) => (
              <Link 
                key={service.id} 
                to={`/services/${service.id}`}
                className="group bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-primary-200 hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  {service.icon && <service.icon size={24} />}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary-700 transition-colors">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                  {service.shortDescription}
                </p>
                <span className="text-primary-600 text-sm font-medium flex items-center">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </span>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
             <Link to="/services" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
              View All Services <ArrowRight size={20} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Stories of Hope</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-slate-50 p-8 rounded-2xl relative">
                <div className="absolute top-6 left-6 text-primary-200">
                  <MessageCircle size={40} fill="currentColor" />
                </div>
                <div className="relative z-10">
                  <p className="text-slate-700 italic mb-6 text-lg">"{t.content}"</p>
                  <div>
                    <h4 className="font-bold text-slate-900">{t.author}</h4>
                    <span className="text-sm text-slate-500">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            You Don't Have to Face It Alone
          </h2>
          <p className="text-primary-100 text-lg mb-10">
            Professional help is just one step away. Take charge of your mental well-being today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Button to="/contact" variant="secondary" className="text-lg px-8">
                <Calendar className="mr-2" size={20} /> Schedule Appointment
             </Button>
             <a 
               href="tel:+919876543210" 
               className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-primary-600 transition-colors"
             >
                <Phone className="mr-2" size={20} /> +91 98765 43210
             </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;