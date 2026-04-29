export interface Order {
  id: string;
  customerName: string;
  status: string;
  productLink?: string;
}

export interface Chat {
  id: string;
  orderId?: string;
  participantName: string;
}

export interface MessageTemplate {
  id: string;
  title: string;
  body: string;
  variables: string[];
}

export interface BroadcastTask {
  id: string;
  orderIds: string[];
  templateId: string;
  status: 'draft' | 'ready_for_confirmation' | 'sent';
}
