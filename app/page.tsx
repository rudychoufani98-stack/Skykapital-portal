'use client'
import Image from 'next/image'

const apps = [
  {
    name: 'ESG Budget Tracker',
    description: 'Contracts, invoices, payment milestones, validation workflows and full ESG project financial tracking.',
    url: 'https://budget-tracker-two-beta.vercel.app/login',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    color: '#3B82F6',
    gradient: 'linear-gradient(135deg, #1D4ED8, #3B82F6)',
    tags: ['Finance', 'ESG', 'Invoices', 'Contracts'],
  },
  {
    name: 'Skykapital Europe',
    description: 'European operations dashboard with client management, pipeline tracking and performance reporting.',
    url: 'https://skykapitaleurope.vercel.app/login',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    color: '#10B981',
    gradient: 'linear-gradient(135deg, #059669, #10B981)',
    tags: ['Europe', 'CRM', 'Operations'],
  },
]

export default function Portal() {
  return (
    <main style={{ minHeight: '100vh', background: '#F0F4F8', fontFamily: '"Inter", system-ui, -apple-system, sans-serif' }}>

      {/* Top nav */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(0,0,0,0.06)', height: 60 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Image src="/logo.png" alt="Skykapital" width={140} height={36} style={{ objectFit: 'contain' }} priority />
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981' }}/>
            <span style={{ fontSize: 12, fontWeight: 500, color: '#64748B' }}>Internal Platform</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(160deg, #0A1628 0%, #0F2952 50%, #0A1628 100%)',
        paddingTop: 140, paddingBottom: 100, paddingLeft: 24, paddingRight: 24,
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)', pointerEvents: 'none' }}/>
        <div style={{ position: 'absolute', bottom: -80, left: -80, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)', pointerEvents: 'none' }}/>

        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.25)', borderRadius: 100, padding: '6px 16px', marginBottom: 28 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#3B82F6' }}/>
            <span style={{ color: '#93C5FD', fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>All your tools, one place</span>
          </div>
          <h1 style={{ color: '#F8FAFC', fontSize: 52, fontWeight: 800, margin: '0 0 18px', letterSpacing: '-1.5px', lineHeight: 1.1 }}>
            Skykapital Platform
          </h1>
          <p style={{ color: '#94A3B8', fontSize: 18, maxWidth: 500, margin: '0 auto', lineHeight: 1.6 }}>
            Access all Skykapital internal applications from one central place.
          </p>
        </div>
      </div>

      {/* Apps */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 32px' }}>
        <p style={{ color: '#94A3B8', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 24 }}>Applications</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: 24 }}>
          {apps.map(app => (
            <a key={app.name} href={app.url} target="_blank" rel="noopener noreferrer"
              style={{ textDecoration: 'none', display: 'block' }}>
              <div style={{
                background: '#FFFFFF', borderRadius: 24, overflow: 'hidden',
                boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                cursor: 'pointer',
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(-4px)'
                  el.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'none'
                  el.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)'
                }}
              >
                {/* Coloured header band */}
                <div style={{ background: app.gradient, padding: '28px 28px 24px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: -20, right: -20, width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }}/>
                  <div style={{ position: 'absolute', bottom: -30, right: 40, width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }}/>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 16, background: 'rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                      {app.icon}
                    </div>
                    <span style={{ fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 100, background: 'rgba(255,255,255,0.2)', color: '#fff', letterSpacing: '0.05em' }}>
                      LIVE
                    </span>
                  </div>
                  <h2 style={{ color: '#fff', fontSize: 20, fontWeight: 700, margin: '16px 0 0', letterSpacing: '-0.3px', position: 'relative', zIndex: 1 }}>{app.name}</h2>
                </div>

                {/* Body */}
                <div style={{ padding: '20px 28px 24px' }}>
                  <p style={{ color: '#64748B', fontSize: 13.5, lineHeight: 1.65, margin: '0 0 18px' }}>{app.description}</p>

                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 20 }}>
                    {app.tags.map(tag => (
                      <span key={tag} style={{ fontSize: 11, fontWeight: 600, padding: '4px 10px', borderRadius: 100, background: '#F1F5F9', color: '#475569' }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: app.color }}>Open application</span>
                    <div style={{ width: 32, height: 32, borderRadius: 10, background: `${app.color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="14" height="14" fill="none" stroke={app.color} strokeWidth="2.5" viewBox="0 0 24 24"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}

          {/* Coming soon card */}
          <div style={{
            background: '#FFFFFF', borderRadius: 24, overflow: 'hidden',
            boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
            border: '2px dashed #E2E8F0',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            minHeight: 260, textAlign: 'center', padding: 32,
          }}>
            <div style={{ width: 52, height: 52, borderRadius: 16, background: '#F8FAFC', border: '2px dashed #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
              <svg width="22" height="22" fill="none" stroke="#CBD5E1" strokeWidth="2" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </div>
            <p style={{ color: '#94A3B8', fontSize: 14, fontWeight: 700, margin: '0 0 6px' }}>More apps coming</p>
            <p style={{ color: '#CBD5E1', fontSize: 12, margin: 0, lineHeight: 1.5 }}>New tools will be added<br/>to the platform here</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ borderTop: '1px solid #E2E8F0', padding: '28px 32px', textAlign: 'center', background: '#fff' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 8 }}>
          <Image src="/logo.png" alt="Skykapital" width={90} height={24} style={{ objectFit: 'contain', opacity: 0.4 }} />
        </div>
        <p style={{ color: '#CBD5E1', fontSize: 11, margin: 0 }}>Internal use only &mdash; {new Date().getFullYear()} Skykapital</p>
      </div>

    </main>
  )
}
