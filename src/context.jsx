import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { DEFAULT_CONTENT } from './data/defaultContent';

const ContentContext = createContext(null);

export function ContentProvider({ children }) {
  const [content, setContent] = useState(DEFAULT_CONTENT);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    try {
      const res = await fetch('/api/content', { cache: 'no-store' });
      if (!res.ok) throw new Error('CMS API unavailable');
      const next = await res.json();
      if (next?.site && Array.isArray(next.products) && Array.isArray(next.gallery)) {
        setContent(next);
      }
    } catch (_) {
      // Static fallback keeps the public site usable when only Vite is running.
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { refresh(); }, [refresh]);

  const value = useMemo(() => ({
    content,
    setContent,
    loading,
    refresh,
    products: content.products,
    gallery: content.gallery,
    site: content.site,
    categories: ['All', ...new Set(content.products.map((p) => p.category).filter(Boolean))],
  }), [content, loading, refresh]);

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
}

export function useContent() {
  const value = useContext(ContentContext);
  if (!value) throw new Error('useContent must be used inside ContentProvider');
  return value;
}
