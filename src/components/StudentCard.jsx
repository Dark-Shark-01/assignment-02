function StudentCard({ student }) {
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .slice(0, 2)
      .join("");
  };

  return (
    <article className="student-card">
      <div className="card-top">
        <span className="student-number">
          #{student.rollNumber.slice(-3)}
        </span>

        <span className="semester-badge">
          Semester {student.semester}
        </span>
      </div>

      <div className="student-profile">
        {student.photo ? (
          <img
            src={student.photo}
            alt={`${student.name} profile`}
            className="student-photo"
          />
        ) : (
          <div className="student-avatar">
            {getInitials(student.name)}
          </div>
        )}

        <div className="student-name-area">
          <h2>{student.name}</h2>
          <p>{student.department}</p>
        </div>
      </div>

      <div className="student-details">
        <div className="detail-item">
          <span>Roll Number</span>
          <strong>{student.rollNumber}</strong>
        </div>

        <div className="detail-item">
          <span>Section</span>
          <strong>{student.section}</strong>
        </div>

        <div className="detail-item">
          <span>Year</span>
          <strong>{student.year}</strong>
        </div>

        <div className="detail-item">
          <span>Semester</span>
          <strong>{student.semester}</strong>
        </div>
      </div>

      <div className="cgpa-area">
        <div className="cgpa-heading">
          <span>Current CGPA</span>
          <strong>{student.cgpa.toFixed(1)}</strong>
        </div>

        <div className="cgpa-bar">
          <div
            className="cgpa-fill"
            style={{
              width: `${(student.cgpa / 10) * 100}%`,
            }}
          ></div>
        </div>
      </div>
    </article>
  );
}

export default StudentCard;
