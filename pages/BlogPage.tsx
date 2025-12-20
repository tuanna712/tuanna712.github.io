
import React from 'react';
import { academicData } from '../data';

const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    window.location.hash = hash;
};

const BlogPage: React.FC = () => {
  const { blog } = academicData;
  const sortedBlogPosts = [...blog].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold font-serif text-primary mb-6 flex items-center gap-4">
        Blog
        <div className="h-px bg-slate-200 flex-grow"></div>
      </h1>
      
      <div className="space-y-8">
        {sortedBlogPosts.map(post => (
          <article key={post.id} className="group relative">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-x-6">
              <time className="text-[10px] font-bold text-slate-400 uppercase tracking-widest sm:w-28 flex-shrink-0">
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
              </time>
              <div className="mt-0.5 sm:mt-0">
                <a 
                  href={`#blog/${post.slug}`} 
                  onClick={(e) => handleNavClick(e, `#blog/${post.slug}`)}
                  className="block group"
                >
                  <h3 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors underline decoration-slate-200 decoration-1 underline-offset-4 group-hover:decoration-secondary">
                    {post.title}
                  </h3>
                  <p className="mt-1 text-slate-600 text-sm leading-relaxed max-w-2xl">
                    {post.summary}
                  </p>
                  <span className="inline-block mt-2 text-[10px] font-bold text-secondary uppercase tracking-widest group-hover:text-accent transition-colors">
                    Read Article &rarr;
                  </span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
