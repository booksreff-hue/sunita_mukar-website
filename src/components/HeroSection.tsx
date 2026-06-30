import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PHOTOS = [
  '/assets/sunita_mukar-pers/WhatsApp Image 2026-04-21 at 9.13.51 PM.jpeg',
  '/assets/sunita_mukar-pers/WhatsApp Image 2026-04-21 at 9.13.54 PM.jpeg',
  '/assets/sunita_mukar-pers/WhatsApp Image 2026-04-21 at 9.13.54 PM (1).jpeg',
  '/assets/sunita_mukar-pers/WhatsApp Image 2026-04-21 at 9.13.54 PM (2).jpeg',
  '/assets/sunita_mukar-pers/WhatsApp Image 2026-04-21 at 9.13.55 PM.jpeg',
  '/assets/sunita_mukar-pers/WhatsApp Image 2026-04-21 at 9.13.55 PM (1).jpeg',
]

const ease = [0.22, 1, 0.36, 1] as const

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const child = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
}

const portraitChild = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.45, ease } },
}

export default function HeroSection() {
  const portraitRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % PHOTOS.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [paused])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = portraitRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / rect.width
    const dy = (e.clientY - cy) / rect.height
    setRotate({ x: -dy * 12, y: dx * 12 })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setRotate({ x: 0, y: 0 })
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden pt-28 pb-16"
    >
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 70% 70% at 60% 40%, rgba(93,168,168,0.2) 0%, transparent 65%),
            radial-gradient(ellipse 40% 50% at 20% 80%, rgba(212,129,106,0.1) 0%, transparent 60%)
          `,
        }}
      />

      <div className="contain w-full">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center relative z-10"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <motion.p className="section-label mb-3 md:mb-4" variants={child}>
              A Certified &amp; Experienced Career Counselling Expert
            </motion.p>

            <motion.h1 variants={child}>
              <span className="block font-heading text-[clamp(3rem,13vw,7rem)] font-bold leading-[1.05]" style={{ color: '#1A3330' }}>
                Sunita
              </span>
              <span className="block font-heading text-[clamp(3rem,13vw,7rem)] font-light italic leading-[1.05]" style={{ color: '#5DA8A8' }}>
                Mukar
              </span>
            </motion.h1>

            <motion.p
              className="text-[1.05rem] md:text-[1rem] font-light max-w-[440px] leading-relaxed mt-5 mb-8 md:mt-6 md:mb-9"
              style={{ color: '#2D403C' }}
              variants={child}
            >
              Dedicated to helping students and professionals make informed career decisions through psychometric assessments and personalised one-on-one counselling.
            </motion.p>

            <motion.div className="flex gap-3 md:gap-4 flex-wrap justify-center md:justify-start w-full max-w-[400px] md:max-w-none" variants={child}>
              <a href="#contact" className="btn-primary flex-1 md:flex-none text-center">Book a Session</a>
              <a href="#about" className="btn-outline flex-1 md:flex-none text-center">Learn More</a>
            </motion.div>

            <motion.div
              className="flex gap-6 md:gap-12 mt-10 md:mt-12 pt-6 md:pt-8 justify-center md:justify-start flex-wrap w-full"
              style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}
              variants={child}
            >
              {[
                { num: '10+', label: 'Years' },
                { num: '150+', label: 'Individuals Guided' },
                { num: '7+', label: 'Certifications' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-heading text-[2.2rem] md:text-[2.6rem] text-teal-light font-semibold leading-none">
                    {stat.num}
                  </div>
                  <div className="text-[0.75rem] md:text-[0.72rem] uppercase tracking-[0.1em] text-text-muted mt-1.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center md:justify-end"
            variants={portraitChild}
          >
            <div
              ref={portraitRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => { handleMouseLeave(); setPaused(false) }}
              onMouseEnter={() => setPaused(true)}
              style={{
                perspective: '800px',
                transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                transition: 'transform 0.15s ease-out',
                transformStyle: 'preserve-3d',
                willChange: 'transform',
              }}
            >
              <div className="relative w-[220px] md:w-[420px] aspect-[3/4] rounded-2xl overflow-hidden"
                style={{ border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 40px 80px rgba(212,129,106,0.2)' }}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={index}
                    src={PHOTOS[index]}
                    alt="Sunita Mukar"
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, ease }}
                  />
                </AnimatePresence>
              </div>
              <div className="flex justify-center gap-2 mt-4">
                {PHOTOS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setIndex(i); setPaused(true); setTimeout(() => setPaused(false), 4000) }}
                    className="w-2 h-2 rounded-full transition-all duration-300 cursor-pointer border-none"
                    style={{
                      background: i === index ? '#D4816A' : 'rgba(0,0,0,0.15)',
                      width: i === index ? '20px' : '8px',
                    }}
                    aria-label={`Photo ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
