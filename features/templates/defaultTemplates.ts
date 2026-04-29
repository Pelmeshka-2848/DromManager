import type { MessageTemplate } from '../../shared/types/domain';

export const defaultTemplates: MessageTemplate[] = [
  {
    id: 'order-greeting',
    title: 'Приветствие по заказу',
    body: 'Здравствуйте, {customerName}! По заказу №{orderId} подготовили обновление. Ссылка: {productLink}',
    variables: ['customerName', 'orderId', 'productLink']
  },
  {
    id: 'status-clarification',
    title: 'Уточнение статуса',
    body: 'Добрый день, {customerName}! Подтвердите, пожалуйста, актуальность заказа №{orderId}.',
    variables: ['customerName', 'orderId']
  }
];
