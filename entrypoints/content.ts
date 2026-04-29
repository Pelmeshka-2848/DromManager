import { defineContentScript } from 'wxt/utils/define-content-script';
import { insertMessageText } from '../features/drom/actions/insertMessageText';
import { extractPageContext } from '../features/drom/context/extractPageContext';

interface GetContextMessage {
  type: 'DROM_MANAGER_GET_CONTEXT';
}

interface InsertTemplateMessage {
  type: 'DROM_MANAGER_INSERT_TEMPLATE';
  payload: { text: string };
}

type ContentMessage = GetContextMessage | InsertTemplateMessage;

export default defineContentScript({
  matches: ['*://*.drom.ru/*'],
  runAt: 'document_idle',
  main: () => {
    chrome.runtime.onMessage.addListener((message: ContentMessage, _sender, sendResponse) => {
      if (message.type === 'DROM_MANAGER_GET_CONTEXT') {
        sendResponse({ ok: true, context: extractPageContext() });
        return true;
      }

      if (message.type === 'DROM_MANAGER_INSERT_TEMPLATE') {
        const result = insertMessageText(message.payload.text);
        sendResponse(result);
        return true;
      }

      return false;
    });
  }
});
