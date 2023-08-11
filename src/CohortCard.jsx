import StudentCard from "./StudentCard";

const CohortCard = (props) => {
  // console.log(
  //   "This should be the data passed in as props: ",
  //   props.studentData
  // );
  const studentCard = props.studentData;
  // console.log(studentCard.map((element)=>{return element.names.preferredName}))

  return (
    <div className="CohortCard">
      {studentCard.map((student) => (
        <StudentCard student={student} key={student.id} />
      ))}
    </div>
  );
};

export default CohortCard;
