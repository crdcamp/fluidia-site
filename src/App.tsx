import React, { useRef, useState, useEffect } from 'react';
import InitialOverlay from './components/InitialOverlay';
import { animations, AnimatedElement } from './hooks/useScrollAnimation';
import { scrollToRef } from './hooks/useScrollToElement';
import { Code2, LineChart, Globe2, Rocket, Database, Laptop } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import backgroundImage1 from './assets/green_galaxy_image.webp';
import backgroundImage2 from './assets/dark_green_landscape.jpg';
import { APP } from './constants.tsx';

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
  // Section refs for navigation
  const contactFormRef = useRef<HTMLDivElement>(null);
  const aboutUsRef = useRef<HTMLDivElement>(null);
  
  // State to track if device is mobile
  const [isMobile, setIsMobile] = useState(false);
  
  // Check for mobile device on component mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Run on first load
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="bg-black text-gray-100">
      {/* Add the overlay component */}
      <InitialOverlay />
      
      <section className="min-h-[90vh] md:min-h-screen relative flex items-center justify-center overflow-hidden py-12 md:py-0"
        style={{
          backgroundImage: isMobile ? 'none' : `url(${backgroundImage1})`,
          backgroundColor: isMobile ? '#615f5f' : 'transparent',
          backgroundAttachment: 'scroll',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="absolute inset-0 bg-gray-900/70"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            {APP.NAME}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
          {APP.TAGLINE}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <button className="bg-olive-700 hover:bg-olive-600 text-white px-6 sm:px-8 py-3 rounded-lg transition w-full sm:w-auto"
              onClick={() => scrollToRef(aboutUsRef)}>
              About Us
            </button>
            <button className="bg-olive-700 hover:bg-olive-600 text-white px-6 sm:px-8 py-3 rounded-lg transition w-full sm:w-auto"
              onClick={() => scrollToRef(contactFormRef)}>
              Contact
            </button>
          </div>
        </div>
      </section>
      <section 
        ref={aboutUsRef}
        className="py-16" 
        style={{ backgroundColor: 'var(--dark-bg-color)' }}
      >
        {/*What We Offer Section*/}
        <AnimatedElement variants={animations.fadeUp} className="max-w-6xl mx-auto px-3">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">What We Offer</h2>
          <motion.div 
            variants={animations.staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
          >
            <motion.div variants={animations.staggerItem}>
              <ServiceCard
                icon={<Globe2 className="w-12 h-12 text-olive-500" />}
                title="Time and Autonomy"
                description="Automation solutions that handle repetitive tasks, freeing your team to focus on strategic work that drives growth."
              />
            </motion.div>
            <motion.div variants={animations.staggerItem}>
              <ServiceCard
                icon={<Code2 className="w-12 h-12 text-olive-500" />}
                title="Streamlined Solutions"
                description='Our motto is Integration. Everything we do for our customers ensures a streamlined approach to keep things simple.'
              />
            </motion.div>
            <motion.div variants={animations.staggerItem}>
              <ServiceCard
                icon={<LineChart className="w-12 h-12 text-olive-500" />}
                title="Workflow Integrations"
                description="Connect your business with intelligent automation to ensure smooth data flow, eliminate bottlenecks, and make your business efficient."
              />
            </motion.div>
          </motion.div>
        </AnimatedElement>
      </section>
      
      <section className="py-24 relative overflow-hidden"
        style={{
          backgroundImage: isMobile ? 'none' : `url(${backgroundImage2})`,
          backgroundColor: isMobile ? '#333333' : 'transparent',
          backgroundAttachment: 'scroll',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="absolute inset-0 bg-gray-900/40"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center px-4 md:px-0">
            <AnimatedElement variants={animations.fadeUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">{APP.NAME}'s Focus</h2>
              <motion.div 
                variants={animations.staggerContainer}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                <motion.div variants={animations.staggerItem}>
                  <Feature
                    icon={<Rocket className="w-6 h-6 text-olive-500" />}
                    title="Work Smarter"
                    description="We use the latest technologies to speed things up, making an experience mutually beneficial to both developers and customers."
                  />
                </motion.div>
                <motion.div variants={animations.staggerItem}>
                  <Feature
                    icon={<Database className="w-6 h-6 text-olive-500" />}
                    title="Integrate"
                    description="Our pride is in both design and integration. Fluidia structures its solutions so they're easy to work with."
                  />
                </motion.div>
                <motion.div variants={animations.staggerItem}>
                  <Feature
                    icon={<Laptop className="w-6 h-6 text-olive-500" />}
                    title="Solve"
                    description="We want to work directly with you in order to develop the perfect automation solution."
                  />
                </motion.div>
              </motion.div>
            </AnimatedElement>
            {/* Contact Us Box*/}
            <AnimatedElement 
              ref={contactFormRef}
              variants={animations.fadeUp}
              className="p-6 md:p-8 rounded-xl w-full" 
              style={{ backgroundColor: 'var(--dark-card-bg)' }}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Contact Us</h3>
              <ContactForm />
            </AnimatedElement>
          </div>
        </div>
      </section>

      <footer className="py-9" style={{ backgroundColor: 'var(--dark-bg-color)' }}>
        <AnimatedElement variants={animations.fadeIn} className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">{APP.NAME}</h2>
          <p className="text-gray-400 mb-6">{APP.TAGLINE}</p>
          <div className="flex justify-center space-x-6">
          </div>
        </AnimatedElement>
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

function ContactForm() {
  const [state, handleSubmit] = useForm("mblgqwyz");

  if (state.succeeded) {
    return (
      <div className="p-4 md:p-6 bg-olive-700/20 rounded-lg text-center">
        <h4 className="text-xl font-bold mb-2">Thank You!</h4>
        <p className="text-gray-300">Your message has been sent successfully.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
      <div>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Your Full Name"
          className="w-full p-3 rounded border border-gray-700 text-white"
          style={{ backgroundColor: 'var(--light-grey-box)' }}
          required
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <div>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 rounded border border-gray-700 text-white"
          style={{ backgroundColor: 'var(--light-grey-box)' }}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          className="w-full p-3 rounded border border-gray-700 text-white"
          style={{ backgroundColor: 'var(--light-grey-box)' }}
          rows={4}
          required
        ></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-olive-700 hover:bg-olive-600 disabled:bg-gray-700 text-white p-3 rounded transition"
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </button>
      <ValidationError errors={state.errors} />
    </form>
  );
}

// Helper AnimatedElement component - including it directly in this file

export default App;