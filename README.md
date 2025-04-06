# Nuxt 4 Template

A modern Nuxt.js template with Nuxt 4 compatibility features, Tailwind CSS 4 integration, nuxt eslint module, and custom fetch implementation. Includes dark/light mode support, responsive design, and full TypeScript integration for optimal developer experience

## Features

- 🚀 Nuxt 3 with Nuxt 4 compatibility
- 🎨 Tailwind CSS 4
- 🔄 Custom fetch implementation
- 🌓 Dark/Light mode support
- 📱 Responsive design
- 🔒 TypeScript support

## Built With

[![Nuxt][nuxt-shield]][nuxt-url]
[![Vue][vue-shield]][vue-url]
[![Tailwind CSS][tailwind-shield]][tailwind-url]
[![TypeScript][typescript-shield]][typescript-url]
[![ESLint][eslint-shield]][eslint-url]
[![PNPM][pnpm-shield]][pnpm-url]

[nuxt-shield]: https://img.shields.io/badge/Nuxt-3.16+-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white
[nuxt-url]: https://nuxt.com/
[vue-shield]: https://img.shields.io/badge/Vue-3.5+-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white
[vue-url]: https://vuejs.org/
[tailwind-shield]: https://img.shields.io/badge/Tailwind-4.1+-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white
[tailwind-url]: https://tailwindcss.com/
[typescript-shield]: https://img.shields.io/badge/TypeScript-Latest-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org/
[eslint-shield]: https://img.shields.io/badge/ESLint-9.0+-4B32C3?style=for-the-badge&logo=eslint&logoColor=white
[eslint-url]: https://eslint.org/
[pnpm-shield]: https://img.shields.io/badge/PNPM-10.7+-F69220?style=for-the-badge&logo=pnpm&logoColor=white
[pnpm-url]: https://pnpm.io/

## Tech Stack

<p align="center">
  <a href="https://nuxt.com/" target="_blank" rel="noreferrer">
    <img src="https://nuxt.com/assets/design-kit/icon-green.svg" width="36" height="36" alt="Nuxt" />
  </a>
  <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
    <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" width="36" height="36" alt="Vue" />
  </a>
  <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" width="36" height="36" alt="Tailwind CSS" />
  </a>
  <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" width="36" height="36" alt="TypeScript" />
  </a>
  <a href="https://eslint.org/" target="_blank" rel="noreferrer">
    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/ESLint_logo.svg" width="36" height="36" alt="ESLint" />
  </a>
  <a href="https://nuxt.com/modules/color-mode" target="_blank" rel="noreferrer">
    <img src="https://api.nuxtjs.org/api/ipx/s_80,f_webp/gh/nuxt/modules/main/icons/color-mode.png" width="36" height="36" alt="Color Mode" />
  </a>
  <a href="https://image.nuxt.com/" target="_blank" rel="noreferrer">
    <img src="https://api.nuxtjs.org/api/ipx/s_80,f_webp/gh/nuxt/modules/main/icons/nuxt.svg" width="36" height="36" alt="Nuxt Image" />
  </a>
  <a href="https://pnpm.io/" target="_blank" rel="noreferrer">
    <img src="https://pnpm.io/img/pnpm-no-name-with-frame.svg" width="36" height="36" alt="PNPM" />
  </a>
</p>

### Core Technologies

- [Nuxt 3](https://nuxt.com/) (with Nuxt 4 compatibility)
- [Vue 3](https://vuejs.org/) (v3.5+)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vue Router 4](https://router.vuejs.org/)

### Nuxt Modules & Plugins

- [@nuxtjs/color-mode](https://nuxt.com/modules/color-mode) - Dark/Light mode support
- [@nuxt/image](https://nuxt.com/modules/image) - Image optimization
- [@nuxt/icon](https://nuxt.com/modules/icon) - Icon support
- [@nuxt/fonts](https://nuxt.com/modules/fonts) - Font optimization
- [@nuxt/eslint](https://nuxt.com/modules/eslint) - ESLint integration
- [@nuxt/scripts](https://nuxt.com/modules/scripts) - Custom script handling

## Project Structure

```
├── app/
│   ├── components/    # UI components
│   ├── config/        # Frontend configurations
│   ├── pages/         # Application pages
│   ├── types/         # TypeScript types for frontend
│   └── utils/         # Utility functions for client
├── server/
│   ├── api/           # API endpoints
│   ├── configs/       # Server configurations
│   ├── types/         # TypeScript types for server
│   └── utils/         # Utility functions for server
└── shared/            # Shared types and utilities
```

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## Coding Standards

- **Components** - All components should be reusable, developer-friendly, and kept under 600-700 lines.
- **CSS** - Prefer Tailwind utility classes over custom CSS. When needed, use modular CSS.
- **TypeScript** - Full TypeScript support for better IDE autocompletion and type safety.
- **State Management** - Use built-in useState from Nuxt for state management.

## Browser Support

- Latest versions of Chrome, Firefox, Safari, and Edge

## License

[MIT](LICENSE)
