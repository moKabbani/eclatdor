'use client'
import Link from 'next/link'
import { use } from 'react'

const DATA: any = {
  'vitamin-c': {
    ar:'سيروم فيتامين سي', tr:'C Vitamini Serumu', en:'Vitamin C Serum',
    img:'/products/vitamin-c/1.png', fallback:'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600',
    desc:'سيروم فيتامين C بتركيز 15% لتفتيح البشرة ومحاربة التصبغات والكلف. يمنحك نضارة فورية ويوحد لون البشرة. تركيبة احترافية للعيادات.',
    benefits:['تفتيح وتوحيد لون البشرة','محاربة التصبغات والكلف','مضاد أكسدة قوي','نضارة فورية'],
    use:'ضع 3-4 قطرات صباحاً على بشرة نظيفة قبل واقي الشمس.',
    ingr:'Vitamin C 15%, Ferulic Acid, Vitamin E, Hyaluronic Acid'
  },
  'retinol': {
    ar:'سيروم الريتينول', tr:'Retinol Serumu', en:'Retinol Serum',
    img:'/products/retinol/1.png', fallback:'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600',
    desc:'ريتينول نقي 0.5% لتجديد الخلايا ومحاربة التجاعيد والخطوط الدقيقة. يحفز الكولاجين ويشد البشرة.',
    benefits:['يجدد الخلايا','يحارب التجاعيد','يشد البشرة','يوحد الملمس'],
    use:'استخدم مساءً فقط 2-3 مرات بالأسبوع.',
    ingr:'Retinol 0.5%, Bakuchiol, Vitamin E'
  },
  'cleanser': {
    ar:'غسول بشرة', tr:'Yüz Temizleme Jeli', en:'Face Cleanser Gel',
    img:'/products/cleanser/1.png', fallback:'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600',
    desc:'غسول لطيف ينظف المسام بعمق بدون تجفيف البشرة. مناسب لجميع أنواع البشرة.',
    benefits:['ينظف المسام بعمق','لا يجفف البشرة','يزيل المكياج','لجميع أنواع البشرة'],
    use:'استخدم صباحاً ومساءً مع تدليك لطيف.',
    ingr:'Salicylic Acid, Tea Tree, Aloe Vera'
  },
  'hyaluronic': {
    ar:'سيروم الهيالورونيك', tr:'Hyaluronik Asit Serumu', en:'Hyaluronic Acid Serum',
    img:'/products/hyaluronic/1.png', fallback:'https://images.unsplash.com/photo-1617897903246-719242758050?w=600',
    desc:'ترطيب عميق 72 ساعة بحمض الهيالورونيك النقي. يملأ الخطوط الدقيقة ويمنح امتلاء طبيعي.',
    benefits:['ترطيب 72 ساعة','يملأ الخطوط','امتلاء طبيعي','للبشرة الجافة'],
    use:'ضع 4 قطرات صباحاً ومساءً على بشرة رطبة.',
    ingr:'Hyaluronic Acid, Vitamin B5, Glycerin'
  },
  'niacinamide': {
    ar:'سيروم نياسيناميد', tr:'Niacinamide Serumu', en:'Niacinamide Serum',
    img:'/products/niacinamide/1.png', fallback:'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600',
    desc:'يقلص المسام وينظم إفراز الدهون ويوحد لون البشرة. مثالي للبشرة الدهنية والمختلطة.',
    benefits:['يقلص المسام','ينظم الدهون','يوحد اللون','للبشرة الدهنية'],
    use:'استخدم صباحاً ومساءً.',
    ingr:'Niacinamide 10%, Zinc 1%, Hyaluronic'
  },
  'salicylic': {
    ar:'سيروم الساليسيليك أسيد', tr:'Salisilik Asit Serumu', en:'Salicylic Acid Serum',
    img:'/products/salicylic/1.png', fallback:'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600',
    desc:'لعلاج حب الشباب والرؤوس السوداء والمسام الواسعة. تركيز 2% ساليسيليك أسيد نقي يقشر بلطف وينظف المسام بعمق.',
    benefits:['يعالج حب الشباب','يزيل الرؤوس السوداء','يقلص المسام','ينظم الدهون'],
    use:'استخدم مساءً 2-3 مرات بالأسبوع. 3 قطرات على بشرة نظيفة.',
    ingr:'Salicylic Acid 2%, Niacinamide, Zinc, Tea Tree Oil'
  },
  'moisturizer': {
    ar:'كريم ترطيب', tr:'Nemlendirici Krem', en:'Moisturizing Cream',
    img:'/products/moisturizer/1.png', fallback:'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600',
    desc:'كريم ترطيب عميق للبشرة الجافة والحساسة بزبدة الشيا والسيراميد. يقوي حاجز البشرة ويحميها.',
    benefits:['ترطيب 48 ساعة','يقوي حاجز البشرة','بدون عطور','للحساسة'],
    use:'يستخدم صباحاً ومساءً على بشرة نظيفة.',
    ingr:'Ceramide, Shea Butter, Hyaluronic Acid, Panthenol'
  },
  'sunscreen': {
    ar:'واقي شمسي SPF 50+', tr:'Güneş Koruyucu SPF 50+', en:'Sunscreen SPF 50+',
    img:'/products/sunscreen/1.png', fallback:'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600',
    desc:'حماية عالية SPF 50+ بدون لمعان أو آثار بيضاء، مناسب تحت المكياج. تركيبة خفيفة وسريعة الامتصاص.',
    benefits:['حماية SPF 50+','بدون آثار بيضاء','مقاوم للماء','تحت المكياج'],
    use:'ضع كمية وفيرة قبل 15 دقيقة من التعرض للشمس.',
    ingr:'SPF 50+, UVA/UVB Filters, Vitamin E, Aloe Vera'
  },
  'brightening': {
    ar:'كريم تفتيح', tr:'Aydınlatıcı Krem', en:'Brightening Cream',
    img:'/products/brightening/1.png', fallback:'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600',
    desc:'كريم تفتيح ليلي يعالج الكلف والتصبغات بتركيبة الأربوتين والنياسيناميد القوية.',
    benefits:['يفتح البشرة','يعالج الكلف','يوحد اللون','ترطيب ليلي'],
    use:'يستخدم مساءً فقط على بشرة نظيفة.',
    ingr:'Alpha Arbutin, Niacinamide, Kojic Acid, Vitamin C'
  },
  'cell-renewal': {
    ar:'سيروم تجديد الخلايا', tr:'Hücre Yenileyici Serum', en:'Cell Renewal Serum',
    img:'/products/cell-renewal/1.png', fallback:'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600',
    desc:'سيروم تجديد الخلايا بالكولاجين البحري والببتيدات لشد البشرة وملء التجاعيد وإعادة الشباب.',
    benefits:['يجدد الخلايا','يشد البشرة','يملأ التجاعيد','كولاجين بحري'],
    use:'استخدم مساءً 4 قطرات على الوجه والرقبة.',
    ingr:'Marine Collagen, Peptides, Retinol, Hyaluronic Acid'
  },
}

export default function ProductDetail({ params }: { params: Promise<{ lang: string, slug: string }> }) {
  const { lang, slug } = use(params)
  const isAr = lang === 'ar'
  const p = DATA[slug] || DATA['vitamin-c']
  const name = isAr? p.ar : lang==='tr'? p.tr : p.en

  return (
    <main dir={isAr?'rtl':'ltr'} className="bg-[#FDFCF8] min-h-screen">
      <header className="flex justify-between items-center px-8 py-4 bg-white border-b border-black/5 sticky top-0 z-20">
        <Link href={`/${lang}`} className="font-serif tracking- font-bold no-underline text-black text-">ÉCLAT DOR</Link>
        <Link href={`/${lang}/products`} className="text- border border-black px-4 py-2 rounded-full no-underline text-black">{isAr?'المنتجات':'Products'}</Link>
      </header>

      <div className="max-w- mx-auto px-6 md:px-12 py-10 grid md:grid-cols-2 gap-12">
        {/* صورة */}
        <div>
          <div className="bg-[#FAF6F3] rounded- h- flex items-center justify-center p-10 border border-black/5">
            <img src={p.img} alt={name} className="w-full h-full object-contain" onError={(e)=>(e.target as HTMLImageElement).src=p.fallback} />
          </div>
          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="bg-[#FAF6F3] rounded- h- p-3 border flex items-center justify-center"><img src={p.img} className="h-full object-contain" onError={(e)=>(e.target as HTMLImageElement).src=p.fallback} /></div>
            <div className="bg-[#FAF6F3] rounded- h- p-3 border flex items-center justify-center opacity-60"><img src={p.img} className="h-full object-contain" /></div>
            <div className="bg-[#FAF6F3] rounded- h- p-3 border flex items-center justify-center opacity-60"><img src={p.img} className="h-full object-contain" /></div>
          </div>
        </div>

        {/* تفاصيل */}
        <div>
          <div className="text- tracking- text-[#C9A86A] font-semibold">ÉCLAT DOR PROFESSIONAL</div>
          <h1 className="text- font-bold mt-3 leading-tight">{name}</h1>
          <p className="text- leading-7 opacity-70 mt-5">{p.desc}</p>

          <div className="mt-8">
            <h3 className="font-bold text-">✨ الفوائد الرئيسية</h3>
            <div className="grid grid-cols-2 gap-2 mt-3">
              {p.benefits.map((b:string,i:number)=>(
                <div key={i} className="bg-white border border-black/5 rounded- px-4 py-3 text-">✓ {b}</div>
              ))}
            </div>
          </div>

          <div className="mt-6 bg-white border border-black/5 rounded- p-5">
            <h4 className="font-bold text-">طريقة الاستخدام</h4>
            <p className="text- opacity-60 mt-2 leading-5">{p.use}</p>
          </div>

          <div className="mt-4 bg-white border border-black/5 rounded- p-5">
            <h4 className="font-bold text-">المكونات الفعالة</h4>
            <p className="text- opacity-60 mt-2">{p.ingr}</p>
          </div>

          <div className="flex gap-3 mt-8">
            <a href={`https://wa.me/905070000440?text=${encodeURIComponent(name + ' - أريد الطلب')}`} target="_blank" className="flex-1 bg-black text-white text-center py-4 rounded-full text- font-bold no-underline">اطلب عبر واتساب →</a>
          </div>
          <div className="text- opacity-40 text-center mt-3">شحن يومي • دفع عند الاستلام • منتج أصلي 100%</div>

          <Link href={`/${lang}/products`} className="block text-center mt-6 text- underline text-black">← العودة لكل المنتجات</Link>
        </div>
      </div>
    </main>
  )
}