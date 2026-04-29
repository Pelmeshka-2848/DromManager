import { dromSelectors, queryInput } from '../selectors';

function setElementValue(element: HTMLInputElement | HTMLTextAreaElement | HTMLElement, text: string): void {
  if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
    element.value = text;
    return;
  }

  if (element.isContentEditable) {
    element.textContent = text;
  }
}

export function insertMessageText(text: string, root: ParentNode = document): { ok: true } | { ok: false; error: string } {
  const inputElement = queryInput(root, dromSelectors.messageInput);

  if (!inputElement) {
    return { ok: false, error: 'Поле сообщения не найдено.' };
  }

  setElementValue(inputElement, text);
  inputElement.dispatchEvent(new Event('input', { bubbles: true }));
  inputElement.dispatchEvent(new Event('change', { bubbles: true }));

  return { ok: true };
}
