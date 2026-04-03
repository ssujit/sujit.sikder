
import React from 'react';
import { name } from '../../data';

const Home: React.FC = () => {
  const hashtags = [
    "UrbanScience",
    "SpatialSustianability",
    "SpatialAnalysis",
    "HybridModelling",
    "Geocomputation",
    "OpenData",
    "DataManagement"
  ];

  return (
    <div className="p-8 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-1 flex flex-col items-center">
          <div className="w-48 h-48 bg-slate-200 rounded-full flex items-center justify-center overflow-hidden border-4 border-slate-50 shadow-lg relative group">
            <img 
              src="https://www.ioer.de/fileadmin/_processed_/5/0/csm_Sujit_Sikder03501_60573522d7.jpg" 
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
        
        <div className="md:col-span-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-slate-700 text-lg leading-relaxed">
                Exploring actionable <strong>spatial</strong> insights to advance pathways toward a <strong>net-zero future</strong> through an integrated perspective on land use, energy, and mobility systems.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {hashtags.map((tag) => (
                  <span key={tag} className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded tracking-wide border border-slate-200">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-slate-900 rounded-2xl shadow-lg border border-slate-800">
              <div className="flex flex-wrap gap-4">
                <a href="#" className="flex items-center gap-3 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all border border-white/5 group/link">
                   <i className="fa-brands fa-google-scholar text-blue-400 text-lg group-hover/link:scale-110 transition-transform"></i>
                   <span className="font-bold text-sm">Google Scholar</span>
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all border border-white/5 group/link">
                   <i className="fa-brands fa-researchgate text-blue-500 text-lg group-hover/link:scale-110 transition-transform"></i>
                   <span className="font-bold text-sm">ResearchGate</span>
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all border border-white/5 group/link">
                   <i className="fa-brands fa-orcid text-emerald-400 text-lg group-hover/link:scale-110 transition-transform"></i>
                   <span className="font-bold text-sm">ORCID Profile</span>
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all border border-white/5 group/link">
                   <i className="fa-brands fa-linkedin text-blue-400 text-lg group-hover/link:scale-110 transition-transform"></i>
                   <span className="font-bold text-sm">LinkedIn</span>
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all border border-white/5 group/link">
                   <i className="fa-brands fa-github text-slate-300 text-lg group-hover/link:scale-110 transition-transform"></i>
                   <span className="font-bold text-sm">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
