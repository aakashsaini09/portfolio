'use client';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup'
import axios from 'axios'




const Stats = () => {
    
    const [loading, setloading] = useState(false)
    const [commitsCounting, setcommitsCounting] = useState(0)
    
    const BASE_URL = "https://api.github.com";
let username = 'aakashsaini09'
const fetchTotalCommits = async () => {
  setloading(true)
  try {
      // Step 1: Fetch all repositories
    const reposResponse = await axios.get(`${BASE_URL}/users/${username}/repos`);
    console.log("first res: ", reposResponse)
    const repos = reposResponse.data;

    let totalCommits = 0;

    // Step 2: Fetch commit count for each repository
    for (const repo of repos) {
        const commitsResponse = await axios.get(
            `${BASE_URL}/repos/${username}/${repo.name}/commits`,
            {
                params: { per_page: 1 }, // Fetch only one commit per page
            }
        );
        
        // Extract total pages from the 'Link' header
        const linkHeader = commitsResponse.headers.link;
        if (linkHeader) {
            const lastPageMatch = linkHeader.match(/&page=(\d+)>; rel="last"/);
            if (lastPageMatch) {
                totalCommits += parseInt(lastPageMatch[1], 10); // Add the last page number to total commits
            } else {
                totalCommits += 1; 
            }
        }
    }
    setloading(false)
    setcommitsCounting(totalCommits)
    return totalCommits;
} catch (error) {
    setloading(false)
    console.error("Error fetching commit data:", error);
    return 0;
}
};
// useEffect(() => {
//     fetchTotalCommits()
// }, [])


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

if(loading){
  return(
    <div></div>
  )
}else{
    return (
    <section className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
        <div className="container mx-auto">
          <div className='flex flex-wrap gap-6 max-w-[80vw0] mx-auto xl:max-w-none'>
              {stats.map((item, index) => {
                  return (
                      <div className='flex-1 flex gap-4 items-center justify-center xl:justify-start' key={index}>
                          <CountUp
                              end={item.num}
                              duration={5}
                              delay={2}
                              className='text-4xl xl:text-6xl font-extrabold'
                              />
                              <p className={`leading-snug text-white/80 ${item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'}`}>{item.text}</p>
                      </div>
                  )
              })}
          </div>
        </div>
      </section>
      )
}
}
// /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
export default Stats
