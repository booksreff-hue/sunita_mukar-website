const CREDENTIALS = [
  'TEFL Certified', 'TESOL Certified', 'IELTS & PTE Expert',
  'Soft Skills Trainer', 'Corporate Facilitator', 'Certified Career Analyst',
  'Train The Trainer', 'CPD Accredited', 'SHRM Recognized',
  '13 Countries', "Byju's Alumni", 'MA English Literature', 'MBA HR', 'B.Ed',
]

export default function MarqueeSection() {
  return (
    <div className="bg-teal py-3 md:py-4 overflow-hidden border-y border-white/10">
      <div className="marquee-track flex gap-12 w-fit" style={{ animation: 'marquee 30s linear infinite' }}>
        {[...Array(2)].map((_, dupIdx) => (
          <div key={dupIdx} className="flex gap-12 items-center flex-shrink-0">
            {CREDENTIALS.map((item) => (
              <span key={`${dupIdx}-${item}`} className="inline-flex items-center gap-12">
                <span className="text-[0.72rem] md:text-[0.72rem] uppercase tracking-[0.18em] text-white/85 font-normal whitespace-nowrap">
                  {item}
                </span>
                <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
