'use client'
import Link from 'next/link'
import { use } from 'react'

const T: any = {
  ar: { title:'منتجاتنا', sub:'10 منتجات طبيعية - كل منتج بصيغة خاصة', details:'عرض التفاصيل', best:'الأكثر طلباً' },
  tr: { title:'Ürünlerimiz', sub:'10 doğal ürün - hepsi özel formül', details:'Detayları Gör', best:'Çok Satan' },
  en: { title:'Our Products', sub:'10 natural products', details:'View Details', best:'Best Seller' },
  es: { title:'Nuestros Productos', sub:'10 productos naturales', details:'Ver Detalles', best:'Más Vendido' },
  ru: { title:'Наши Продукты', sub:'10 натуральных продуктов', details:'Подробнее', best:'Хит Продаж' },
}

const PRODUCTS = [
  { slug:'vitamin-c', tr:'C Vitamini Serumu', ar:'سيروم فيتامين سي', en:'Vitamin C Serum', img:'/products/vitamin-c/1.png', fallback:'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600', best:true },
  { slug:'retinol', tr:'Retinol Serumu', ar:'سيروم الريتينول', en:'Retinol Serum', img:'/products/retinol/1.png', fallback:'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600', best:false },
  { slug:'cleanser', tr:'Yüz Temizleme Jeli', ar:'غسول بشرة', en:'Face Cleanser', img:'/products/cleanser/1.png', fallback:'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600', best:false },
  { slug:'hyaluronic', tr:'Hyaluronik Asit Serumu', ar:'سيروم الهيالورونيك', en:'Hyaluronic Acid', img:'/products/hyaluronic/1.png', fallback:'https://images.unsplash.com/photo-1617897903246-719242758050?w=600', best:true },
  { slug:'niacinamide', tr:'Niacinamide Serumu', ar:'سيروم نياسيناميد', en:'Niacinamide Serum', img:'/products/niacinamide/1.png', fallback:'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600', best:false },
  { slug:'salicylic', tr:'Salisilik Asit Serumu', ar:'سيروم الساليسيليك أسيد', en:'Salicylic Acid Serum', img:'/products/salicylic/1.png', fallback:'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80', best:false },
  { slug:'moisturizer', tr:'Nemlendirici Krem', ar:'كريم ترطيب', en:'Moisturizing Cream', img:'/products/moisturizer/1.png', fallback:'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80', best:false },
  { slug:'sunscreen', tr:'Güneş Koruyucu SPF 50+', ar:'واقي شمسي SPF 50+', en:'Sunscreen SPF 50+', img:'/products/sunscreen/1.png', fallback:'https://images.unsplash.com/photo-1556228578-8d3f7d9d7f3a?w=400&q=80', best:true },
  { slug:'brightening', tr:'Aydınlatıcı Krem', ar:'كريم تفتيح', en:'Brightening Cream', img:'/products/brightening/1.png', fallback:'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&q=80', best:false },
  { slug:'cell-renewal', tr:'Hücre Yenileyici Serum', ar:'سيروم تجديد الخلايا', en:'Cell Renewal Serum', img:'/products/cell-renewal/1.png', fallback:'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80', best:false },
]

export default function ProductsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params)
  const t = T[lang] || T.en
  const isAr = lang === 'ar'

  const getName = (p:any) => {
    if(lang==='ar') return p.ar
    if(lang==='tr') return p.tr
    return p.en
  }

  return (
    <main dir={isAr?'rtl':'ltr'} className="bg-[#FDFCF8] min-h-screen">
      <header className="flex justify-between items-center px-8 py-4 bg-white border-b border-black/5 sticky top-0 z-20">
        <Link href={`/${lang}`} className="font-serif tracking- text- font-bold no-underline text-black">Éclat Dor</Link>
        <Link href={`/${lang}`} className="text- border border-black px-4 py-2 rounded-full no-underline text-black">{isAr?'الرئيسية':'Home'}</Link>
      </header>

      <div className="px-8 md:px-12 py-10">
        <h1 className="text-3xl font-bold">{t.title}</h1>
        <p className="text- opacity-50 mt-2">{t.sub}</p>
      </div>

      <div className="px-6 md:px-12 pb-20 max-w- mx-auto grid md:grid-cols-3 gap-6">
        {PRODUCTS.map(p=>(
          <Link key={p.slug} href={`/${lang}/products/${p.slug}`} className="bg-white border border-black rounded- overflow-hidden group hover:shadow-xl transition-all no-underline text-black">
            <div className="relative bg-[#FAF6F3] h- flex items-center justify-center p-6">
              {p.best && <div className="absolute top-3 left-3 bg-black text-white text- px-3 py-1 rounded-full z-10">{t.best}</div>}
              <img src={p.img} alt={getName(p)} className="w-full h-full object-contain group-hover:scale-105 transition duration-300" onError={(e)=>(e.target as HTMLImageElement).src=p.fallback} />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-">{getName(p)}</h3>
              <div className="flex justify-between items-center mt-3">
                <span className="text- opacity-40">Professional Formula</span>
                <span className="text- underline">{t.details} →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}