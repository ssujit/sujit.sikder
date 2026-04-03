
import React from 'react';

const Publications: React.FC = () => {
  return (
    <div className="p-8 md:p-12">
      <h2 className="text-3xl font-bold mb-8 border-b pb-4 border-slate-100">Updates</h2>
      
      <div className="space-y-8">
        {/* Published Dataset Update */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-2">
               <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase rounded">Published Dataset</span>
               <span className="px-2 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold uppercase rounded">Open Data</span>
               <span className="px-2 py-1 bg-purple-100 text-purple-700 text-[10px] font-bold uppercase rounded">Mobility</span>
            </div>
          </div>
          
          <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-emerald-400 transition-all duration-300">
            <div className="flex justify-between items-start mb-3">
              <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">New Data Release</span>
              <span className="text-xs font-bold text-slate-500">2024/25</span>
            </div>
            <h3 className="text-slate-900 font-bold text-lg leading-snug mb-3">
              Replication package for: Urban Public Transit Frequency Indicator in Germany
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Published via the <strong>IOER Research Data Centre (IOER-RDC)</strong>. This replication package provides processed spatial indicators and data for public transit frequency analysis across German urban areas.
            </p>
            <div className="flex flex-wrap gap-4 border-t border-slate-100 pt-4">
              <a 
                href="https://doi.org/10.71830/ABPCUS" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-emerald-600 text-xs font-bold hover:text-emerald-800 flex items-center gap-1.5"
              >
                <i className="fa-solid fa-database"></i> Access Dataset (IOER-RDC)
              </a>
              <a 
                href="https://doi.org/10.71830/ABPCUS" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-500 text-xs font-bold hover:text-slate-800 flex items-center gap-1.5"
              >
                <i className="fa-solid fa-barcode"></i> DOI: 10.71830/ABPCUS
              </a>
            </div>
          </div>
        </section>

        {/* EV Charging Infrastructure Update */}
        <section>
          <div className="flex items-center justify-between mb-4 mt-12">
            <div className="flex gap-2">
               <span className="px-2 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold uppercase rounded">Journal Article</span>
               <span className="px-2 py-1 bg-amber-100 text-amber-700 text-[10px] font-bold uppercase rounded">Mobility</span>
               <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-[10px] font-bold uppercase rounded">Social Equity</span>
            </div>
          </div>
          
          <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-blue-400 transition-all duration-300 opacity-95">
            <div className="flex justify-between items-start mb-3">
              <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">Research Update</span>
              <span className="text-xs font-bold text-slate-500">2023/24</span>
            </div>
            <h3 className="text-slate-900 font-bold text-lg leading-snug mb-3">
              Augmenting EV charging infrastructure towards transformative sustainable cities: An equity-based approach
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Published in <strong>Technological Forecasting and Social Change</strong>. This study proposes an equity-based planning framework for electric vehicle (EV) charging infrastructure.
            </p>
            <div className="flex flex-wrap gap-4 border-t border-slate-100 pt-4">
              <a 
                href="https://www.sciencedirect.com/science/article/pii/S0040162523005140" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 text-xs font-bold hover:text-blue-800 flex items-center gap-1.5"
              >
                <i className="fa-solid fa-file-lines"></i> ScienceDirect
              </a>
              <a 
                href="https://doi.org/10.1016/j.techfore.2023.122824" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-500 text-xs font-bold hover:text-slate-800 flex items-center gap-1.5"
              >
                <i className="fa-solid fa-barcode"></i> DOI: 10.1016/j.techfore.2023.122824
              </a>
            </div>
          </div>
        </section>

        {/* Global Open Data / GHSL Update */}
        <section>
          <div className="flex items-center justify-between mb-4 mt-12">
            <div className="flex gap-2">
               <span className="px-2 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold uppercase rounded">Journal Article</span>
               <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase rounded">Open Data</span>
            </div>
          </div>
          
          <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-blue-400 transition-all duration-300 opacity-90">
            <div className="flex justify-between items-start mb-3">
              <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">Featured Publication</span>
              <span className="text-xs font-bold text-slate-500">2023/24</span>
            </div>
            <h3 className="text-slate-900 font-bold text-lg leading-snug mb-3">
              Global open data in local urban development: an actionable framework for adopting Global Human Settlement Layer (GHSL) in the Global South
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Published in <strong>Data & Policy</strong> (Cambridge University Press). Framework for integrating global datasets like GHSL into local planning processes.
            </p>
            <div className="flex flex-wrap gap-4 border-t border-slate-100 pt-4">
              <a 
                href="https://doi.org/10.1017/dap.2023.23" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 text-xs font-bold hover:text-blue-800 flex items-center gap-1.5"
              >
                <i className="fa-solid fa-file-lines"></i> Full Text
              </a>
              <a 
                href="https://doi.org/10.1017/dap.2023.23" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-500 text-xs font-bold hover:text-slate-800 flex items-center gap-1.5"
              >
                <i className="fa-solid fa-barcode"></i> DOI: 10.1017/dap.2023.23
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Publications;
