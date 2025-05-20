// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Bill Organizer', // default fallback title
      meta: [
        { name: 'description', content: 'Bills organizer with an annual, monthly calendars for tracking' }
      ],
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      ]
    }
  },
  modules: ['@nuxt/image', '@nuxtjs/tailwindcss']
})