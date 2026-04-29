import { describe, expect, it } from 'vitest';
import { renderTemplate } from './templateEngine';

describe('renderTemplate', () => {
  it('replaces known placeholders', () => {
    const result = renderTemplate('Заказ {orderId} для {customerName}', {
      orderId: 101,
      customerName: 'Иван'
    });

    expect(result).toBe('Заказ 101 для Иван');
  });

  it('keeps unknown placeholders', () => {
    const result = renderTemplate('Ссылка: {productLink}', {});
    expect(result).toBe('Ссылка: {productLink}');
  });
});
