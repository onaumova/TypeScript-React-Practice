import Job from "./Job";
import { JobPost } from "../App";

interface BoardProps {
  jobBoardData: JobPost[];
}

export default function Board({ jobBoardData }: BoardProps) {
  return (
    <div>
      {jobBoardData.map((job, i) => {
        return (
          <Job
            key={i}
            by={job.by}
            time={job.time}
            title={job.title}
            url={job.url}
          />
        );
      })}
    </div>
  );
}
