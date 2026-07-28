import Link from 'next/link'

export default async function BlogPost({ params }: { params: Promise<{ lang: string, slug: string }> }) {
  const { lang, slug } = await params
  const isAr = lang === 'ar'

  // عنوان جميل من الـ slug
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())

  return (
    <main dir={isAr? 'rtl' : 'ltr'} className="bg-[#FDFCF8] min-h-screen">
      <header className="flex justify-between items-center px-8 py-4 bg-white border-b border-black/5 sticky top-0 z-20">
        <Link href={`/${lang}`} className="font-serif tracking- text- font-bold no-underline text-black">
          ÉCLAT DOR
        </Link>
        <Link href={`/${lang}/blog`} className="text- border border-black px-4 py-2 rounded-full no-underline text-black">
          {isAr? 'المدونة' : 'Blog'}
        </Link>
      </header>

      <div className="max-w- mx-auto px-6 md:px-12 py-16">
        <div className="text- tracking- text-[#C9A86A] font-semibold uppercase">
          {isAr? 'مقال تجميلي' : 'Beauty Article'} • Éclat Dor
        </div>

        <h1 className="text- md:text- font-bold mt-4 leading-[1.1] capitalize">
          {title}
        </h1>

        <div className="flex items-center gap-3 mt-6 text- opacity-50">
          <span>{isAr? '5 دقائق قراءة' : '5 min read'}</span>
          <span>•</span>
          <span>{new Date().toLocaleDateString(isAr? 'ar-EG' : 'en-US')}</span>
        </div>

        <div className="bg-[#FAF6F3] border border-black/5 rounded- h- flex items-center justify-center mt-10">
          <span className="text- opacity-40">🖼️ {isAr? 'صورة المقال قريباً' : 'Cover image soon'}</span>
        </div>

        <div className="mt-10 space-y-5 text- leading-8 opacity-80">
          <p>
            {isAr
             ? `هون رح نحط محتوى المقال الكامل عن ${slug}.`
              : `Full content for ${slug} will be here.`}
          </p>
          <p className="bg-white border border-black/5 rounded- p-6 text-">
            {isAr
             ? '💡 هاد مكان تجريبي - فيك تربطو مع Sanity / Contentful او تحط محتوى ثابت هون.'
              : '💡 This is placeholder - you can connect it to Sanity / Contentful or add static content here.'}
          </p>
        </div>

        <div className="flex gap-3 mt-12">
          <Link href={`/${lang}/products`} className="flex-1 bg-black text-white text-center py-4 rounded-full text- font-bold no-underline">
            {isAr? 'تسوق منتجاتنا →' : 'Shop Products →'}
          </Link>
          <Link href={`/${lang}/blog`} className="flex-1 border border-black text-center py-4 rounded-full text- no-underline text-black">
            {isAr? 'كل المقالات' : 'All Articles'}
          </Link>
        </div>
      </div>
    </main>
  )
}