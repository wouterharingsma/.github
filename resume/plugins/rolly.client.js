import rolly from 'rolly.js';

export default defineNuxtPlugin(nuxtApp => {
  if (process.client) {
    nuxtApp.vueApp.mixin({
      mounted() {
        const r = rolly({
          view: document.querySelector('.app'),
          native: true,
          // other options
        });
        r.init();
      }
    });
  }
});
