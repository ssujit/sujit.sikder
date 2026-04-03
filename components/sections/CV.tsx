
import React from 'react';
import { education, experience, memberships, awards } from '../../data';

const CV: React.FC = () => {
  return (
    <div className="p-8 md:p-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 border-b pb-4 border-slate-100 gap-4">
        <h2 className="text-3xl font-bold">Curriculum Vitae</h2>
        <a href="#" className="px-4 py-2 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2">
          <i className="fa-solid fa-file-pdf"></i> Download Full Resume
        </a>
      </div>
      
      <div className="space-y-16">
        {/* Professional Experience */}
        <section>
          <h3 className="text-xl font-bold text-slate-500 uppercase tracking-widest mb-8 flex items-center gap-4">
            Professional Experience <div className="h-px bg-slate-200 flex-grow"></div>
          </h3>
          <div className="space-y-10">
            {experience.map((exp, i) => (
              <div key={i} className="relative pl-8 border-l-2 border-blue-600">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white border-2 border-blue-600 rounded-full"></div>
                <div className="flex flex-col mb-2">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">{exp.period}</span>
                  <h4 className="text-xl font-bold text-slate-900">{exp.role}</h4>
                  <p className="text-blue-700 font-medium">{exp.institution}</p>
                </div>
                {exp.details.length > 0 && (
                  <ul className="mt-2 space-y-1 text-slate-600 text-sm leading-relaxed">
                    {exp.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="text-blue-400 font-bold">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h3 className="text-xl font-bold text-slate-500 uppercase tracking-widest mb-8 flex items-center gap-4">
            Education <div className="h-px bg-slate-200 flex-grow"></div>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, i) => (
              <div key={i} className="p-6 bg-white border border-slate-200 rounded-xl hover:shadow-sm transition-shadow">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{edu.period}</span>
                <h4 className="text-lg font-bold text-slate-900 mt-1 leading-tight">{edu.degree}</h4>
                <p className="text-slate-600 font-medium mb-3">{edu.institution}</p>
                {edu.details && (
                  <p className="text-xs italic text-slate-500 border-t border-slate-100 pt-3 leading-relaxed">
                    <strong>Research focus:</strong> {edu.details}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Awards & Memberships */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <section>
            <h3 className="text-xl font-bold text-slate-500 uppercase tracking-widest mb-8 flex items-center gap-4">
              Awards & Fellowships <div className="h-px bg-slate-200 flex-grow"></div>
            </h3>
            <div className="space-y-4">
              {awards.map((award, i) => (
                <div key={i} className="flex gap-4 items-start p-4 bg-slate-50 border border-slate-100 rounded-xl">
                  <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-lg shrink-0">
                    <i className="fa-solid fa-medal text-amber-500 text-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 leading-tight">{award.title}</h4>
                    <p className="text-sm text-slate-500 mt-1">{award.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-500 uppercase tracking-widest mb-8 flex items-center gap-4">
              Functions & Memberships <div className="h-px bg-slate-200 flex-grow"></div>
            </h3>
            <ul className="space-y-4">
              {memberships.map((membership, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-600 group">
                  <i className="fa-solid fa-shield-check text-blue-400 mt-1 group-hover:text-blue-600 transition-colors"></i>
                  <span className="leading-relaxed">{membership}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CV;
