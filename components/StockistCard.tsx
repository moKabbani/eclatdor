'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { CloseIcon } from './icons'

export default function StockistCard({
  code,
  country,
  city,
  phone,
  soon,
  close,
}: {
  code: string
  country: string
  city: string
  phone?: string
  soon: string
  close: string
}) {
  const dialog = useRef<HTMLDialogElement>(null)
  const titleId = `stockist-${code}`

  return (
    <article className="panel stockist-card flex flex-col">
      <Image
        src={`/stockists/${code.toLowerCase()}.jpg`}
        alt=""
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="stockist-img"
      />
      <span className="muted text-sm" dir="ltr">{code}</span>
      <h2 className="h-card mt-2">
        <button type="button" className="stockist-open" onClick={() => dialog.current?.showModal()}>
          {country}
        </button>
      </h2>
      <p className="muted">{city}</p>

      <dialog
        ref={dialog}
        className="stockist-dialog"
        aria-labelledby={titleId}
        // A click on the dialog element itself (not its content) is a click on the backdrop.
        onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
      >
        <div className="stockist-dialog-body">
          <button type="button" className="stockist-close" aria-label={close} onClick={() => dialog.current?.close()}>
            <CloseIcon />
          </button>
          <h2 id={titleId} className="h-card">{country}</h2>
          <p className="muted">{city}</p>
          {phone ? (
            <p className="stockist-phone mt-5" dir="ltr">{phone}</p>
          ) : (
            <p className="muted mt-5">{soon}</p>
          )}
        </div>
      </dialog>
    </article>
  )
}
