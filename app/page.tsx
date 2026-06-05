'use client'

const apps = [
  {
    name: 'ESG Budget Tracker',
    description: 'Contracts, invoices, payment milestones and ESG project tracking.',
    url: 'https://budget-tracker-two-beta.vercel.app/login',
    tag: 'Finance & ESG',
    color: '#2563EB',
  },
  {
    name: 'Skykapital Europe',
    description: 'European operations, client management and reporting.',
    url: 'https://skykapitaleurope.vercel.app/login',
    tag: 'Operations',
    color: '#0891B2',
  },
]

export default function Portal() {
  return (
    <main style={{ minHeight: '100vh', background: '#fff', fontFamily: '"Inter", system-ui, sans-serif', color: '#0F172A' }}>

      {/* Nav */}
      <nav style={{ borderBottom: '1px solid #F1F5F9', padding: '0 48px', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 15, fontWeight: 700, letterSpacing: '-0.3px' }}>Skykapital</span>
        <span style={{ fontSize: 12, color: '#94A3B8' }}>Internal Platform</span>
      </nav>

      {/* Hero */}
      <div style={{ maxWidth: 640, margin: '0 auto', padding: '80px 24px 64px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 38, fontWeight: 800, letterSpacing: '-1px', margin: '0 0 14px', lineHeight: 1.15 }}>
          Your tools,<br />all in one place.
        </h1>
        <p style={{ fontSize: 16, color: '#64748B', margin: 0, lineHeight: 1.6 }}>
          Select an application to get started.
        </p>
      </div>

      {/* Apps */}
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px 80px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {apps.map(app => (
          <a key={app.name} href={app.url} target="_blank" rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '24px 28px', borderRadius: 16,
              border: '1px solid #E2E8F0', background: '#fff',
              transition: 'border-color 0.15s, box-shadow 0.15s', cursor: 'pointer',
            }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = app.color
                el.style.boxShadow = `0 0 0 3px ${app.color}12`
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = '#E2E8F0'
                el.style.boxShadow = 'none'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${app.color}10`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: app.color }}/>
                </div>
                <div>
                  <p style={{ margin: '0 0 3px', fontSize: 15, fontWeight: 600 }}>{app.name}</p>
                  <p style={{ margin: 0, fontSize: 13, color: '#94A3B8' }}>{app.description}</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexShrink: 0 }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: '#94A3B8', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{app.tag}</span>
                <svg width="16" height="16" fill="none" stroke="#CBD5E1" strokeWidth="2" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
              </div>
            </div>
          </a>
        ))}

        {/* Coming soon */}
        <div style={{ padding: '24px 28px', borderRadius: 16, border: '1px dashed #E2E8F0', display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: '#F8FAFC', border: '1px dashed #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="14" height="14" fill="none" stroke="#CBD5E1" strokeWidth="2" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </div>
          <p style={{ margin: 0, fontSize: 13, color: '#CBD5E1', fontWeight: 500 }}>More apps coming soon</p>
        </div>
      </div>

      {/* Footer */}
      <div style={{ borderTop: '1px solid #F1F5F9', padding: '20px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: '#CBD5E1' }}>Skykapital</span>
        <span style={{ fontSize: 11, color: '#E2E8F0' }}>{new Date().getFullYear()} — Internal use only</span>
      </div>

    </main>
  )
}
