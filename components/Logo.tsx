import Image from 'next/image'

/** Brand wordmark. Renders a dark version for light mode and a light version for dark mode. */
export default function Logo({ height = 40, eager = false }: { height?: number; eager?: boolean }) {
  const style = { height, width: 'auto' } as const
  return (
    <>
      <Image
        src="/logo.png"
        alt="Éclat d'or"
        width={497}
        height={180}
        className="logo-dark"
        style={style}
        loading={eager ? 'eager' : undefined}
      />
      <Image
        src="/logo-light.png"
        alt=""
        aria-hidden="true"
        width={497}
        height={180}
        className="logo-light"
        style={style}
        loading={eager ? 'eager' : undefined}
      />
    </>
  )
}
