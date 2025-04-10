import React from "react";

function FilterBar({ filter, setFilter }) {
  return (
    <div className="FilterBar">
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>
    </div>
  );
}

export default FilterBar;
