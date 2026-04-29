/* @vitest-environment jsdom */
import { describe, expect, it } from 'vitest';
import { queryInput, queryLink, queryText } from './dromSelectors';

describe('drom selector helpers', () => {
  it('reads text safely', () => {
    document.body.innerHTML = '<div class="customer"> Иван </div>';
    expect(queryText(document, ['.customer'])).toBe('Иван');
    expect(queryText(document, ['.missing'])).toBeUndefined();
  });

  it('reads input and links safely', () => {
    document.body.innerHTML = '<textarea id="msg"></textarea><a class="link" href="https://www.drom.ru/spec/1">x</a>';
    expect(queryInput(document, ['#msg'])).toBeInstanceOf(HTMLTextAreaElement);
    expect(queryLink(document, ['.link'])?.href).toContain('https://www.drom.ru/spec/1');
  });
});
