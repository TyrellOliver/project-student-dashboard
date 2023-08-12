import { useState } from "react";

const StudentCard = (props) => {
  const [detailsVisible, setDetailsVisible] = useState(false);

  const student = props.student;
  // console.log("Every student': ", student)

  const isOnTrack = true;

  const detailsText = "Details to come";

  const toggleDetails = () => {
    setDetailsVisible(!detailsVisible);
  };

  function onTrack(student) {
    const resume = student.certifications.resume;
    const linkedIn = student.certifications.linkedIn;
    const gitHub = student.certifications.github;
    const interviews = student.certifications.mockInterviews;
    // console.log("Every student's certification: ", certifications)
    console.log("Every student's resume: ", resume);
    if (resume === false) {
      return false;
    }
  }
  // console.log(onTrack(student))

  return (
    <div key={student.id}>
      <img src={student.profilePhoto} alt="" />
      <h3>{student.names.preferredName}</h3>
      <h3>{student.names.middleName.charAt(0)}</h3>
      <h3>{student.names.surname}</h3>
      <p>{student.username}</p>
      <p style={{ color: "green" }}>Birthday:{student.dob}</p>
      {isOnTrack ? <p>OnTrack</p> : null}
      <button onClick={toggleDetails}>
        {detailsVisible ? "...Show Less" : "Show More..."}
      </button>
      {detailsVisible ? <p>{detailsText}</p> : null}
    </div>
  );
};

export default StudentCard;
