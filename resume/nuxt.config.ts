// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app:{
    head: {
      title: 'Resume — Wouter Haringsma',
    }
  },
  css: [
    '~/assets/css/main.css',
],
postcss: {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
},
})
