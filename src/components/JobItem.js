import React from "react";

function JobItem({ job, onDelete, onUpdateStatus }) {
  return (
    <div className="job-card">
      <div>
        <h2>{job.company}</h2>
        <h3> {job.role}</h3>

        <p>Status: {job.status}</p>
        <p>Date: {new Date(job.date).toLocaleDateString()}</p>
        {job.link && (
          <a href={job.link} target="_blank" rel="noreferrer">
            🔗 Link
          </a>
        )}
      </div>
      <div className="part2">
        <select
          className="status-dropdown"
          value={job.status}
          onChange={(e) => onUpdateStatus(job._id, e.target.value)}
        >
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
        <button
          style={{ marginLeft: "10px" }}
          onClick={() => onDelete(job._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default JobItem;
