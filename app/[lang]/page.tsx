'use client'
import Link from 'next/link'
import { useState, use, useEffect } from 'react'

const T: any = {
  ar: {
    home:'الرئيسية', products:'المنتجات', about:'من نحن', catalog:'الكتالوك', private:'العلامة الخاصة', stockists:'نقاط بيع معتمدة', contact:'اتصل بنا', cert:'الشهادات',
    heroSmall:'ÉCLAT DOR CLINICAL', heroTitle:'عناية احترافية تستحقها بشرتك', shop:'استعرض المنتجات ←',
    clinical:'العناية الطبية بالبشرة', trusted:'علامة تجارية موثوقة في العناية المهنية بالبشرة', desc:'إيكلادور هي واحدة من العلامات التجارية الرائدة في تركيا في مجال منتجات العناية المهنية بالبشرة.', viewAll:'عرض الكل →',
    comingSmall:'قريباً', comingTitle:'منتجات سيتم إصدارها قريباً', comingDesc:'ابتكارات جديدة قيد التطوير - ترقبوا الإطلاق', soon:'قريباً', launch:'سيتم الإطلاق قريباً', notify:'أعلمني →',
    follow:'تابعنا', daily:'دليل العناية اليومي',
    art1:'روتين الصباحي', art2:'روتين المسائي', art3:'علاج حب الشباب', art4:'علاج الكلف', art5:'البشرة الحساسة', art6:'كيفية الاستخدام',
    cs1:'سيروم الكولاجين', cs2:'سيروم التفتيح', cs3:'مقشر طبي للوجه',

  },
  tr: {
    home:'Ana Sayfa', products:'Ürünler', about:'Hakkımızda', catalog:'Katalog', private:'Private Label', stockists:'Satış Noktaları', contact:'İletişim', cert:'Sertifikalar',
    heroSmall:'ÉCLAT DOR CLINICAL', heroTitle:'Cildinizin Hak Ettiği Profesyonel Bakım', shop:'Ürünleri Keşfet ←',
    clinical:'KLİNİK CİLT BAKIMI', trusted:'Profesyonel Cilt Bakımında Güvenilir Marka', desc:'Éclat Dor, Türkiye\'de profesyonel cilt bakımı alanında önde gelen markalardan biridir.', viewAll:'Tümünü Gör →',
    comingSmall:'YAKINDA', comingTitle:'Yakında Gelecek Ürünler', comingDesc:'Yeni inovasyonlar geliştiriliyor', soon:'YAKINDA', launch:'Çok yakında', notify:'Haber Ver →',
    follow:'Bizi takip et', daily:'Günlük Bakım Rehberi',
    art1:'Sabah Rutini', art2:'Gece Rutini', art3:'Akne Tedavisi', art4:'Leke Tedavisi', art5:'Hassas Cilt', art6:'Nasıl Kullanılır',
    cs1:'Kolajen Serum', cs2:'Aydınlatıcı Serum', cs3:'Medikal Peeling',
    footerDesc:'Premium kozmetik ortağınız',
  },
  en: {
    home:'Home', products:'Products', about:'About', catalog:'Catalog', private:'Private Label', stockists:'Stockists', contact:'Contact', cert:'Certificates',
    heroSmall:'ÉCLAT DOR CLINICAL', heroTitle:'Professional Care for Your Skin', shop:'Shop Now ←',
    clinical:'CLINICAL SKIN CARE', trusted:'Trusted Brand in Professional Skin Care', desc:'Éclat Dor is one of the leading brands in Turkey in professional skin care.', viewAll:'View All →',
    comingSmall:'COMING SOON', comingTitle:'Coming Soon Products', comingDesc:'New innovations in development - stay tuned', soon:'SOON', launch:'Launching soon', notify:'Notify Me →',
    follow:'Follow us', daily:'Daily Care Guide',
    art1:'Morning Routine', art2:'Night Routine', art3:'Acne Treatment', art4:'Melasma Treatment', art5:'Sensitive Skin', art6:'How to Use',
    cs1:'Collagen Serum', cs2:'Brightening Serum', cs3:'Medical Face Scrub',
    footerDesc:'Your premium cosmetics partner',
  },
  es: {
    home:'Inicio', products:'Productos', about:'Nosotros', catalog:'Catálogo', private:'Marca Privada', stockists:'Distribuidores', contact:'Contacto', cert:'Certificados',
    heroSmall:'ÉCLAT DOR CLINICAL', heroTitle:'Cuidado Profesional para tu Piel', shop:'Comprar Ahora ←',
    clinical:'CUIDADO CLÍNICO', trusted:'Marca de Confianza en Cuidado Profesional', desc:'Éclat Dor es una de las marcas líderes en Turquía en cuidado profesional.', viewAll:'Ver Todo →',
    comingSmall:'PRÓXIMAMENTE', comingTitle:'Próximos Productos', comingDesc:'Nuevas innovaciones en desarrollo', soon:'PRONTO', launch:'Lanzamiento pronto', notify:'Avísame →',
    follow:'Síguenos', daily:'Guía de Cuidado Diario',
    art1:'Rutina Mañana', art2:'Rutina Noche', art3:'Tratamiento Acné', art4:'Tratamiento Melasma', art5:'Piel Sensible', art6:'Cómo Usar',
    cs1:'Suero Colágeno', cs2:'Suero Iluminador', cs3:'Exfoliante Médico',
    footerDesc:'Tu socio cosmético premium',
  },
  ru: {
    home:'Главная', products:'Продукты', about:'О нас', catalog:'Каталог', private:'Private Label', stockists:'Магазины', contact:'Контакты', cert:'Сертификаты',
    heroSmall:'ÉCLAT DOR CLINICAL', heroTitle:'Профессиональный уход для вашей кожи', shop:'Купить ←',
    clinical:'КЛИНИЧЕСКИЙ УХОД', trusted:'Надежный бренд профессионального ухода', desc:'Éclat Dor — один из ведущих брендов в Турции в области профессионального ухода.', viewAll:'Смотреть Все →',
    comingSmall:'СКОРО', comingTitle:'Скоро в продаже', comingDesc:'Новые инновации в разработке', soon:'СКОРО', launch:'Скоро запуск', notify:'Сообщить →',
    follow:'Подписывайтесь', daily:'Ежедневный уход',
    art1:'Утренний уход', art2:'Вечерний уход', art3:'Лечение акне', art4:'Лечение мелазмы', art5:'Чувствительная кожа', art6:'Как использовать',
    cs1:'Сыворотка с коллагеном', cs2:'Осветляющая сыворотка', cs3:'Медицинский скраб',
    footerDesc:'Ваш премиум партнер',
  },
}

function HeroImages() {
  const images = ['/products/vitamin-c/1.png','/products/vitamin-c/2.png','/products/vitamin-c/3.png','/products/vitamin-c/4.png','/products/vitamin-c/5.png']
  const [active, setActive] = useState(0)
  return (
    <div style={{background:'#FDFCF8', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'20px'}}>
      <div style={{width:'100%', height:'480px', background:'#fff', borderRadius:'24px', overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <img src={images[active]} alt="" style={{width:'100%', height:'100%', objectFit:'contain'}} />
      </div>
      <div style={{display:'flex', gap:'8px', marginTop:'14px'}}>
        {images.map((img,i)=>(
          <button key={i} onClick={()=>setActive(i)} style={{width:'50px', height:'50px', borderRadius:'10px', overflow:'hidden', border: active===i?'2px solid #000':'1px solid #ddd', padding:0, cursor:'pointer', opacity: active===i?1:0.6, background:'#fff'}}>
            <img src={img} style={{width:'100%', height:'100%', objectFit:'cover'}} />
          </button>
        ))}
      </div>
    </div>
  )
}

function InstagramSection({ followText }: { followText: string }) {
  const [posts, setPosts] = useState<any[]>([])
  useEffect(() => {
    fetch('/api/instagram').then(r=>r.json()).then(d=>{
      if(d.posts && Array.isArray(d.posts)) setPosts(d.posts)
      else if(Array.isArray(d)) setPosts(d)
    }).catch(()=>{})
  }, [])

  if(!posts.length) return null
  const loopPosts = [...posts,...posts]

  return (
    <section style={{padding:'50px 0', background:'#FAF9F7', borderTop:'1px solid #eee', overflow:'hidden'}}>
      <div style={{display:'flex', justifyContent:'space-between', padding:'0 50px', marginBottom:'24px', alignItems:'center'}}>
        <div style={{display:'flex', gap:'12px', alignItems:'center'}}>
          <div style={{width:'40px', height:'40px', background:'linear-gradient(45deg, #feda75, #d62976, #4f5bd5)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff'}}>📷</div>
          <div><div style={{fontWeight:700}}>@eclatdor.me </div><div style={{fontSize:'11px', opacity:0.5}}>{followText}</div></div>
        </div>
        <a href="https://instagram.com/eclatdor.me" target="_blank" style={{border:'1px solid #000', padding:'8px 18px', borderRadius:'20px', fontSize:'12px', textDecoration:'none', color:'#000'}}>Follow ↗</a>
      </div>
      <div style={{overflow:'hidden'}}>
        <div style={{display:'flex', gap:'16px', width:'max-content', animation:'scroll 40s linear infinite'}}>
          {loopPosts.map((p:any,i)=>(
            <a key={`${p.id}-${i}`} href={p.permalink} target="_blank" style={{width:'260px', height:'340px', borderRadius:'20px', overflow:'hidden', flexShrink:0, display:'block', background:'#fff'}}>
              <img src={p.media_type==='VIDEO'? (p.thumbnail_url || p.media_url) : p.media_url} alt="" style={{width:'100%', height:'100%', objectFit:'cover'}} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params)
  const t = T[lang] || T.en
  const isAr = lang === 'ar'

  const langs = [{code:'ar',label:'العربية'},{code:'tr',label:'TR'},{code:'en',label:'EN'},{code:'es',label:'ES'},{code:'ru',label:'RU'}]
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
  const articles = [
    {slug:'morning-routine', img:'https://images.unsplash.com/photo-1570172619644-dfd03ed1350b?w=600&q=80', title:t.art1},
    {slug:'night-routine', img:'https://images.unsplash.com/photo-1552699611-e2c208d5d9cf?w=600&q=80', title:t.art2},
    {slug:'acne-treatment', img:'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&q=80', title:t.art3},
    {slug:'melasma-treatment', img:'https://images.unsplash.com/photo-1515688594390-b649af70d282?w=600&q=80', title:t.art4},
    {slug:'sensitive-skin', img:'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80', title:t.art5},
    {slug:'how-to-use', img:'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80', title:t.art6},
  ]
  const comingSoon = [
    { name:t.cs1, img:'/comingsoon/collagen.png', fallback:'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80' },
    { name:t.cs2, img:'/comingsoon/brightening.png', fallback:'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&q=80' },
    { name:t.cs3, img:'/comingsoon/scrub.png', fallback:'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&q=80' },
  ]

  return (
    <main dir={isAr?'rtl':'ltr'} style={{background:'#fff', fontFamily:'system-ui'}}>
      <header style={{display:'flex', justifyContent:'space-between', padding:'14px 32px', borderBottom:'1px solid #eee', position:'sticky', top:0, background:'#fff', zIndex:50, alignItems:'center'}}>
        <Link href={`/${lang}`} style={{display:'flex', alignItems:'center'}}>
  <img src="/logo.png" alt="Éclat Dor" style={{height:'72px', width:'auto', objectFit:'contain'}} />
</Link>
        <nav style={{display:'flex', gap:'18px', fontSize:'12px', alignItems:'center'}}>
          {nav.map(n=><Link key={n.label} href={n.href} style={{textDecoration:'none', color: n.black?'#fff':'#000', background: n.black?'#000':'transparent', padding: n.black?'8px 14px':'0', borderRadius: n.black?'20px':'0'}}>{n.label}</Link>)}
        </nav>
        <div style={{display:'flex', gap:'6px'}}>{langs.map(l=><Link key={l.code} href={`/${l.code}`} style={{padding:'5px 10px', borderRadius:'20px', border:'1px solid #000', fontSize:'11px', background: lang===l.code?'#000':'#fff', color: lang===l.code?'#fff':'#000', textDecoration:'none'}}>{l.label}</Link>)}</div>
      </header>

     <section style={{
  position:'relative',
  minHeight:'85vh',
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  backgroundImage:`url('/products/vitamin-c/2.png')`,
  backgroundSize:'cover',
  backgroundPosition:'center',
  overflow:'hidden'
}}>
  {/* طبقة التعتيم */}
  <div style={{
    position:'absolute',
    inset:0,
    background:'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.45))',
    backdropFilter:'blur(1px)'
  }}></div>

  {/* الكتابة فوق الصورة */}
  <div style={{position:'relative', zIndex:2, textAlign:'center', padding:'40px', maxWidth:'800px'}}>
    <p style={{fontSize:'12px', letterSpacing:'5px', color:'#fff', opacity:0.9, marginBottom:'16px'}}>{t.heroSmall}</p>
    <h1 style={{fontSize:'56px', lineHeight:1.15, fontWeight:500, color:'#fff', textShadow:'0 4px 20px rgba(0,0,0,0.3)'}}>{t.heroTitle}</h1>
    <Link href={`/${lang}/products`} style={{background:'#fff', color:'#000', padding:'16px 32px', borderRadius:'30px', textDecoration:'none', display:'inline-block', marginTop:'28px', fontSize:'14px', fontWeight:600}}>{t.shop}</Link>
  </div>
</section>

      <section style={{padding:'90px 20px', background:'#fff', textAlign:'center'}}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'12px', marginBottom:'20px'}}>
          <div style={{width:'30px', height:'1px', background:'#8A9BC4'}}></div>
          <span style={{fontSize:'11px', color:'#8A9BC4', letterSpacing:'2px'}}>{t.clinical}</span>
          <div style={{width:'30px', height:'1px', background:'#8A9BC4'}}></div>
        </div>
        <h2 style={{fontSize:'36px', fontWeight:700, lineHeight:1.3, maxWidth:'700px', margin:'0 auto 20px'}}>{t.trusted}</h2>
        <p style={{fontSize:'14px', opacity:0.6, maxWidth:'720px', margin:'0 auto', lineHeight:'26px'}}>{t.desc}</p>
        <Link href={`/${lang}/products`} style={{background:'#111', color:'#fff', padding:'14px 32px', borderRadius:'30px', textDecoration:'none', display:'inline-block', marginTop:'28px', fontSize:'13px'}}>{t.viewAll}</Link>
      </section>

      <section style={{padding:'80px 50px', background:'#FAF9F7', borderTop:'1px solid #eee'}}>
        <div style={{textAlign:'center', marginBottom:'40px'}}>
          <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'12px', marginBottom:'14px'}}>
            <div style={{width:'30px', height:'1px', background:'#C9A86A'}}></div>
            <span style={{fontSize:'11px', color:'#C9A86A', letterSpacing:'3px', fontWeight:600}}>{t.comingSmall}</span>
            <div style={{width:'30px', height:'1px', background:'#C9A86A'}}></div>
          </div>
          <h2 style={{fontSize:'32px', fontWeight:700, margin:'0 0 10px'}}>{t.comingTitle}</h2>
          <p style={{fontSize:'13px', opacity:0.5}}>{t.comingDesc}</p>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'24px', maxWidth:'1100px', margin:'0 auto'}}>
          {comingSoon.map((p,i)=>(
            <div key={i} style={{background:'#fff', borderRadius:'24px', border:'1px solid #eee', overflow:'hidden', position:'relative'}}>
              <div style={{position:'absolute', top:'14px', left:'14px', background:'#111', color:'#fff', fontSize:'10px', padding:'6px 12px', borderRadius:'20px', zIndex:2}}>{t.soon}</div>
              <div style={{height:'300px', display:'flex', alignItems:'center', justifyContent:'center', padding:'20px', background:'#FDFCF8'}}>
                <img src={p.img} alt={p.name} style={{width:'100%', height:'100%', objectFit:'contain'}} onError={(e)=>(e.target as HTMLImageElement).src=p.fallback} />
              </div>
              <div style={{padding:'18px 20px'}}>
                <h3 style={{margin:0, fontSize:'16px', fontWeight:600}}>{p.name}</h3>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:'14px'}}>
                  <span style={{fontSize:'11px', opacity:0.4}}>{t.launch}</span>
                  <a href={`https://wa.me/905070000440?text=${encodeURIComponent(p.name)}`} target="_blank" style={{fontSize:'11px', border:'1px solid #000', padding:'7px 14px', borderRadius:'20px', textDecoration:'none', color:'#000'}}>{t.notify}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <InstagramSection followText={t.follow} />

      <section style={{padding:'70px 50px', background:'#fff'}}>
        <h2 style={{fontSize:'28px', fontWeight:400}}>{t.daily}</h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'24px', marginTop:'30px'}}>
          {articles.map(a=>(
            <Link key={a.slug} href={`/${lang}/blog/${a.slug}`} style={{background:'#FAF8F5', borderRadius:'24px', overflow:'hidden', textDecoration:'none', color:'#000', border:'1px solid #eee', display:'block'}}>
              <div style={{height:'200px'}}><img src={a.img} alt={a.title} style={{width:'100%', height:'100%', objectFit:'cover'}} /></div>
              <div style={{padding:'16px'}}><h3 style={{margin:0, fontSize:'15px'}}>{a.title}</h3></div>
            </Link>
          ))}
        </div>
      </section>

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
          <div><div style={{fontSize:'12px', opacity:0.35, marginBottom:'18px'}}>Links</div><div style={{display:'flex', flexDirection:'column', gap:'12px', fontSize:'14px'}}><Link href={`/${lang}/products`} style={{color:'#fff', textDecoration:'none', opacity:0.8}}>{t.products}</Link><Link href={`/${lang}/certificates`} style={{color:'#fff', textDecoration:'none', opacity:0.8}}>{t.cert}</Link></div></div>
          <div><div style={{fontSize:'12px', opacity:0.35, marginBottom:'18px'}}>Products</div><div style={{display:'flex', flexDirection:'column', gap:'12px', fontSize:'14px', opacity:0.7}}><span>Professional Care</span><span>Serums</span><span>Creams</span></div></div>
          <div style={{direction:'ltr', textAlign:'left'}}>
            <div style={{fontSize:'12px', opacity:0.35, marginBottom:'18px'}}>Contact</div>
            <div style={{fontSize:'14px', lineHeight:'22px'}}>
              <div style={{opacity:0.8}}>info@eclatdor.me</div>
              <div style={{opacity:0.8, marginTop:'8px', fontFamily:'monospace'}}>+90 507 000 0440</div>
              <a href="https://maps.google.com/?q=Şirinevler Bahçelievler Istanbul" target="_blank" style={{display:'inline-block', marginTop:'16px', border:'1px solid #333', padding:'8px 16px', borderRadius:'20px', fontSize:'11px', color:'#fff', textDecoration:'none', opacity:0.8}}>View on Map ↗</a>
            </div>
          </div>
        </div>
        <div style={{display:'flex', justifyContent:'space-between', paddingTop:'18px', fontSize:'11px', opacity:0.3}}><span>© 2026 Éclat Dor</span><span>{lang.toUpperCase()}</span></div>
      </footer>
      <a href="https://wa.me/905070000440" target="_blank" style={{position:'fixed', bottom:'24px', right:'24px', background:'#25D366', width:'60px', height:'60px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 6px 24px rgba(37,211,102,0.4)', zIndex:99}}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M19.05 4.91A9.82 0 0 0 12.03 2C6.49 2 2 6.48 2 12.04a9.82 0 0 0 1.35 4.96L2 22l5.18-1.35A9.82 0 0 0 12.03 22c5.54 0 10.03-4.48 10.03-10.04 0-2.68-1.04-5.2-2.9-7.05Zm-7.02 13.7c-1.43 0-2.84-.38-4.08-1.1l-.29-.17-3.08.81.82-3L5.2 14.66a8.06 0 0 1-1.24-4.3c0-4.45 3.62-8.07 8.07-8.07 2.16 0 4.19.84 5.71 2.36a8.02 0 0 1 2.36 5.71c0 4.45-3.62 8.07-8.07 8.07Zm4.42-6.04c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.1-.1.24-.26.36-.39.12-.13.16-.22.24-.37.08-.15.04-.28-.02-.39-.06-.11-.54-1.3-.74-1.78-.2-.46-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.28-.22.22-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.57.18 1.09.16 1.5.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"/></svg>
      </a>
      <style>{`@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-33.33%); } }`}</style>
    </main>
  )
}