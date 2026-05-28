import FadeIn from './FadeIn'

const SERVICES = [
  { num: '01', name: 'Spoken English', desc: 'Master fluent, natural English for everyday conversation, professional meetings, and social settings. Build the confidence to speak without hesitation.' },
  { num: '02', name: 'IELTS & PTE Preparation', desc: 'Targeted training for academic and general IELTS and PTE exams. Proven strategies, mock tests, and personalised feedback to achieve your target band.' },
  { num: '03', name: 'Personality Development', desc: 'Develop a compelling personal presence — from dressing with intention to speaking with authority. Designed for professionals and students alike.' },
  { num: '04', name: 'Creative Writing', desc: 'Explore the craft of writing — from storytelling and essays to business communication. Find your voice on the page with structured guidance.' },
  { num: '05', name: 'Career Counselling', desc: 'Navigate your career path with clarity. Get one-on-one guidance on resume building, interview preparation, and long-term career strategy.' },
  { num: '06', name: 'Corporate Training', desc: 'Tailored programmes for organisations — business English, cross-cultural communication, presentation skills, and leadership communication.' },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-[130px] max-md:py-20 relative z-10"
      style={{
        background: '#060F1E',
        borderRadius: '48px 48px 0 0',
        marginTop: '-24px',
      }}
    >
      <div className="contain">
        <FadeIn y={30}>
          <p className="section-label">What I Offer</p>
          <h2 className="font-heading font-bold text-[clamp(2.5rem,13vw,10rem)] leading-none gradient-text mb-10 md:mb-16">
            Services
          </h2>
        </FadeIn>

        {SERVICES.map((svc, i) => (
          <FadeIn key={svc.num} y={24} delay={i * 0.08}>
            <div
              className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8 py-7 md:py-9 border-y border-white/10"
              style={{ borderBottomWidth: i === SERVICES.length - 1 ? 1 : 0 }}
            >
              <span
                className="font-heading text-[clamp(2rem,5.5vw,5rem)] font-semibold leading-none flex-shrink-0"
                style={{ color: 'rgba(201,168,76,0.2)', minWidth: '90px' }}
              >
                {svc.num}
              </span>
              <div>
                <h3 className="text-[1.05rem] md:text-[clamp(0.9rem,1.8vw,1.35rem)] uppercase tracking-[0.1em] text-white font-medium mb-2">
                  {svc.name}
                </h3>
                <p className="text-[1rem] md:text-[0.9rem] text-text-muted leading-relaxed max-w-[540px] font-light">
                  {svc.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
