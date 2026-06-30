import FadeIn from './FadeIn'

const SERVICES = [
  { num: '01', name: 'Subject Selection (Grades 7–10)', desc: 'Help young students identify their strengths and interests early, guiding them toward the right subjects that align with their natural abilities and academic goals.' },
  { num: '02', name: 'Stream Selection (Grades 11–12)', desc: 'Provide structured guidance for choosing the right academic stream — Science, Commerce, or Arts — based on psychometric insights and long-term career prospects.' },
  { num: '03', name: 'Career Planning for Graduates', desc: 'Support recent graduates in navigating entry-level opportunities, further education choices, and building a career roadmap that matches their qualifications and aspirations.' },
  { num: '04', name: 'Career Guidance for Professionals', desc: 'Help working professionals evaluate their current trajectory, explore career switches, and plan strategic moves for growth and fulfilment.' },
  { num: '05', name: 'Psychometric Assessments', desc: 'Administer and interpret scientific psychometric assessments to map personality traits, aptitudes, and interests — enabling data-driven career decisions.' },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-[130px] max-md:py-20 relative z-10"
      style={{
        background: '#F5F2F8',
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
              className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8 py-7 md:py-9 border-y"
              style={{ borderColor: 'rgba(0,0,0,0.06)', borderBottomWidth: i === SERVICES.length - 1 ? 1 : 0 }}
            >
              <span
                className="font-heading text-[clamp(2rem,5.5vw,5rem)] font-semibold leading-none flex-shrink-0"
                style={{ color: 'rgba(212,129,106,0.3)', minWidth: '90px' }}
              >
                {svc.num}
              </span>
              <div>
                <h3 className="text-[1.05rem] md:text-[clamp(0.9rem,1.8vw,1.35rem)] uppercase tracking-[0.1em] font-medium mb-2" style={{ color: '#1A3330' }}>
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
