import { useState } from "react";
import API from "../api";

const JobForm = ({ refreshJobs }) => {
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    status: "Applied",
    date: "",
    link: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitJob = async (e) => {
    e.preventDefault();
    try {
      await API.post("/jobs", formData);
      refreshJobs();
    } catch (err) {
      alert("Failed to create job");
    }
  };

  return (
    <form onSubmit={submitJob} className="jobForm">
      <input
        name="company"
        placeholder="Company"
        value={formData.company}
        onChange={handleChange}
        required
      />
      <input
        name="role"
        value={formData.role}
        placeholder="Role"
        onChange={handleChange}
        required
      />
      <select name="status" value={formData.status} onChange={handleChange}>
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <input
        name="date"
        type="date"
        value={formData.date}
        onChange={handleChange}
      />
      <input
        name="link"
        value={formData.link}
        placeholder="Job Link"
        onChange={handleChange}
      />
      <button type="submit">Add Job</button>
    </form>
  );
};

export default JobForm;
