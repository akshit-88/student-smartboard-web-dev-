function Header({ totalStudents, passCount, failCount }) {
  return (
    <header className="card" style={{ padding: '24px 28px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{
            fontSize: '22px',
            fontWeight: '600',
            color: 'var(--text-dark)',
            letterSpacing: '-0.01em',
            marginBottom: '4px',
          }}>
            Student Scoreboard
          </h1>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            Track and manage student scores
          </p>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <StatPill label="Total" value={totalStudents} color="var(--primary)" />
          <StatPill label="Passing" value={passCount} color="var(--pass-text)" bg="var(--pass-bg)" />
          <StatPill label="Failing" value={failCount} color="var(--fail-text)" bg="var(--fail-bg)" />
        </div>
      </div>
    </header>
  )
}

function StatPill({ label, value, color, bg = '#eef3ff' }) {
  return (
    <div style={{
      background: bg,
      borderRadius: '8px',
      padding: '10px 16px',
      textAlign: 'center',
      minWidth: '64px',
    }}>
      <div style={{ fontSize: '20px', fontWeight: '600', color, fontFamily: 'var(--font-mono)' }}>
        {value}
      </div>
      <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: '500', marginTop: '2px' }}>
        {label}
      </div>
    </div>
  )
}

export default Header
