import FadeIn from './FadeIn'

const CHIPS = [
  'Career Analyst', 'Soft Skills Trainer', 'IELTS Trainer',
  'TEFL', 'TESOL', 'Psychometric Assessments', 'Subject Selection',
]

export default function AboutSection() {
  return (
    <section id="about" className="py-[130px] max-md:py-20">
      <div className="contain">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          <FadeIn x={-30} y={0}>
            <p className="section-label">About the Counsellor</p>
            <h2 className="font-heading text-[clamp(1.8rem,6vw,4rem)] leading-tight font-semibold" style={{ color: '#1A3330' }}>
              Helping you discover a career&nbsp;<em className="font-light italic not-italic" style={{ color: '#5DA8A8' }}>that fits who you are</em>
            </h2>
            <div className="mt-5 md:mt-6 space-y-4 text-[1.05rem] md:text-[0.97rem] leading-relaxed text-text-light">
              <p>
                Sunita Mukar is an experienced career counsellor with over 10 years in the education industry, dedicated to helping students and professionals make informed career decisions. She holds an MA in English Literature and is a certified Career Analyst, Soft Skills Trainer, IELTS Trainer, TEFL, and TESOL-certified trainer.
              </p>
              <p>
                Having successfully guided 150+ individuals, Sunita uses psychometric assessments and personalised one-on-one counselling to provide structured, scientific career guidance through online and offline platforms. Her mission is to empower individuals to discover careers aligned with their strengths, interests, and aspirations.
              </p>
            </div>
            <div className="font-heading italic text-[1.1rem] md:text-[1.15rem] pl-5 md:pl-6 my-6 md:my-7 leading-relaxed"
              style={{ borderLeft: '3px solid #D4816A', color: '#2D403C' }}>
              &ldquo;Touching and Transforming Lives&rdquo;
            </div>
            <div className="flex flex-wrap gap-2.5">
              {CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="px-4 py-2 md:py-1.5 rounded-full text-[0.8rem] md:text-[0.72rem] tracking-wide"
                  style={{
                    background: 'rgba(93,168,168,0.15)',
                    border: '1px solid rgba(93,168,168,0.4)',
                    color: '#1A3330',
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn x={30} y={0} delay={0.15}>
            <div className="relative max-w-[460px] mx-auto">
              <img
                src="/assets/design/sunita_mukar-stylized3D.png"
                alt="Sunita Mukar"
                className="w-full object-contain"
                style={{ filter: 'drop-shadow(0 30px 60px rgba(212,129,106,0.2))' }}
              />
              <div
                className="absolute left-1/2 -translate-x-1/2 bottom-6 px-7 py-4 rounded-[20px] text-[1rem] md:text-[0.95rem] font-bold tracking-wide whitespace-nowrap z-10"
                style={{ background: '#D4816A', color: '#FFFFFF' }}
              >
                10+ Years · 150+ Guided
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
