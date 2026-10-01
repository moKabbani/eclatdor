'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Gallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0)
  return (
    <div>
      <div className="tile" style={{ borderRadius: 26 }}>
        <Image
          key={images[active]}
          src={images[active]}
          alt={alt}
          fill
          sizes="(min-width: 900px) 540px, 100vw"
          preload={active === 0}
        />
      </div>
      {images.length > 1 && (
        <div className="thumbs">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              className="thumb"
              aria-pressed={i === active}
              aria-label={`${alt} ${i + 1}`}
              onClick={() => setActive(i)}
            >
              <Image src={src} alt="" fill sizes="80px" style={{ objectFit: 'cover' }} />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
