'use client'
import { useState } from 'react'
import Link from 'next/link'
import { use } from 'react'

const T: any = {
  ar: {
    prodTitle: 'سيروم الساليسيليك اسيد 2% - Éclat d\'or',
    prodSubtitle: 'تركيبة فعالة لتنظيف المسام ومحاربة حب الشباب',
    forUserTitle: 'وصف المنتج',
    forUserPoints: [
      'سيروم ساليسيليك اسيد بتركيز 2% مصمم خصيصاً للبشرة الدهنية والمعرضة لحب الشباب',
      'حمض BHA يخترق المسام بعمق ويذيب الدهون والرؤوس السوداء',
      'يقشر البشرة بلطف ويقلل الالتهاب والاحمرار المصاحب للحبوب',
      'مدعم بـ Niacinamide و Zinc PCA لتنظيم افراز الدهون وتهدئة البشرة'
    ],
    forDoctorTitle: 'المرجع العلمي للتركيبة',
    forDoctorDesc: 'حمض الساليسيليك 2% - التركيز الاقصى المسموح OTC - يعمل كـ keratolytic يذيب الروابط بين خلايا الجلد الميتة داخل المسام.',
    forDoctorPoints: [
      'Salicylic Acid 2%: BHA قابل للذوبان بالدهون، يخترق المسام ويفكك الكوميدون',
      'Niacinamide 4%: ينظم افراز الزهم ويقلل حجم المسام الظاهري',
      'Zinc PCA 1%: مضاد بكتيريا طبيعي يتحكم بالـ P.acnes المسبب لحب الشباب',
      'Aloe Vera: يهدئ التهيج ويعوض الجفاف المحتمل من التقشير'
    ],
    howToUse: 'طريقة الاستخدام',
    howToUseText: 'مساءً على بشرة نظيفة وجافة. ابدأي 3 مرات اسبوعياً وزيدي تدريجياً. تجنبي منطقة العين. واقي شمس صباحاً ضروري',
    proTip: 'نصيحة خبير: لا تخلطيه مع الريتينول بنفس الليلة. استخدمي الساليسيليك صباحاً والريتينول مساءً',
    ingredients: 'المكونات الفعالة',
    activeIngredients: 'Salicylic Acid 2%, Niacinamide 4%, Zinc PCA, Aloe Vera',
    orderBtn: 'اطلب عبر واتساب ←',
    backToProducts: '← العودة لكل المنتجات'
  },
  en: {
    prodTitle: 'Salicylic Acid 2% Serum - Éclat d\'or',
    prodSubtitle: 'Effective formula to cleanse pores and fight acne',
    forUserTitle: 'Product Description',
    forUserPoints: [
      '2% Salicylic Acid serum specially designed for oily and acne-prone skin',
      'BHA acid penetrates deep into pores dissolving oil and blackheads',
      'Gently exfoliates skin and reduces inflammation and redness from breakouts',
      'Enriched with Niacinamide and Zinc PCA to regulate sebum and soothe skin'
    ],
    forDoctorTitle: 'Scientific Formula Reference',
    forDoctorDesc: 'Salicylic Acid 2% - maximum OTC concentration - acts as keratolytic dissolving bonds between dead cells inside pores.',
    forDoctorPoints: [
      'Salicylic Acid 2%: Oil-soluble BHA, penetrates pores and breaks down comedones',
      'Niacinamide 4%: Regulates sebum production and reduces visible pore size',
      'Zinc PCA 1%: Natural antibacterial controlling P.acnes causing acne',
      'Aloe Vera: Soothes irritation and compensates potential dryness from exfoliation'
    ],
    howToUse: 'How to Use',
    howToUseText: 'Evening on clean dry skin. Start 3x weekly and increase gradually. Avoid eye area. Sunscreen in morning is mandatory',
    proTip: 'Pro tip: Don\'t mix with retinol same night. Use salicylic AM and retinol PM',
    ingredients: 'Active Ingredients',
    activeIngredients: 'Salicylic Acid 2%, Niacinamide 4%, Zinc PCA, Aloe Vera',
    orderBtn: 'Order via WhatsApp →',
    backToProducts: '← Back to all products'
  },
  tr: {
    prodTitle: 'Salisilik Asit %2 Serum - Éclat d\'or',
    prodSubtitle: 'Gözenekleri temizleyen ve akneyle savaşan etkili formül',
    forUserTitle: 'Ürün Açıklaması',
    forUserPoints: [
      'Yağlı ve akne eğilimli ciltler için özel %2 Salisilik Asit serumu',
      'BHA asidi gözeneklere derinlemesine nüfuz eder, yağ ve siyah noktaları çözer',
      'Cildi nazikçe eksfoliye eder, sivilce kaynaklı iltihap ve kızarıklığı azaltır',
      'Sebum düzenlemesi ve yatıştırma için Niacinamide ve Zinc PCA ile zenginleştirilmiş'
    ],
    forDoctorTitle: 'Bilimsel Formül Referansı',
    forDoctorDesc: 'Salisilik Asit %2 - maksimum OTC konsantrasyonu - gözenek içindeki ölü hücre bağlarını çözen keratolitik olarak çalışır.',
    forDoctorPoints: [
      'Salisilik Asit %2: Yağda çözünen BHA, gözeneklere nüfuz eder ve komedonları parçalar',
      'Niacinamide %4: Sebum üretimini düzenler ve görünür gözenek boyutunu azaltır',
      'Zinc PCA %1: Akneye neden olan P.acnes\'i kontrol eden doğal antibakteriyel',
      'Aloe Vera: Tahrişi yatıştırır ve eksfoliasyondan kaynaklı kuruluğu telafi eder'
    ],
    howToUse: 'Nasıl Kullanılır',
    howToUseText: 'Akşamları temiz kuru cilde. Haftada 3 kez başlayın ve kademeli artırın. Göz çevresinden kaçının. Sabah güneş kremi zorunlu',
    proTip: 'Uzman ipucu: Retinol ile aynı gece karıştırmayın. Salisilik sabah, retinol akşam kullanın',
    ingredients: 'Aktif İçerikler',
    activeIngredients: 'Salisilik Asit %2, Niacinamide %4, Zinc PCA, Aloe Vera',
    orderBtn: 'WhatsApp ile Sipariş Ver →',
    backToProducts: '← Tüm ürünlere dön'
  }
}

export default function SalicylicPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params)
  const t = T[lang] || T.ar
  const isAr = lang === 'ar'

  const images = [
    '/products/salicylic/1.png',
    '/products/salicylic/2.png',
    '/products/salicylic/3.png',
    '/products/salicylic/4.png',
    '/products/salicylic/5.png',
    '/products/salicylic/6.png',
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
              background:'#E8F5E9',
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

            <a href="https://wa.me/905070000440?text=Salicylic Acid 2% Serum" target="_blank" style={{background:'#000', color:'#fff', padding:'16px 32px', borderRadius:'30px', textDecoration:'none', display:'block', textAlign:'center', fontSize:'16px', fontWeight:600}}>
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