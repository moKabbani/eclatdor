// Placeholder brand details — update with the real values.
export const site = {
  name: "Éclat d'or",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.eclatdor.me',
  instagram: 'eclatdor.me',
  email: 'info@eclatdor.me',
  phoneDisplay: '+90 507 000 0440',
  phoneDigits: '905070000440',
  addressLines: ['Atatürk, Güner Sk. No:1', '34303 Küçükçekmece/İstanbul'],
}

export const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.addressLines.join(', '))}`

export function waLink(text?: string) {
  const base = `https://wa.me/${site.phoneDigits}`
  return text ? `${base}?text=${encodeURIComponent(text)}` : base
}
