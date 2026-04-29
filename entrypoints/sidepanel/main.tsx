import React, { useCallback, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import type { DromPageContext } from '../../features/drom/context/types';
import { defaultTemplates } from '../../features/templates/defaultTemplates';
import { renderTemplate } from '../../features/templates/templateEngine';
import '../../ui/styles.css';

async function getCurrentTabId(): Promise<number | undefined> {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  return tabs[0]?.id;
}

function SidePanelApp() {
  const [context, setContext] = useState<DromPageContext | null>(null);
  const [error, setError] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  const refreshContext = useCallback(async () => {
    setError('');
    setStatus('Обновляем контекст...');
    const tabId = await getCurrentTabId();

    if (!tabId) {
      setError('Активная вкладка не найдена.');
      setStatus('');
      return;
    }

    const response = await chrome.tabs.sendMessage(tabId, { type: 'DROM_MANAGER_GET_CONTEXT' });

    if (!response?.ok || !response.context) {
      setContext(null);
      setError('Контекст страницы не определён.');
      setStatus('');
      return;
    }

    setContext(response.context as DromPageContext);
    setStatus('Контекст обновлён.');
  }, []);

  const insertTemplate = useCallback(async () => {
    if (!context) {
      setError('Контекст страницы не определён.');
      return;
    }

    const firstTemplate = defaultTemplates[0];
    const text = renderTemplate(firstTemplate.body, {
      customerName: context.customerName ?? 'клиент',
      orderId: context.orderId ?? 'не указан',
      productLink: context.productLink ?? context.url
    });

    const tabId = await getCurrentTabId();
    if (!tabId) {
      setError('Активная вкладка не найдена.');
      return;
    }

    const response = await chrome.tabs.sendMessage(tabId, {
      type: 'DROM_MANAGER_INSERT_TEMPLATE',
      payload: { text }
    });

    if (!response?.ok) {
      setError(response?.error ?? 'Не удалось вставить текст шаблона.');
      return;
    }

    setError('');
    setStatus('Текст шаблона вставлен. Проверьте и отправьте сообщение вручную.');
  }, [context]);

  const view = useMemo(() => {
    if (!context) {
      return <p className="mt-3 text-sm text-gray-600">Контекст страницы не определён.</p>;
    }

    return (
      <dl className="mt-3 space-y-1 text-sm">
        <div><dt className="font-medium">Тип страницы:</dt><dd>{context.pageType}</dd></div>
        <div><dt className="font-medium">Номер заказа:</dt><dd>{context.orderId ?? '—'}</dd></div>
        <div><dt className="font-medium">Клиент:</dt><dd>{context.customerName ?? '—'}</dd></div>
        <div><dt className="font-medium">Статус:</dt><dd>{context.statusText ?? '—'}</dd></div>
        <div><dt className="font-medium">Последнее сообщение:</dt><dd>{context.lastMessageText ?? '—'}</dd></div>
        <div><dt className="font-medium">Ссылка:</dt><dd className="break-all">{context.productLink ?? context.url}</dd></div>
      </dl>
    );
  }, [context]);

  return (
    <main className="p-4 text-gray-900">
      <h1 className="text-lg font-semibold">DromManager</h1>
      <p className="text-xs text-gray-600">Безопасный режим активен: автоотправка отключена.</p>
      <div className="mt-3 flex gap-2">
        <button className="rounded bg-gray-800 px-3 py-1 text-sm text-white" onClick={refreshContext} type="button">Обновить контекст</button>
        <button className="rounded bg-blue-700 px-3 py-1 text-sm text-white" onClick={insertTemplate} type="button">Вставить шаблон</button>
      </div>
      {view}
      {status ? <p className="mt-3 text-xs text-green-700">{status}</p> : null}
      {error ? <p className="mt-3 text-xs text-red-700">{error}</p> : null}
    </main>
  );
}

createRoot(document.getElementById('root') as HTMLElement).render(<SidePanelApp />);
