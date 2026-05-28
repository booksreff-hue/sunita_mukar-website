import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Play } from 'lucide-react'
import FadeIn from './FadeIn'

type TestimonialMedia = {
  type: 'image'
  src: string
} | {
  type: 'video'
  src: string
  poster?: string
}

type Testimonial = {
  quote: string
  author: string
  origin: string
  media?: TestimonialMedia
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Sunita ma'am transformed the way I approach English. I went from dreading presentations to actually looking forward to them. Her patience and structured approach made all the difference.",
    author: 'Aisha Rahman',
    origin: 'UAE · IELTS Preparation',
  },
  {
    quote: 'The corporate training programme she designed for our team was exceptional. Practical, engaging, and immediately applicable. Our communication metrics improved noticeably within a quarter.',
    author: 'Vikram Mehta',
    origin: 'India · Corporate Training',
  },
  {
    quote: 'I had given up on creative writing until I joined her course. She has a gift for drawing out the writer in every student. My first short story was published six months after starting.',
    author: 'Lena Costa',
    origin: 'Brazil · Creative Writing',
  },
  {
    quote: 'Her personality development sessions are life-changing. She doesn\'t just teach you how to speak — she teaches you how to own the room. Highly recommended for young professionals.',
    author: 'Omar Al-Farsi',
    origin: 'Oman · Personality Development',
  },
]

export default function TestimonialsSection() {
  const [mediaViewer, setMediaViewer] = useState<TestimonialMedia | null>(null)

  return (
    <section
      id="testimonials"
      className="py-[130px] max-md:py-20 relative z-10"
      style={{
        background: '#060F1E',
        borderRadius: '48px 48px 0 0',
        marginTop: '-24px',
      }}
    >
      <div className="contain">
        <FadeIn y={30}>
          <p className="section-label">Testimonials</p>
          <h2 className="font-heading text-[clamp(1.8rem,6vw,4rem)] leading-tight text-white font-semibold mb-8 md:mb-10">
            What Students <em className="font-light italic text-teal-light not-italic">Say</em>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={i} y={20} delay={i * 0.1}>
              <div
                className="rounded-[20px] md:rounded-[22px] transition-all duration-300 hover:border-gold/30 hover:-translate-y-1 overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div className="p-6 md:p-[32px_30px]">
                  {t.media && t.media.type === 'image' && (
                    <div
                      className="rounded-xl overflow-hidden mb-5 cursor-pointer group relative"
                      onClick={() => setMediaViewer(t.media!)}
                    >
                      <img
                        src={t.media.src}
                        alt=""
                        className="w-full aspect-video object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 text-white/80 text-sm uppercase tracking-widest transition-opacity duration-300">
                          Expand
                        </span>
                      </div>
                    </div>
                  )}
                  {t.media && t.media.type === 'video' && (
                    <div
                      className="rounded-xl overflow-hidden mb-5 cursor-pointer group relative"
                      onClick={() => setMediaViewer(t.media!)}
                    >
                      <img
                        src={t.media.poster || t.media.src}
                        alt=""
                        className="w-full aspect-video object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors duration-300">
                        <div className="w-14 h-14 rounded-full bg-gold/90 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                          <Play size={22} fill="#0A1628" className="ml-0.5 text-navy" />
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="font-heading italic text-[1.1rem] md:text-[1.08rem] text-text-light leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </div>
                  <div className="w-8 h-px bg-gold/50 my-5" />
                  <div className="text-[0.85rem] md:text-[0.8rem] text-gold font-semibold tracking-[0.08em]">
                    {t.author}
                  </div>
                  <div className="text-[0.78rem] md:text-[0.72rem] text-text-muted mt-1">
                    {t.origin}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn y={20} delay={0.4}>
          <div
            className="mt-6 rounded-[22px] p-12 text-center"
            style={{
              border: '2px dashed rgba(201,168,76,0.3)',
              background: 'rgba(201,168,76,0.03)',
            }}
          >
            <p className="text-[0.85rem] text-text-muted leading-relaxed">
              <span className="text-gold font-medium">Share Your Experience</span>
              <br />
              Your testimonial could appear here. If you have studied with Sunita, reach out via the contact section to share your journey.
            </p>
          </div>
        </FadeIn>
      </div>

      <AnimatePresence>
        {mediaViewer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 md:p-10"
            style={{ background: 'rgba(6,15,30,0.95)' }}
            onClick={() => setMediaViewer(null)}
          >
            <button
              className="absolute top-6 right-6 md:top-8 md:right-8 text-white cursor-pointer bg-none border-none z-10 hover:text-gold transition-colors"
              onClick={() => setMediaViewer(null)}
              aria-label="Close"
            >
              <X size={28} />
            </button>

            {mediaViewer.type === 'image' ? (
              <motion.img
                key="img"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={mediaViewer.src}
                alt="Testimonial"
                className="max-w-[90vw] max-h-[90vh] rounded-xl object-contain"
                style={{ boxShadow: '0 40px 80px rgba(0,0,0,0.5)' }}
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <motion.video
                key="vid"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={mediaViewer.src}
                controls
                autoPlay
                className="max-w-[90vw] max-h-[90vh] rounded-xl"
                style={{ boxShadow: '0 40px 80px rgba(0,0,0,0.5)' }}
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
