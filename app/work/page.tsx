"use client";
import React, { useEffect, useState } from 'react'
import axios from "axios";

const work = () => {
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
useEffect(() => {
  fetchTotalCommits()
}, [])



if(loading){
  return(
    <div className='w-full h-full bg-black text-white text-6xl flex justify-center items-center'>Loading...</div>
  )
}else{
  return (
    <div className='w-full h-full bg-black text-white text-6xl flex justify-center items-center'>Commits: {commitsCounting}</div>
  )
}
}

export default work
