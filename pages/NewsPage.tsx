
import React from 'react';
import { academicData } from '../data';

const NewsPage: React.FC = () => {
  const { news } = academicData;

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold font-serif text-primary mb-6 flex items-center gap-4">
        News Feed
        <div className="h-px bg-slate-200 flex-grow"></div>
      </h1>

      <div className="space-y-6">
        {news.map(item => (
          <div key={item.id} className="flex flex-col sm:flex-row gap-2 sm:gap-10 group">
            <div className="sm:w-28 flex-shrink-0">
              <span className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.1em]">
                {item.date}
              </span>
            </div>
            <div className="relative pb-2 sm:pb-0">
              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                {item.content}
              </p>
              <div className="absolute left-[-2rem] top-0 bottom-0 w-px bg-slate-100 hidden sm:block"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
