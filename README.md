# QVault

QVault is a Next.js + Fumadocs site for organizing engineering past questions by semester, subject, and chapter.

## Run

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
pnpm dev
pnpm build
pnpm start
pnpm types:check
```

## Structure

- `app/(home)`: landing page
- `app/docs`: docs layout and pages
- `content/docs`: MDX content
- `lib/source.ts`: Fumadocs content source
- `source.config.ts`: MDX collection config
