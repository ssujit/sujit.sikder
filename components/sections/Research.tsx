
import React from 'react';
import { researchInterests } from '../../data';

const Research: React.FC = () => {
  return (
    <div className="p-8 md:p-12">
      <h2 className="text-3xl font-bold mb-8 border-b pb-4 border-slate-100">Research Focus</h2>
      
      <div className="space-y-12">
        <section>
          <h3 className="text-2xl font-semibold mb-4 text-slate-800">Thematic Clusters</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50/50 rounded-xl border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <i className="fa-solid fa-leaf text-blue-600 text-xl"></i>
                <h4 className="text-lg font-bold text-slate-900">Sustainable Pathways</h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Developing actionable strategies for net-zero transitions in urban and regional environments, focusing on decarbonization and resilient infrastructure.
              </p>
            </div>
            
            <div className="p-6 bg-emerald-50/50 rounded-xl border border-emerald-100">
              <div className="flex items-center gap-3 mb-4">
                <i className="fa-solid fa-network-wired text-emerald-600 text-xl"></i>
                <h4 className="text-lg font-bold text-slate-900">Integrated Systems</h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Examining the intersection of spatial land use planning, local energy grids, and mobility demand to create holistic urban systems.
              </p>
            </div>

            <div className="p-6 bg-amber-50/50 rounded-xl border border-amber-100">
              <div className="flex items-center gap-3 mb-4">
                <i className="fa-solid fa-microchip text-amber-600 text-xl"></i>
                <h4 className="text-lg font-bold text-slate-900">Spatial Data Science</h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Leveraging hybrid modelling, geocomputation, and advanced spatial analysis to simulate transformation scenarios and optimize urban structures.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <i className="fa-solid fa-database text-slate-600 text-xl"></i>
                <h4 className="text-lg font-bold text-slate-900">Open Data & Governance</h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Advocating for open data management and governance through initiatives like the Research Data Centre (IOER-RDC) and OpenGeoEdu.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-6 text-slate-800">Methodological Interests</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {researchInterests.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-600">
                <i className="fa-solid fa-check text-blue-500 mt-1"></i>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Research;
