const CREDENTIALS = [
  'Certified Career Analyst', 'Soft Skills Trainer', 'IELTS Trainer',
  'TEFL Certified', 'TESOL Certified', 'Career Counselling Expert',
  'Psychometric Assessment Specialist', 'MA English Literature',
  '10+ Years Experience', '150+ Individuals Guided',
  'Subject Selection Expert', 'Stream Selection Expert',
]

export default function MarqueeSection() {
  return (
    <div className="py-3 md:py-4 overflow-hidden border-y" style={{ background: '#A3D4D0', borderColor: 'rgba(0,0,0,0.06)' }}>
      <div className="marquee-track flex gap-12 w-fit" style={{ animation: 'marquee 30s linear infinite' }}>
        {[...Array(2)].map((_, dupIdx) => (
          <div key={dupIdx} className="flex gap-12 items-center flex-shrink-0">
            {CREDENTIALS.map((item) => (
              <span key={`${dupIdx}-${item}`} className="inline-flex items-center gap-12">
                <span className="text-[0.72rem] md:text-[0.72rem] uppercase tracking-[0.18em] font-normal whitespace-nowrap" style={{ color: '#1A3330' }}>
                  {item}
                </span>
                <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#D4816A' }} />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
