import React, { useRef } from 'react';
import { Code2, LineChart, Globe2, Rocket, Database, Laptop } from 'lucide-react';
import heroBackgroundImage from './assets/green_galaxy_image.webp';
import aboutUsBackgroundImage from './assets/dark_green_landscape.jpg';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function App() {
  const contactFormRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactFormRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="bg-black text-gray-100">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackgroundImage})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="absolute inset-0 bg-gray-900/70"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-6 text-white">
            Welcome to Fluidia
          </h1>
          <p className="text-2xl mb-8 text-gray-300">
          Unified, intuitive, and fast web-based services
          </p>
          <div className="flex justify-center gap-6">
          <button className="bg-olive-700 hover:bg-olive-600 text-white px-8 py-3 rounded-lg transition">
              About Us
            </button>
            <button className="bg-olive-700 hover:bg-olive-600 text-white px-8 py-3 rounded-lg transition"
              onClick={scrollToContact}>
              Contact
            </button>
            <button className="bg-olive-700 hover:bg-olive-600 text-white px-8 py-3 rounded-lg transition">
              Examples
            </button>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24" style={{ backgroundColor: 'var(--dark-bg-color)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Globe2 className="w-12 h-12 text-olive-500" />}
              title="Web Development"
              description="Fully custom websites with fast turn around times. Whatever preferences you have, we'll make sure to deliver them quickly."
            />
            <ServiceCard
              icon={<Code2 className="w-12 h-12 text-olive-500" />}
              title="Fully Integrated Solutions"
              description='Our motto is "Unity". Everything we do for our customers ensures a cohesive and fully implemented approach.'
            />
            <ServiceCard
              icon={<LineChart className="w-12 h-12 text-olive-500" />}
              title="Business Analysis"
              description="As a final step of your optimization journey, we also offer a thorough analysis of your business and its practices."
            />
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-24 relative overflow-hidden"
        style={{
          backgroundImage: `url(${aboutUsBackgroundImage})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="absolute inset-0 bg-gray-900/40"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Why Choose Us?</h2>
              <div className="space-y-6">
                <Feature
                  icon={<Rocket className="w-6 h-6 text-olive-500" />}
                  title="Innovation First"
                  description="Cutting-edge solutions using the latest technologies"
                />
                <Feature
                  icon={<Database className="w-6 h-6 text-olive-500" />}
                  title="Data-Driven"
                  description="Make informed decisions based on robust analytics"
                />
                <Feature
                  icon={<Laptop className="w-6 h-6 text-olive-500" />}
                  title="Custom Solutions"
                  description="Tailored approaches for your unique challenges"
                />
              </div>
            </div>
            <div 
                ref={contactFormRef} 
                className="p-8 rounded-xl" 
                style={{ backgroundColor: 'var(--dark-card-bg)' }}
              >
              {/* Contact Us Box */}
              <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-3 rounded bg-gray-700 border border-gray-700 text-white"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message" 
                    rows={4}
                    className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-olive-700 hover:bg-olive-600 text-white p-3 rounded transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <div className='bg-black py-9'>
        <div className='max-w-6x1 mx-auto px-4'>
          <h2 className="text-4xl font-bold text-center m-0">Some Examples for You</h2>
        </div>
      </div>

      <section className="min-h-screen relative flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackgroundImage})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="absolute inset-0 bg-gray-900/70"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Our Examples</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Example items will go here */}
            <div className="p-8 rounded-xl bg-gray-800/80 text-center">
              <h3 className="text-xl font-bold mb-4">Example Project 1</h3>
              <p className="text-gray-300">Description of the first example project.</p>
            </div>
            <div className="p-8 rounded-xl bg-gray-800/80 text-center">
              <h3 className="text-xl font-bold mb-4">Example Project 2</h3>
              <p className="text-gray-300">Description of the second example project.</p>
            </div>
            <div className="p-8 rounded-xl bg-gray-800/80 text-center">
              <h3 className="text-xl font-bold mb-4">Example Project 3</h3>
              <p className="text-gray-300">Description of the third example project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12" style={{ backgroundColor: 'var(--dark-bg-color)' }}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Fluidia</h2>
          <p className="text-gray-400 mb-6">We develop intuitive, quick, and streamlined web-based solutions to any and all</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-olive-500 transition">About</a>
            <a href="#" className="text-gray-400 hover:text-olive-500 transition">Services</a>
            <a href="#" className="text-gray-400 hover:text-olive-500 transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="p-8 rounded-xl hover:transform hover:-translate-y-2 transition duration-300" style={{ backgroundColor: 'var(--dark-card-bg)' }}>
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h4 className="font-bold mb-2">{title}</h4>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}

export default App;