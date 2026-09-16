export async function apiRequest(path, options = {}) {
  const method = options.method || 'GET';
  const requestPath = path === '/api/export' && method === 'GET' ? '/api/content' : path;
  const headers = new Headers(options.headers || {});

  if (requestPath === '/api/upload' && options.body instanceof FormData) {
    const file = options.body.get('file');
    if (file instanceof File && file.size > 4 * 1024 * 1024) {
      throw new Error('Images must be 4 MB or smaller when uploaded through the CMS.');
    }
  }

  if (!['GET', 'HEAD', 'OPTIONS'].includes(method)) {
    const csrfToken = localStorage.getItem('csrfToken');
    if (csrfToken) headers.set('X-CSRF-Token', csrfToken);
  }
  if (options.body && !(options.body instanceof FormData) && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }
  const res = await fetch(requestPath, { ...options, headers, credentials: 'include' });
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

export function sanitizeUrl(url) {
  if (!url) return '';
  try {
    const urlObj = new URL(url, window.location.href);
    if (urlObj.protocol !== 'http:' && urlObj.protocol !== 'https:' && urlObj.protocol !== '') return '';
    return urlObj.toString();
  } catch (e) {
    if (url.startsWith('javascript:') || url.startsWith('data:') || url.startsWith('vbscript:')) return '';
    return url;
  }
}
