
import React from 'react';

const Footer: React.FC = () => {
  const websiteUrl = "https://sujit-sikder.github.io"; // Normalized URL for functional QR
  const displayUrl = "www.sujit.sikder.github.io";

  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm font-medium tracking-wide">
            &copy; {new Date().getFullYear()} Dr.-Ing. Sujit Kumar Sikder. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-slate-500 max-w-md">
            Senior Scientist, Leibniz Institute of Ecological Urban and Regional Development (IOER), Dresden.
          </p>
          
          <div className="mt-8 flex justify-center space-x-6">
             <a href="#" title="LinkedIn" className="hover:text-blue-400 transition-all hover:scale-110"><i className="fa-brands fa-linkedin text-xl"></i></a>
             <a href="#" title="Google Scholar" className="hover:text-blue-300 transition-all hover:scale-110"><i className="fa-brands fa-google-scholar text-xl"></i></a>
             <a href="#" title="ORCID" className="hover:text-emerald-400 transition-all hover:scale-110"><i className="fa-brands fa-orcid text-xl"></i></a>
             <a href="#" title="GitHub" className="hover:text-white transition-all hover:scale-110"><i className="fa-brands fa-github text-xl"></i></a>
             <a href="#" title="ResearchGate" className="hover:text-blue-500 transition-all hover:scale-110"><i className="fa-brands fa-researchgate text-xl"></i></a>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 w-full max-w-xs flex flex-col items-center">
            <div className="p-2 bg-white rounded-lg shadow-inner mb-4">
              <img 
                src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(websiteUrl)}&bgcolor=ffffff&color=0f172a`} 
                alt="Website QR Code" 
                className="w-24 h-24"
              />
            </div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-1">Scan to visit</p>
            <p className="text-xs font-mono text-slate-400">{displayUrl}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
