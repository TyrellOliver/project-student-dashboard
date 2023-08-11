import { useState } from "react";
import data from "./data/data.json";
import Header from "./Header";
import CohortList from "./CohortList";
import CohortCard from "./CohortCard";
import "./app.css"

function App() {
  const [studentData, setStudentData] = useState(data)

  return (
    <>
        <Header />
      <div className="App">
        <CohortList />
        <div><CohortCard  studentData={studentData} showStudentData={setStudentData}/></div>
      </div>
    </>
  );
}

export default App;
