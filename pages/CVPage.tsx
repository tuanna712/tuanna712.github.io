
import React from 'react';
import { academicData } from '../data';
import { CVEntry } from '../types';

const CVSection: React.FC<{ title: string; entries: CVEntry[] }> = ({ title, entries }) => {
  if (!entries || entries.length === 0) return null;
  
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold font-serif text-primary mb-6 flex items-center gap-4">
          {title}
          <span className="h-[1px] bg-slate-200 flex-grow"></span>
      </h2>
      <div className="space-y-6">
          {entries.map(entry => (
          <div key={entry.id} className="relative pl-5 border-l-2 border-slate-100 hover:border-accent transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                <h3 className="font-bold text-base text-primary leading-tight">{entry.title}</h3>
                <p className="font-bold text-accent text-xs uppercase tracking-widest md:text-right whitespace-nowrap">{entry.period}</p>
              </div>
              <p className="text-sm font-semibold text-secondary mb-2">{entry.institution}</p>
              {entry.description && (
                <div className="text-sm text-slate-600 space-y-1">
                  {entry.description.split('\n').map((line, i) => (
                    <p key={i} className="leading-relaxed">{line}</p>
                  ))}
                </div>
              )}
          </div>
          ))}
      </div>
    </section>
  );
};

const CVPage: React.FC = () => {
  const { cv } = academicData;

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
        <div>
          <h1 className="text-2xl font-bold font-serif text-primary">Curriculum Vitae</h1>
          <p className="text-slate-500 text-sm mt-1 uppercase tracking-widest font-semibold">Tuan Nguyen</p>
        </div>
        <a
          href={cv.downloadLink}
          className="inline-flex items-center px-6 py-2.5 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-secondary transition-all shadow-md hover:shadow-lg active:scale-95"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download PDF
        </a>

        <a
          href={cv.degLink}
          className="inline-flex items-center px-6 py-2.5 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-secondary transition-all shadow-md hover:shadow-lg active:scale-95"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Degree
        </a>

        <a
          href={cv.transcriptLink}
          className="inline-flex items-center px-6 py-2.5 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-secondary transition-all shadow-md hover:shadow-lg active:scale-95"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Transcript
        </a>
      </div>

      
      
      <CVSection title="Education" entries={cv.education} />
      <CVSection title="Research Experience" entries={cv.researchExperience} />
      <CVSection title="Working Experience" entries={cv.experience} />
      <CVSection title="Additional Coursework & Certifications" entries={cv.certifications} />
      {/* <CVSection title="Awards & Honors" entries={cv.awards} /> */}
    </div>
  );
};

export default CVPage;
