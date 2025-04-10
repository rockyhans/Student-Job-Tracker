import { useEffect, useState } from "react";
import API from "../api";
import JobForm from "../components/JobForm";
import JobList from "../components/JobList";
import FilterBar from "../components/FilterBar";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState("All");

  const fetchJobs = async () => {
    try {
      const res = await API.get("/jobs");
      setJobs(res.data);
    } catch (err) {
      alert("Not authorized or failed to fetch jobs");
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await API.delete(`/jobs/${id}`);
      setJobs(jobs.filter((job) => job._id !== id));
    } catch (err) {
      alert(
        "Failed to delete job: " + (err.response?.data?.error || err.message)
      );
    }
  };

  const handleUpdate = async (id, updatedStatus) => {
    try {
      const res = await API.put(`/jobs/${id}`, { status: updatedStatus });
      setJobs(jobs.map((job) => (job._id === id ? res.data : job)));
    } catch (err) {
      alert(
        "Failed to update job: " + (err.response?.data?.error || err.message)
      );
    }
  };

  const filteredJobs =
    filter === "All" ? jobs : jobs.filter((job) => job.status === filter);

  return (
    <div className="dashboard">
      <div className="cardHeader">
        <h1>Your Jobs Summary:</h1>
        <Link to="/">
          <button className="home">Go to Home</button>
        </Link>
      </div>
      <div className="jobContainer">
        <div className="jobForms">
          <JobForm refreshJobs={fetchJobs} />
          <FilterBar filter={filter} setFilter={setFilter} />
        </div>

        <JobList
          jobs={filteredJobs}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      </div>
    </div>
  );
};

export default Dashboard;
