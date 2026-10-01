import { notFound } from 'next/navigation'

// Any address that does not match a real page lands here, so visitors see the styled 404 inside the site layout.
export default function CatchAll() {
  notFound()
}
