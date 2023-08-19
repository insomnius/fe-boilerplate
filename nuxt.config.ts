// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true },
  build: {
    templates: [

    ]
  },
  css: [
    '@/assets/css/main.css',
  ],
  app: {
    head: {
      title: 'boilerplate - your beloved FE template',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'http://localhost:3000/favicon.ico' }
      ]
    },
  },
})
