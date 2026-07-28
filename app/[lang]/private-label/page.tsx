'use client'
import { useState, use } from 'react'

export default function PrivateLabelPage({params}:{params: Promise<{lang:string}>}) {
  const { lang } = use(params)
  const isAr = lang === 'ar'
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    await fetch('https://formsubmit.co/ajax/info@eclatdor.me', {
      method: 'POST',
      body: formData
    })
    setSent(true)
  }

  return (
    <main dir={isAr?'rtl':'ltr'} style={{background:'#fff', minHeight:'100vh', fontFamily:'system-ui'}}>
      <section style={{padding:'80px 50px', background:'#111', color:'#fff'}}>
        <h1 style={{fontSize:'48px'}}>✦ {isAr?'صناعة براندك الخاص':'Private Label Manufacturing'}</h1>
        <p style={{opacity:0.7, maxWidth:'600px', marginTop:'20px', lineHeight:'28px'}}>
          {isAr?'نصنع لك علامتك من الصفر: تركيبات احترافية، تصميم عبوات، ترخيص GMP. الحد الأدنى 500 قطعة.':'We create your brand from scratch: formulas, design, GMP certified. MOQ 500 pcs.'}
        </p>
        <div style={{display:'flex', gap:'20px', marginTop:'30px'}}>
          <div style={{background:'#222', padding:'16px 24px', borderRadius:'16px'}}><b>500+</b><br/><span style={{fontSize:'11px', opacity:0.5}}>{isAr?'عميل':'Clients'}</span></div>
          <div style={{background:'#222', padding:'16px 24px', borderRadius:'16px'}}><b>10</b><br/><span style={{fontSize:'11px', opacity:0.5}}>{isAr?'تركيبة':'Formulas'}</span></div>
          <div style={{background:'#222', padding:'16px 24px', borderRadius:'16px'}}><b>GMP</b><br/><span style={{fontSize:'11px', opacity:0.5}}>Certified</span></div>
        </div>
      </section>

      <section style={{padding:'60px 50px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'60px'}}>
        <div>
          <h3 style={{fontSize:'22px', marginBottom:'20px'}}>{isAr?'ماذا نقدم؟':'What We Offer'}</h3>
          <ul style={{lineHeight:'36px', opacity:0.8, listStyle:'none', padding:0}}>
            <li>✓ {isAr?'تركيبات خاصة باسمك':'Custom formulas'}</li>
            <li>✓ {isAr?'تصميم لوغو وعبوات':'Logo & packaging'}</li>
            <li>✓ {isAr?'تصنيع وتعبئة':'Manufacturing'}</li>
            <li>✓ {isAr?'ترخيص لسوريا وتركيا':'Licensing Syria & Turkey'}</li>
          </ul>
        </div>

        <div style={{background:'#FAF8F5', padding:'32px', borderRadius:'24px', border:'1px solid #eee'}}>
          <h3 style={{marginBottom:'20px'}}>{isAr?'تواصل لصناعة براندك':'Contact for Your Brand'}</h3>
          {sent? <div style={{background:'#E8F5E9', padding:'20px', borderRadius:'12px', textAlign:'center'}}>✅ {isAr?'تم الإرسال!':'Sent!'}</div> : (
          <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:'14px'}}>
            <input type="hidden" name="_subject" value="New Private Label Inquiry" />
            <input type="hidden" name="_captcha" value="false" />
            <input name="name" required placeholder={isAr?'اسمك':'Name'} style={{padding:'14px', borderRadius:'12px', border:'1px solid #ddd'}} />
            <input name="phone" required placeholder={isAr?'رقم الهاتف':'Phone'} style={{padding:'14px', borderRadius:'12px', border:'1px solid #ddd'}} />
            <input name="email" type="email" required placeholder="Email" style={{padding:'14px', borderRadius:'12px', border:'1px solid #ddd'}} />
            <textarea name="message" required placeholder={isAr?'استفسارك...':'Message...'} rows={4} style={{padding:'14px', borderRadius:'12px', border:'1px solid #ddd'}}></textarea>
            <button type="submit" style={{background:'#000', color:'#fff', padding:'16px', borderRadius:'30px', border:'none', cursor:'pointer'}}>{isAr?'إرسال ←':'Send ←'}</button>
          </form>
          )}
        </div>
      </section>
    </main>
  )
}