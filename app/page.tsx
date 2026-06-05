'use client'
import Image from 'next/image'

const apps = [
  {
    name: 'ESG Budget Tracker',
    description: 'Manage contracts, invoices, payment milestones, validation workflows and ESG project budgets across all your projects.',
    url: 'https://budget-tracker-two-beta.vercel.app/login',
    label: 'Finance & ESG',
    accent: '#0F172A',
    num: '01',
  },
  {
    name: 'Skykapital Europe',
    description: 'European operations hub — client management, pipeline tracking, performance reporting and team coordination.',
    url: 'https://skykapitaleurope.vercel.app/login',
    label: 'Operations & CRM',
    accent: '#0F172A',
    num: '02',
  },
]

export default function Portal() {
  return (
    <main style={{ minHeight: '100vh', background: '#FAFAFA', fontFamily: '"Inter", system-ui, sans-serif' }}>

      {/* Header */}
      <header style={{ background: '#fff', borderBottom: '1px solid #EBEBEB', padding: '0 64px', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Image src="/logo.png" alt="Skykapital" width={160} height={40} style={{ objectFit: 'contain' }} priority />
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#22C55E' }}/>
          <span style={{ fontSize: 12, color: '#9CA3AF', fontWeight: 500 }}>All systems operational</span>
        </div>
      </header>

      {/* Hero */}
      <div style={{ background: '#fff', borderBottom: '1px solid #EBEBEB', padding: '72px 64px 64px' }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: '#9CA3AF', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 16px' }}>Internal Platform</p>
        <h1 style={{ fontSize: 48, fontWeight: 800, color: '#0F172A', margin: '0 0 16px', letterSpacing: '-1.5px', lineHeight: 1.1 }}>
          Welcome back.
        </h1>
        <p style={{ fontSize: 17, color: '#6B7280', margin: 0, maxWidth: 440, lineHeight: 1.6 }}>
          Select an application below to continue your work.
        </p>
      </div>

      {/* Apps grid */}
      <div style={{ padding: '48px 64px', maxWidth: 1300, margin: '0 auto' }}>
        <p style={{ fontSize: 11, fontWeight: 700, color: '#D1D5DB', letterSpacing: '0.12em', textTransform: 'uppercase', margin: '0 0 20px' }}>Applications — {apps.length} available</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(420px, 1fr))', gap: 20 }}>
          {apps.map(app => (
            <a key={app.name} href={app.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div
                style={{
                  background: '#fff', borderRadius: 20, border: '1px solid #E5E7EB',
                  padding: '36px 36px 32px', cursor: 'pointer', height: '100%',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
                  transition: 'transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease',
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 240,
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(-3px)'
                  el.style.boxShadow = '0 12px 40px rgba(0,0,0,0.10)'
                  el.style.borderColor = '#0F172A'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'none'
                  el.style.boxShadow = '0 1px 2px rgba(0,0,0,0.04)'
                  el.style.borderColor = '#E5E7EB'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 28 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: '#D1D5DB', letterSpacing: '0.08em' }}>{app.num}</span>
                    <span style={{ fontSize: 11, fontWeight: 600, padding: '4px 12px', borderRadius: 100, background: '#F0FDF4', color: '#16A34A', letterSpacing: '0.04em' }}>
                      LIVE
                    </span>
                  </div>

                  <h2 style={{ fontSize: 22, fontWeight: 700, color: '#0F172A', margin: '0 0 12px', letterSpacing: '-0.4px' }}>
                    {app.name}
                  </h2>
                  <p style={{ fontSize: 14, color: '#6B7280', margin: 0, lineHeight: 1.65 }}>
                    {app.description}
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 28, paddingTop: 20, borderTop: '1px solid #F3F4F6' }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: '#9CA3AF', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    {app.label}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: '#0F172A' }}>
                    Open
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}

          {/* Coming soon */}
          <div style={{
            background: '#FAFAFA', borderRadius: 20, border: '1.5px dashed #E5E7EB',
            padding: '36px', display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', minHeight: 240, textAlign: 'center', gap: 10,
          }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" fill="none" stroke="#D1D5DB" strokeWidth="2.5" viewBox="0 0 24 24">
                <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
            </div>
            <p style={{ fontSize: 13, fontWeight: 600, color: '#D1D5DB', margin: 0 }}>New app coming soon</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #EBEBEB', padding: '24px 64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff' }}>
        <Image src="/logo.png" alt="Skykapital" width={100} height={26} style={{ objectFit: 'contain', opacity: 0.3 }} />
        <span style={{ fontSize: 11, color: '#D1D5DB' }}>Internal use only &mdash; {new Date().getFullYear()}</span>
      </footer>

    </main>
  )
}
