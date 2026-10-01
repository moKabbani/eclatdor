import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Gallery from '@/components/Gallery'
import ProductTile, { ProductPhoto } from '@/components/ProductTile'
import { ArrowIcon, CheckIcon, ChatIcon } from '@/components/icons'
import { getDict } from '@/lib/dict'
import { locales } from '@/lib/i18n'
import { getCopy, getProduct, products } from '@/lib/products'
import { resolveLang } from '@/lib/params'
import { pageMetadata } from '@/lib/seo'
import { site, waLink } from '@/lib/site'

type Props = { params: Promise<{ lang: string; slug: string }> }

export function generateStaticParams() {
  return locales.flatMap((lang) => products.map((p) => ({ lang, slug: p.slug })))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const lang = await resolveLang(params)
  const product = getProduct(slug)
  if (!product) return {}
  return pageMetadata(lang, `/products/${slug}`, product.name[lang], getCopy(slug, lang).subtitle)
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const lang = await resolveLang(params)
  const product = getProduct(slug)
  if (!product) notFound()

  const d = getDict(lang)
  const copy = getCopy(slug, lang)
  const name = product.name[lang]
  const related = products.filter((p) => p.slug !== slug).slice(0, 3)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description: copy.subtitle,
    brand: { '@type': 'Brand', name: site.name },
    ...(product.images[0] ? { image: `${site.url}${product.images[0]}` } : {}),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="wrap" style={{ paddingTop: '1.5rem' }}>
        <Link href={`/${lang}/products`} className="muted inline-flex items-center gap-2 text-sm hover:underline">
          <ArrowIcon style={{ transform: lang === 'ar' ? 'none' : 'scaleX(-1)' }} />
          {d.common.backToProducts}
        </Link>
      </div>

      <section className="wrap grid gap-10 md:grid-cols-2 md:gap-16" style={{ paddingBlock: '2rem clamp(3rem, 7vw, 5.5rem)' }}>
        <div className="md:sticky md:top-24 md:self-start">
          {product.images.length > 0 ? (
            <Gallery images={product.images} alt={name} />
          ) : (
            <div className="tile" style={{ borderRadius: 26 }}>
              <ProductPhoto product={product} lang={lang} d={d} sizes="(min-width: 900px) 540px, 100vw" />
            </div>
          )}
        </div>

        <div>
          <p className="accent font-medium">{site.name}</p>
          <h1 className="h-display mt-3" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)' }}>
            {name}
          </h1>
          <p className="lead mt-4">{copy.subtitle}</p>

          <h2 className="h-card mt-10">{d.product.about}</h2>
          <ul className="check-list mt-4">
            {copy.highlights.map((h) => (
              <li key={h}>
                <CheckIcon />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          {copy.science && (
            <div className="panel mt-8">
              <h2 className="h-card">{d.product.science}</h2>
              <p className="muted mt-3">{copy.science.intro}</p>
              <ul className="check-list mt-5">
                {copy.science.points.map((p) => (
                  <li key={p}>
                    <CheckIcon />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="panel mt-6">
            <h2 className="h-card">{d.product.howTo}</h2>
            <p className="mt-3">{copy.howTo}</p>
            {copy.tip && (
              <p className="muted mt-4 border-t border-line pt-4 text-sm">
                <strong className="text-ink">{d.product.tip}: </strong>
                {copy.tip}
              </p>
            )}
          </div>

          <div className="panel mt-6">
            <h2 className="h-card">{d.product.ingredients}</h2>
            <p className="muted mt-3" dir="ltr" style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}>
              {product.ingredients}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={waLink(d.common.orderMsg.replace('{name}', name))}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa"
            >
              <ChatIcon width={20} height={20} />
              {d.common.orderWhatsapp}
            </a>
            <span className="muted text-sm">{d.common.shipping}</span>
          </div>
        </div>
      </section>

      <section className="section-tight wrap" style={{ borderTop: '1px solid var(--line)' }}>
        <h2 className="h-section">{d.product.related}</h2>
        <div className="product-grid mt-8">
          {related.map((p) => (
            <ProductTile key={p.slug} product={p} lang={lang} d={d} />
          ))}
        </div>
      </section>
    </>
  )
}
