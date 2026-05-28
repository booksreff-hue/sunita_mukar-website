export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between gap-3 px-7 md:px-16 py-8"
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <span className="font-heading text-gold text-[1.15rem] font-semibold">
        Sunita Mukar
      </span>
      <span className="text-[0.72rem] text-text-muted">
        &copy; 2026 Sunita Mukar. All rights reserved.
      </span>
    </footer>
  )
}
