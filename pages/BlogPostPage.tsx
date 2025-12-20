
import React, { useEffect, useRef, useState } from 'react';
import { academicData } from '../data';
import { Card, CardContent } from '../components/Card';
import { marked } from 'marked';

// Tell TypeScript that hljs exists on the window object for syntax highlighting
declare global {
  interface Window {
    hljs: any;
  }
}

interface BlogPostPageProps {
  slug: string;
}

const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    window.location.hash = hash;
};

const BlogPostPage: React.FC<BlogPostPageProps> = ({ slug }) => {
  const postMeta = academicData.blog.find(p => p.slug === slug);
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (postMeta) {
      setIsLoading(true);
      setError(null);
      fetch(`./data/blog/${postMeta.slug}.md`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.text();
        })
        .then(text => {
          setContent(marked.parse(text, { async: false }) as string);
        })
        .catch(e => {
          console.error("Failed to fetch blog post:", e);
          setError("Could not load the blog post content.");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [slug, postMeta]);

  // This effect runs after the component renders to apply syntax highlighting to code blocks
  useEffect(() => {
    if (content && !isLoading && contentRef.current) {
      const codeBlocks = contentRef.current.querySelectorAll('pre code');
      codeBlocks.forEach((block) => {
        window.hljs.highlightElement(block);
      });
    }
  }, [content, isLoading]);

  if (!postMeta) {
    return (
      <div className="text-center py-6">
        <h1 className="text-2xl font-bold font-serif text-primary mb-2">Post Not Found</h1>
        <p className="text-sm text-gray-600">The blog post you are looking for does not exist.</p>
        <a href="#blog" onClick={(e) => handleNavClick(e, '#blog')} className="bg-primary text-white text-xs font-bold py-2 px-4 rounded-lg mt-4 inline-block">
          &larr; Back to Blog
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <a href="#blog" onClick={(e) => handleNavClick(e, '#blog')} className="text-xs text-secondary hover:text-primary font-bold uppercase tracking-widest mb-4 inline-block">&larr; Back to all posts</a>
      <Card>
        <CardContent className="p-4 sm:p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold font-serif text-primary mb-1">{postMeta.title}</h1>
          <p className="text-xs text-gray-500 mb-6 border-b border-gray-100 pb-2">{new Date(postMeta.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          {isLoading && (
            <div className="flex items-center justify-center py-6">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          )}
          {error && <p className="text-red-600 text-sm text-center py-6">{error}</p>}
          
          {!isLoading && !error && (
            <div
              ref={contentRef}
              className="prose prose-sm max-w-none text-gray-800 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}

        </CardContent>
      </Card>
    </div>
  );
};

export default BlogPostPage;
