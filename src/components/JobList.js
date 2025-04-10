import React from "react";
import JobItem from "./JobItem";

const JobList = ({ jobs, onDelete, onUpdate }) => {
  if (jobs.length === 0) return <p className="noJob">No Job to Show.</p>;

  return (
    <div className="job-list">
      {jobs.map((job) => (
        <JobItem
          key={job._id}
          job={job}
          onDelete={onDelete}
          onUpdateStatus={onUpdate}
        />
      ))}
    </div>
  );
};

export default JobList;
