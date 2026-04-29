import type { DromPageType } from '../../shared/types/domain';

export function detectDromPage(url: string): DromPageType {
  if (/\/my\/orders/.test(url) || /\/orders/.test(url)) {
    return 'orders';
  }

  if (/\/chat/.test(url) || /\/messages/.test(url)) {
    return 'chat';
  }

  return 'unknown';
}
