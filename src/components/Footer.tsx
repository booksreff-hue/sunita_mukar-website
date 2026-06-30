export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between gap-3 px-7 md:px-16 py-8"
      style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
      <span className="font-heading text-[1.15rem] font-semibold" style={{ color: '#D4816A' }}>
        Sunita Mukar
      </span>
      <span className="text-[0.72rem]" style={{ color: '#6B7D79' }}>
        &copy; 2026 Sunita Mukar. All rights reserved.
      </span>
    </footer>
  )
}
