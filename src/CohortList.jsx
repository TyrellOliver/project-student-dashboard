import CohortCard from "./CohortCard";
import "./cohortList.css";

const CohortList = () => {
  return (
    <div className="CohortList">
      <h2>Choose a Class by Start Date</h2>
      {/* <CohortCard /> */}
      <div className="list">
        <p>All Students</p>
        <hr />
        <p>Spring 2023 </p>
        <hr />
        <p>Summer 2023</p>
        <hr />
        <p>Fall 2023</p>
        <hr />
        <p>Winter 2023</p>
        <hr />
        <p>Spring 2024 </p>
        <hr />
        <p>Summer 2024</p>
        <hr />
        <p>Fall 2024</p>
        <hr />
        <p>Winter 2024</p>
        <hr />
        <p>Spring 2025 </p>
        <hr />
        <p>Summer 2025</p>
        <hr />
        <p>Fall 2025</p>
      </div>
    </div>
  );
};

export default CohortList;
