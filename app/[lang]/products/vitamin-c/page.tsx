'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function VitaminCPage({ params }: { params: { lang: string } }) {
  const lang = params.lang
  const isAr = lang === 'ar'

  // حط كل الصور هون
  const images = [
    '/products/vitamin-c/1.png',
    '/products/vitamin-c/2.png',
    '/products/vitamin-c/3.png',
    '/products/vitamin-c/4.png',
    '/products/vitamin-c/5.png',
    '/products/vitamin-c/6.png', // ضيف قد ما بدك
  ]

  const [activeImg, setActiveImg] = useState(0)

  return (
    <main dir={isAr?'rtl':'ltr'} style={{background:'#fff', padding:'60px 50px'}}>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'60px', maxWidth:'1200px', margin:'0 auto'}}>

        {/* قسم الصور */}
        <div>
          {/* الصورة الكبيرة */}
          <div style={{width:'100%', height:'550px', background:'#FDFCF8', borderRadius:'24px', overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'20px'}}>
            <img src={images[activeImg]} alt="Vitamin C Serum" style={{width:'100%', height:'100%', objectFit:'contain'}} />
          </div>

          {/* الصور الصغيرة - Thumbnails */}
          <div style={{display:'flex', gap:'12px', overflowX:'auto', paddingBottom:'10px'}}>
            {images.map((img,i)=>(
              <button
                key={i}
                onClick={()=>setActiveImg(i)}
                style={{
                  width:'90px',
                  height:'90px',
                  borderRadius:'12px',
                  overflow:'hidden',
                  border: activeImg===i?'2px solid #000':'1px solid #ddd',
                  padding:0,
                  cursor:'pointer',
                  opacity: activeImg===i?1:0.6,
                  background:'#fff',
                  flexShrink:0
                }}
              >
                <img src={img} style={{width:'100%', height:'100%', objectFit:'cover'}} />
              </button>
            ))}
          </div>
        </div>

        {/* قسم التفاصيل */}
        <div>
          <h1 style={{fontSize:'32px', marginBottom:'20px'}}>سيروم فيتامين سي 5%</h1>

          <div style={{border:'1px solid #eee', borderRadius:'16px', padding:'24px', marginBottom:'24px'}}>
            <h3 style={{margin:'0 0 12px', fontSize:'16px'}}>المكونات الفعالة</h3>
            <p style={{margin:0, fontSize:'14px', opacity:0.7}}>Vitamin C 15%, Ferulic Acid, Vitamin E, Hyaluronic Acid</p>
          </div>

          <a href="https://wa.me/905070000440?text=Vitamin C Serum" target="_blank" style={{
            background:'#000',
            color:'#fff',
            padding:'16px 32px',
            borderRadius:'30px',
            textDecoration:'none',
            display:'block',
            textAlign:'center',
            fontSize:'16px',
            fontWeight:600,
            marginBottom:'16px'
          }}>
            ← اطلب عبر واتساب
          </a>

          <p style={{fontSize:'13px', opacity:0.6, textAlign:'center'}}>
            شحن يومي • دفع عند الاستلام • منتج أصلي 100%
          </p>

          <Link href={`/${lang}/products`} style={{display:'block', textAlign:'center', marginTop:'24px', fontSize:'14px', color:'#000'}}>
            ← العودة لكل المنتجات
          </Link>
        </div>

      </div>
    </main>
  )
}