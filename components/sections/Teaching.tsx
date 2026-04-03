import React from 'react';

const Teaching: React.FC = () => {
  return (
    <div className="p-8 md:p-12">
      <h2 className="text-3xl font-bold mb-8 border-b pb-4 border-slate-100">Supervision, Teaching and Mentoring</h2>
      
      <div className="max-w-3xl">
        <ul className="space-y-4 text-slate-600 leading-relaxed">
          <li className="flex items-start gap-3">
            <i className="fa-solid fa-circle-check text-blue-500 mt-1 shrink-0"></i>
            <span>Actively involved in academic knowledge transfer and capacity building</span>
          </li>
          <li className="flex items-start gap-3">
            <i className="fa-solid fa-circle-check text-blue-500 mt-1 shrink-0"></i>
            <span>Supervising and mentoring PhD fellows and Master's students</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Teaching;
