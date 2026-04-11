import { useState } from 'react'
import Header         from './components/Header'
import AddStudentForm from './components/AddStudentForm'
import StudentTable   from './components/StudentTable'
import './styles/App.css'

// ── Default seed data ──────────────────────────────────────────
const INITIAL_STUDENTS = [
  { id: 1, name: 'Aisha Patel',    score: 87 },
  { id: 2, name: 'Marcus Rivera',  score: 34 },
  { id: 3, name: 'Sophie Nguyen',  score: 62 },
  { id: 4, name: 'James Okafor',   score: 40 },
]

let nextId = INITIAL_STUDENTS.length + 1

const PASS_THRESHOLD = 40

// ── App ────────────────────────────────────────────────────────
function App() {
  const [students, setStudents] = useState(INITIAL_STUDENTS)

  // Derived stats (computed from current state)
  const passCount = students.filter(s => s.score >= PASS_THRESHOLD).length
  const failCount = students.length - passCount

  // Update a student's score by id
  function handleScoreChange(id, newScore) {
    setStudents(prev =>
      prev.map(s => s.id === id ? { ...s, score: newScore } : s)
    )
  }

  // Add a new student
  function handleAddStudent(name, score) {
    const newStudent = { id: nextId++, name, score }
    setStudents(prev => [...prev, newStudent])
  }

  return (
    <div className="app-container">
      {/* ── Page header with summary stats ── */}
      <Header
        totalStudents={students.length}
        passCount={passCount}
        failCount={failCount}
      />

      {/* ── Main card: form + table ── */}
      <div className="card">
        <AddStudentForm onAddStudent={handleAddStudent} />
        <hr className="section-divider" />
        <StudentTable students={students} onScoreChange={handleScoreChange} />
      </div>
    </div>
  )
}

export default App
