import { describe, expect, it } from 'vitest';
import { detectDromPage } from './pageDetector';

describe('detectDromPage', () => {
  it('returns unknown for non drom hosts', () => {
    expect(detectDromPage('https://example.com/orders')).toBe('unknown');
  });

  it('detects orders list', () => {
    expect(detectDromPage('https://www.drom.ru/my/orders')).toBe('ordersList');
  });

  it('detects order page', () => {
    expect(detectDromPage('https://www.drom.ru/my/orders/12345')).toBe('order');
  });

  it('detects chat page', () => {
    expect(detectDromPage('https://www.drom.ru/chat/room/7')).toBe('chat');
  });

  it('detects generic drom page', () => {
    expect(detectDromPage('https://www.drom.ru')).toBe('drom');
  });
});
