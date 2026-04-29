import type { DromPageType } from '../../shared/types/domain';

function parseUrl(url: string): URL | null {
  try {
    return new URL(url);
  } catch {
    try {
      return new URL(url, 'https://drom.ru');
    } catch {
      return null;
    }
  }
}

function isDromDomain(hostname: string): boolean {
  return hostname === 'drom.ru' || hostname.endsWith('.drom.ru');
}

export function detectDromPage(url: string): DromPageType {
  const parsedUrl = parseUrl(url);

  if (!parsedUrl || !isDromDomain(parsedUrl.hostname)) {
    return 'unknown';
  }

  const path = parsedUrl.pathname;

  if (/^\/my\/orders(?:\/|$)/.test(path) || /^\/orders(?:\/|$)/.test(path)) {
    return 'orders';
  }

  if (/^\/(?:chat|messages)(?:\/|$)/.test(path)) {
    return 'chat';
  }

  if (/^\/my\/bulletins(?:\/actual\/auto\/|\/archive\/auto\/|\/|$)/.test(path)) {
    return 'bulletinsList';
  }

  return 'drom';
}
