import { defineContentScript } from 'wxt/sandbox';
import { displayAI_Icon } from '@/src/utils/method';

export default defineContentScript({
  matches: ["https://www.linkedin.com/messaging/*"],
  main() {
      
      
      const observer = new MutationObserver(() => {
          
          const message_input_field = document.querySelector(".msg-form__contenteditable");
          
          if (message_input_field) {
              displayAI_Icon(message_input_field);
              observer.disconnect();
          }
      })
      observer.observe(document.body, { childList: true, subtree: true });
  },
});

// Listen for messages from the extension
chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.from === "insert-btn") {
      const messageInputField = document.querySelector(".msg-form__contenteditable") as HTMLElement;
      if (messageInputField) {
          messageInputField.focus();

          // Use insertText command for contenteditable elements
          document.execCommand('insertText', false, message.text);
          sendResponse({ status: "success" });
      } else {
          sendResponse({ status: "failed", reason: "Message input field not found" });
      }
  }
});

// Inject Tailwind CSS
function injectTailwindCSS() {
  const tailwindLink = document.createElement('link');
  tailwindLink.rel = 'stylesheet';
  tailwindLink.href = 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';
  document.head.appendChild(tailwindLink);
}

injectTailwindCSS();




