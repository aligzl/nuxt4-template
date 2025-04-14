// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

import { isDev } from './app/configs'
import { head } from './app/configs/head'

export default defineNuxtConfig({
  appId: '_app_',

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    !isDev && 'nuxt-security'
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
    head
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

  typescript: {
    strict: false
  },

  telemetry: false,

  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
        commaDangle: 'never'
      }
    }
  },

  icon: {
    clientBundle: {
      scan: true
    }
  },

  security: {
    headers: {
      crossOriginResourcePolicy: false,
      crossOriginEmbedderPolicy: isDev ? 'unsafe-none' : 'require-corp',
      contentSecurityPolicy: {

        'img-src': [
          '\'self\'',
          'data:',
          'blob:',
          'https://*.cloudinary.com',
          'https://*.githubusercontent.com',
          'https://*.googleusercontent.com',
          'https://*.jsdelivr.net',
          'https://*.balloonops.com',
          'https://*.cdnfonts.com'
        ]
      }
    }
  }
})
