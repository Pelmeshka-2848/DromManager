import { defineConfig } from 'wxt';

export default defineConfig({
  srcDir: '.',
  manifest: {
    name: 'DromManager',
    description: 'Расширение для безопасной автоматизации рабочих процессов на Drom.',
    version: '0.1.0',
    permissions: ['storage', 'sidePanel'],
    host_permissions: ['*://*.drom.ru/*'],
    side_panel: {
      default_path: 'sidepanel.html'
    },
    options_page: 'options.html'
  }
});
