import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  manifest: {
    action: {
      default_title: 'ChatGPT-Writer',
    },
    web_accessible_resources: [
      {
        matches: ['*://*.google.com/*',"https://*.linkedin.com/*"],
        resources: ['icon/*.png'],
      },
    ],
    // content_scripts: [
    //   {
    //     matches: ['https://www.linkedin.com/messaging/*'],
    //     // js: ['entrypoints/contentScript/contentScript.ts'],
    //     // js: ['entrypoints/contentScript/contentScript.js'],
    //   },
    // ],
  },
});
