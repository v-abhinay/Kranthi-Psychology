import React from 'react';
import { Target, Lightbulb, HeartHandshake } from 'lucide-react';
import Button from '../components/Button';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* Header */}
      <div className="bg-white py-16 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-primary-600 font-semibold tracking-wide uppercase text-sm">About Us</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-6">Our Journey & Mission</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            At Kranthi Psychology Clinic, we believe in the power of human resilience. We are dedicated to helping you navigate life's complexities with clarity and confidence.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Story of Kranthi Psychology Clinic</h2>
            <div className="prose prose-slate text-slate-600 space-y-4">
              <p>
                Founded with a vision to make mental health support accessible and destigmatized, 
                Kranthi Psychology Clinic began as a small initiative to provide a safe haven for those struggling in silence.
              </p>
              <p>
                We recognized that in our fast-paced society, many individuals—from working professionals to couples and students—were 
                facing immense pressure but lacked a trusted space to seek help.
              </p>
              <p>
                Today, we stand as a beacon of hope, offering a blend of traditional therapeutic wisdom and modern evidence-based practices. 
                Our name "Kranthi" symbolizes a revolution—an inner revolution towards better mental health and self-awareness.
              </p>
            </div>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://picsum.photos/800/600?grayscale" 
              alt="Clinic Environment" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary-900/10"></div>
          </div>
        </div>

        {/* Vision/Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-primary-500">
            <Target className="w-10 h-10 text-primary-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
            <p className="text-slate-600">
              To provide high-quality, compassionate, and ethical psychological services that empower individuals to overcome challenges and lead fulfilling lives.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-primary-500">
            <Lightbulb className="w-10 h-10 text-primary-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
            <p className="text-slate-600">
              A society where mental health is prioritized, stigma is erased, and everyone has access to the support they need to thrive emotionally.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-primary-500">
            <HeartHandshake className="w-10 h-10 text-primary-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Our Approach</h3>
            <p className="text-slate-600">
              We use an empathetic, client-centered approach. We don't just treat symptoms; we work with you to understand the whole person and foster genuine growth.
            </p>
          </div>
        </div>

        {/* Uniqueness */}
        <div className="bg-primary-50 rounded-3xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Makes Us Unique?</h2>
            <ul className="text-left space-y-4 inline-block mx-auto">
              {[
                "Culturally sensitive therapy tailored to the Indian context.",
                "Strict adherence to confidentiality and professional ethics.",
                "Holistic support for individuals, couples, and families.",
                "Solution-oriented sessions focused on practical tools."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-200 text-primary-700 flex items-center justify-center font-bold text-sm">✓</span>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button to="/contact">Speak to an Expert</Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;