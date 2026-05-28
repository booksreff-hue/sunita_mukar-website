import FadeIn from './FadeIn'

const CHIPS = [
  'TEFL', 'TESOL', 'IELTS & PTE', 'CPD Accredited',
  'SHRM Recognized', 'Career Analyst', 'Train The Trainer',
]

export default function AboutSection() {
  return (
    <section id="about" className="py-[130px] max-md:py-20">
      <div className="contain">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          <FadeIn x={-30} y={0}>
            <p className="section-label">About the Trainer</p>
            <h2 className="font-heading text-[clamp(1.8rem,6vw,4rem)] leading-tight text-white font-semibold">
              More than a trainer —&nbsp;<em className="font-light italic text-teal-light not-italic">a confidence architect</em>
            </h2>
            <div className="mt-5 md:mt-6 space-y-4 text-[1.05rem] md:text-[0.97rem] leading-relaxed text-text-light">
              <p>
                With over a decade of experience spanning 13 countries, I have had the privilege of guiding thousands of students and professionals toward mastery of the English language. My journey — from the classrooms of Byju&apos;s to corporate boardrooms across the Middle East and Asia — has taught me that language is not just about words. It is about voice, presence, and the quiet power of being understood.
              </p>
              <p>
                I hold an MA in English Literature, an MBA in HR, and a B.Ed, alongside international certifications from TEFL, TESOL, SHRM, and CPD. Every session I design is built on a foundation of academic rigour, real-world relevance, and genuine human connection.
              </p>
            </div>
            <div className="font-heading italic text-[1.1rem] md:text-[1.15rem] border-l-3 border-gold pl-5 md:pl-6 my-6 md:my-7 text-text-light leading-relaxed"
              style={{ borderLeftWidth: '3px' }}>
              &ldquo;I don&apos;t just teach English — I help people step into rooms they once thought were reserved for others.&rdquo;
            </div>
            <div className="flex flex-wrap gap-2.5">
              {CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="px-4 py-2 md:py-1.5 rounded-full text-[0.8rem] md:text-[0.72rem] tracking-wide"
                  style={{
                    background: 'rgba(27,107,107,0.22)',
                    border: '1px solid rgba(42,157,143,0.35)',
                    color: '#2A9D8F',
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
                style={{ filter: 'drop-shadow(0 30px 60px rgba(42,157,143,0.2))' }}
              />
              <div
                className="absolute left-1/2 -translate-x-1/2 bottom-6 px-7 py-4 rounded-[20px] text-[1rem] md:text-[0.95rem] font-bold tracking-wide whitespace-nowrap z-10"
                style={{ background: '#C9A84C', color: '#0A1628' }}
              >
                10+ Years Experience
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
