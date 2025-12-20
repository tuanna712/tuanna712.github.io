
import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import HomePage from './pages/HomePage';
import CVPage from './pages/CVPage';
import PublicationsPage from './pages/PublicationsPage';
import NewsPage from './pages/NewsPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import { useHashNavigation } from './hooks/useHashNavigation';
import { academicData } from './data';

const App: React.FC = () => {
  const route = useHashNavigation();
  const { personalInfo } = academicData;

  // Ensure page scrolls to top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route.page, route.params]);

  const renderPage = () => {
    // Handle specific blog post page
    if (route.page === 'blog' && route.params.length > 0) {
      return <BlogPostPage slug={route.params[0]} />;
    }

    switch (route.page) {
      case 'cv':
        return <CVPage />;
      case 'publications':
        return <PublicationsPage />;
      case 'news':
        return <NewsPage />;
      case 'blog':
        return <BlogPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-slate-50">
      <Header currentPage={route.page} name={personalInfo.name} title={personalInfo.title} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {renderPage()}
      </main>
      <Footer socialLinks={personalInfo.socialLinks} name={personalInfo.name} />
    </div>
  );
};

export default App;
