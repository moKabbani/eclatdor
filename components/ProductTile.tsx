import Image from 'next/image'
import Link from 'next/link'
import type { Locale } from '@/lib/i18n'
import type { Dict } from '@/lib/dict'
import type { Product } from '@/lib/products'
import Logo from './Logo'

/** Photo area for a product. Shows a branded placeholder until the product has photos. */
export function ProductPhoto({
  product,
  lang,
  d,
  sizes,
  index = 0,
  preload = false,
}: {
  product: Product
  lang: Locale
  d: Dict
  sizes: string
  index?: number
  preload?: boolean
}) {
  const src = product.images[index]
  if (!src) {
    return (
      <div className="placeholder-tile">
        <Logo height={44} />
        <span>{d.common.photoSoon}</span>
      </div>
    )
  }
  return <Image src={src} alt={product.name[lang]} fill sizes={sizes} preload={preload} />
}

export default function ProductTile({
  product,
  lang,
  d,
}: {
  product: Product
  lang: Locale
  d: Dict
}) {
  return (
    <Link href={`/${lang}/products/${product.slug}`} className="card-link">
      <div className="tile">
        {product.best && <span className="badge">{d.common.bestSeller}</span>}
        <ProductPhoto
          product={product}
          lang={lang}
          d={d}
          sizes="(min-width: 1200px) 280px, (min-width: 640px) 33vw, 90vw"
        />
      </div>
      <div className="mt-4">
        <h3 className="card-name h-card">{product.name[lang]}</h3>
        <p className="muted mt-1 text-sm">{d.products.formula}</p>
      </div>
    </Link>
  )
}
