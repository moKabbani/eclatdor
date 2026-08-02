'use client'
import { useState } from 'react'
import Link from 'next/link'

const T: any = {
  ar: {
    prodTitle: 'سيروم فيتامين سي 5% - Éclat d\'or',
    prodSubtitle: 'تركيبة طبية مدروسة للإشراقة والحماية',
    forUserTitle: 'ليش تحتاجيه لبشرتك؟',
    forUserPoints: [
      '✨ إشراقة فورية: بيعطي نضارة وبيشيل البهتان من أول اسبوع',
      '🛡️ درع حماية: بيحارب التصبغات والبقع اللي بتطلع من الشمس',
      '💧 ترطيب عميق: مع الهيالورونيك اسيد، ما بينشف بشرتك ابداً',
      '🌿 خفيف عالبشرة: مناسب للبشرة الحساسة وما بيعمل حبوب'
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
}

export default function VitaminCPage({ params }: { params: { lang: string } }) {
  const lang = params.lang
  const t = T[lang] || T.ar
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
    <main dir={isAr?'rtl':'ltr'} style={{background:'#fff', padding:'60px 50px'}}>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'60px', maxWidth:'1200px', margin:'0 auto 80px'}}>
        
        {/* الصور */}
        <div>
          <div style={{width:'100%', height:'550px', background:'#FDFCF8', borderRadius:'24px', overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'20px'}}>
            <img src={images[activeImg]} alt={t.prodTitle} style={{width:'100%', height:'100%', objectFit:'contain'}} />
          </div>
          <div style={{display:'flex', gap:'12px', overflowX:'auto', paddingBottom:'10px'}}>
            {images.map((img,i)=>(
              <button key={i} onClick={()=>setActiveImg(i)} style={{width:'90px', height:'90px', borderRadius:'12px', overflow:'hidden', border: activeImg===i?'2px solid #000':'1px solid #ddd', padding:0, cursor:'pointer', opacity: activeImg===i?1:0.6, background:'#fff', flexShrink:0}}>
                <img src={img} style={{width:'100%', height:'100%', objectFit:'cover'}} />
              </button>
            ))}
          </div>
        </div>

        {/* التفاصيل */}
        <div>
          <h1 style={{fontSize:'32px', marginBottom:'8px', fontWeight:700}}>{t.prodTitle}</h1>
          <p style={{fontSize:'14px', opacity:0.6, marginBottom:'24px'}}>{t.prodSubtitle}</p>

          <div style={{border:'1px solid #eee', borderRadius:'16px', padding:'24px', marginBottom:'24px'}}>
            <h3 style={{margin:'0 0 12px', fontSize:'16px'}}>{t.ingredients}</h3>
            <p style={{margin:0, fontSize:'14px', opacity:0.7}}>{t.activeIngredients}</p>
          </div>

          <a href="https://wa.me/905070000440?text=Vitamin C 5% Serum" target="_blank" style={{background:'#000', color:'#fff', padding:'16px 32px', borderRadius:'30px', textDecoration:'none', display:'block', textAlign:'center', fontSize:'16px', fontWeight:600, marginBottom:'16px'}}>
            {t.orderBtn}
          </a>

          <p style={{fontSize:'13px', opacity:0.6, textAlign:'center'}}>{t.shipping}</p>

          <Link href={`/${lang}/products`} style={{display:'block', textAlign:'center', marginTop:'24px', fontSize:'14px', color:'#000'}}>{t.backToProducts}</Link>
        </div>
      </div>

      {/* شرح للمستخدم العادي */}
      <section style={{maxWidth:'900px', margin:'0 auto 60px', background:'#FAF9F7', borderRadius:'24px', padding:'40px'}}>
        <h2 style={{fontSize:'24px', marginBottom:'20px'}}>{t.forUserTitle}</h2>
        <div style={{display:'grid', gap:'16px'}}>
          {t.forUserPoints.map((point: string, i: number) => (
            <div key={i} style={{fontSize:'15px', lineHeight:'26px'}}>{point}</div>
          ))}
        </div>
      </section>

      {/* شرح للطبيب */}
      <section style={{maxWidth:'900px', margin:'0 auto 60px'}}>
        <h2 style={{fontSize:'24px', marginBottom:'12px'}}>{t.forDoctorTitle}</h2>
        <p style={{fontSize:'14px', opacity:0.7, lineHeight:'24px', marginBottom:'24px'}}>{t.forDoctorDesc}</p>
        <div style={{display:'grid', gap:'20px'}}>
          {t.forDoctorPoints.map((point: string, i: number) => (
            <div key={i} style={{borderLeft:isAr?'none':'3px solid #C9A86A', borderRight:isAr?'3px solid #C9A86A':'none', padding:isAr?'0 16px 0 0':'0 0 0 16px', fontSize:'14px', lineHeight:'24px'}}>
              {point}
            </div>
          ))}
        </div>
      </section>

      {/* طريقة الاستخدام */}
      <section style={{maxWidth:'900px', margin:'0 auto', background:'#111', color:'#fff', borderRadius:'24px', padding:'40px'}}>
        <h2 style={{fontSize:'24px', marginBottom:'16px'}}>{t.howToUse}</h2>
        <p style={{fontSize:'15px', lineHeight:'26px', opacity:0.9, marginBottom:'16px'}}>{t.howToUseText}</p>
        <div style={{background:'rgba(201,168,106,0.15)', border:'1px solid #C9A86A', borderRadius:'12px', padding:'16px', fontSize:'14px'}}>
          💡 {t.proTip}
        </div>
      </section>

    </main>
  )
}