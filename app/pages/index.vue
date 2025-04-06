<script setup lang="ts">
useHead({
  title: 'Home',
  meta: [
    { name: 'description', content: 'Home page' }
  ]
})
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold text-center mt-8 mb-4">
      Home
    </h1>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <h2 class="text-2xl font-bold">
          Welcome to the Home Page
        </h2>
      </div>
    </div>
  </div>
</template>
