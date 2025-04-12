<script setup lang="ts">
const colorMode = useColorMode()
const color = computed(() => (colorMode.value === 'dark' ? '#111827' : 'white'))

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color }
  ],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  htmlAttrs: {
    lang: 'en'
  },
  titleTemplate: (titleChunk?: string) => (titleChunk ? `${titleChunk}` : 'Nuxt 4 Template')
})

const title = 'Nuxt 4 Template'
const description = 'Nuxt 4 Template'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/og-image.png',
  ogUrl: 'https://dashboard.balloonops.com',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: '/og-image.png',
  twitterCard: 'summary'
})
</script>

<template>
  <div>
    <NuxtLoadingIndicator :height="1" />
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
input, textarea, select {
  font-size: 16px;
}

@media (min-width: 640px) {
  input, textarea, select {
    font-size: 0.875rem;
  }
}
</style>
