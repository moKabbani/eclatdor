export default function PageHeader({ title, text }: { title: string; text?: string }) {
  return (
    <header className="wrap" style={{ paddingBlock: 'clamp(2.5rem, 6vw, 4.5rem) clamp(1.5rem, 3vw, 2.5rem)' }}>
      <h1 className="h-display">{title}</h1>
      {text && <p className="lead mt-5">{text}</p>}
    </header>
  )
}
