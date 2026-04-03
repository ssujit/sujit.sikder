
import React from 'react';
import { projects } from '../../data';

const Projects: React.FC = () => {
  return (
    <div className="p-8 md:p-12">
      <h2 className="text-3xl font-bold mb-8 border-b pb-4 border-slate-100">Project</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <div key={i} className="group flex flex-col h-full bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="h-48 bg-slate-100 flex items-center justify-center border-b border-slate-100">
              <i className={`fa-solid ${i === 0 ? 'fa-magnifying-glass-chart' : i === 1 ? 'fa-graduation-cap' : 'fa-server'} text-6xl text-slate-300 group-hover:scale-110 transition-transform duration-300`}></i>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold text-slate-900">{project.name}</h3>
                <div className="flex flex-wrap gap-1 justify-end">
                   {project.tags.map(tag => (
                     <span key={tag} className="text-[10px] font-bold uppercase px-2 py-0.5 bg-blue-100 text-blue-700 rounded-md">{tag}</span>
                   ))}
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="mt-auto">
                <a href="#" className="text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-2 group-hover:gap-3 transition-all">
                  Project Details <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
        
        <div className="flex flex-col h-full border-2 border-dashed border-slate-200 rounded-xl items-center justify-center p-8 text-center bg-slate-50/50">
           <i className="fa-solid fa-plus-circle text-4xl text-slate-300 mb-4"></i>
           <p className="text-slate-500 font-medium italic">Ongoing Research & Future Collaborations</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
