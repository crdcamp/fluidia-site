import React from 'react';
import { Code2, LineChart, Globe2, Rocket, Database, Laptop } from 'lucide-react';

function App() {
  return (
    <div className="bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072")',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="absolute inset-0 bg-gray-900/70"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-6 text-white">
            Opus Dynamics
          </h1>
          <p className="text-2xl mb-8 text-gray-300">
          We offer simple, quick, and streamlined web-based solutions to any and all
          </p>
          <div className="flex justify-center gap-6">
            <button className="bg-olive-700 hover:bg-olive-600 text-white px-8 py-3 rounded-lg transition">
              Get Started
            </button>
            <button className="border border-olive-700 hover:border-olive-600 px-8 py-3 rounded-lg transition">
              Learn More
            </button>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24" style={{ backgroundColor: 'hsla(0,0%,9%,0.95)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">What Opus Offers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Globe2 className="w-12 h-12 text-olive-500" />}
              title="Web Development"
              description="Custom websites and web applications tailored to your business needs"
            />
            <ServiceCard
              icon={<LineChart className="w-12 h-12 text-olive-500" />}
              title="Business Analysis"
              description="Data-driven insights to optimize your operations and growth"
            />
            <ServiceCard
              icon={<Code2 className="w-12 h-12 text-olive-500" />}
              title="Digital Solutions"
              description="Streamlined processes and automated workflows for efficiency"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative overflow-hidden"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070")',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="absolute inset-0 bg-gray-900/70"></div>
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
            <div className="p-8 rounded-xl" style={{ backgroundColor: 'hsla(0,0%,18%,0.95)' }}>
              <h3 className="text-2xl font-bold mb-6">Ready to Transform Your Business?</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-olive-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-olive-500"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full bg-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-olive-500"
                ></textarea>
                <button className="w-full bg-olive-700 hover:bg-olive-600 text-white py-3 rounded-lg transition">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Opus Dynamics</h2>
          <p className="text-gray-400 mb-6">We offer simple, quick, and streamlined web-based solutions to any and all</p>
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

function ServiceCard({ icon, title, description }) {
  return (
    <div className="p-8 rounded-xl hover:transform hover:-translate-y-2 transition duration-300" style={{ backgroundColor: 'hsla(0,0%,18%,0.95)' }}>
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function Feature({ icon, title, description }) {
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