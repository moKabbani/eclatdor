# Éclat d'or website

Next.js 16 · React 19 · Tailwind 4. Five languages (Turkish default, Arabic, English, Spanish, Russian), light and dark mode.

## Run it

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

> **Before launch:** `lib/site.ts` currently has placeholder phone, email and address values. Replace them with the real business details.

## Where to change things

| What | File |
| --- | --- |
| Phone, email, address, WhatsApp number | `lib/site.ts` |
| Menu, buttons, page text (all 5 languages) | `lib/dict.ts` |
| Products: names, photos, ingredients | `lib/products.ts` |
| Product descriptions and how-to-use text | `lib/product-copy.ts` |
| Colours, fonts, spacing, dark-mode values | `app/globals.css` (top of file) |
| Catalog download | drop a file named `catalog.pdf` into `public/` and the button appears |

To add photos to a product, put the files in `public/products/<slug>/` and list them in `lib/products.ts`.

## Environment variables

- `INSTAGRAM_ACCESS_TOKEN` – optional. Without it the Instagram strip on the home page hides itself. Tokens expire every 60 days.
- `NEXT_PUBLIC_SITE_URL` – the public address, used for the sitemap and link previews.

## Private-label form

The form posts to formsubmit.co. The first submission sends a confirmation email to `info@eclatdor.me`; click the link in it once to activate the form.
