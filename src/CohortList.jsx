// import React, { useState } from 'react';
import data from "./data/data.json";
import CohortCard from "./CohortCard";
import Seasons from './Seasons';


const CohortList = () => {

    // const [studentData, setStudentData] = useState(data)
    // console.log(data)
    // console.log(studentData)
    



  return (
    <div className="CohortList">
      <h2>Choose a Class by Start Date</h2>
      {/* <CohortCard  studentData={studentData} showStudentData={setStudentData}/> */}
      <Seasons />
    </div>
  );
};

export default CohortList;
