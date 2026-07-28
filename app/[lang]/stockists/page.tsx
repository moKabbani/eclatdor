'use client'
import { use } from 'react'
import Link from 'next/link'

export default function Stockists({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params)
  const isAr = lang === 'ar'

  const countries = [
    { en:'France', ar:'فرنسا', city:'Paris', n:12, flag:'🇫🇷', code:'FR',
      img:'https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg&w=600',
      grad:'linear-gradient(135deg,#1e3c72,#2a5298)' },
    { en:'Turkey', ar:'تركيا', city:'Istanbul', n:28, flag:'🇹🇷', code:'TR',
      img:'https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/2/22/Hagia_Sophia_Mars_2013.jpg&w=600',
      grad:'linear-gradient(135deg,#c94b4b,#4b134f)' },
    { en:'Syria', ar:'سوريا', city:'Damascus', n:15, flag:'🇸🇾', code:'SY',
      img:'https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Umayyad_Mosque_Damascus.jpg/600px-Umayyad_Mosque_Damascus.jpg&w=600',
      grad:'linear-gradient(135deg,#0f2027,#2c5364)' },
    { en:'Russia', ar:'روسيا', city:'Moscow', n:9, flag:'🇷🇺', code:'RU',
      img:'https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Saint_Basil_Cathedral%2C_Moscow.jpg/600px-Saint_Basil_Cathedral%2C_Moscow.jpg&w=600',
      grad:'linear-gradient(135deg,#232526,#414345)' },
    { en:'Iraq', ar:'العراق', city:'Baghdad', n:11, flag:'🇮🇶', code:'IQ',
      img:'https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Al-Kadhimiya_Mosque.jpg/600px-Al-Kadhimiya_Mosque.jpg&w=600',
      grad:'linear-gradient(135deg,#603813,#b29f94)' },
    { en:'Morocco', ar:'المغرب', city:'Casablanca', n:8, flag:'🇲🇦', code:'MA',
      img:'https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Hassan_Tower_Rabat_Morocco.jpg/600px-Hassan_Tower_Rabat_Morocco.jpg&w=600',
      grad:'linear-gradient(135deg,#f46b45,#eea849)' },
    { en:'Lebanon', ar:'لبنان', city:'Beirut', n:14, flag:'🇱🇧', code:'LB',
      img:'https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Raouche_Rocks.jpg/600px-Raouche_Rocks.jpg&w=600',
      grad:'linear-gradient(135deg,#0f0c29,#302b63)' },
    { en:'Spain', ar:'إسبانيا', city:'Madrid', n:10, flag:'🇪🇸', code:'ES',
      img:'https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Alhambra_Generalife.jpg/600px-Alhambra_Generalife.jpg&w=600',
      grad:'linear-gradient(135deg,#8e0e00,#1f1c18)' },
  ]

  return (
    <main dir={isAr?'rtl':'ltr'} style={{background:'#fff', minHeight:'100vh', fontFamily:'system-ui'}}>
      <header style={{display:'flex', justifyContent:'space-between', padding:'16px 32px', borderBottom:'1px solid #eee', alignItems:'center', position:'sticky', top:0, background:'#fff', zIndex:10}}>
        <Link href={`/${lang}`} style={{letterSpacing:'4px', fontSize:'20px', fontWeight:700, color:'#000', textDecoration:'none'}}>Éclat Dor</Link>
        <Link href={`/${lang}`} style={{fontSize:'12px', border:'1px solid #000', padding:'8px 18px', borderRadius:'20px', color:'#000', textDecoration:'none'}}>{isAr?'الرئيسية':'Home'}</Link>
      </header>

      <section style={{padding:'50px 20px 10px', textAlign:'center'}}>
        <h1 style={{fontSize:'32px', fontWeight:700, margin:0}}>{isAr?'نقاط البيع المعتمدة':'Authorized Stockists'}</h1>
        <p style={{opacity:0.5, fontSize:'13px', marginTop:'8px'}}>8 {isAr?'دول':'Countries'} • 107 {isAr?'نقطة':'Points'}</p>
      </section>

      <section style={{padding:'20px 20px 30px', maxWidth:'1200px', margin:'0 auto'}}>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(260px, 1fr))', gap:'18px'}}>
          {countries.map((c,i)=>(
            <div key={i} style={{background:'#fff', borderRadius:'22px', border:'1px solid #eee', overflow:'hidden', boxShadow:'0 4px 20px rgba(0,0,0,0.05)'}}>
              <div style={{height:'180px', position:'relative', background:c.grad}}>
                <img 
                  src={c.img} 
                  alt={c.en} 
                  style={{width:'100%', height:'100%', objectFit:'cover'}} 
                  onError={(e)=>{
                    (e.target as HTMLImageElement).style.display='none'
                  }}
                />
                {/* لو ما حملت الصورة يبقى التدرج + علم كبير */}
                <div style={{position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'60px', opacity:0.3, pointerEvents:'none'}}>{c.flag}</div>
                <div style={{position:'absolute', inset:0, background:'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 65%)'}}></div>
                
                <div style={{position:'absolute', top:'12px', left:'12px', background:'#111', color:'#fff', fontSize:'10px', padding:'6px 10px', borderRadius:'20px'}}>● {c.n} {isAr?'نقطة':'pts'}</div>
                <div style={{position:'absolute', top:'12px', right:'12px', background:'#fff', width:'30px', height:'30px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'12px', fontWeight:700}}>{c.code}</div>
                
                <div style={{position:'absolute', bottom:'12px', left:'14px', right:'14px', color:'#fff'}}>
                  <div style={{fontSize:'13px', fontWeight:700}}>{c.flag} {isAr?c.ar:c.en} • {c.city}</div>
                </div>
              </div>

              <div style={{padding:'14px 16px', background:'#FAF8F5', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <div>
                  <div style={{fontSize:'14px', fontWeight:700}}>{isAr?c.ar:c.en}</div>
                  <div style={{fontSize:'10px', opacity:0.5}}>📍 {c.city}</div>
                </div>
                <a href={`https://wa.me/905070000440?text=${encodeURIComponent(`Inquiry ${c.en}`)}`} target="_blank" style={{fontSize:'11px', border:'1px solid #000', padding:'6px 14px', borderRadius:'20px', textDecoration:'none', color:'#000', background:'#fff', fontWeight:600}}>تواصل</a>
              </div>
            </div>
          ))}
        </div>

        {/* هاد البنر كان مخفي - هلا بيبين */}
        <div style={{marginTop:'40px', background:'#0A0A0A', borderRadius:'20px', padding:'24px 28px', display:'flex', justifyContent:'space-between', alignItems:'center', color:'#fff'}}>
          <div>
            <div style={{fontSize:'18px', fontWeight:700}}>{isAr?'هل تريد أن تصبح موزعاً؟':'Become a Distributor?'}</div>
            <div style={{fontSize:'12px', opacity:0.6, marginTop:'4px'}}>{isAr?'انضم لشبكتنا العالمية':'Join our global network'}</div>
          </div>
          <a href="https://wa.me/905070000440" target="_blank" style={{background:'#fff', color:'#000', padding:'10px 20px', borderRadius:'30px', textDecoration:'none', fontSize:'13px', fontWeight:700}}>WhatsApp →</a>
        </div>
      </section>
    </main>
  )
}