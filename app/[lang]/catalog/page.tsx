import Link from 'next/link'

export default function CatalogPage() {
  return (
    <main dir="rtl" className="p-16 text-center bg-[#FDFCF8] min-h-screen">
      <h1 className="text-4xl font-serif">كتالوك Eclat Dor</h1>
      <p className="mt-4 opacity-60">حملي كتالوك كامل بكل منتجاتنا الـ 10</p>
      <div className="max-w-md mx-auto mt-10 bg-white border rounded- p-8">
        <div className="bg-[#F6F3EE] h-64 rounded-xl flex items-center justify-center mb-6">📖 Eclat Dor CATALOG 2026</div>
        <a href="/catalog.pdf" download className="bg-black text-white px-10 py-4 rounded-full inline-block w-full">تحميل الكتالوك PDF 📥</a>
        <p className="text-xs opacity-40 mt-4">يمكنك إرساله للزبائن على واتساب مباشرة</p>
      </div>
      <p className="mt-10 text-sm">بدك أعملك ملف PDF حقيقي بتصاميمك؟ ابعتيلي صور باقي المنتجات!</p>
    </main>
  )
}