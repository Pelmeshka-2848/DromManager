import { detectDromPage } from '../pageDetector';
import { extractChatContext } from './extractChatContext';
import { extractOrderContext } from './extractOrderContext';
import type { DromPageContext } from './types';

export function extractPageContext(url: string = window.location.href, title: string = document.title): DromPageContext {
  const pageType = detectDromPage(url);
  const base: DromPageContext = {
    pageType,
    url,
    title,
    detectedAt: new Date().toISOString()
  };

  if (pageType === 'order' || pageType === 'ordersList') {
    return { ...base, ...extractOrderContext() };
  }

  if (pageType === 'chat') {
    return { ...base, ...extractChatContext(), ...extractOrderContext() };
  }

  return base;
}
