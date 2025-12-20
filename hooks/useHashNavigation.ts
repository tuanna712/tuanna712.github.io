import { useState, useEffect } from 'react';

export interface Route {
  page: string;
  params: string[];
}

export const useHashNavigation = (): Route => {
  const getRouteFromHash = (hash: string): Route => {
    const path = hash.replace('#', '').split('/');
    const page = path[0] || 'home';
    const params = path.slice(1);
    return { page, params };
  };

  const [route, setRoute] = useState<Route>(() => getRouteFromHash(window.location.hash));

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRouteFromHash(window.location.hash));
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return route;
};
