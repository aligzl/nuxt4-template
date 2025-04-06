# Nuxt 4 Template

A modern Nuxt.js template with Nuxt 4 compatibility features, Tailwind CSS 4, and custom fetch implementation.

## Features

- 🚀 Nuxt 3 with Nuxt 4 compatibility
- 🎨 Tailwind CSS 4
- 🔄 Custom fetch implementation
- 🌓 Dark/Light mode support
- 📱 Responsive design
- 🔒 TypeScript support

## Tech Stack

- [Nuxt 3](https://nuxt.com/) (with Nuxt 4 compatibility)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

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
