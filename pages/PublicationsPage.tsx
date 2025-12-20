import React from 'react';
import { academicData } from '../data';
import { Publication } from '../types';

const PublicationItem: React.FC<{ pub: Publication }> = ({ pub }) => (
  <div className="mb-6 group">
    <div className="flex flex-col md:flex-row md:items-baseline gap-2">
      <h3 className="text-base font-bold text-primary group-hover:text-secondary transition-colors leading-snug">
        {pub.title}
      </h3>
    </div>
    <p className="text-slate-600 text-sm mt-0.5">
      {pub.authors.map((author, i) => (
        <span key={author} className={author.includes('A. T. Nguyen') ? 'font-bold text-slate-600' : ''}>
          {author}{i < pub.authors.length - 1 ? ', ' : ''}
        </span>
      ))}
    </p>
    <p className="text-[14px] text-slate-400 font-medium mt-0.5 italic">
      {pub.venue}, {pub.year}
    </p>
    <div className="mt-2 flex gap-3">
      {pub.links?.map(link => (
        <a
          key={link.name}
          href={link.url}
          className="text-[10px] font-bold uppercase tracking-wider text-secondary hover:text-accent border-b border-transparent hover:border-accent transition-all"
        >
          [{link.name}]
        </a>
      ))}
    </div>
  </div>
);

const PublicationsPage: React.FC = () => {
  const { publications } = academicData;

  const groupedByYear = publications.reduce((acc, pub) => {
    (acc[pub.year] = acc[pub.year] || []).push(pub);
    return acc;
  }, {} as { [key: number]: Publication[] });

  const sortedYears = Object.keys(groupedByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold font-serif text-primary mb-6 flex items-center gap-4">
        Publications
        <div className="h-px bg-slate-200 flex-grow"></div>
      </h1>
      
      {sortedYears.map(year => (
        <section key={year} className="mb-8 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8">
          <div className="md:col-span-1">
            <h2 className="text-xl font-serif text-secondary font-bold md:sticky md:top-32">{year}</h2>
          </div>
          <div className="md:col-span-11 border-l border-slate-100 pl-4 md:pl-8">
            {groupedByYear[year].map(pub => <PublicationItem key={pub.id} pub={pub} />)}
          </div>
        </section>
      ))}
    </div>
  );
};

export default PublicationsPage;