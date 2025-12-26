
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Toolkit } from './components/Toolkit';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { ProjectPage } from './components/ProjectPage';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isProjectPage = currentPath.startsWith('#/project/');
  const projectId = isProjectPage ? currentPath.replace('#/project/', '') : null;

  return (
    <div className="min-h-screen selection:bg-[#FF4500] selection:text-white">
      <CustomCursor />
      
      {/* Scroll Timeline Indicator - Only on Home */}
      {!isProjectPage && (
        <div className="fixed left-8 top-1/2 -translate-y-1/2 w-0.5 h-64 bg-[#1A1A1A]/10 z-40 hidden lg:block">
          <motion.div 
            className="w-full bg-[#FF4500] origin-top" 
            style={{ scaleY }} 
          />
          <div className="absolute top-0 -left-1 text-[8px] font-black text-[#1A1A1A] uppercase -rotate-90 origin-left -translate-y-full mb-4">Origin</div>
          <div className="absolute bottom-0 -left-1 text-[8px] font-black text-[#1A1A1A] uppercase -rotate-90 origin-left translate-y-full mt-4">Destination</div>
        </div>
      )}

      <Navbar />
      
      <main>
        {isProjectPage && projectId ? (
          <ProjectPage id={projectId} />
        ) : (
          <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Toolkit />
            <ExperienceTimeline />
          </>
        )}
      </main>
      
      <Footer />
      
      {/* Global Halftone Grain - Low Opacity */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.05] z-[9999] mix-blend-multiply halftone-bg"></div>
    </div>
  );
}

export default App;
