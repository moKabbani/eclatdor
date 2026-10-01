'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Logo from './Logo'

type Stage = 'local' | 'remote' | 'none'

/**
 * Photo for a "coming soon" product. Tries, in order:
 * 1. your own file in /public/comingsoon (if it exists),
 * 2. the temporary stock photo,
 * 3. the branded placeholder, so a dead link never shows a broken image.
 */
export default function SoonPhoto({
    alt,
    hasLocal,
    local,
    remote,
}: {
    alt: string
    hasLocal: boolean
    local: string
    remote: string
}) {
    const [stage, setStage] = useState<Stage>(hasLocal ? 'local' : 'remote')
    const img = useRef<HTMLImageElement>(null)

    // If the stock photo failed before the page became interactive, catch that here.
    useEffect(() => {
        const el = img.current
        if (stage === 'remote' && el && el.complete && el.naturalWidth === 0) setStage('none')
    }, [stage])

    if (stage === 'local') {
        return (
            <Image
                src={local}
                alt={alt}
                fill
                sizes="(min-width: 1200px) 380px, (min-width: 640px) 33vw, 90vw"
                onError={() => setStage('remote')}
            />
        )
    }
    if (stage === 'remote') {
        return (
            // eslint-disable-next-line @next/next/no-img-element -- temporary stock photo from an external host
            <img
                ref={img}
                src={remote}
                alt={alt}
                loading="lazy"
                onError={() => setStage('none')}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
        )
    }
    return (
        <div className="placeholder-tile">
            <Logo height={44} />
        </div>
    )
}