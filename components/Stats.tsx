'use client';
import CountUp from 'react-countup'

const stats = [
    {
        num: 12,
        text: 'Years of experience'
    },
    {
        num: 26,
        text: 'Projects completed'
    },
    {
        num: 8,
        text: 'Technologies mastered'
    },
    {
        num: 500,
        text: 'Code commits'
    },
]
const Stats = () => {
  return <section>
      <div className="container mx-auto">
        <div>
            {stats.map((item, index) => {
                return (
                    <div key={index}>
                        <CountUp
                            end={item.num}
                            duration={5}
                            delay={2}
                            className='text-4xl xl:text-6xl font-extralight'
                            />
                    </div>
                )
            })}
        </div>
      </div>
    </section>
  
}
// /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
export default Stats
