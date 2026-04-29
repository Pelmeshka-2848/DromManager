import { defineContentScript } from 'wxt/utils/define-content-script';
import { detectDromPage } from '../features/drom/pageDetector';

export default defineContentScript({
  matches: ['*://*.drom.ru/*'],
  runAt: 'document_idle',
  main: () => {
    const pageType = detectDromPage(window.location.href);
    const container = document.createElement('div');
    container.id = 'drom-manager-test-block';
    container.style.position = 'fixed';
    container.style.right = '16px';
    container.style.bottom = '16px';
    container.style.zIndex = '999999';
    container.style.padding = '8px 12px';
    container.style.background = '#111827';
    container.style.color = '#ffffff';
    container.style.fontSize = '12px';
    container.style.borderRadius = '8px';
    container.textContent = `DromManager: страница ${pageType}`;
    document.body.append(container);
  }
});
