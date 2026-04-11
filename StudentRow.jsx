import '../styles/Table.css'

const PASS_THRESHOLD = 40

function StudentRow({ student, index, onScoreChange }) {
  const isPassing = student.score >= PASS_THRESHOLD

  function handleScoreInput(e) {
    const raw = e.target.value

    // Allow empty string so user can clear and retype
    if (raw === '') {
      onScoreChange(student.id, '')
      return
    }

    const parsed = Number(raw)
    if (!isNaN(parsed) && parsed >= 0 && parsed <= 100) {
      onScoreChange(student.id, parsed)
    }
  }

  return (
    <tr>
      <td className="cell-num">{index + 1}</td>
      <td className="cell-name">{student.name}</td>
      <td className="cell-score">
        <input
          type="number"
          className="score-input"
          value={student.score}
          min={0}
          max={100}
          onChange={handleScoreInput}
          aria-label={`Score for ${student.name}`}
        />
      </td>
      <td className="cell-status">
        <span className={`badge ${isPassing ? 'badge-pass' : 'badge-fail'}`}>
          {isPassing ? 'Pass' : 'Fail'}
        </span>
      </td>
    </tr>
  )
}

export default StudentRow
