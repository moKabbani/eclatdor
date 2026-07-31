'use client'
import Link from 'next/link'
import { useState, use, useEffect } from 'react'

const T: any = {
  ar: {
    heroSmall:'ÉCLAT DOR CLINICAL', heroTitle:'عناية احترافية تستحقها بشرتك', shop:'استعرض المنتجات ←',
    clinical:'العناية الطبية بالبشرة', trusted:'علامة تجارية موثوقة في العناية المهنية بالبشرة', desc:'إيكلادور هي واحدة من العلامات التجارية الرائدة في تركيا في مجال منتجات العناية المهنية بالبشرة.', viewAll:'عرض الكل →',
    comingSmall:'قريباً', comingTitle:'منتجات سيتم إصدارها قريباً', comingDesc:'ابتكارات جديدة قيد التطوير - ترقبوا الإطلاق', soon:'قريباً', launch:'سيتم الإطلاق قريباً', notify:'أعلمني →',
    follow:'تابعنا', daily:'دليل العناية اليومي',
    art1:'روتين الصباحي', art2:'روتين المسائي', art3:'علاج حب الشباب', art4:'علاج الكلف', art5:'البشرة الحساسة', art6:'كيفية الاستخدام',
    cs1:'سيروم الكولاجين', cs2:'سيروم التفتيح', cs3:'مقشر طبي للوجه',
  },
  tr: {
    heroSmall:'ÉCLAT DOR CLINICAL', heroTitle:'Cildinizin Hak Ettiği Profesyonel Bakım', shop:'Ürünleri Keşfet ←',
    clinical:'KLİNİK CİLT BAKIMI', trusted:'Profesyonel Cilt Bakımında Güvenilir Marka', desc:'Éclat Dor, Türkiye\'de profesyonel cilt bakımı alanında önde gelen markalardan biridir.', viewAll:'Tümünü Gör →',
    comingSmall:'YAKINDA', comingTitle:'Yakında Gelecek Ürünler', comingDesc:'Yeni inovasyonlar geliştiriliyor', soon:'YAKINDA', launch:'Çok yakında', notify:'Haber Ver →',
    follow:'Bizi takip et', daily:'Günlük Bakım Rehberi',
    art1:'Sabah Rutini', art2:'Gece Rutini', art3:'Akne Tedavisi', art4:'Leke Tedavisi', art5:'Hassas Cilt', art6:'Nasıl Kullanılır',
    cs1:'Kolajen Serum', cs2:'Aydınlatıcı Serum', cs3:'Medikal Peeling',
  },
  en: {
    heroSmall:'ÉCLAT DOR CLINICAL', heroTitle:'Professional Care for Your Skin', shop:'Shop Now ←',
    clinical:'CLINICAL SKIN CARE', trusted:'Trusted Brand in Professional Skin Care', desc:'Éclat Dor is one of the leading brands in Turkey in professional skin care.', viewAll:'View All →',
    comingSmall:'COMING SOON', comingTitle:'Coming Soon Products', comingDesc:'New innovations in development - stay tuned', soon:'SOON', launch:'Launching soon', notify:'Notify Me →',
    follow:'Follow us', daily:'Daily Care Guide',
    art1:'Morning Routine', art2:'Night Routine', art3:'Acne Treatment', art4:'Melasma Treatment', art5:'Sensitive Skin', art6:'How to Use',
    cs1:'Collagen Serum', cs2:'Brightening Serum', cs3:'Medical Face Scrub',
  },
  es: {
    heroSmall:'ÉCLAT DOR CLINICAL', heroTitle:'Cuidado Profesional para tu Piel', shop:'Comprar Ahora ←',
    clinical:'CUIDADO CLÍNICO', trusted:'Marca de Confianza en Cuidado Profesional', desc:'Éclat Dor es una de las marcas líderes en Turquía en cuidado profesional.', viewAll:'Ver Todo →',
    comingSmall:'PRÓXIMAMENTE', comingTitle:'Próximos Productos', comingDesc:'Nuevas innovaciones en desarrollo', soon:'PRONTO', launch:'Lanzamiento pronto', notify:'Avísame →',
    follow:'Síguenos', daily:'Guía de Cuidado Diario',
    art1:'Rutina Mañana', art2:'Rutina Noche', art3:'Tratamiento Acné', art4:'Tratamiento Melasma', art5:'Piel Sensible', art6:'Cómo Usar',
    cs1:'Suero Colágeno', cs2:'Suero Iluminador', cs3:'Exfoliante Médico',
  },
  ru: {
    heroSmall:'ÉCLAT DOR CLINICAL', heroTitle:'Профессиональный уход для вашей кожи', shop:'Купить ←',
    clinical:'КЛИНИЧЕСКИЙ УХОД', trusted:'Надежный бренд профессионального ухода', desc:'Éclat Dor — один из ведущих брендов в Турции в области профессионального ухода.', viewAll:'Смотреть Все →',
    comingSmall:'СКОРО', comingTitle:'Скоро в продаже', comingDesc:'Новые инновации в разработке', soon:'СКОРО', launch:'Скоро запуск', notify:'Сообщить →',
    follow:'Подписывайтесь', daily:'Ежедневный уход',
    art1:'Утренний уход', art2:'Вечерний уход', art3:'Лечение акне', art4:'Лечение мелазмы', art5:'Чувствительная кожа', art6:'Как использовать',
    cs1:'Сыворотка с коллагеном', cs2:'Осветляющая сыворотка', cs3:'Медицинский скраб',
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
    <main dir={isAr?'rtl':'ltr'}>
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
        <div style={{
          position:'absolute',
          inset:0,
          background:'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.45))',
          backdropFilter:'blur(1px)'
        }}></div>

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
    </main>
  )
}