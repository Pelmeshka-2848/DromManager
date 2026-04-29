/* @vitest-environment jsdom */
import { describe, expect, it, vi } from 'vitest';
import { insertMessageText } from './insertMessageText';

describe('insertMessageText', () => {
  it('inserts text and dispatches events', () => {
    document.body.innerHTML = '<textarea id="msg"></textarea>';
    const input = document.querySelector('#msg') as HTMLTextAreaElement;
    const inputSpy = vi.fn();
    const changeSpy = vi.fn();
    input.addEventListener('input', inputSpy);
    input.addEventListener('change', changeSpy);

    const result = insertMessageText('Тестовое сообщение', document);

    expect(result).toEqual({ ok: true });
    expect(input.value).toBe('Тестовое сообщение');
    expect(inputSpy).toHaveBeenCalledOnce();
    expect(changeSpy).toHaveBeenCalledOnce();
  });

  it('returns readable error when message field is absent', () => {
    document.body.innerHTML = '<div></div>';
    const result = insertMessageText('Тест', document);
    expect(result).toEqual({ ok: false, error: 'Поле сообщения не найдено.' });
  });
});
