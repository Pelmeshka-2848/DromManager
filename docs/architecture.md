# Архитектура DromManager

## Цели первого этапа

- Безопасная надстройка над интерфейсом Drom без обхода ограничений.
- Safe mode по умолчанию: только подготовка текста к отправке.
- Изоляция доменной логики от UI и интеграции с DOM.

## Структура каталогов

- `entrypoints/background.ts` — фоновые события и координация.
- `entrypoints/content.ts` — интеграция с DOM Drom, детектор страниц, извлечение контекста, безопасная вставка текста.
- `entrypoints/sidepanel/` — панель оператора, отображение контекста, запуск безопасных действий.
- `entrypoints/options/` — настройки и шаблоны.
- `features/drom/` — Drom-специфичная логика, включая `selectors/`, `context/`, `actions/`.
- `features/templates/` — шаблоны и template engine.
- `features/broadcasts/` — модели и сценарии сервисных рассылок.
- `features/storage/` — настройки и persistence слой.
- `features/messaging/` — протоколы обмена сообщениями между entrypoints.
- `shared/` — общие типы и утилиты.
- `ui/` — стили и переиспользуемые визуальные компоненты.
- `docs/` — архитектурные и процессные документы.

## Поток данных Phase 1

1. Drom page открывается в браузере.
2. Content script извлекает контекст текущей страницы (`extractPageContext`).
3. Side panel запрашивает контекст через messaging (`chrome.tabs.sendMessage`).
4. Side panel отображает контекст и позволяет нажать «Вставить шаблон».
5. Side panel рендерит текст шаблона через `templateEngine` и отправляет команду вставки.
6. Content script получает insert command и вызывает `insertMessageText`.
7. `insertMessageText` только вставляет текст и диспатчит `input/change` события.
8. Отправка сообщения остаётся ручным действием пользователя.
