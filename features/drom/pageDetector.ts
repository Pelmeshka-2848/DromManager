import type { DromPageType } from './context/types';

export function detectDromPage(url: string): DromPageType {
  let parsedUrl: URL;
  try {
    parsedUrl = new URL(url);
  } catch {
    return 'unknown';
  }

  if (!parsedUrl.hostname.includes('drom.ru')) {
    return 'unknown';
  }

  const pathname = parsedUrl.pathname;

  if (/\/my\/orders\/?$/.test(pathname) || /\/orders\/?$/.test(pathname)) {
    return 'ordersList';
  }

  if (/\/order\//.test(pathname) || /\/my\/orders\/\d+/.test(pathname)) {
    return 'order';
  }

  if (/\/chat/.test(pathname) || /\/messages/.test(pathname)) {
    return 'chat';
  }

  return 'drom';
}
