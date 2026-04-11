import { useState } from 'react'
import '../styles/Form.css'

function AddStudentForm({ onAddStudent }) {
  const [name, setName]   = useState('')
  const [score, setScore] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    const trimmedName  = name.trim()
    const parsedScore  = Number(score)

    // Validation
    if (!trimmedName) {
      setError('Please enter a student name.')
      return
    }
    if (score === '' || isNaN(parsedScore)) {
      setError('Please enter a valid score.')
      return
    }
    if (parsedScore < 0 || parsedScore > 100) {
      setError('Score must be between 0 and 100.')
      return
    }

    onAddStudent(trimmedName, parsedScore)

    // Reset form
    setName('')
    setScore('')
    setError('')
  }

  function handleScoreChange(e) {
    const val = e.target.value
    if (val === '' || (Number(val) >= 0 && Number(val) <= 100)) {
      setScore(val)
    }
  }

  return (
    <div className="form-section">
      <h2 className="form-title">Add Student</h2>

      <form className="add-student-form" onSubmit={handleSubmit} noValidate>
        <div className="field-group">
          <label htmlFor="student-name">Name</label>
          <input
            id="student-name"
            type="text"
            className="form-input input-name"
            placeholder="e.g. Jane Smith"
            value={name}
            onChange={e => setName(e.target.value)}
            autoComplete="off"
          />
        </div>

        <div className="field-group">
          <label htmlFor="student-score">Score</label>
          <input
            id="student-score"
            type="number"
            className="form-input input-score"
            placeholder="0 – 100"
            value={score}
            onChange={handleScoreChange}
            min={0}
            max={100}
          />
        </div>

        <button type="submit" className="btn-add">
          + Add Student
        </button>
      </form>

      {error && <p className="form-error">{error}</p>}
    </div>
  )
}

export default AddStudentForm
