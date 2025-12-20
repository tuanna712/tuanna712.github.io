import React from 'react';

interface HeaderProps {
  currentPage: string;
  name: string;
  title: string;
}

const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    window.location.hash = hash;
};

const NavLink: React.FC<{ href: string; current: boolean; children: React.ReactNode }> = ({ href, current, children }) => (
  <a
    href={href}
    onClick={(e) => handleNavClick(e, href)}
    className={`px-3 py-1 text-sm font-semibold transition-all duration-200 border-b-2 ${
      current ? 'border-accent text-primary' : 'border-transparent text-slate-500 hover:text-primary hover:border-slate-300'
    }`}
  >
    {children}
  </a>
);

export const Header: React.FC<HeaderProps> = ({ currentPage, name, title }) => {
  const navItems = ['home', 'publications', 'news', 'blog', 'cv'];

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="group block">
              <h1 className="text-lg md:text-xl font-bold font-serif text-primary group-hover:text-secondary transition-colors">{name}</h1>
              <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">{title}</p>
            </a>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navItems.map((item) => (
                <NavLink key={item} href={`#${item}`} current={currentPage === item}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};