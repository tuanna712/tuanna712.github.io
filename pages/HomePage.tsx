import React from 'react';
import { academicData } from '../data';
import { Publication, NewsItem } from '../types';

const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    window.location.hash = hash;
};

const SocialIcon: React.FC<{ name: string }> = ({ name }) => {
  const iconMap: { [key: string]: React.ReactElement } = {
    Email: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>,
    GitHub: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0020 10c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>,
    Twitter: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>,
    LinkedIn: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
    'Google Scholar': <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.8 3.84c.07-.03.15-.05.22-.08.35-.13.72-.21 1.1-.23C7.59 13.01 8.94 13.6 10 14.5c.34.29.64.62.89.97.04.05.08.1.11.16.2.27.37.56.51.87.03.06.05.13.07.19.1.25.17.51.21.78.01.07.01.14.02.21.04.38.04.77 0 1.15l.02.21-.02-.21c-.04.27-.11.53-.21.78-.02.06-.04.13-.07.19a3.9 3.9 0 0 1-.51.87c-.03.06-.07.11-.11.16-.25.35-.55.68-.89.97-1.06.9-2.41 1.49-3.88 1.47-.38-.02-.75-.1-1.1-.23-.07-.03-.15-.05-.22-.08L0 22l12 2 12-14.5L12 0z"/></svg>
  };
  return iconMap[name] || <div className="w-4 h-4"></div>;
};

const SectionHeading: React.FC<{ title: string; link?: { text: string; hash: string } }> = ({ title, link }) => (
  <div className="flex justify-between items-end mb-4 pb-1.5 border-b border-slate-200">
    <h2 className="text-lg font-bold text-slate-900 leading-none">
      {title}
    </h2>
    {link && (
      <a 
        href={link.hash} 
        onClick={(e) => handleNavClick(e, link.hash)} 
        className="text-sm font-semibold text-slate-500 hover:text-primary transition-colors tracking-tight"
      >
        {link.text} &rarr;
      </a>
    )}
  </div>
);

const PublicationItem: React.FC<{ pub: Publication }> = ({ pub }) => (
  <div className="mb-6 group last:mb-0">
    <h4 className="font-bold text-base text-primary group-hover:text-secondary transition-colors duration-200 leading-tight">{pub.title}</h4>
    <p className="text-slate-600 text-[13px] italic mt-0.5">{pub.authors.join(', ')}</p>
    <p className="text-[11px] text-slate-500 font-medium">{pub.venue}, {pub.year}</p>
    <div className="mt-1.5 flex flex-wrap gap-2.5">
      {pub.links?.map(link => (
        <a key={link.name} href={link.url} className="text-[10px] uppercase tracking-wider font-bold text-secondary hover:text-primary transition-all">
          [{link.name}]
        </a>
      ))}
    </div>
  </div>
);

const NewsListItem: React.FC<{ item: NewsItem }> = ({ item }) => (
    <div className="mb-4 flex flex-col sm:flex-row sm:items-baseline sm:gap-6 last:mb-0">
        <span className="text-[10px] font-bold text-slate-400 whitespace-nowrap uppercase tracking-widest sm:w-32">{item.date}</span>
        <p className="text-slate-700 text-sm leading-relaxed font-medium flex-grow">{item.content}</p>
    </div>
);

const HomePage: React.FC = () => {
  const { personalInfo, publications, news, blog } = academicData;
  const featuredPublications = publications.filter(p => p.featured);
  const featuredNews = news.filter(n => n.featured);

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-0">
      <div className="lg:grid lg:grid-cols-12 lg:gap-12">
        
        {/* Sidebar Column */}
        <aside className="lg:col-span-3 mb-10 lg:mb-0">
          <div className="lg:sticky lg:top-24">
            <div className="flex flex-col items-center bg-white py-6 px-4 rounded-xl shadow-sm border border-slate-100 text-center">
              <img
                src={personalInfo.profilePictureUrl}
                alt={personalInfo.name}
                className="w-full max-w-[190px] aspect-square object-cover rounded-lg shadow-sm mb-4 mx-auto"
              />
              <div className="px-2">
                <h1 className="text-xl font-bold font-serif text-primary mb-1 leading-tight">{personalInfo.name}</h1>
                <p className="text-slate-500 text-[11px] font-semibold mb-5 leading-snug">{personalInfo.title}</p>
              </div>
              
              <div className="w-full flex justify-center items-center gap-4 pt-4 border-t border-slate-50">
                {personalInfo.socialLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-primary transition-all p-0.5 hover:scale-110"
                    title={link.name}
                  >
                    <SocialIcon name={link.name} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Column */}
        <div className="lg:col-span-9 space-y-14">
          
          <div className="space-y-5">
            {/* <section id="research-area">
              <SectionHeading title="Research area" />
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                {personalInfo.researchArea}
              </p>
            </section> */}

            <section id="about-me">
              <SectionHeading title="About me" />
              <p className="text-sm text-slate-700 leading-relaxed">
                {personalInfo.bio}
              </p>
            </section>

            <section id="news">
              <SectionHeading title="Recent news" link={{ text: "All news", hash: "#news" }} />
              <div className="space-y-1">
                  {featuredNews.map(item => <NewsListItem key={item.id} item={item} />)}
              </div>
            </section>

            <section id="publications">
              <SectionHeading title="Selected publications" link={{ text: "View all", hash: "#publications" }} />
              <div className="space-y-1">
                  {featuredPublications.map(pub => <PublicationItem key={pub.id} pub={pub} />)}
              </div>
            </section>

            {/* Blog Highlights - Compact Aligned Rows */}
            {blog.some(p => p.featured) && (
              <section id="blog-highlights">
                <SectionHeading title="From the blog" link={{ text: "View all posts", hash: "#blog" }} />
                <div className="space-y-5">
                  {blog.filter(p => p.featured).slice(0, 3).map(post => (
                     <a 
                      key={post.id} 
                      href={`#blog/${post.slug}`} 
                      onClick={(e) => handleNavClick(e, `#blog/${post.slug}`)} 
                      className="flex flex-col sm:flex-row sm:items-baseline sm:gap-6 group"
                     >
                       <span className="text-[10px] font-bold text-slate-400 whitespace-nowrap uppercase tracking-widest sm:w-32 flex-shrink-0 pt-1">
                         {new Date(post.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                       </span>
                       <div className="flex-grow">
                         <h3 className="font-bold text-base text-primary group-hover:text-secondary transition-colors leading-tight">
                           {post.title}
                         </h3>
                         <p className="text-xs text-slate-500 mt-1 line-clamp-1 leading-relaxed">
                           {post.summary}
                         </p>
                       </div>
                     </a>
                  ))}
                </div>
              </section>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomePage;