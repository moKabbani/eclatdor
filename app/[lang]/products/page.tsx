import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import ProductTile from '@/components/ProductTile'
import { fmt, getDict } from '@/lib/dict'
import { products } from '@/lib/products'
import { resolveLang, type LangParams } from '@/lib/params'
import { pageMetadata } from '@/lib/seo'

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await resolveLang(params)
  return pageMetadata(lang, '/products', getDict(lang).products.title)
}

export default async function ProductsPage({ params }: LangParams) {
  const lang = await resolveLang(params)
  const d = getDict(lang)
  return (
    <>
      <PageHeader title={d.products.title} text={fmt(d.products.sub, { n: products.length })} />
      <section className="wrap" style={{ paddingBottom: 'clamp(3.5rem, 8vw, 6rem)' }}>
        <div className="product-grid">
          {products.map((p) => (
            <ProductTile key={p.slug} product={p} lang={lang} d={d} />
          ))}
        </div>
      </section>
    </>
  )
}
