'use client'

import { useState, type FormEvent } from 'react'
import type { Dict } from '@/lib/dict'
import { site, waLink } from '@/lib/site'
import { CheckIcon } from './icons'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function PrivateLabelForm({ d }: { d: Dict['privateLabel'] }) {
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      const data: { success?: string | boolean } = await res.json().catch(() => ({}))
      const ok = res.ok && (data.success === true || data.success === 'true')
      setStatus(ok ? 'sent' : 'error')
      if (ok) form.reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="text-center" role="status" style={{ padding: '2rem 0.5rem' }}>
        <span className="icon-btn mx-auto" style={{ width: '3.25rem', height: '3.25rem', pointerEvents: 'none' }}>
          <CheckIcon width={24} height={24} />
        </span>
        <h3 className="h-card mt-4">{d.sentTitle}</h3>
        <p className="muted mt-2">{d.sentText}</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <input type="hidden" name="_subject" value="New private label inquiry — Éclat d'or" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      {/* Honeypot: people never see it, spam bots fill it in */}
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />

      <div className="field">
        <label htmlFor="pl-name">{d.name}</label>
        <input id="pl-name" name="name" required autoComplete="name" className="input" />
      </div>
      <div className="field">
        <label htmlFor="pl-phone">{d.phone}</label>
        <input id="pl-phone" name="phone" type="tel" required autoComplete="tel" className="input" dir="ltr" />
      </div>
      <div className="field">
        <label htmlFor="pl-email">{d.email}</label>
        <input id="pl-email" name="email" type="email" required autoComplete="email" className="input" dir="ltr" />
      </div>
      <div className="field">
        <label htmlFor="pl-message">{d.message}</label>
        <textarea id="pl-message" name="message" required rows={4} className="input" />
      </div>

      {status === 'error' && (
        <p role="alert" className="text-sm" style={{ color: '#b3261e' }}>
          {d.error}{' '}
          <a href={waLink()} className="underline" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </p>
      )}

      <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
        {status === 'sending' ? d.sending : d.send}
      </button>
    </form>
  )
}
