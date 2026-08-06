'use client'
import { useState } from 'react'
import Link from 'next/link'
import { use } from 'react'

const T: any = {
  ar: {
    prodTitle: 'سيروم الريتينول 0.3% - Éclat d\'or',
    prodSubtitle: 'تركيبة متقدمة لمحاربة التجاعيد وتجديد البشرة',
    forUserTitle: 'وصف المنتج',
    forUserPoints: [
      'سيروم ريتينول بتركيز 0.3% مصمم خصيصاً لتقليل التجاعيد والخطوط الدقيقة',
      'تركيبة مغلفة بتقنية Encapsulated Retinol لاطلاق بطيء بدون تهيج',
      'يحفز تجدد الخلايا ويوحد لون البشرة ويقلص المسام الواسعة',
      'مدعم بـ Niacinamide و Hyaluronic Acid لتهدئة البشرة ومنع الجفاف'
    ],
    forDoctorTitle: 'المرجع العلمي للتركيبة',
    forDoctorDesc: 'ريتينول 0.3% مغلف بتقنية Micro-encapsulation يضمن اطلاق تدريجي للفعالية مع تقليل التهيج بنسبة 70% مقارنة بالريتينول التقليدي.',
    forDoctorPoints: [
      'Encapsulated Retinol 0.3%: يتحول الى Retinoic Acid داخل البشرة، يحفز الكولاجين والايلاستين',
      'Niacinamide 5%: يقوي حاجز البشرة ويقلل الاحمرار المصاحب للريتينول',
      'Hyaluronic Acid: يعوض الجفاف ويحافظ على الترطيب اثناء التقشير',
      'Vitamin E: مضاد اكسدة يحمي الريتينول من التأكسد ويزيد الثباتية'
    ],
    howToUse: 'طريقة الاستخدام',
    howToUseText: 'مساءً فقط على بشرة نظيفة وجافة. ابدأي مرتين اسبوعياً وزيدي تدريجياً. استخدمي واقي شمس صباحاً ضروري',
    proTip: 'نصيحة خبير: استخدمي طريقة الساندويتش - مرطب قبل وبعد الريتينول للبشرة الحساسة',
    ingredients: 'المكونات الفعالة',
    activeIngredients: 'Retinol 0.3%, Niacinamide 5%, Hyaluronic Acid, Vitamin E',
    orderBtn: 'اطلب عبر واتساب ←',
    backToProducts: '← العودة لكل المنتجات'
  },
  en: {
    prodTitle: 'Retinol 0.3% Serum - Éclat d\'or',
    prodSubtitle: 'Advanced formula to fight wrinkles and renew skin',
    forUserTitle: 'Product Description',
    forUserPoints: [
      '0.3% Retinol serum specially designed to reduce wrinkles and fine lines',
      'Encapsulated Retinol technology for slow release without irritation',
      'Stimulates cell renewal, evens skin tone and minimizes pores',
      'Enriched with Niacinamide and Hyaluronic Acid to soothe and prevent dryness'
    ],
    forDoctorTitle: 'Scientific Formula Reference',
    forDoctorDesc: '0.3% Micro-encapsulated Retinol ensures gradual release for efficacy with 70% less irritation vs traditional retinol.',
    forDoctorPoints: [
      'Encapsulated Retinol 0.3%: Converts to Retinoic Acid in skin, stimulates collagen and elastin',
      'Niacinamide 5%: Strengthens skin barrier and reduces retinol-associated redness',
      'Hyaluronic Acid: Compensates dryness and maintains hydration during exfoliation',
      'Vitamin E: Antioxidant that protects retinol from oxidation and increases stability'
    ],
    howToUse: 'How to Use',
    howToUseText: 'Evening only on clean dry skin. Start twice weekly and increase gradually. Sunscreen in morning is mandatory',
    proTip: 'Pro tip: Use sandwich method - moisturizer before and after retinol for sensitive skin',
    ingredients: 'Active Ingredients',
    activeIngredients: 'Retinol 0.3%, Niacinamide 5%, Hyaluronic Acid, Vitamin E',
    orderBtn: 'Order via WhatsApp →',
    backToProducts: '← Back to all products'
  },
  tr: {
    prodTitle: 'Retinol %0.3 Serum - Éclat d\'or',
    prodSubtitle: 'Kırışıklıklarla savaş ve cilt yenileme için gelişmiş formül',
    forUserTitle: 'Ürün Açıklaması',
    forUserPoints: [
      'Kırışıklık ve ince çizgileri azaltmak için özel %0.3 Retinol serumu',
      'Tahriş olmadan yavaş salınım için Kapsüllenmiş Retinol teknolojisi',
      'Hücre yenilenmesini uyarır, cilt tonunu eşitler ve gözenekleri küçültür',
      'Niacinamide ve Hyaluronik Asit ile zenginleştirilmiş, yatıştırır ve kuruluğu önler'
    ],
    forDoctorTitle: 'Bilimsel Formül Referansı',
    forDoctorDesc: '%0.3 Mikro-kapsüllenmiş Retinol, geleneksel retinole göre %70 daha az tahrişle etkinlik için kademeli salınım sağlar.',
    forDoctorPoints: [
      'Kapsüllenmiş Retinol %0.3: Ciltte Retinoik Asit\'e dönüşür, kolajen ve elastini uyarır',
      'Niacinamide %5: Cilt bariyerini güçlendirir ve retinole bağlı kızarıklığı azaltır',
      'Hyaluronik Asit: Kuruluk telafi eder ve eksfoliasyon sırasında nemi korur',
      'E Vitamini: Retinolü oksidasyondan koruyan ve stabiliteyi artıran antioksidan'
    ],
    howToUse: 'Nasıl Kullanılır',
    howToUseText: 'Sadece akşamları temiz kuru cilde. Haftada iki kez başlayın ve kademeli artırın. Sabah güneş kremi zorunlu',
    proTip: 'Uzman ipucu: Hassas ciltler için sandviç yöntemi - retinolden önce ve sonra nemlendirici',
    ingredients: 'Aktif İçerikler',
    activeIngredients: 'Retinol %0.3, Niacinamide %5, Hyaluronik Asit, E Vitamini',
    orderBtn: 'WhatsApp ile Sipariş Ver →',
    backToProducts: '← Tüm ürünlere dön'
  }
}

export default function RetinolPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params)
  const t = T[lang] || T.ar
  const isAr = lang === 'ar'

  const images = [
    '/products/retinol/1.png',
    '/products/retinol/2.png',
    '/products/retinol/3.png',
    '/products/retinol/4.png',
    '/products/retinol/5.png',
    '/products/retinol/6.png',
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
              background:'#E8E8E8',
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

            <a href="https://wa.me/905070000440?text=Retinol 0.3% Serum" target="_blank" style={{background:'#000', color:'#fff', padding:'16px 32px', borderRadius:'30px', textDecoration:'none', display:'block', textAlign:'center', fontSize:'16px', fontWeight:600}}>
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