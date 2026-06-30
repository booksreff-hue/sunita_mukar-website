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
    quote: "Sunita's career counselling helped me choose the right stream after 10th grade. I was confused between Science and Commerce, but her psychometric assessment gave me clarity. I'm now thriving in my chosen field.",
    author: 'Riya Sharma',
    origin: 'India · Stream Selection',
  },
  {
    quote: 'After three years in a job that didn\'t fulfil me, Sunita helped me identify my true strengths and pivot into a career I love. Her structured approach and one-on-one sessions were truly transformative.',
    author: 'Karan Patel',
    origin: 'UAE · Career Transition',
  },
  {
    quote: 'The psychometric assessment was an eye-opener. Sunita\'s interpretation of my results helped me understand my aptitudes and interests in a way I never had before. Highly recommended for anyone at a career crossroads.',
    author: 'Priya Nair',
    origin: 'India · Graduate Counselling',
  },
  {
    quote: 'As a parent, I was anxious about my son\'s subject choices. Sunita guided us with patience and expertise, helping him pick subjects that matched his strengths. A wonderful, reassuring experience.',
    author: 'Meera Joshi',
    origin: 'India · Parent Consultation',
  },
]

export default function TestimonialsSection() {
  const [mediaViewer, setMediaViewer] = useState<TestimonialMedia | null>(null)

  return (
    <section
      id="testimonials"
      className="py-[130px] max-md:py-20 relative z-10"
      style={{
        background: '#F5F2F8',
        borderRadius: '48px 48px 0 0',
        marginTop: '-24px',
      }}
    >
      <div className="contain">
        <FadeIn y={30}>
          <p className="section-label">Testimonials</p>
          <h2 className="font-heading text-[clamp(1.8rem,6vw,4rem)] leading-tight font-semibold mb-8 md:mb-10" style={{ color: '#1A3330' }}>
            What Individuals <em className="font-light italic not-italic" style={{ color: '#6DB8B8' }}>Say</em>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={i} y={20} delay={i * 0.1}>
              <div
                className="rounded-[20px] md:rounded-[22px] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                style={{
                  background: '#F8FBF9',
                  border: '1px solid rgba(0,0,0,0.06)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(212,129,106,0.3)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(212,129,106,0.1)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'; e.currentTarget.style.boxShadow = 'none' }}
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
                        <div className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110" style={{ background: 'rgba(212,129,106,0.9)' }}>
                          <Play size={22} fill="#FFFFFF" className="ml-0.5" style={{ color: '#FFFFFF' }} />
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="font-heading italic text-[1.1rem] md:text-[1.08rem] leading-relaxed" style={{ color: '#2D403C' }}>
                    &ldquo;{t.quote}&rdquo;
                  </div>
                  <div className="w-8 h-px my-5" style={{ background: 'rgba(212,129,106,0.5)' }} />
                  <div className="text-[0.85rem] md:text-[0.8rem] font-semibold tracking-[0.08em]" style={{ color: '#D4816A' }}>
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
              border: '2px dashed rgba(212,129,106,0.3)',
              background: 'rgba(212,129,106,0.04)',
            }}
          >
            <p className="text-[0.85rem] leading-relaxed" style={{ color: '#6B7D79' }}>
              <span style={{ color: '#D4816A', fontWeight: 500 }}>Share Your Experience</span>
              <br />
              Your testimonial could appear here. If you have been guided by Sunita, reach out via the contact section to share your journey.
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
            style={{ background: 'rgba(0,0,0,0.85)' }}
            onClick={() => setMediaViewer(null)}
          >
            <button
              className="absolute top-6 right-6 md:top-8 md:right-8 cursor-pointer bg-none border-none z-10 transition-colors"
              style={{ color: '#FFFFFF' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#D4816A'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}
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
