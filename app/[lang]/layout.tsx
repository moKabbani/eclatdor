import Link from 'next/link'
import '../globals.css'

const T: any = {
  ar: {
    home:'الرئيسية', products:'المنتجات', about:'من نحن', catalog:'الكتالوك', private:'العلامة الخاصة', stockists:'نقاط بيع معتمدة', contact:'اتصل بنا', cert:'الشهادات',
    footerDesc:'شريكك المتميز في عالم التجميل',
  },
  tr: {
    home:'Ana Sayfa', products:'Ürünler', about:'Hakkımızda', catalog:'Katalog', private:'Private Label', stockists:'Satış Noktaları', contact:'İletişim', cert:'Sertifikalar',
    footerDesc:'Premium kozmetik ortağınız',
  },
  en: {
    home:'Home', products:'Products', about:'About', catalog:'Catalog', private:'Private Label', stockists:'Stockists', contact:'Contact', cert:'Certificates',
    footerDesc:'Your premium cosmetics partner',
  },
  es: {
    home:'Inicio', products:'Productos', about:'Nosotros', catalog:'Catálogo', private:'Marca Privada', stockists:'Distribuidores', contact:'Contacto', cert:'Certificados',
    footerDesc:'Tu socio cosmético premium',
  },
  ru: {
    home:'Главная', products:'Продукты', about:'О нас', catalog:'Каталог', private:'Private Label', stockists:'Магазины', contact:'Контакты', cert:'Сертификаты',
    footerDesc:'Ваш премиум партнер',
  },
}

export default async function LangLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const t = T[lang] || T.en
const isAr = lang === 'ar'

const langs = [
  { code: 'ar', label: 'العربية' },
  { code: 'tr', label: 'TR' },
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'ru', label: 'RU' },
]
  const nav = [
    {label:t.home, href:`/${lang}`},
    {label:t.products, href:`/${lang}/products`},
    {label:t.about, href:`/${lang}/about`},
    {label:t.catalog, href:`/${lang}/catalog`},
    {label:t.private, href:`/${lang}/private-label`, black:true},
    {label:t.stockists, href:`/${lang}/stockists`},
    {label:t.contact, href:`/${lang}/contact`},
    {label:t.cert, href:`/${lang}/certificates`},
  ]

  return (
    <html lang={lang} dir={isAr?'rtl':'ltr'}>
      <body style={{background:'#eaeaea', fontFamily:'system-ui', margin:0}}>
        <header style={{display:'flex', justifyContent:'space-between', padding:'14px 32px', borderBottom:'1px solid #ddd', position:'sticky', top:0, background:'#eaeaea', zIndex:50, alignItems:'center'}}>
          <Link href={`/${lang}`} style={{display:'flex', alignItems:'center'}}>
            <img src="/logo.png" alt="Éclat Dor" style={{height:'45px', width:'auto', objectFit:'contain', cursor:'pointer'}} />
          </Link>
          <nav style={{display:'flex', gap:'18px', fontSize:'12px', alignItems:'center'}}>
            {nav.map(n=><Link key={n.label} href={n.href} style={{textDecoration:'none', color: n.black?'#fff':'#000', background: n.black?'#000':'transparent', padding: n.black?'8px 14px':'0', borderRadius: n.black?'20px':'0', fontWeight:500}}>{n.label}</Link>)}
          </nav>
          <div style={{display:'flex', gap:'6px'}}>{langs.map(l=><Link key={l.code} href={`/${l.code}`} style={{padding:'5px 10px', borderRadius:'20px', border:'1px solid #000', fontSize:'11px', background: lang===l.code?'#000':'#fff', color: lang===l.code?'#fff':'#000', textDecoration:'none'}}>{l.label}</Link>)}</div>
        </header>

        {children}

        <footer style={{background:'#0A0A0A', color:'#fff', padding:'60px 50px 24px', direction:'ltr'}}>
          <div style={{display:'grid', gridTemplateColumns:'1.6fr 1fr 1fr 1.6fr', gap:'40px', paddingBottom:'40px', borderBottom:'1px solid #1E1E1E', textAlign:'left'}}>
            <div style={{direction: isAr?'rtl':'ltr'}}>
              <div style={{border:'2px solid #fff', display:'inline-block', padding:'7px 16px', fontWeight:800, letterSpacing:'2px', fontSize:'18px'}}>Éclat Dor</div>
              <p style={{fontSize:'13px', opacity:0.5, marginTop:'14px'}}>{t.footerDesc}</p>
              <div style={{marginTop:'20px', fontSize:'12px', opacity:0.6, lineHeight:'20px'}}>
                <div>📍 Şirinevler Mah. Mareşal Fevzi Çakmak Cad.</div>
                <div>No: 16 / Bahçelievler - İstanbul / Türkiye</div>
              </div>
            </div>
            <div>
              <div style={{fontSize:'12px', opacity:0.35, marginBottom:'18px'}}>Links</div>
              <div style={{display:'flex', flexDirection:'column', gap:'12px', fontSize:'14px'}}>
                <Link href={`/${lang}/products`} style={{color:'#fff', textDecoration:'none', opacity:0.8}}>{t.products}</Link>
                <Link href={`/${lang}/certificates`} style={{color:'#fff', textDecoration:'none', opacity:0.8}}>{t.cert}</Link>
              </div>
            </div>
            <div>
              <div style={{fontSize:'12px', opacity:0.35, marginBottom:'18px'}}>Products</div>
              <div style={{display:'flex', flexDirection:'column', gap:'12px', fontSize:'14px', opacity:0.7}}>
                <span>Professional Care</span>
                <span>Serums</span>
                <span>Creams</span>
              </div>
            </div>
            <div style={{direction:'ltr', textAlign:'left'}}>
              <div style={{fontSize:'12px', opacity:0.35, marginBottom:'18px'}}>Contact</div>
              <div style={{fontSize:'14px', lineHeight:'22px'}}>
                <div style={{opacity:0.8}}>info@eclatdor.me</div>
                <div style={{opacity:0.8, marginTop:'8px', fontFamily:'monospace'}}>+90 507 000 0440</div>
              
                <a href="https://maps.google.com/?q=Şirinevler Bahçelievler Istanbul"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display:'inline-block',
    marginTop:'16px',
    border:'1px solid #333',
    padding:'8px 16px',
    borderRadius:'20px',
    fontSize:'11px',
    color:'#fff',
    textDecoration:'none',
    opacity:0.8
  }}
>
  View on Map </a>

              </div>
            </div>
          </div>
          <div style={{display:'flex', justifyContent:'space-between', paddingTop:'18px', fontSize:'11px', opacity:0.3}}>
            <span>© 2026 Éclat Dor</span>
            <span>{lang?.toUpperCase?.() ?? 'EN'}</span>
          </div>
        </footer>

        <a href="https://wa.me/905070000440"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    position:'fixed',
    bottom:'24px',
    right:'24px',
    background:'#25D366',
    width:'60px',
    height:'60px',
    borderRadius:'50%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    boxShadow:'0 6px 24px rgba(37,211,102,0.4)',
    zIndex:99
  }}
>
  <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
    <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.49 2 2 6.48 2 12.04a9.82 9.82 0 0 0 1.35 4.96L2 22l5.18-1.35A9.82 9.82 0 0 0 12.03 22c5.54 0 10.03-4.48 10.03-10.04 0-2.68-1.04-5.2-2.9-7.05Z"/>
  </svg>
</a>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M19.05 4.91A9.82 0 0 0 12.03 2C6.49 2 6.48 2 12.04a9.82 0 0 0 1.35 4.96L2 22l5.18-1.35A9.82 0 0 12.03 22c5.54 0 10.03-4.48 10.03-10.04 0-2.68-1.04-5.2-2.9-7.05Zm-7.02 13.7c-1.43 0-2.84-.38-4.08-1.1l-.29-.17-3.08.81.82-3L5.2 14.66a8.06 0 0 1-1.24-4.3c0-4.45 3.62-8.07 8.07-8.07 2.16 0 4.19.84 5.71 2.36a8.02 0 0 1 2.36 5.71c0 4.45-3.62 8.07-8.07 8.07Zm4.42-6.04c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.1-.1.24-.26.36-.39.12-.13.16-.22.24-.37.08-.15.04-.28-.02-.39-.06-.11-.54-1.3-.74-1.78-.2-.46-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.28-.22.22-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.57.18 1.09.16 1.5.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"/></svg>
        
        <style>{`@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-33.33%); } }`}</style>
      </body>
    </html>
  )
} 