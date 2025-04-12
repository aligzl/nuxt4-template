// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  appId: '_app_',

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt'
  ],

  $development: {
    runtimeConfig: {
      public: {}
    }
  },
  devtools: { enabled: true },
  app: {
    rootId: 'app',
    buildAssetsDir: '_app',
    head: {
      title: 'Nuxt 4 Template',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },
  css: ['~/assets/css/main.css'],

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    globalName: '__APP_COLOR_MODE__'
  },

  runtimeConfig: {
    public: {
      siteName: 'Nuxt 4 Template'
    }
  },
  future: {
    compatibilityVersion: 4
  },
  compatibilityDate: '2025-04-06',
  nitro: {

    devProxy: {
      host: '127.0.0.1'
    },

    experimental: {
      openAPI: true
    }
  },

  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  telemetry: false,

  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
        commaDangle: 'never'
      }
    }
  }
})
