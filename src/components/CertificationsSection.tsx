import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import FadeIn from './FadeIn'

const CERTS = [
  { img: '/assets/cert/TEFL cert.jpeg', label: 'TEFL — American Association of EFL / Henry Harvin' },
  { img: '/assets/cert/Corporate trainer & facilitator cert.jpeg', label: 'Corporate Trainer & Facilitator — Protouch / CPD' },
  { img: '/assets/cert/Soft skill trainer cert.jpeg', label: 'Soft Skill Trainer — SHRM / Protouch' },
  { img: '/assets/cert/CPD cert.jpeg', label: 'CPD Accredited — Corporate Trainer' },
  { img: '/assets/cert/Diploma in teaching Ielts and pte cert.jpeg', label: 'Diploma in Teaching IELTS & PTE — eMaester' },
  { img: '/assets/cert/CCA cert.jpeg', label: 'Certified Career Analyst (CCA)' },
  { img: '/assets/cert/train the trainer cert.jpeg', label: 'Train The Trainer — ISO 9001 / SHRM / HRCI' },
  { img: null, label: 'Academic Credentials — MA English Lit · MBA HR · B.Ed' },
]

export default function CertificationsSection() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null)

  return (
    <section id="certs" className="py-[130px] max-md:py-20">
      <div className="contain">
        <FadeIn y={30}>
          <p className="section-label">Credentials</p>
          <h2 className="font-heading text-[clamp(1.8rem,6vw,4rem)] leading-tight font-semibold mb-8 md:mb-10" style={{ color: '#1A3330' }}>
            Certifications &amp; <em className="font-light italic not-italic" style={{ color: '#5DA8A8' }}>Qualifications</em>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-[18px] max-[480px]:grid-cols-1">
          {CERTS.map((cert, i) => (
            <FadeIn key={i} y={20} delay={i * 0.06}>
              <div
                className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
                style={{
                  background: '#F8FBF9',
                  border: '1px solid rgba(0,0,0,0.06)',
                }}
                onClick={() => cert.img && setLightboxImg(cert.img)}
                onKeyDown={(e) => { if (e.key === 'Enter' && cert.img) setLightboxImg(cert.img) }}
                role="button"
                tabIndex={0}
                aria-label={`View ${cert.label} certificate`}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(212,129,106,0.4)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(212,129,106,0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {cert.img ? (
                  <img
                    src={cert.img}
                    alt={cert.label}
                    className="aspect-[4/3] object-cover w-full"
                    loading="lazy"
                  />
                ) : (
                  <div className="aspect-[4/3] w-full flex items-center justify-center p-6"
                    style={{ background: '#F0F2F8' }}>
                    <div className="text-center">
                      <div className="font-heading text-[clamp(1.2rem,2.5vw,1.8rem)] font-semibold leading-tight mb-2" style={{ color: '#5DA8A8' }}>
                        MA English Lit
                      </div>
                      <div className="font-heading text-[clamp(0.9rem,1.8vw,1.3rem)] font-semibold" style={{ color: '#8DCAC4' }}>
                        MBA HR · B.Ed
                      </div>
                      <div className="text-[0.6rem] uppercase tracking-widest mt-2" style={{ color: '#6B7D79' }}>
                        Academic Credentials
                      </div>
                    </div>
                  </div>
                )}
                <div className="px-4 py-3.5 text-[0.75rem] md:text-[0.7rem] uppercase tracking-[0.1em] text-text-muted leading-tight">
                  {cert.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-10"
            style={{ background: 'rgba(0,0,0,0.85)' }}
            onClick={() => setLightboxImg(null)}
          >
            <button
              className="absolute top-6 right-8 text-3xl cursor-pointer bg-none border-none leading-none z-10 transition-colors"
              style={{ color: '#FFFFFF' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#D4816A'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}
              onClick={() => setLightboxImg(null)}
              aria-label="Close lightbox"
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={lightboxImg}
              alt="Certificate"
              className="max-w-[90vw] max-h-[90vh] rounded-xl object-contain"
              style={{ boxShadow: '0 40px 80px rgba(0,0,0,0.5)' }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
