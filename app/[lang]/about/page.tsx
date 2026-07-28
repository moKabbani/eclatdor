'use client'
import Link from 'next/link'
import { use } from 'react'

const T: any = {
  ar: {
    about:'من نحن', trusted:'علامة تجارية موثوقة في\nالعناية المهنية بالبشرة', intro:'نحن واحدة من العلامات التجارية الرائدة في تركيا في مجال منتجات العناية المهنية بالبشرة. يتم تطوير منتجاتنا المفضلة في العيادات ومراكز التجميل بناءً على الأبحاث العلمية وتوصيات أطباء الجلدية الخبراء.',
    story:'قصتنا', points:'نقطة بيع', countries:'دول', certified:'معتمد', best:'امنح بشرتك الأفضل', ship:'شحن يومي إلى دمشق، حلب، إسطنبول، غازي عنتاب', discover:'اكتشف المنتجات →',
    values:'قيمنا', v1t:'النهج العلمي', v1d:'جميع تركيباتنا مختبرة من قبل أطباء الجلدية ومدعومة بدراسات سريرية.',
    v2t:'مكونات عشبية', v2d:'نجمع بين المكونات العشبية الفعالة والتركيبات العلمية لتقديم أنسب الحلول لبشرتك.',
    v3t:'ضمان الجودة', v3d:'نضمن جودة متسقة في كل منتج من خلال التصنيع وفقًا لمعايير GMP.',
    v4t:'حلول مهنية', v4d:'تركيبات مهنية مفضلة في العيادات ومراكز التجميل.',
    contactT:'للتواصل والاستفسار', contactD:'شحن يومي لكل المدن السورية والتركية', home:'الرئيسية',
  },
  tr: {
    about:'HAKKIMIZDA', trusted:'Profesyonel Cilt Bakımında\nGüvenilir Marka', intro:'Türkiye\'de profesyonel cilt bakımı alanında önde gelen markalardan biriyiz. Kliniklerde ve güzellik merkezlerinde en çok tercih edilen ürünlerimiz, bilimsel araştırmalara ve uzman dermatolog tavsiyelerine dayanarak geliştirilmektedir.',
    story:'Hikayemiz', points:'Satış Noktası', countries:'Ülke', certified:'Sertifikalı', best:'Cildine En İyisini Ver', ship:'Şam, Halep, İstanbul, Gaziantep\'e günlük kargo', discover:'Ürünleri Keşfet →',
    values:'Değerlerimiz', v1t:'Bilimsel Yaklaşım', v1d:'Tüm formüllerimiz dermatolojik olarak test edilmiş ve klinik çalışmalarla desteklenmiştir.',
    v2t:'Bitkisel İçerikler', v2d:'En uygun çözümleri sunmak için etkili bitkisel içerikleri bilimsel formüllerle birleştiriyoruz.',
    v3t:'Kalite Güvencesi', v3d:'GMP standartlarına göre üretim yaparak her üründe tutarlı kalite sağlıyoruz.',
    v4t:'Profesyonel Çözümler', v4d:'Kliniklerde ve güzellik merkezlerinde tercih edilen profesyonel formüller.',
    contactT:'İletişim ve Bilgi', contactD:'Tüm Suriye ve Türkiye şehirlerine günlük kargo', home:'Ana Sayfa',
  },
  en: {
    about:'ABOUT US', trusted:'Trusted Brand in\nProfessional Skin Care', intro:'We are one of the leading brands in Turkey in professional skin care. Our favorite products in clinics and beauty centers are developed based on scientific research and expert dermatologist recommendations.',
    story:'Our Story', points:'Points', countries:'Countries', certified:'Certified', best:'Give Your Skin The Best', ship:'Daily shipping to Damascus, Aleppo, Istanbul, Gaziantep', discover:'Discover Products →',
    values:'Our Values', v1t:'Scientific Approach', v1d:'All our formulas are dermatologically tested and backed by clinical studies.',
    v2t:'Herbal Ingredients', v2d:'We combine effective herbal ingredients with scientific formulas to provide the best solutions.',
    v3t:'Quality Assurance', v3d:'We ensure consistent quality in every product through GMP standard manufacturing.',
    v4t:'Professional Solutions', v4d:'Professional formulations preferred in clinics and beauty centers.',
    contactT:'Contact Us', contactD:'Daily shipping to all Syrian and Turkish cities', home:'Home',
  },
  es: {
    about:'NOSOTROS', trusted:'Marca de Confianza en\nCuidado Profesional', intro:'Somos una de las marcas líderes en Turquía en cuidado profesional de la piel. Nuestros productos favoritos en clínicas y centros de belleza se desarrollan en base a investigaciones científicas.',
    story:'Nuestra Historia', points:'Puntos', countries:'Países', certified:'Certificado', best:'Dale a tu piel lo mejor', ship:'Envío diario a Damasco, Alepo, Estambul', discover:'Descubrir →',
    values:'Nuestros Valores', v1t:'Enfoque Científico', v1d:'Todas nuestras fórmulas están probadas dermatológicamente y respaldadas por estudios clínicos.',
    v2t:'Ingredientes Herbales', v2d:'Combinamos ingredientes herbales efectivos con fórmulas científicas.',
    v3t:'Garantía de Calidad', v3d:'Garantizamos calidad constante en cada producto bajo estándares GMP.',
    v4t:'Soluciones Profesionales', v4d:'Formulaciones profesionales preferidas en clínicas y centros de belleza.',
    contactT:'Contacto', contactD:'Envío diario a todas las ciudades', home:'Inicio',
  },
  ru: {
    about:'О НАС', trusted:'Надежный бренд\nпрофессионального ухода', intro:'Мы являемся одним из ведущих брендов в Турции в области профессионального ухода за кожей. Наши продукты разрабатываются на основе научных исследований и рекомендаций дерматологов.',
    story:'Наша История', points:'Точек', countries:'Стран', certified:'Сертиф', best:'Подари коже лучшее', ship:'Ежедневная доставка в Дамаск, Алеппо, Стамбул', discover:'Продукты →',
    values:'Наши Ценности', v1t:'Научный подход', v1d:'Все наши формулы дерматологически протестированы и подкреплены клиническими исследованиями.',
    v2t:'Травяные ингредиенты', v2d:'Мы сочетаем эффективные травяные ингредиенты с научными формулами.',
    v3t:'Гарантия качества', v3d:'Мы обеспечиваем стабильное качество каждого продукта по стандартам GMP.',
    v4t:'Проф. решения', v4d:'Профессиональные формулы, предпочитаемые в клиниках и салонах красоты.',
    contactT:'Связаться с нами', contactD:'Ежедневная доставка по всем городам', home:'Главная',
  },
}

export default function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params)
  const t = T[lang] || T.en
  const isAr = lang === 'ar'

  return (
    <main dir={isAr? 'rtl' : 'ltr'} className="bg-[#FDFCF8] min-h-screen">
      <header className="flex justify-between items-center px-8 py-4 border-b border-black/10 bg-white sticky top-0 z-20">
        <Link href={`/${lang}`} className="font-serif tracking- text- font-bold text-black no-underline">Éclat Dor</Link>
        <Link href={`/${lang}`} className="text- border border-black px-4 py-2 rounded-full text-black no-underline">{t.home}</Link>
      </header>

      <section className="px-6 md:px-24 py-16 md:py-20 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h- bg-[#C9A86A]"></div>
          <span className="text- tracking- text-[#C9A86A] font-semibold">{t.about}</span>
          <div className="w-8 h- bg-[#C9A86A]"></div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight whitespace-pre-line">{t.trusted}</h1>
        <p className="max-w-2xl mx-auto mt-6 leading-8 opacity-60 text-">{t.intro}</p>
      </section>

      <section className="px-6 md:px-12 max-w- mx-auto pb-16">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 items-start">
          <div className="bg-white rounded- border border-black/5 p-8 md:p-10">
            <div className="flex gap-3 items-center mb-6">
              <div className="w-11 h-11 bg-black rounded- flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6"><path d="M4 19.5A2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
              </div>
              <h2 className="text- font-bold">{t.story}</h2>
            </div>
            <p className="text- leading-8 opacity-70">{t.intro}</p>
            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              <div className="bg-[#FAF8F5] rounded-2xl py-4 border border-black/5"><div className="text- font-bold">+107</div><div className="text- opacity-50 mt-1">{t.points}</div></div>
              <div className="bg-[#FAF8F5] rounded-2xl py-4 border border-black/5"><div className="text- font-bold">8</div><div className="text- opacity-50 mt-1">{t.countries}</div></div>
              <div className="bg-[#FAF8F5] rounded-2xl py-4 border border-black/5"><div className="text- font-bold">GMP</div><div className="text- opacity-50 mt-1">{t.certified}</div></div>
            </div>
            <div className="mt-8 bg-black rounded- p-6 text-white flex justify-between items-center">
              <div><div className="font-bold text-">{t.best}</div><div className="text- opacity-60 mt-1">{t.ship}</div></div>
              <Link href={`/${lang}/products`} className="bg-white text-black px-5 py-2.5 rounded-full text- font-bold no-underline whitespace-nowrap">{t.discover}</Link>
            </div>
          </div>

          <div>
            <h3 className="text- font-bold mb-5 flex items-center gap-3">
              <span className="w-11 h-11 bg-[#F5F1EB] rounded- flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.6"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </span>
              {t.values}
            </h3>
            <div className="flex flex-col gap-4">
              {[
                { title:t.v1t, desc:t.v1d, icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.6"><path d="M9 3H15"/><path d="M10 9V3"/><path d="M14 9V3"/><path d="M10 9a3 3 0 0 0 0 6"/><path d="M14 9a3 3 0 0 1 0 6"/><path d="M10 15H14"/><path d="M10 21H14"/></svg> },
                { title:t.v2t, desc:t.v2d, icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.6"><path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.6 1.8 2.2 2.3 3.5"/><circle cx="12" cy="6" r="3"/></svg> },
                { title:t.v3t, desc:t.v3d, icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10z"/><path d="M9 12l2 2 4-4"/></svg> },
                { title:t.v4t, desc:t.v4d, icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.6"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg> },
              ].map((v,i)=>(
                <div key={i} className="bg-white border border-black/5 rounded- p-5 flex gap-4">
                  <div className="w-11 h-11 bg-[#FAF8F5] border border-black/5 rounded- flex items-center justify-center flex-shrink-0">{v.icon}</div>
                  <div><div className="font-bold text-">{v.title}</div><div className="text- opacity-60 mt-1.5 leading-5">{v.desc}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white border border-black/5 rounded- p-5 flex flex-wrap gap-4 justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M19.05 4.91A9.82 0 0 0 12.03 2C6.49 2 2 6.48 2 12.04a9.82 9.82 0 0 0 1.35 4.96L2 22l5.18-1.35A9.82 0 0 0 12.03 22c5.54 0 10.03-4.48 10.03-10.04 0-2.68-1.04-5.2-2.9-7.05Z"/></svg>
            </div>
            <div><div className="font-bold text-">{t.contactT}</div><div className="text- opacity-60">{t.contactD}</div></div>
          </div>
          <a href="https://wa.me/905070000440" target="_blank" className="bg-black text-white px-6 py-3 rounded-full text- font-bold no-underline">0507 000 0440 →</a>
        </div>
      </section>
    </main>
  )
}