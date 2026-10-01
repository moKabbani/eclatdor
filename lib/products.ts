import type { Locale } from './i18n'
import { productCopy, type ProductCopy } from './product-copy'

export type Product = {
  slug: string
  name: Record<Locale, string>
  /** Ingredient list as printed on the label (same in every language). */
  ingredients: string
  /** Files in /public. Add more photos to a product by listing them here. */
  images: string[]
  best?: boolean
}

export const products: Product[] = [
  {
    slug: 'vitamin-c',
    name: { ar: 'سيروم فيتامين سي', tr: 'C Vitamini Serumu', en: 'Vitamin C Serum', es: 'Sérum de vitamina C', ru: 'Сыворотка с витамином C' },
    ingredients: 'Vitamin C 5%, Ferulic Acid, Vitamin E, Hyaluronic Acid',
    images: ['/products/vitamin-c/pack.jpg', ...[1, 2, 3, 4, 5].map((n) => `/products/vitamin-c/${n}.png`)],
    best: true,
  },
  {
    slug: 'retinol',
    name: { ar: 'سيروم الريتينول', tr: 'Retinol Serumu', en: 'Retinol Serum', es: 'Sérum de retinol', ru: 'Сыворотка с ретинолом' },
    ingredients: 'Retinol 0.2%, Niacinamide 5%, Hyaluronic Acid, Vitamin E',
    images: ['/products/retinol/pack.jpg', ...[1, 2, 3, 4, 5, 6].map((n) => `/products/retinol/${n}.png`)],
  },
  {
    slug: 'cleanser',
    name: { ar: 'غسول الوجه', tr: 'Yüz Temizleyici', en: 'Facial Cleanser', es: 'Limpiador facial', ru: 'Средство для умывания' },
    ingredients: 'Niacinamide, Aloe Vera Extract, Hyaluronic Acid, Panthenol',
    images: ['/products/cleanser/pack.jpg'],
  },
  {
    slug: 'hyaluronic',
    name: { ar: 'سيروم الهيالورونيك', tr: 'Hyaluronik Asit Serumu', en: 'Hyaluronic Acid Serum', es: 'Sérum de ácido hialurónico', ru: 'Сыворотка с гиалуроновой кислотой' },
    ingredients: 'Hyaluronic Acid 2%, Vitamin B5, Allantoin',
    images: ['/products/hyaluronic/pack.jpg', ...[1, 2, 3, 4, 5, 6].map((n) => `/products/hyaluronic/${n}.png`)],
    best: true,
  },
  {
    slug: 'niacinamide',
    name: { ar: 'سيروم نياسيناميد', tr: 'Niacinamide Serumu', en: 'Niacinamide Serum', es: 'Sérum de niacinamida', ru: 'Сыворотка с ниацинамидом' },
    ingredients: 'Niacinamide 5%, Vitamin B5',
    images: ['/products/niacinamide/pack.jpg'],
  },
  {
    slug: 'salicylic',
    name: { ar: 'سيروم الساليسيليك أسيد', tr: 'Salisilik Asit Serumu', en: 'Salicylic Acid Serum', es: 'Sérum de ácido salicílico', ru: 'Сыворотка с салициловой кислотой' },
    ingredients: 'Salicylic Acid 2%, Niacinamide 4%, Zinc PCA, Aloe Vera',
    images: ['/products/salicylic/pack.jpg', ...[1, 2, 3, 4].map((n) => `/products/salicylic/${n}.png`)],
  },
  {
    slug: 'moisturizer',
    name: { ar: 'كريم ترطيب', tr: 'Nemlendirici Krem', en: 'Hydrating Cream', es: 'Crema hidratante', ru: 'Увлажняющий крем' },
    ingredients: 'Vitamin B5 2%',
    images: ['/products/moisturizer/pack.jpg'],
  },
  {
    slug: 'sunscreen',
    name: { ar: 'واقي شمسي SPF 50', tr: 'Güneş Koruyucu SPF 50', en: 'Sunscreen SPF 50', es: 'Protector solar SPF 50', ru: 'Солнцезащитный крем SPF 50' },
    ingredients: 'UVA/UVB Filters, Vitamin E, Aloe Vera',
    images: ['/products/sunscreen/1.jpg'],
    best: true,
  },
  {
    slug: 'brightening',
    name: { ar: 'كريم تفتيح', tr: 'Aydınlatıcı Krem', en: 'Brightening Cream', es: 'Crema iluminadora', ru: 'Осветляющий крем' },
    ingredients: 'Alpha Arbutin, SPF 30',
    images: ['/products/brightening/pack.jpg'],
  },
  {
    slug: 'cell-renewal',
    name: { ar: 'سيروم تجديد الخلايا', tr: 'Hücre Yenileyici Serum', en: 'Cell Renewal Serum', es: 'Sérum renovador celular', ru: 'Сыворотка для обновления клеток' },
    ingredients: 'Salmon Oil',
    images: ['/products/cell-renewal/pack.jpg'],
  },
]

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug)
}

export function getCopy(slug: string, lang: Locale): ProductCopy {
  return productCopy[slug][lang]
}

/** Blog / care-guide articles shown on the home page and /blog. */
export const articles = [
  { slug: 'morning-routine', key: 'a1', cover: '/products/background/3.jpg' },
  { slug: 'night-routine', key: 'a2', cover: '/products/background/5.jpg' },
  { slug: 'acne-treatment', key: 'a3', cover: '/products/background/2.jpg' },
  { slug: 'melasma-treatment', key: 'a4', cover: '/products/background/4.jpg' },
  { slug: 'sensitive-skin', key: 'a5', cover: '/products/background/3.jpg' },
  { slug: 'how-to-use', key: 'a6', cover: '/products/background/5.jpg' },
] as const

export type ArticleKey = (typeof articles)[number]['key']
