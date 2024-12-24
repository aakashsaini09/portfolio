'use client';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup'
import axios from 'axios'




const Stats = () => {
    
    const [loading, setloading] = useState(false)
    const [commitsCounting, setcommitsCounting] = useState(0)
    
    const BASE_URL = "https://api.github.com";
const username = 'aakashsaini09'
const fetchTotalCommits = async () => {
    setloading(true);
  
    try {
      const reposResponse = await axios.get(`${BASE_URL}/users/${username}/repos`);
      const repos = reposResponse.data;
      const commitCountPromises = repos.map(async (repo: { name: string }) => {
        try {
          const commitsResponse = await axios.get(
            `${BASE_URL}/repos/${username}/${repo.name}/commits`,
            { params: { per_page: 1 } }
          );
  
          const linkHeader = commitsResponse.headers.link;
          if (linkHeader) {
            const lastPageMatch = linkHeader.match(/&page=(\d+)>; rel="last"/);
            return lastPageMatch ? parseInt(lastPageMatch[1], 10) : 1;
          }
          return 1;
        } catch (error) {
          console.error(`Error fetching commits for repo ${repo.name}:`, error);
          return 0; 
        }
      });
      const commitCounts = await Promise.all(commitCountPromises);
      const totalCommits = commitCounts.reduce((sum, count) => sum + count, 0);
      setloading(false);
      setcommitsCounting(totalCommits);
      return totalCommits;
    } catch (error) {
      setloading(false);
      console.error("Error fetching repositories:", error);
      return 0;
    }
  };
useEffect(() => {
    fetchTotalCommits()
}, [fetchTotalCommits])


const stats = [
    {
        num: 2,
        text: 'Years of experience'
    },
    {
        num: 12,
        text: 'Projects completed'
    },
    {
        num: 4,
        text: 'Technologies mastered'
    },
    {
        num: commitsCounting ? commitsCounting : 0,
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
export default Stats
