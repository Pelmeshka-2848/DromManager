export type DromPageType = 'unknown' | 'drom' | 'order' | 'chat' | 'ordersList';

export interface DromPageContext {
  pageType: DromPageType;
  url: string;
  title: string;
  detectedAt: string;
  orderId?: string;
  customerName?: string;
  lastMessageText?: string;
  productLink?: string;
  statusText?: string;
}

export interface DromOrderContext {
  orderId?: string;
  customerName?: string;
  productLink?: string;
  statusText?: string;
}

export interface DromChatContext {
  orderId?: string;
  customerName?: string;
  lastMessageText?: string;
}
