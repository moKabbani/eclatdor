import { waLink } from '@/lib/site'
import { ChatIcon } from './icons'

export default function WhatsAppButton({ label }: { label: string }) {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-fab"
      aria-label={label}
      title={label}
    >
      <ChatIcon width={26} height={26} />
    </a>
  )
}
