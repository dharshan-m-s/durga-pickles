export async function apiRequest(path, options = {}) {
  const headers = new Headers(options.headers || {});

  // Add CSRF token for state-changing operations
  if (!['GET', 'HEAD', 'OPTIONS'].includes(options.method || 'GET')) {
    const csrfToken = localStorage.getItem('csrfToken');
    if (csrfToken) {
      headers.set('X-CSRF-Token', csrfToken);
    }
  }

  if (options.body && !(options.body instanceof FormData) && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }
  const res = await fetch(path, { ...options, headers, credentials: 'include' });
  const contentType = res.headers.get('content-type') || '';
  const payload = contentType.includes('application/json') ? await res.json() : await res.text();
  if (!res.ok) {
    const message = typeof payload === 'object' && payload?.error ? payload.error : String(payload || 'Request failed');
    throw new Error(message);
  }
  return payload;
}

export function whatsappUrl(number, message = '') {
  const digits = String(number || '').replace(/\D/g, '');
  return `https://wa.me/${digits}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
}

// URL sanitization to prevent XSS via javascript: or data: URLs
export function sanitizeUrl(url) {
  if (!url) return '';
  try {
    const urlObj = new URL(url, window.location.href);
    // Only allow http, https, or relative URLs
    if (urlObj.protocol !== 'http:' && urlObj.protocol !== 'https:' && urlObj.protocol !== '') {
      return '';
    }
    return urlObj.toString();
  } catch (e) {
    // If it's not a valid URL, check if it's a relative URL that doesn't start with dangerous protocols
    if (url.startsWith('javascript:') || url.startsWith('data:') || url.startsWith('vbscript:')) {
      return '';
    }
    // For relative URLs or other cases, return as-is (they'll be handled by the browser's security)
    return url;
  }
}
