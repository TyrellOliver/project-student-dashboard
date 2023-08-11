import { useState } from "react";

function OnTrack() {}

const StudentCard = (props) => {
  const [detailsVisible, setDetailsVisible] = useState(false);

  const student = props.student;

  const isOnTrack = true;

  const detailsText = "Details to come";

  return (
    <div key={student.id}>
      <img src={student.profilePhoto} alt="" />
      <h3>{student.names.preferredName}</h3>
      <h3>{student.names.middleName.charAt(0)}</h3>
      <h3>{student.names.surname}</h3>
      <p>{student.username}</p>
      <p style={{ color: "green" }}>Birthday:{student.dob}</p>
      {isOnTrack ? <p>OnTrack</p> : null}
      <button
        onClick={() => {
          setDetailsVisible(true);
        }}
      >
        Show More...
      </button>
      {detailsVisible ? <p>{detailsText}</p> : null}
    </div>
  );
};

export default StudentCard;
