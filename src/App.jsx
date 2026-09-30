import Header from "./components/Header";
import StudentList from "./components/StudentList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const students = [
    {
      name: "Pratim Das",
      rollNumber: "231001102255",
      department: "BCA",
      year: "4th Year",
      semester: 7,
      section: "BCA4C",
      cgpa: 7.9,
      photo: "/profile.jpg",
    },
    {
      name: "Anirban Chatterjee",
      rollNumber: "231001102256",
      department: "BCA",
      year: "4th Year",
      semester: 7,
      section: "BCA4C",
      cgpa: 8.6,
      photo: null,
    },
    {
      name: "Soham Ghosh",
      rollNumber: "231001102257",
      department: "BCA",
      year: "4th Year",
      semester: 7,
      section: "BCA4C",
      cgpa: 9.1,
      photo: null,
    },
    {
      name: "Ritwick Banerjee",
      rollNumber: "231001102258",
      department: "BCA",
      year: "4th Year",
      semester: 7,
      section: "BCA4C",
      cgpa: 7.4,
      photo: null,
    },
    {
      name: "Arindam Roy",
      rollNumber: "231001102259",
      department: "BCA",
      year: "4th Year",
      semester: 7,
      section: "BCA4C",
      cgpa: 8.2,
      photo: null,
    },
    {
      name: "Sayan Mukherjee",
      rollNumber: "231001102260",
      department: "BCA",
      year: "4th Year",
      semester: 7,
      section: "BCA4C",
      cgpa: 8.8,
      photo: null,
    },
    {
      name: "Moumita Das",
      rollNumber: "231001102261",
      department: "BCA",
      year: "4th Year",
      semester: 7,
      section: "BCA4C",
      cgpa: 9.3,
      photo: null,
    },
    {
      name: "Sohini Chatterjee",
      rollNumber: "231001102262",
      department: "BCA",
      year: "4th Year",
      semester: 7,
      section: "BCA4C",
      cgpa: 8.0,
      photo: null,
    },
    {
      name: "Riya Bhattacharya",
      rollNumber: "231001102263",
      department: "BCA",
      year: "4th Year",
      semester: 7,
      section: "BCA4C",
      cgpa: 8.7,
      photo: null,
    },
    {
      name: "Tiyasha Roy",
      rollNumber: "231001102264",
      department: "BCA",
      year: "4th Year",
      semester: 7,
      section: "BCA4C",
      cgpa: 7.6,
      photo: null,
    },
    {
      name: "Sreeparna Dutta",
      rollNumber: "231001102265",
      department: "BCA",
      year: "4th Year",
      semester: 7,
      section: "BCA4C",
      cgpa: 9.0,
      photo: null,
    },
    {
      name: "Debolina Sen",
      rollNumber: "231001102266",
      department: "BCA",
      year: "4th Year",
      semester: 7,
      section: "BCA4C",
      cgpa: 8.4,
      photo: null,
    },
  ];

  return (
    <div className="app">
      <Header
        university="Techno India University"
        title="Student Information Management System"
        subtitle="Academic student records and performance overview"
      />

      <main>
        <StudentList students={students} />
      </main>

      <Footer university="Techno India University" />
    </div>
  );
}

export default App;
