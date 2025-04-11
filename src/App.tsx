import React, { useRef } from 'react';
import InitialOverlay from './components/InitialOverlay';
import { fadeUp, fadeIn, staggerContainer, staggerItem } from './hooks/useScrollAnimation';
import { Code2, LineChart, Globe2, Rocket, Database, Laptop } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import backgroundImage1 from './assets/green_galaxy_image.webp';
import backgroundImage2 from './assets/dark_green_landscape.jpg';
import backgroundImage3 from './assets/dark_green_ocean.jpg';
import restaurantExample from './assets/restaurant_example_image.jpg';
import carExampleImage from './assets/exotic-car-rental-example.jpg';
import financeExampleImage from './assets/finance-site-example.jpg';
import inventoryExampleImage from './assets/inventory-site-example.jpg'
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
  // Direct refs rather than using the hook
  const contactFormRef = useRef<HTMLDivElement>(null);
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const examplesRef = useRef<HTMLDivElement>(null);

  // Simple scroll function
  const scrollToElement = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="bg-black text-gray-100">
      {/* Add the overlay component */}
      <InitialOverlay />
      
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage1})`,
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
              onClick={() => scrollToElement(aboutUsRef)}>
              About Us
            </button>
            <button className="bg-olive-700 hover:bg-olive-600 text-white px-8 py-3 rounded-lg transition"
              onClick={() => scrollToElement(contactFormRef)}>
              Contact
            </button>
            <button className="bg-olive-700 hover:bg-olive-600 text-white px-8 py-3 rounded-lg transition"
              onClick={() => scrollToElement(examplesRef)}>
              Examples
            </button>
          </div>
        </div>
      </section>

      {/* Rest of your components remain unchanged */}
      <section 
        ref={aboutUsRef}
        className="py-16" 
        style={{ backgroundColor: 'var(--dark-bg-color)' }}
      >
        {/* Section content... */}
        <AnimatedElement variants={fadeUp} className="max-w-6xl mx-auto px-3">
          <h2 className="text-4xl font-bold text-center mb-16">What We Offer</h2>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={staggerItem}>
              <ServiceCard
                icon={<Globe2 className="w-12 h-12 text-olive-500" />}
                title="Web Development"
                description="Fully custom websites with fast turn around times. Whatever preferences you have, we'll make sure to deliver them quickly."
              />
            </motion.div>
            <motion.div variants={staggerItem}>
              <ServiceCard
                icon={<Code2 className="w-12 h-12 text-olive-500" />}
                title="Fully Integrated Solutions"
                description='Our motto is Integration. Everything we do for our customers ensures a cohesive and fully implemented approach.'
              />
            </motion.div>
            <motion.div variants={staggerItem}>
              <ServiceCard
                icon={<LineChart className="w-12 h-12 text-olive-500" />}
                title="Business Analysis"
                description="As a final step of your optimization journey, we also offer a thorough analysis of your business and its practices."
              />
            </motion.div>
          </motion.div>
        </AnimatedElement>
      </section>

      {/* ... Rest of your sections ... */}
      
      {/* Rest of the component code remains the same */}
      
      <section className="py-24 relative overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage2})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="absolute inset-0 bg-gray-900/40"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedElement variants={fadeUp}>
              <h2 className="text-4xl font-bold mb-8">{APP.NAME}'s Focus</h2>
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                <motion.div variants={staggerItem}>
                  <Feature
                    icon={<Rocket className="w-6 h-6 text-olive-500" />}
                    title="Work Smarter"
                    description="We use the latest technologies to speed things up, making an experience mutually beneficial to both developers and customers."
                  />
                </motion.div>
                <motion.div variants={staggerItem}>
                  <Feature
                    icon={<Database className="w-6 h-6 text-olive-500" />}
                    title="Integrate"
                    description="Our pride is in both design and integration. Fluidia structures its solutions so they're easy to maintain."
                  />
                </motion.div>
                <motion.div variants={staggerItem}>
                  <Feature
                    icon={<Laptop className="w-6 h-6 text-olive-500" />}
                    title="Solve"
                    description="We want to work directly with you in order to develop the perfect solution."
                  />
                </motion.div>
              </motion.div>
            </AnimatedElement>
            
            <div 
              ref={contactFormRef}
              className="p-8 rounded-xl" 
              style={{ backgroundColor: 'var(--dark-card-bg)' }}
            >
              <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <AnimatedElement variants={fadeUp} style={{ backgroundColor: 'var(--dark-bg-color)' }} className='py-12'>
        <div className='max-w-6x1 mx-auto px-4'>
          <h2 className="text-4xl font-bold text-center m-0">Beauty In Design</h2>
          <p className="text-2xl text-center mt-6 mb-2 text-gray-300">
            Explore our collection of templates to see our craft in action
          </p>
        </div>
      </AnimatedElement>
      
      <section 
        ref={examplesRef}
        className="min-h-screen pb-16 pt-12 relative flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage3})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="absolute inset-0 bg-gray-900/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-12"
          >
            <motion.div variants={staggerItem}>
              <a 
                href="https://exampleinventorysite.netlify.app/"
                target="_blank"  
                rel="noopener noreferrer"  
                className="block"
              >
                <div className="rounded-xl overflow-hidden transition transform hover:scale-105 shadow-lg shadow-black/30 h-full">
                  <div className="w-full h-96 bg-gray-800">
                    <img 
                      src={restaurantExample}
                      className="w-full h-full object-cover"
                      alt="Restaurant Example"
                    />
                  </div>
                  <div className="p-6 rounded-b-xl" style={{ backgroundColor: 'var(--dark-bg-color)' }}>
                    <h3 className="text-2xl font-bold">Inventory Management</h3>
                    <p className="text-gray-300 mt-2">A sleek interface for managing restaurant inventory and orders</p>
                  </div>
                </div>
              </a>
            </motion.div>

            <motion.div variants={staggerItem}>
              <a 
                href="https://examplefinancesite.netlify.app/"
                target="_blank"  
                rel="noopener noreferrer"  
                className="block"
              >
                <div className="rounded-xl overflow-hidden transition transform hover:scale-105 shadow-lg shadow-black/30 h-full">
                  <div className="w-full h-96 bg-gray-800">
                    <img 
                      src={financeExampleImage}
                      className="w-full h-full object-cover"
                      alt="Finance Example"
                    />
                  </div>
                  <div className="p-6 rounded-b-xl" style={{ backgroundColor: 'var(--dark-bg-color)' }}>
                    <h3 className="text-2xl font-bold">Finance Dashboard</h3>
                    <p className="text-gray-300 mt-2">Interactive dashboard for tracking investments and financial data</p>
                  </div>
                </div>
              </a>
            </motion.div>

            <motion.div variants={staggerItem}>
              <a 
                href="https://examplecarsite.netlify.app/"
                target="_blank"  
                rel="noopener noreferrer"  
                className="block"
              >
                <div className="rounded-xl overflow-hidden transition transform hover:scale-105 shadow-lg shadow-black/30 h-full">
                  <div className="w-full h-96 bg-gray-800">
                    <img 
                      src={carExampleImage}
                      className="w-full h-full object-cover"
                      alt="Car Rental Example"
                    />
                  </div>
                  <div className="p-6 rounded-b-xl" style={{ backgroundColor: 'var(--dark-bg-color)' }}>
                    <h3 className="text-2xl font-bold">Exotic Car Rentals</h3>
                    <p className="text-gray-300 mt-2">Premium car rental service with elegant user experience</p>
                  </div>
                </div>
              </a>
            </motion.div>

            <motion.div variants={staggerItem}>
              <a 
                href="https://exampleinventorysite.netlify.app/"
                target="_blank"  
                rel="noopener noreferrer"  
                className="block"
              >
                <div className="rounded-xl overflow-hidden transition transform hover:scale-105 shadow-lg shadow-black/30 h-full">
                  <div className="w-full h-96 bg-gray-800">
                    <img 
                      src={inventoryExampleImage}
                      className="w-full h-full object-cover"
                      alt="Inventory Example"
                    />
                  </div>
                  <div className="p-6 rounded-b-xl" style={{ backgroundColor: 'var(--dark-bg-color)' }}>
                    <h3 className="text-2xl font-bold">Inventory Management</h3>
                    <p className="text-gray-300 mt-2">Comprehensive inventory tracking system for business optimization</p>
                  </div>
                </div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <footer className="py-9" style={{ backgroundColor: 'var(--dark-bg-color)' }}>
        <AnimatedElement variants={fadeIn} className="max-w-6xl mx-auto px-4 text-center">
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
  // Replace with your actual Formspree form ID
  const [state, handleSubmit] = useForm("mblgqwyz");

  if (state.succeeded) {
    return (
      <div className="p-6 bg-olive-700/20 rounded-lg text-center">
        <h4 className="text-xl font-bold mb-2">Thank You!</h4>
        <p className="text-gray-300">Your message has been sent successfully.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
function AnimatedElement({ children, variants, className, style }: { 
  children: React.ReactNode, 
  variants?: any,
  className?: string,
  style?: React.CSSProperties
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ 
    threshold: 0.1,
    triggerOnce: true 
  });
  
  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants || {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export default App;