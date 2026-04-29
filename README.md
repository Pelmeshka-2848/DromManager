# DromManager

DromManager — расширение браузера (Chrome-first, Manifest V3) для безопасной автоматизации рабочих сценариев в интерфейсе Drom.

## Текущий статус

На данном этапе реализован минимальный технический каркас:
- базовая архитектура WXT + React + TypeScript;
- content script с определением типа страницы Drom;
- side panel и options page в формате заглушек;
- шаблоны сообщений и движок подстановки переменных;
- safe mode по умолчанию.

## Стек

- WXT
- TypeScript
- React
- Manifest V3
- Zustand
- Zod
- Tailwind CSS
- Vitest

## Скрипты

- `pnpm dev`
- `pnpm build`
- `pnpm typecheck`
- `pnpm lint`
- `pnpm test`
