import { describe, expect, it } from 'vitest';
import { detectDromPage } from './pageDetector';

describe('detectDromPage', () => {
  it('detects actual bulletins list page', () => {
    expect(detectDromPage('https://drom.ru/my/bulletins/actual/auto/')).toBe('bulletinsList');
  });

  it('detects archive bulletins list page', () => {
    expect(detectDromPage('https://drom.ru/my/bulletins/archive/auto/')).toBe('bulletinsList');
  });

  it('detects generic bulletins list page', () => {
    expect(detectDromPage('https://drom.ru/my/bulletins/')).toBe('bulletinsList');
  });

  it('detects orders page', () => {
    expect(detectDromPage('https://drom.ru/my/orders')).toBe('orders');
  });

  it('detects messages page', () => {
    expect(detectDromPage('https://drom.ru/messages')).toBe('chat');
  });

  it('detects messaging modal page with query as chat', () => {
    expect(detectDromPage('https://my.drom.ru/personal/messaging-modal?switchPosition=dialogs')).toBe('chat');
  });

  it('detects messaging modal page as chat', () => {
    expect(detectDromPage('https://my.drom.ru/personal/messaging-modal')).toBe('chat');
  });

  it('detects relative messaging modal path as chat', () => {
    expect(detectDromPage('/personal/messaging-modal')).toBe('chat');
  });

  it('detects common drom page as drom type', () => {
    expect(detectDromPage('https://drom.ru/catalog/toyota/corolla/')).toBe('drom');
  });
});
