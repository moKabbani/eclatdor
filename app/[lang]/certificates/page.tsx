import Link from 'next/link'

export default async function Certificates({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isAr = lang === 'ar'

  const certs = [
    { title: isAr?'GMP - ممارسات التصنيع الجيدة':'GMP Certified', desc: isAr?'مصنعنا معتمد بمعايير التصنيع الأوروبية':'EU GMP standards manufacturing', icon:'🏭', img:'https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?w=400' },
    { title: isAr?'ISO 22716':'ISO 22716', desc: isAr?'شهادة جودة مستحضرات التجميل':'Cosmetics Good Manufacturing Practices', icon:'📜', img:'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400' },
    { title: isAr?'مختبر جلدياً':'Dermatologically Tested', desc: isAr?'تم اختباره من قبل أطباء الجلدية':'Tested by dermatologists', icon:'🔬', img:'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400' },
    { title: isAr?'حلال':'Halal Certified', desc: isAr?'منتجات حلال 100%':'100% Halal products', icon:'☪️', img:'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=400' },
    { title: isAr?'خالٍ من القسوة':'Cruelty Free', desc: isAr?'لم يتم اختباره على الحيوانات':'Not tested on animals', icon:'🐰', img:'https://images.unsplash.com/photo-1515688594390-b649af70d282?w=400' },
    { title: isAr?'وزارة الصحة التركية':'Turkish Ministry of Health', desc: isAr?'مسجل رسمياً':'Officially registered', icon:'✅', img:'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400' },
  ]

  return (
    <main dir={isAr?'rtl':'ltr'} style={{background:'#fff', fontFamily:'system-ui'}}>
      <header style={{display:'flex', justifyContent:'space-between', padding:'16px 40px', borderBottom:'1px solid #eee', position:'sticky', top:0, background:'#fff', zIndex:50}}>
        <Link href={`/${lang}`} style={{fontFamily:'serif', letterSpacing:'4px', fontWeight:600, textDecoration:'none', color:'#000'}}>Éclat Dor</Link>
        <Link href={`/${lang}`} style={{fontSize:'12px', border:'1px solid #000', padding:'8px 16px', borderRadius:'20px', textDecoration:'none', color:'#000'}}>{isAr?'عودة للرئيسية':'Back Home'}</Link>
      </header>

      <section style={{padding:'80px 50px', textAlign:'center', background:'#FDFCF8'}}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'12px', marginBottom:'16px'}}>
          <div style={{width:'30px', height:'1px', background:'#8A9BC4'}}></div>
          <span style={{fontSize:'11px', color:'#8A9BC4', letterSpacing:'3px'}}>{isAr?'الجودة والثقة':'QUALITY & TRUST'}</span>
          <div style={{width:'30px', height:'1px', background:'#8A9BC4'}}></div>
        </div>
        <h1 style={{fontSize:'42px', fontWeight:700}}>{isAr?'الشهادات التي حصل عليها المنتج':'Our Certifications'}</h1>
        <p style={{opacity:0.6, maxWidth:'600px', margin:'16px auto 0', lineHeight:'24px', fontSize:'14px'}}>
          {isAr?'منتجات إيكلادور حاصلة على أهم الشهادات الدولية التي تضمن الجودة والسلامة والفعالية.':'Éclat Dor products hold the most important international certifications ensuring quality, safety and efficacy.'}
        </p>
      </section>

      <section style={{padding:'50px', display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'24px', background:'#fff'}}>
        {certs.map((c,i)=>(
          <div key={i} style={{border:'1px solid #eee', borderRadius:'24px', overflow:'hidden', background:'#fff'}}>
            <div style={{height:'180px', background:`url(${c.img}) center/cover`, position:'relative'}}>
              <div style={{position:'absolute', inset:0, background:'linear-gradient(to top, rgba(0,0,0,0.5), transparent)'}}></div>
              <div style={{position:'absolute', bottom:'14px', left:'16px', background:'#fff', width:'44px', height:'44px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'20px'}}>{c.icon}</div>
            </div>
            <div style={{padding:'20px'}}>
              <h3 style={{margin:0, fontSize:'16px', fontWeight:700}}>{c.title}</h3>
              <p style={{fontSize:'13px', opacity:0.6, marginTop:'8px', lineHeight:'20px'}}>{c.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <section style={{padding:'60px 50px', background:'#111', color:'#fff', textAlign:'center', borderRadius:'30px', margin:'40px'}}>
        <h2 style={{fontSize:'28px'}}>{isAr?'هل تريد رؤية الشهادات الأصلية؟':'Want to see original certificates?'}</h2>
        <p style={{opacity:0.6, marginTop:'10px', fontSize:'14px'}}>{isAr?'تواصل معنا وسنرسل لك جميع الوثائق الرسمية':'Contact us and we will send all official documents'}</p>
        <a href="mailto:info@eclatdor.me" style={{background:'#fff', color:'#000', padding:'14px 28px', borderRadius:'30px', display:'inline-block', marginTop:'20px', textDecoration:'none', fontSize:'13px', fontWeight:600}}>info@eclatdor.me →</a>
      </section>
    </main>
  )
}