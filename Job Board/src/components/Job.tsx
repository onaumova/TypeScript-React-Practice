import { JobPost } from "../App";

function Job({ title, by, time, url }: Partial<JobPost>) {
  const date = time ? new Date(time * 1000).toLocaleString() : "";
  return (
    <div className="jobPost">
      <div>
        {url ? (
          <a href={url} target="_blank">
            {title}{" "}
          </a>
        ) : (
          <span>{title}</span>
        )}
      </div>
      <span>By {by}</span>
      <span>· {date}</span>
    </div>
  );
}

export default Job;
