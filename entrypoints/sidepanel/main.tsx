import React from 'react';
import { createRoot } from 'react-dom/client';
import '../../ui/styles.css';

function SidePanelApp() {
  return (
    <main className="p-4 text-sm text-gray-900">
      <h1 className="text-lg font-semibold">DromManager</h1>
      <p className="mt-3">Текущий заказ: не определён</p>
      <p>Текущий чат: не определён</p>
      <p className="mt-4 text-xs text-gray-600">Безопасный режим включён: сообщения только подготавливаются для проверки пользователем.</p>
    </main>
  );
}

createRoot(document.getElementById('root') as HTMLElement).render(<SidePanelApp />);
