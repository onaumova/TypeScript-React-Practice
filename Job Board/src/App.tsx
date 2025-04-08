import { useState, useEffect } from "react";
import "./App.css";
import Board from "./components/Board";

export interface JobPost {
  by: string;
  id: number;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

export default function App() {
  const [jobIDList, setJobIDList] = useState<number[]>([]);
  const [jobCount, setJobCount] = useState<number>(0);
  const [startIndex, setStartIndex] = useState<number | null>(null);
  const [jobBoardData, setJobBoardData] = useState<JobPost[]>([]);
  const offset = 6;

  const jobsUrl = "https://hacker-news.firebaseio.com/v0/jobstories.json";
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(jobsUrl);
        const data = await response.json();
        setJobIDList(data);
        setJobCount(data.length);
        setStartIndex(0);
      } catch (error: any) {
        console.log("Error fetching jobs: ", error.msg);
      }
    };
    fetchJobs();
  }, []);

  useEffect(() => {
    if (startIndex !== null) {
      const fetchJobsById = async () => {
        const stopIndex =
          startIndex + offset < jobCount ? startIndex + offset : jobCount;
        const responseList = await Promise.all(
          jobIDList
            .slice(startIndex, stopIndex)
            .map((id) =>
              fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            )
        );
        const jobsData: JobPost[] = await Promise.all(
          responseList.map((res) => res.json())
        );
        setJobBoardData((prev) => [...prev, ...jobsData]);
        try {
        } catch (error: any) {
          console.log("Error fetchng job list by id: ", error.msg);
        }
      };

      fetchJobsById();
    }
  }, [startIndex, jobIDList]);
  return (
    <div>
      <Board jobBoardData={jobBoardData} />
      <div>
        {startIndex !== null && startIndex + offset < jobCount && (
          <button onClick={() => setStartIndex(startIndex + offset)}>
            Load More Jobs
          </button>
        )}
      </div>
    </div>
  );
}
