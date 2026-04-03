
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/sections/Home';
import Publications from './components/sections/Publications';
import Projects from './components/sections/Projects';
import Teaching from './components/sections/Teaching';
import CV from './components/sections/CV';
import Contact from './components/sections/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-100">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 py-12">
          
          <section id="home" className="bg-white shadow-sm rounded-xl overflow-hidden border border-slate-100 scroll-mt-24">
            <Home />
          </section>

          <section id="updates" className="bg-white shadow-sm rounded-xl overflow-hidden border border-slate-100 scroll-mt-24">
            <Publications />
          </section>

          <section id="cv" className="bg-white shadow-sm rounded-xl overflow-hidden border border-slate-100 scroll-mt-24">
            <CV />
          </section>

          <section id="projects" className="bg-white shadow-sm rounded-xl overflow-hidden border border-slate-100 scroll-mt-24">
            <Projects />
          </section>

          <section id="teaching" className="bg-white shadow-sm rounded-xl overflow-hidden border border-slate-100 scroll-mt-24">
            <Teaching />
          </section>

          <section id="contact" className="bg-white shadow-sm rounded-xl overflow-hidden border border-slate-100 scroll-mt-24">
            <Contact />
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
