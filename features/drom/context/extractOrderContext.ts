import { dromSelectors, queryLink, queryText } from '../selectors';
import type { DromOrderContext } from './types';

export function extractOrderContext(root: ParentNode = document): DromOrderContext {
  const orderId = queryText(root, dromSelectors.orderId);
  const customerName = queryText(root, dromSelectors.customerName);
  const statusText = queryText(root, dromSelectors.statusText);
  const productLink = queryLink(root, dromSelectors.productLink)?.href;

  return {
    orderId,
    customerName,
    statusText,
    productLink
  };
}
