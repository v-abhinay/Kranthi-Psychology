import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FAQS } from '../constants';
import Button from '../components/Button';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* Header */}
      <div className="bg-white py-16 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Contact Us</h1>
          <p className="text-xl text-slate-600">
            Reach out to us to schedule an appointment or ask any questions. We are here to listen.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-2 px-3 border" 
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-2 px-3 border" 
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-2 px-3 border" 
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">Service Required</label>
                <select 
                  id="service" 
                  className="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-2 px-3 border"
                >
                  <option>Select a service</option>
                  <option>Psychological Counselling</option>
                  <option>Marriage Counselling</option>
                  <option>De-Addiction</option>
                  <option>Career Guidance</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">How can we help?</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-2 px-3 border" 
                  placeholder="Briefly describe your concern..."
                ></textarea>
              </div>

              <Button type="submit" className="w-full">Request Appointment</Button>
            </form>
          </div>

          {/* Contact Info & Map Placeholder */}
          <div className="space-y-8">
            <div className="bg-primary-900 text-white p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-6">Clinic Information</h3>
                <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                        <MapPin className="text-primary-400 mt-1" />
                        <div>
                            <p className="font-semibold text-primary-100">Visit Us</p>
                            <p className="text-slate-300">123 Healing Street, Wellness Colony,<br/>Hyderabad, India 500001</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <Phone className="text-primary-400 mt-1" />
                        <div>
                            <p className="font-semibold text-primary-100">Call Us</p>
                            <p className="text-slate-300">+91 98765 43210</p>
                            <p className="text-slate-400 text-sm">Mon-Sat, 9am - 7pm</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <Mail className="text-primary-400 mt-1" />
                        <div>
                            <p className="font-semibold text-primary-100">Email Us</p>
                            <p className="text-slate-300">help@kranthiclinic.com</p>
                        </div>
                    </li>
                </ul>
            </div>

            {/* Simulated Map */}
            <div className="bg-slate-200 h-64 rounded-2xl flex items-center justify-center text-slate-500">
                <div className="text-center">
                    <MapPin size={40} className="mx-auto mb-2" />
                    <p>Google Map Placeholder</p>
                </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-20 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">Frequently Asked Questions</h2>
            <div className="space-y-6">
                {FAQS.map((faq, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-lg border border-slate-200">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.question}</h3>
                        <p className="text-slate-600">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;