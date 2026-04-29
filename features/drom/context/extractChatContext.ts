import { dromSelectors, queryText } from '../selectors';
import type { DromChatContext } from './types';

export function extractChatContext(root: ParentNode = document): DromChatContext {
  return {
    orderId: queryText(root, dromSelectors.orderId),
    customerName: queryText(root, dromSelectors.customerName),
    lastMessageText: queryText(root, dromSelectors.lastMessageText)
  };
}
