// Placeholder brand details — update with the real values.
export const site = {
  name: "Éclat d'or",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.eclatdor.me',
  instagram: 'eclatdor',
  email: 'info@eclatdor.me',
  phoneDisplay: '+90 212 555 01 23',
  phoneDigits: '902125550123',
  addressLines: ['Maslak Mahallesi, Büyükdere Caddesi No:1', 'Sarıyer, İstanbul, Türkiye'],
}

export const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.addressLines.join(', '))}`

export function waLink(text?: string) {
  const base = `https://wa.me/${site.phoneDigits}`
  return text ? `${base}?text=${encodeURIComponent(text)}` : base
}
