import { useMemo, useState } from "react";
import StudentCard from "./StudentCard";

function StudentList({ students }) {
  const [sortOrder, setSortOrder] = useState("default");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAndSortedStudents = useMemo(() => {
    let result = students.filter((student) => {
      const search = searchTerm.toLowerCase();

      return (
        student.name.toLowerCase().includes(search) ||
        student.rollNumber.toLowerCase().includes(search) ||
        student.department.toLowerCase().includes(search)
      );
    });

    if (sortOrder === "high") {
      result = [...result].sort((a, b) => b.cgpa - a.cgpa);
    }

    if (sortOrder === "low") {
      result = [...result].sort((a, b) => a.cgpa - b.cgpa);
    }

    return result;
  }, [students, searchTerm, sortOrder]);

  return (
    <section className="student-section">
      <div className="section-heading">
        <div>
          <p className="section-label">STUDENT DIRECTORY</p>

          <h2>Academic Records</h2>

          <p>
            View and manage student academic information.
          </p>
        </div>

        <div className="student-count">
          <strong>{filteredAndSortedStudents.length}</strong>
          <span>Students</span>
        </div>
      </div>

      <div className="controls">
        <div className="search-box">
          <span className="search-icon">⌕</span>

          <input
            type="text"
            placeholder="Search by name, roll number or department..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>

        <div className="sort-box">
          <label htmlFor="sort">Sort CGPA</label>

          <select
            id="sort"
            value={sortOrder}
            onChange={(event) => setSortOrder(event.target.value)}
          >
            <option value="default">Default Order</option>
            <option value="high">Highest to Lowest</option>
            <option value="low">Lowest to Highest</option>
          </select>
        </div>
      </div>

      {filteredAndSortedStudents.length > 0 ? (
        <div className="student-grid">
          {filteredAndSortedStudents.map((student) => (
            <StudentCard
              key={student.rollNumber}
              student={student}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-icon">⌕</div>

          <h3>No students found</h3>

          <p>
            Try searching with a different name or roll number.
          </p>
        </div>
      )}
    </section>
  );
}

export default StudentList;
