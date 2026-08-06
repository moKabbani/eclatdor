'use client'
import { useState } from 'react'
import Link from 'next/link'
import { use } from 'react'

const T: any = {
  ar: {
    prodTitle: 'سيروم الهيالورونيك اسيد - Éclat d\'or',
    prodSubtitle: 'تركيبة متعددة الاوزان الجزيئية لترطيب عميق وفوري',
    forUserTitle: 'وصف المنتج',
    forUserPoints: [
      'سيروم هيالورونيك اسيد بـ 3 اوزان جزيئية لترطيب كل طبقات البشرة',
      'يجذب ويثبت الماء بالبشرة حتى 1000 مرة وزنه، يملأ الخطوط الدقيقة فوراً',
      'قوام مائي خفيف سريع الامتصاص، لا يترك ملمس لزج ابداً',
      'مناسب لكل انواع البشرة حتى الدهنية والحساسة، آمن للحامل والمرضع'
    ],
    forDoctorTitle: 'المرجع العلمي للتركيبة',
    forDoctorDesc: 'تركيبة تجمع 3 اوزان جزيئية من Hyaluronic Acid: منخفض للاختراق العميق، متوسط للطبقة الوسطى، عالي للسطح، مع Vitamin B5 لتعزيز حاجز البشرة.',
    forDoctorPoints: [
      'Low Molecular HA: يخترق الادمة، يحفز الكولاجين ويملأ من الداخل',
      'Medium Molecular HA: يرطب الطبقة الوسطى ويحسن مرونة البشرة',
      'High Molecular HA: يكوّن طبقة واقية عالسطح تمنع فقدان الماء TEWL',
      'Panthenol B5: يهدئ التهيج ويعزز حاجز البشرة ويقلل الاحمرار'
    ],
    howToUse: 'طريقة الاستخدام',
    howToUseText: '3-4 نقط على بشرة رطبة صباحاً ومساءً، اتبعيه بمرطب فوراً لحبس الرطوبة. ضروري تكون البشرة مبللة',
    proTip: 'نصيحة خبير: رشي وجهك بـ Mist او ماء قبل التطبيق - الهيالورونيك يحتاج ماء ليسحبه للداخل',
    ingredients: 'المكونات الفعالة',
    activeIngredients: 'Hyaluronic Acid Multi-Weight, Panthenol B5, Allantoin',
    orderBtn: 'اطلب عبر واتساب ←',
    backToProducts: '← العودة لكل المنتجات'
  },
  en: {
    prodTitle: 'Hyaluronic Acid Serum - Éclat d\'or',
    prodSubtitle: 'Multi-molecular weight formula for deep and instant hydration',
    forUserTitle: 'Product Description',
    forUserPoints: [
      'Hyaluronic acid serum with 3 molecular weights to hydrate all skin layers',
      'Attracts and binds water up to 1000x its weight, plumps fine lines instantly',
      'Lightweight watery texture absorbs fast, never leaves sticky feel',
      'Suitable for all skin types including oily and sensitive, safe for pregnancy'
    ],
    forDoctorTitle: 'Scientific Formula Reference',
    forDoctorDesc: 'Formula combines 3 molecular weights of HA: low for deep penetration, medium for mid-layer, high for surface, with Vitamin B5 to strengthen skin barrier.',
    forDoctorPoints: [
      'Low Molecular HA: Penetrates dermis, stimulates collagen and plumps from within',
      'Medium Molecular HA: Hydrates mid-layer and improves skin elasticity',
      'High Molecular HA: Forms protective surface film preventing TEWL water loss',
      'Panthenol B5: Soothes irritation, strengthens barrier and reduces redness'
    ],
    howToUse: 'How to Use',
    howToUseText: '3-4 drops on damp skin AM & PM, follow immediately with moisturizer to lock hydration. Skin must be wet',
    proTip: 'Pro tip: Mist face with water before applying - hyaluronic needs water to pull into skin',
    ingredients: 'Active Ingredients',
    activeIngredients: 'Hyaluronic Acid Multi-Weight, Panthenol B5, Allantoin',
    orderBtn: 'Order via WhatsApp →',
    backToProducts: '← Back to all products'
  },
  tr: {
    prodTitle: 'Hyaluronik Asit Serumu - Éclat d\'or',
    prodSubtitle: 'Derin ve anında nemlendirme için çok moleküler ağırlıklı formül',
    forUserTitle: 'Ürün Açıklaması',
    forUserPoints: [
      'Tüm cilt katmanlarını nemlendirmek için 3 moleküler ağırlıklı hyaluronik asit serumu',
      'Ağırlığının 1000 katına kadar su çeker ve tutar, ince çizgileri anında doldurur',
      'Hafif sulu doku hızla emilir, asla yapışkan his bırakmaz',
      'Yağlı ve hassas dahil tüm cilt tiplerine uygun, hamilelikte güvenli'
    ],
    forDoctorTitle: 'Bilimsel Formül Referansı',
    forDoctorDesc: 'Formül 3 moleküler ağırlıkta HA birleştirir: düşük derin nüfuz için, orta orta katman için, yüksek yüzey için, cilt bariyerini güçlendirmek için B5 Vitamini ile.',
    forDoctorPoints: [
      'Düşük Moleküler HA: Dermise nüfuz eder, kolajeni uyarır ve içeriden dolgunlaştırır',
      'Orta Moleküler HA: Orta katmanı nemlendirir ve cilt elastikiyetini artırır',
      'Yüksek Moleküler HA: TEWL su kaybını önleyen koruyucu yüzey filmi oluşturur',
      'Panthenol B5: Tahrişi yatıştırır, bariyeri güçlendirir ve kızarıklığı azaltır'
    ],
    howToUse: 'Nasıl Kullanılır',
    howToUseText: 'Sabah akşam nemli cilde 3-4 damla, nemi hapsetmek için hemen nemlendirici ile takip edin. Cilt ıslak olmalı',
    proTip: 'Uzman ipucu: Uygulamadan önce yüze su püskürtün - hyaluronik cilde çekmek için suya ihtiyaç duyar',
    ingredients: 'Aktif İçerikler',
    activeIngredients: 'Hyaluronik Asit Çok Ağırlıklı, Panthenol B5, Allantoin',
    orderBtn: 'WhatsApp ile Sipariş Ver →',
    backToProducts: '← Tüm ürünlere dön'
  }
}

export default function HyaluronicPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params)
  const t = T[lang] || T.ar
  const isAr = lang === 'ar'

  const images = [
    '/products/hyaluronic/1.png',
    '/products/hyaluronic/2.png',
    '/products/hyaluronic/3.png',
    '/products/hyaluronic/4.png',
    '/products/hyaluronic/5.png',
    '/products/hyaluronic/6.png',
  ]

  const [activeImg, setActiveImg] = useState(0)

  return (
    <main dir={isAr?'rtl':'ltr'} style={{background:'#fff', padding:'60px 20px'}}>
      <div style={{maxWidth:'1200px', margin:'0 auto'}}>

        {/* الصف الاول: الصورة + كل الكلام الاساسي */}
        <div style={{
          display:'grid',
          gridTemplateColumns: isAr? '1fr 1.2fr' : '1.2fr 1fr',
          gap:'40px',
          marginBottom:'60px',
          alignItems:'start'
        }}>

          {/* الصور + زر الواتساب - يمين بالعربي */}
          <div style={{order: isAr? 1 : 2}}>
            <div style={{
              width:'100%',
              aspectRatio:'1/1',
              background:'#E3F2FD',
              borderRadius:'24px',
              overflow:'hidden',
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              marginBottom:'20px'
            }}>
              <img src={images[activeImg]} alt={t.prodTitle} style={{width:'100%', height:'100%', objectFit:'contain'}} />
            </div>
            <div style={{display:'flex', gap:'12px', overflowX:'auto', paddingBottom:'10px', marginBottom:'20px'}}>
              {images.map((img,i)=>(
                <button key={i} onClick={()=>setActiveImg(i)} style={{width:'80px', height:'80px', borderRadius:'12px', overflow:'hidden', border: activeImg===i?'2px solid #000':'1px solid #ddd', padding:0, cursor:'pointer', opacity: activeImg===i?1:0.6, background:'#fff', flexShrink:0}}>
                  <img src={img} style={{width:'100%', height:'100%', objectFit:'cover'}} />
                </button>
              ))}
            </div>

            <a href="https://wa.me/905070000440?text=Hyaluronic Acid Serum" target="_blank" style={{background:'#000', color:'#fff', padding:'16px 32px', borderRadius:'30px', textDecoration:'none', display:'block', textAlign:'center', fontSize:'16px', fontWeight:600}}>
              {t.orderBtn}
            </a>
          </div>

          {/* التفاصيل + وصف المنتج - شمال بالعربي */}
          <div style={{order: isAr? 2 : 1}}>
            <h1 style={{fontSize:'28px', marginBottom:'8px', fontWeight:700, lineHeight:'1.3'}}>{t.prodTitle}</h1>
            <p style={{fontSize:'14px', opacity:0.6, marginBottom:'24px'}}>{t.prodSubtitle}</p>

            <div style={{border:'1px solid #eee', borderRadius:'16px', padding:'20px', marginBottom:'24px'}}>
              <h3 style={{margin:'0 0 12px', fontSize:'15px'}}>{t.ingredients}</h3>
              <p style={{margin:0, fontSize:'13px', opacity:0.7}}>{t.activeIngredients}</p>
            </div>

            {/* وصف المنتج - جنب الصورة */}
            <div style={{background:'#FAF9F7', borderRadius:'16px', padding:'24px', marginBottom:'24px'}}>
              <h2 style={{fontSize:'18px', marginBottom:'16px', fontWeight:600}}>{t.forUserTitle}</h2>
              <div style={{display:'grid', gap:'12px'}}>
                {t.forUserPoints.map((point: string, i: number) => (
                  <div key={i} style={{fontSize:'14px', lineHeight:'24px'}}>{point}</div>
                ))}
              </div>
            </div>

            <Link href={`/${lang}/products`} style={{display:'block', textAlign:'center', fontSize:'14px', color:'#000'}}>{t.backToProducts}</Link>
          </div>
        </div>

        {/* الصف التاني: المرجع العلمي - full width */}
        <section style={{marginBottom:'60px', padding:'0 20px'}}>
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

        {/* الصف التالت: طريقة الاستخدام - full width */}
        <section style={{background:'#111', color:'#fff', borderRadius:'24px', padding:'30px 20px'}}>
          <h2 style={{fontSize:'22px', marginBottom:'16px'}}>{t.howToUse}</h2>
          <p style={{fontSize:'14px', lineHeight:'24px', opacity:0.9, marginBottom:'16px'}}>{t.howToUseText}</p>
          <div style={{background:'rgba(201,168,106,0.15)', border:'1px solid #C9A86A', borderRadius:'12px', padding:'16px', fontSize:'13px'}}>
            💡 {t.proTip}
          </div>
        </section>

      </div>
    </main>
  )
}