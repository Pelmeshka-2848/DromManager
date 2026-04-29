export const dromSelectors = {
  orderId: ['[data-order-id]', '[data-testid="order-id"]', '.order-id'],
  customerName: ['[data-customer-name]', '.customer-name', '.chat-user-name'],
  statusText: ['[data-order-status]', '.order-status', '.status-label'],
  lastMessageText: ['[data-last-message]', '.last-message', '.chat-message:last-child'],
  productLink: ['a[data-product-link]', 'a.product-link', 'a[href*="/spec/"]'],
  messageInput: ['textarea', '[contenteditable="true"]']
} as const;

function queryElement(root: ParentNode, selectors: readonly string[]): Element | null {
  for (const selector of selectors) {
    const element = root.querySelector(selector);
    if (element) {
      return element;
    }
  }

  return null;
}

export function queryText(root: ParentNode, selectors: readonly string[]): string | undefined {
  const element = queryElement(root, selectors);
  return element?.textContent?.trim() || undefined;
}

export function queryInput(root: ParentNode, selectors: readonly string[]): HTMLInputElement | HTMLTextAreaElement | HTMLElement | undefined {
  const element = queryElement(root, selectors);
  if (!element) {
    return undefined;
  }

  if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement || element instanceof HTMLElement) {
    return element;
  }

  return undefined;
}

export function queryButton(root: ParentNode, selectors: readonly string[]): HTMLButtonElement | undefined {
  const element = queryElement(root, selectors);
  return element instanceof HTMLButtonElement ? element : undefined;
}

export function queryLink(root: ParentNode, selectors: readonly string[]): HTMLAnchorElement | undefined {
  const element = queryElement(root, selectors);
  return element instanceof HTMLAnchorElement ? element : undefined;
}
