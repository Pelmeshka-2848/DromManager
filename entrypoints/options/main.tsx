import React from 'react';
import { createRoot } from 'react-dom/client';
import { defaultTemplates } from '../../features/templates/defaultTemplates';
import '../../ui/styles.css';

function OptionsApp() {
  return (
    <main className="p-6 text-sm text-gray-900">
      <h1 className="text-lg font-semibold">Настройки DromManager</h1>
      <h2 className="mt-4 font-medium">Шаблоны сообщений</h2>
      <ul className="mt-2 list-disc pl-5">
        {defaultTemplates.map((template) => (
          <li key={template.id}>{template.title}</li>
        ))}
      </ul>
    </main>
  );
}

createRoot(document.getElementById('root') as HTMLElement).render(<OptionsApp />);
