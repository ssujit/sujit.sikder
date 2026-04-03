
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="p-8 md:p-12">
      <h2 className="text-3xl font-bold mb-8 border-b pb-4 border-slate-100">Contact Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Institutional Address */}
        <section className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <i className="fa-solid fa-location-dot text-blue-600"></i>
            Institutional Address
          </h3>
          <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl text-slate-600 text-sm leading-relaxed shadow-sm">
            <p className="font-bold text-slate-900 mb-1">IOER Dresden</p>
            <p>Weberplatz 1</p>
            <p>01217 Dresden</p>
            <p>Germany</p>
          </div>
        </section>

        {/* Professional Presence */}
        <section className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <i className="fa-solid fa-address-card text-blue-600"></i>
            Professional Presence
          </h3>
          <div className="space-y-3">
            <a href="https://www.ioer.de/institut/mitarbeitende/sikder" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-white border border-slate-100 rounded-xl hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center shrink-0">
                 <i className="fa-solid fa-building-columns"></i>
              </div>
              <div className="overflow-hidden">
                <p className="text-xs font-bold text-slate-400 uppercase">IOER Profile</p>
                <p className="text-sm text-slate-600 truncate group-hover:text-blue-700 transition-colors">ioer.de/sikder-sujit</p>
              </div>
            </a>
            <div className="flex items-center gap-3 p-4 bg-white border border-slate-100 rounded-xl hover:shadow-md transition-shadow group cursor-default">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center shrink-0">
                 <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase">Email</p>
                <p className="text-sm text-slate-600 transition-colors">s.sikder(at)ioer.de</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
