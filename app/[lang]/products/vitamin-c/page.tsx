'use client'
import { useState } from 'react'
import Link from 'next/link'

const T: any = {
  ar: {
    prodTitle: 'سيروم فيتامين سي 5% - Éclat d\'or',
    prodSubtitle: 'تركيبة طبية مدروسة للإشراقة والحماية',
    forUserTitle: 'ليش تحتاجيه لبشرتك؟',
    forUserPoints: [
      ' إشراقة فورية: بيعطي نضارة وبيشيل البهتان من أول اسبوع',
      ' درع حماية: بيحارب التصبغات والبقع اللي بتطلع من الشمس',
      ' ترطيب عميق: مع الهيالورونيك اسيد، ما بينشف بشرتك ابداً',
      ' خفيف عالبشرة: مناسب للبشرة الحساسة وما بيعمل حبوب'
    ],
    forDoctorTitle: 'المرجع العلمي للتركيبة',
    forDoctorDesc: 'تركيبة متوازنة تجمع بين L-Ascorbic Acid 5% المثبت سريرياً مع Ferulic Acid و Vitamin E لتضاعف الفعالية والثباتية.',
    forDoctorPoints: [
      'L-Ascorbic Acid 5%: التركيز المثالي للاستخدام اليومي بدون تهيج، يحفز الكولاجين ويفتح التصبغات',
      'Ferulic Acid 0.5%: يضاعف فعالية وثباتية فيتامين C بـ 8 مرات',
      'Vitamin E 1%: مضاد أكسدة يعمل بتآزر ويقلل الالتهاب',
      'Hyaluronic Acid: وزن جزيئي منخفض لاختراق عميق ومنع الجفاف'
    ],
    howToUse: 'طريقة الاستخدام',
    howToUseText: '4-5 نقط على بشرة نظيفة صباحاً قبل واقي الشمس. للبشرة الحساسة: ابدأي يوم اي يوم لا',
    proTip: 'نصيحة خبير: احفظيه بالبراد لزيادة الثباتية والشعور بالانتعاش',
    ingredients: 'المكونات الفعالة',
    activeIngredients: 'Vitamin C 5%, Ferulic Acid, Vitamin E, Hyaluronic Acid',
    orderBtn: 'اطلب عبر واتساب ←',
    shipping: 'شحن يومي • دفع عند الاستلام • منتج أصلي 100%',
    backToProducts: '← العودة لكل المنتجات'
  },
  en: {
    prodTitle: 'Vitamin C 5% Serum - Éclat d\'or',
    prodSubtitle: 'Clinically-balanced formula for radiance and protection',
    forUserTitle: 'Why does your skin need it?',
    forUserPoints: [
      ' Instant Glow: Gives radiance and removes dullness from the first week',
      ' Protection Shield: Fights pigmentation and sun spots',
      ' Deep Hydration: With Hyaluronic Acid, never dries your skin',
      ' Light on skin: Suitable for sensitive skin and non-comedogenic'
    ],
    forDoctorTitle: 'Scientific Formula Reference',
    forDoctorDesc: 'Balanced formula combining clinically proven L-Ascorbic Acid 5% with Ferulic Acid and Vitamin E to double efficacy and stability.',
    forDoctorPoints: [
      'L-Ascorbic Acid 5%: Ideal concentration for daily use without irritation, stimulates collagen and lightens pigmentation',
      'Ferulic Acid 0.5%: Multiplies vitamin C effectiveness and stability by 8x',
      'Vitamin E 1%: Synergistic antioxidant that reduces inflammation',
      'Hyaluronic Acid: Low molecular weight for deep penetration and preventing dryness'
    ],
    howToUse: 'How to Use',
    howToUseText: '4-5 drops on clean skin in the morning before sunscreen. For sensitive skin: start every other day',
    proTip: 'Pro tip: Keep it in the fridge for enhanced stability and refreshing feel',
    ingredients: 'Active Ingredients',
    activeIngredients: 'Vitamin C 5%, Ferulic Acid, Vitamin E, Hyaluronic Acid',
    orderBtn: 'Order via WhatsApp →',
    shipping: 'Daily shipping • Cash on delivery • 100% Original',
    backToProducts: '← Back to all products'
  },
  tr: {
    prodTitle: 'C Vitamini %5 Serum - Éclat d\'or',
    prodSubtitle: 'Aydınlık ve koruma için klinik formül',
    forUserTitle: 'Cildinizin buna neden ihtiyacı var?',
    forUserPoints: [
      ' Anında Parlaklık: İlk haftadan itibaren donukluğu giderir',
      ' Koruma Kalkanı: Güneş lekeleri ve pigmentasyonla savaşır',
      ' Derin Nem: Hyaluronik Asit ile cildinizi kurutmaz',
      ' Cilt Dostu: Hassas ciltler için uygun, komedojenik değil'
    ],
    forDoctorTitle: 'Bilimsel Formül Referansı',
    forDoctorDesc: 'Klinik olarak kanıtlanmış L-Askorbik Asit %5\'i, etkinlik ve stabiliteyi ikiye katlamak için Ferulik Asit ve E Vitamini ile birleştiren dengeli formül.',
    forDoctorPoints: [
      'L-Askorbik Asit %5: Tahriş olmadan günlük kullanım için ideal konsantrasyon, kolajen uyarır ve pigmentasyonu açar',
      'Ferulik Asit %0.5: C vitamini etkinliğini ve stabilitesini 8 kat artırır',
      'E Vitamini %1: Sinerjik antioksidan, iltihabı azaltır',
      'Hyaluronik Asit: Derin nüfuz ve kuruluk önleme için düşük moleküler ağırlık'
    ],
    howToUse: 'Nasıl Kullanılır',
    howToUseText: 'Sabahları temiz cilde güneş kreminden önce 4-5 damla. Hassas ciltler: gün aşırı başlayın',
    proTip: 'Uzman ipucu: Stabilite ve ferahlatıcı his için buzdolabında saklayın',
    ingredients: 'Aktif İçerikler',
    activeIngredients: 'C Vitamini %5, Ferulik Asit, E Vitamini, Hyaluronik Asit',
    orderBtn: 'WhatsApp ile Sipariş Ver →',
    shipping: 'Günlük kargo • Kapıda ödeme • %100 Orijinal',
    backToProducts: '← Tüm ürünlere dön'
  }
}

export default function VitaminCPage({ params }: { params: { lang: string } }) {
  const lang = params.lang
  const t = T[lang] || T.ar // غيرتها لـ ar كـ fallback بدل en
  const isAr = lang === 'ar'

  const images = [
    '/products/vitamin-c/1.png',
    '/products/vitamin-c/2.png',
    '/products/vitamin-c/3.png',
    '/products/vitamin-c/4.png',
    '/products/vitamin-c/5.png',
  ]

  const [activeImg, setActiveImg] = useState(0)

  return (
    <main dir={isAr?'rtl':'ltr'} style={{background:'#fff', padding:'60px 20px'}}>
      <style>{`
     .product-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          max-width: 1200px;
          margin: 0 auto 80px;
        }
        ${isAr? `
        @media (min-width: 769px) {
         .product-grid > div:first-child { order: 2; }
         .product-grid > div:last-child { order: 1; }
        }
        ` : ''}
        @media (max-width: 768px) {
       .product-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>

      <div className="product-grid">

        {/* الصور */}
        <div>
          <div style={{
            width:'100%',
            aspectRatio:'1/1',
            maxHeight:'500px',
            background:'#FDFCF8',
            borderRadius:'24px',
            overflow:'hidden',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            marginBottom:'20px'
          }}>
            <img src={images[activeImg]} alt={t.prodTitle} style={{width:'100%', height:'100%', objectFit:'contain'}} />
          </div>
          <div style={{display:'flex', gap:'12px', overflowX:'auto', paddingBottom:'10px'}}>
            {images.map((img,i)=>(
              <button key={i} onClick={()=>setActiveImg(i)} style={{width:'80px', height:'80px', borderRadius:'12px', overflow:'hidden', border: activeImg===i?'2px solid #000':'1px solid #ddd', padding:0, cursor:'pointer', opacity: activeImg===i?1:0.6, background:'#fff', flexShrink:0}}>
                <img src={img} style={{width:'100%', height:'100%', objectFit:'cover'}} />
              </button>
            ))}
          </div>
        </div>

        {/* التفاصيل */}
        <div>
          <h1 style={{fontSize:'28px', marginBottom:'8px', fontWeight:700, lineHeight:'1.3'}}>{t.prodTitle}</h1>
          <p style={{fontSize:'14px', opacity:0.6, marginBottom:'24px'}}>{t.prodSubtitle}</p>

          <div style={{border:'1px solid #eee', borderRadius:'16px', padding:'20px', marginBottom:'24px'}}>
            <h3 style={{margin:'0 0 12px', fontSize:'15px'}}>{t.ingredients}</h3>
            <p style={{margin:0, fontSize:'13px', opacity:0.7}}>{t.activeIngredients}</p>
          </div>

          <a href="https://wa.me/905070000440?text=Vitamin C 5% Serum" target="_blank" style={{background:'#000', color:'#fff', padding:'16px 32px', borderRadius:'30px', textDecoration:'none', display:'block', textAlign:'center', fontSize:'16px', fontWeight:600, marginBottom:'16px'}}>
            {t.orderBtn}
          </a>

          <p style={{fontSize:'12px', opacity:0.6, textAlign:'center'}}>{t.shipping}</p>

          <Link href={`/${lang}/products`} style={{display:'block', textAlign:'center', marginTop:'24px', fontSize:'14px', color:'#000'}}>{t.backToProducts}</Link>
        </div>
      </div>

      {/* باقي الشرح */}
      <section style={{maxWidth:'900px', margin:'0 auto 60px', background:'#FAF9F7', borderRadius:'24px', padding:'30px 20px'}}>
        <h2 style={{fontSize:'22px', marginBottom:'20px'}}>{t.forUserTitle}</h2>
        <div style={{display:'grid', gap:'16px'}}>
          {t.forUserPoints.map((point: string, i: number) => (
            <div key={i} style={{fontSize:'14px', lineHeight:'24px'}}>{point}</div>
          ))}
        </div>
      </section>

      <section style={{maxWidth:'900px', margin:'0 auto 60px', padding:'0 20px'}}>
        <h2 style={{fontSize:'22px', marginBottom:'12px'}}>{t.forDoctorTitle}</h2>
        <p style={{fontSize:'14px', opacity:0.7, lineHeight:'24px', marginBottom:'24px'}}>{t.forDoctorDesc}</p>
        <div style={{display:'grid', gap:'20px'}}>
          {t.forDoctorPoints.map((point: string, i: number) => (
            <div key={i} style={{borderLeft:isAr?'none':'3px solid #C9A86A', borderRight:isAr?'3px solid #C9A86A':'none', padding:isAr?'0 16px 0 0':'0 0 0 16px', fontSize:'13px', lineHeight:'22px'}}>
              {point}
            </div>
          ))}
        </div>
      </section>

      <section style={{maxWidth:'900px', margin:'0 auto', background:'#111', color:'#fff', borderRadius:'24px', padding:'30px 20px'}}>
        <h2 style={{fontSize:'22px', marginBottom:'16px'}}>{t.howToUse}</h2>
        <p style={{fontSize:'14px', lineHeight:'24px', opacity:0.9, marginBottom:'16px'}}>{t.howToUseText}</p>
        <div style={{background:'rgba(201,168,106,0.15)', border:'1px solid #C9A86A', borderRadius:'12px', padding:'16px', fontSize:'13px'}}>
          💡 {t.proTip}
        </div>
      </section>

    </main>
  )
}