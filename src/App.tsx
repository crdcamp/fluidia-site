import React from 'react';
import { Code2, LineChart, Globe2, Rocket, Database, Laptop } from 'lucide-react';
import heroBackgroundImage from './assets/green_galaxy_image.webp';
import aboutUsBackgroundImage from './assets/dark_green_landscape.jpg';
import examplesBackgroundImage from './assets/dark_green_ocean.jpg';
import restaurantExample from './assets/restaurant_example_image.jpg';
import { APP } from './constants.tsx';
import { useScrollToElement } from './hooks/useScrollToElement';

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
  const { elementRef: contactFormRef, scrollToElement: scrollToContact } = useScrollToElement();
  const { elementRef: aboutUsRef, scrollToElement: scrollToAbout } = useScrollToElement();
  const { elementRef: examplesRef, scrollToElement: scrollToExamples } = useScrollToElement();

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
            {APP.NAME}
          </h1>
          <p className="text-2xl mb-8 text-gray-300">
          {APP.TAGLINE}
          </p>
          <div className="flex justify-center gap-6">
            <button className="bg-olive-700 hover:bg-olive-600 text-white px-8 py-3 rounded-lg transition"
              onClick={scrollToAbout}>
              About Us
            </button>
            <button className="bg-olive-700 hover:bg-olive-600 text-white px-8 py-3 rounded-lg transition"
              onClick={scrollToContact}>
              Contact
            </button>
            <button className="bg-olive-700 hover:bg-olive-600 text-white px-8 py-3 rounded-lg transition"
              onClick={scrollToExamples}>
              Examples
            </button>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section 
        ref={aboutUsRef}
        className="py-24" 
        style={{ backgroundColor: 'var(--dark-bg-color)' }}
      >
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
              description='Our motto is Integration. Everything we do for our customers ensures a cohesive and fully implemented approach.'
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
              <h2 className="text-4xl font-bold mb-8">{APP.NAME}'s' Focus</h2>
              <div className="space-y-6">
                <Feature
                  icon={<Rocket className="w-6 h-6 text-olive-500" />}
                  title="Work Smarter"
                  description="We use the latest technologies to speed things up, making an experience mutually beneficial to both developers and customers."
                />
                <Feature
                  icon={<Database className="w-6 h-6 text-olive-500" />}
                  title="Integrate"
                  description="Our pride is in both design and integration. Fluidia structures its solutions so they're easy to maintain."
                />
                <Feature
                  icon={<Laptop className="w-6 h-6 text-olive-500" />}
                  title="Solve"
                  description="We want to work directly with you in order to develop the perfect solution."
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
                    placeholder="Your Full Name" 
                    className="w-full p-3 rounded border border-gray-700 text-white"
                    style={{ backgroundColor: 'var(--light-grey-box)' }}
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder='Your Email'
                    className="w-full p-3 rounded border border-gray-700 text-white"
                    style={{ backgroundColor: 'var(--light-grey-box)' }}
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message" 
                    className="w-full p-3 rounded border border-gray-700 text-white"
                    style={{ backgroundColor: 'var(--light-grey-box)' }}
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
      <div style={{ backgroundColor: 'var(--dark-bg-color)' }} className='py-5'>
        <div className='max-w-6x1 mx-auto px-4'>
          <h2 className="text-4xl font-bold text-center m-0">Our Craft In Action</h2>
          <p className="text-2xl text-center mt-6 mb-2 text-gray-300">
            Beauty in design is our signature. Take a look.
          </p>
        </div>
      </div>
    <section 
  ref={examplesRef}
  className="min-h-screen pb-20 pt-14 relative flex items-center justify-center overflow-hidden"
  style={{
    backgroundImage: `url(${examplesBackgroundImage})`,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}>
<div className="absolute inset-0 bg-gray-900/40"></div>
<div className="relative z-10 max-w-6xl mx-auto px-4">
  <div className="grid md:grid-cols-2 gap-8">
    {/* Example 1 with image */}
    <div className="rounded-xl overflow-hidden transition transform hover:scale-105">
      <img 
        src={restaurantExample}
        className="w-full h-64 object-contain"
      />
      <div className="p-3 rounded" style={{ backgroundColor: 'var(--dark-bg-color)' }}>
        <h3 className="text-xl font-bold">Inventory Management</h3>
      </div>
    </div>
    
    {/* Example 2 with image */}
    <div className="rounded-xl overflow-hidden transition transform hover:scale-105">
      <img 
        src={restaurantExample}
        className="w-full h-64 object-contain"
      />
      <div className="p-3 rounded" style={{ backgroundColor: 'var(--dark-bg-color)' }}>
        <h3 className="text-xl font-bold">Inventory Management</h3>
      </div>
    </div>
    
    {/* Example 3 with image */}
    <div className="rounded-xl overflow-hidden transition transform hover:scale-105">
      <img 
        src={restaurantExample}
        className="w-full h-64 object-contain"
      />
      <div className="p-3 rounded" style={{ backgroundColor: 'var(--dark-bg-color)' }}>
        <h3 className="text-xl font-bold">Inventory Management</h3>
      </div>
    </div>
    
    {/* Example 4 with image */}
    <div className="rounded-xl overflow-hidden transition transform hover:scale-105">
      <img 
        src={restaurantExample}
        className="w-full h-64 object-contain"
      />
      <div className="p-3 rounded" style={{ backgroundColor: 'var(--dark-bg-color)' }}>
        <h3 className="text-xl font-bold">Inventory Management</h3>    
      </div>
    </div>
  </div>
</div>
</section>

      {/* Footer */}
      <footer className="py-8" style={{ backgroundColor: 'var(--dark-bg-color)' }}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">{APP.NAME}</h2>
          <p className="text-gray-400 mb-6">{APP.TAGLINE}</p>
          <div className="flex justify-center space-x-6">
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="p-8 rounded-xl transform hover:-translate-y-2 transition duration-300" style={{ backgroundColor: 'var(--dark-card-bg)' }}>
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