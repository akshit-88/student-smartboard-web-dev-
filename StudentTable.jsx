import StudentRow from './StudentRow'
import '../styles/Table.css'

function StudentTable({ students, onScoreChange }) {
  return (
    <div className="table-section">
      <div className="table-header-row">
        <span className="table-title">Student Records</span>
        <span className="student-count">
          {students.length} {students.length === 1 ? 'student' : 'students'}
        </span>
      </div>

      {students.length === 0 ? (
        <div className="empty-state">
          No students yet. Add one using the form above.
        </div>
      ) : (
        <table className="scoreboard-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Score&nbsp;/&nbsp;100</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <StudentRow
                key={student.id}
                student={student}
                index={index}
                onScoreChange={onScoreChange}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default StudentTable
