## Tech Stack

### Moniveo
- Next.js 16
- TypeScript
- Tailwind CSS

### Pokémon
- **Redux Toolkit**
- Next.js 16
- TypeScript
- Tailwind CSS
- shadcn/ui

### Movies
- **Tanstack Query**
- Next.js 16
- TypeScript
- Tailwind CSS
- shadcn/ui

### Cryptocurrency
- **Zustand**
- Next.js 16
- TypeScript
- Tailwind CSS
- shadcn/ui

## Dasar Pemilihan Tech Stack

1. **Redux Toolkit, Tanstack Query, Zustand** - Menggunakan 3 state management sebagai variasi dari setiap mini project.

2. **shadcn/ui** - Komponen UI yang dapat dikustomisasi karena masuk ke kode utama. Yang digunakan hanya komponen button, skeleton, dan table.

## Project Structure

```
src
├── app/
│   ├── cryptocurrency/
│   ├── moniveo/
│   ├── pokemon/
│   ├── movie/
│   │   ├── components/                       # React components
│   │   ├── models/                           # Interface and type definitions
│   │   ├── stores/                           # State management
│   │   ├── styles/                           # CSS module
│   │   └── page.tsx                          # Feature page
│   └── page.tsx                              # Root page
├── shared/
│   ├── components/                           # Shared components
│   │   └── ui/                               # shadcn/ui (reusable component)
│   ├── lib/                                  # Utility function
│   ├── hooks/                                # Custom react hooks
│   ├── stores/                               # Shared store (redux provider)
│   └── styles/                               # Global css
```

## Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
