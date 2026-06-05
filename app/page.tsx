export default function Portal() {
  const apps = [
    {
      name: 'ESG Budget Tracker',
      description: 'Contracts, invoices, payment milestones, validations and ESG project tracking.',
      url: 'https://budget-tracker-two-beta.vercel.app',
      icon: '📊',
      color: '#3B82F6',
      bg: '#EFF6FF',
      border: 'rgba(59,130,246,0.25)',
      tags: ['Finance', 'ESG', 'Invoices'],
    },
    {
      name: 'Skykapital Europe',
      description: 'European operations dashboard, client management and reporting.',
      url: 'https://skykapitaleurope.vercel.app/admin/dashboard',
      icon: '🌍',
      color: '#10B981',
      bg: '#F0FDF4',
      border: 'rgba(16,185,129,0.25)',
      tags: ['Europe', 'Operations'],
    },
  ]

  return (
    <main style={{ minHeight: '100vh', background: '#F8FAFC', fontFamily: 'Inter, system-ui, sans-serif' }}>

      {/* Header */}
      <div style={{ background: '#0F172A', borderBottom: '1px solid #1E293B' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ color: '#F8FAFC', fontWeight: 800, fontSize: 18, letterSpacing: '-0.5px' }}>Skykapital</span>
            <span style={{ color: '#334155', fontSize: 13 }}>|</span>
            <span style={{ color: '#64748B', fontSize: 13 }}>Platform</span>
          </div>
          <span style={{ color: '#475569', fontSize: 12 }}>{new Date().toLocaleDateString('en-GB', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' })}</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%)', padding: '56px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#3B82F6', fontWeight: 600, fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12 }}>Internal Platform</p>
          <h1 style={{ color: '#F8FAFC', fontSize: 40, fontWeight: 800, margin: '0 0 16px' }}>Skykapital Apps</h1>
          <p style={{ color: '#94A3B8', fontSize: 16, maxWidth: 480, margin: '0 auto' }}>Your tools, all in one place. Click an app to open it.</p>
        </div>
      </div>

      {/* Apps grid */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
          {apps.map(app => (
            <a key={app.name} href={app.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
              <div style={{ background: '#FFFFFF', borderRadius: 20, border: `1px solid ${app.border}`, padding: 28, cursor: 'pointer', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                <div style={{ height: 3, background: app.color, borderRadius: 4, marginBottom: 20 }}/>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 14 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: app.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>
                    {app.icon}
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 20, background: 'rgba(16,185,129,0.1)', color: '#10B981' }}>Live</span>
                </div>
                <h2 style={{ color: '#0F172A', fontSize: 17, fontWeight: 700, margin: '0 0 8px' }}>{app.name}</h2>
                <p style={{ color: '#64748B', fontSize: 13, lineHeight: 1.6, margin: '0 0 16px' }}>{app.description}</p>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 20 }}>
                  {app.tags.map(tag => (
                    <span key={tag} style={{ fontSize: 11, fontWeight: 500, padding: '3px 10px', borderRadius: 20, background: app.bg, color: app.color }}>{tag}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: app.color, fontSize: 13, fontWeight: 600 }}>
                  Open app
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                </div>
              </div>
            </a>
          ))}

          {/* Coming soon */}
          <div style={{ background: '#FFFFFF', borderRadius: 20, border: '1px dashed #E2E8F0', padding: 28, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 220, textAlign: 'center' }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, marginBottom: 14 }}>➕</div>
            <p style={{ color: '#94A3B8', fontSize: 14, fontWeight: 600, margin: '0 0 6px' }}>New app coming soon</p>
            <p style={{ color: '#CBD5E1', fontSize: 12, margin: 0 }}>More tools will appear here</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ borderTop: '1px solid #E2E8F0', padding: '24px', textAlign: 'center' }}>
        <p style={{ color: '#94A3B8', fontSize: 12, margin: 0 }}>Skykapital Internal Platform &mdash; {new Date().getFullYear()}</p>
      </div>

    </main>
  )
}
