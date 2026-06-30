import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#certs', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-5 md:px-16 py-3.5 md:py-4 flex items-center justify-between"
      style={{
        background: 'linear-gradient(to bottom, rgba(242,248,245,0.95), rgba(255,247,240,0))',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}>
      <a href="#" className="font-heading text-[1.3rem] md:text-[1.4rem] font-semibold" style={{ color: '#D4816A' }}>
        Sunita Mukar
      </a>

      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-[0.78rem] uppercase tracking-[0.14em] font-medium transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:transition-all after:duration-300 hover:after:w-full after:bg-[#D4816A]"
            style={{ color: '#2D403C' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#D4816A' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#2D403C' }}
          >
            {link.label}
          </a>
        ))}
      </div>

      <button
        className="md:hidden z-50 p-2"
        style={{ color: '#2D403C' }}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 280 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 280 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 w-[300px] h-full backdrop-blur-xl flex flex-col gap-8 p-8 pt-28 md:hidden"
            style={{ background: 'rgba(242,248,245,0.98)' }}
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[0.9rem] uppercase tracking-[0.14em] font-medium transition-colors duration-200 py-2"
                style={{ color: '#2D403C' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#D4816A' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#2D403C' }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
