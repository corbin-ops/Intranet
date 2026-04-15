import { useState, useEffect } from 'react'
import {
  Home, Calendar, BookOpen, Users, BarChart3, Umbrella,
  ClipboardList, ChevronDown, ChevronRight, Mail, Phone,
  Clock, MapPin, Star, Award, Heart, Zap, Shield, Globe,
  CheckCircle, AlertCircle, Info, ExternalLink, Menu, X
} from 'lucide-react'

// ─── DATA ──────────────────────────────────────────────────────────────────

const TEAM = [
  {
    name: 'Corbin',
    role: 'Chief Executive Officer',
    dept: 'Executive',
    initials: 'C',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.15)',
    reports: [],
    bio: 'Visionary leader driving DewClaw Land\'s mission to revolutionize land investment.',
    isCEO: true,
  },
  {
    name: 'Jow',
    role: 'AI Implementation Specialist',
    dept: 'Technology',
    initials: 'J',
    color: '#14b8a6',
    bg: 'rgba(13,148,136,0.15)',
    reportsTo: 'Corbin',
    bio: 'Spearheading AI integration and automation strategies across DewClaw operations.',
  },
  {
    name: 'Emma',
    role: 'Comper',
    dept: 'Operations',
    initials: 'E',
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.15)',
    reportsTo: 'Corbin',
    bio: 'Driving competitive analysis and market positioning for DewClaw Land.',
  },
]

const HOLIDAYS_2025 = [
  { date: '2025-01-01', name: "New Year's Day", type: 'federal' },
  { date: '2025-01-20', name: 'Martin Luther King Jr. Day', type: 'federal' },
  { date: '2025-02-17', name: "Presidents' Day", type: 'federal' },
  { date: '2025-05-26', name: 'Memorial Day', type: 'federal' },
  { date: '2025-06-19', name: 'Juneteenth', type: 'federal' },
  { date: '2025-07-04', name: 'Independence Day', type: 'federal' },
  { date: '2025-09-01', name: 'Labor Day', type: 'federal' },
  { date: '2025-11-11', name: 'Veterans Day', type: 'federal' },
  { date: '2025-11-27', name: 'Thanksgiving Day', type: 'federal' },
  { date: '2025-12-25', name: 'Christmas Day', type: 'federal' },
]

const EVENTS = [
  {
    title: 'Q2 Sales Bootcamp',
    date: 'May 12–16, 2025',
    type: 'bootcamp',
    desc: 'Intensive 5-day virtual training covering advanced land acquisition strategies, deal flow optimization, and closing techniques. All team members required.',
    badge: 'Required',
    badgeClass: 'badge-coral',
  },
  {
    title: 'AI Tools Training',
    date: 'April 22, 2025',
    type: 'training',
    desc: 'Jow leads a hands-on session covering our new AI workflow integrations—automation pipelines, lead scoring, and document generation.',
    badge: 'Training',
    badgeClass: 'badge-teal',
  },
  {
    title: 'Monthly All-Hands',
    date: 'April 28, 2025',
    type: 'meeting',
    desc: 'Monthly company-wide meeting with Corbin. Q1 recap, Q2 roadmap, and team spotlight. Attendance expected.',
    badge: 'Recurring',
    badgeClass: 'badge-amber',
  },
  {
    title: 'Contractor Onboarding Cohort #4',
    date: 'May 5, 2025',
    type: 'onboarding',
    desc: 'New contractor onboarding session. Team leads please prepare departmental intros and tool access by May 2.',
    badge: 'Onboarding',
    badgeClass: 'badge-teal',
  },
]

const SOPS = [
  {
    title: 'Invoice Submission',
    icon: '💸',
    steps: [
      'Prepare invoice with your name, date range, hours/deliverables, and total amount',
      'Send invoice to hello@dewclawland.com AND cc Corbin directly',
      'Subject line format: "Invoice – [Your Name] – [Month Year]"',
      'Invoices due by the last business day of each month',
      'Allow 5–7 business days for processing after submission',
    ],
  },
  {
    title: 'Slack Communication',
    icon: '💬',
    steps: [
      'Slack is our primary async communication tool — check daily during work hours',
      'Respond to direct messages within 4 business hours',
      'Use #general for company announcements, #team-updates for project status',
      'Set your status when in deep work, on break, or offline',
      'Tag @channel sparingly — only for urgent, time-sensitive items',
    ],
  },
  {
    title: 'Status Reporting',
    icon: '📊',
    steps: [
      'Post a weekly update in your team Slack channel every Friday by 4 PM AZ time',
      'Include: completed tasks, blockers, and next week priorities',
      'Flag any deadline risks immediately — don\'t wait for Friday',
      'For major milestones, send a brief email summary to hello@dewclawland.com',
    ],
  },
  {
    title: 'New Project Kickoff',
    icon: '🚀',
    steps: [
      'Request a project brief from Corbin or your direct manager before starting',
      'Confirm scope, timeline, deliverables, and communication cadence in writing',
      'Set up a shared folder in the agreed project management tool',
      'Schedule a kickoff check-in within the first 48 hours',
      'Document any assumption you make — clarity prevents rework',
    ],
  },
]

const ONBOARDING_STEPS = [
  { week: 'Week 1', title: 'Orientation & Access', done: true, items: ['Complete contractor agreement', 'Set up Slack and join team channels', 'Schedule intro calls with Corbin and your manager', 'Review this intranet thoroughly'] },
  { week: 'Week 2', title: 'Process Deep Dive', done: false, items: ['Shadow team calls and existing projects', 'Complete tool training modules', 'Submit your first invoice (if applicable)', 'Review SOPs relevant to your role'] },
  { week: 'Week 3', title: 'Ramp Up', done: false, items: ['Take ownership of first assigned deliverable', 'Attend weekly all-hands or team standup', 'Identify blockers and raise them early', 'Contribute to Friday status update'] },
  { week: 'Week 4', title: 'Full Integration', done: false, items: ['Operating independently with minimal hand-holding', 'Familiar with all team members and their roles', 'Consistent communication patterns established', 'First performance check-in with manager'] },
]

const VALUES = [
  { icon: '🎯', title: 'Results-Driven', desc: 'We measure success by outcomes, not hours. Deliver quality work that moves the needle.' },
  { icon: '🤝', title: 'Trust & Transparency', desc: 'Open communication, honest feedback, and integrity in everything we do.' },
  { icon: '⚡', title: 'Bias for Action', desc: 'Move fast, iterate, and don\'t let perfect be the enemy of done.' },
  { icon: '🌍', title: 'Remote-First', desc: 'We\'ve built our culture for distributed teamwork — async by default, sync when it matters.' },
  { icon: '🧠', title: 'Continuous Learning', desc: 'Invest in your skills. The land investment landscape changes — we change with it.' },
  { icon: '❤️', title: 'Human-Centered', desc: 'Behind every deal is a person. We treat clients, partners, and team members with respect.' },
]

// ─── COMPONENTS ────────────────────────────────────────────────────────────

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="glass-card rounded-xl overflow-hidden mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
        style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-primary)' }}
      >
        <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '0.95rem' }}>{title}</span>
        <ChevronDown
          size={16}
          style={{
            color: 'var(--brand-teal-light)',
            transform: open ? 'rotate(180deg)' : 'rotate(0)',
            transition: 'transform 0.25s ease',
            flexShrink: 0,
          }}
        />
      </button>
      <div className={`accordion-content ${open ? 'open' : ''}`}>
        <div style={{ padding: '0 1.25rem 1.25rem', borderTop: '1px solid var(--surface-border)' }}>
          {children}
        </div>
      </div>
    </div>
  )
}

function SectionHeader({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle?: string }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
        <div style={{
          width: 36, height: 36, borderRadius: 10, background: 'rgba(13,148,136,0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#14b8a6'
        }}>
          {icon}
        </div>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.5rem', margin: 0 }}>{title}</h2>
      </div>
      {subtitle && <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, marginLeft: '3rem' }}>{subtitle}</p>}
    </div>
  )
}

// ─── TAB CONTENT ──────────────────────────────────────────────────────────

function HomeTab() {
  return (
    <div className="fade-up">
      {/* Hero */}
      <div style={{
        borderRadius: 20, marginBottom: '2rem', padding: '2.5rem',
        background: 'linear-gradient(135deg, rgba(13,148,136,0.12) 0%, rgba(245,158,11,0.06) 100%)',
        border: '1px solid rgba(13,148,136,0.2)',
        position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(rgba(13,148,136,0.12), transparent)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -20, left: '40%', width: 150, height: 150, borderRadius: '50%', background: 'radial-gradient(rgba(245,158,11,0.07), transparent)', pointerEvents: 'none' }} />
        <div className="badge badge-teal" style={{ marginBottom: '1rem' }}>🐾 Welcome to DewClaw Land</div>
        <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', margin: '0 0 1rem', lineHeight: 1.2 }}>
          Your Internal Hub for<br />
          <span className="gradient-text">Everything DewClaw</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: 520, lineHeight: 1.7, margin: '0 0 1.5rem' }}>
          We're a remote-first land investment company built on trust, speed, and results. This intranet is your single source of truth for policies, SOPs, team info, and more.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            <Clock size={14} color="#14b8a6" /> 7 AM – 5 PM Arizona Time
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            <Globe size={14} color="#14b8a6" /> Remote-First Team
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            <Mail size={14} color="#14b8a6" /> hello@dewclawland.com
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        {[
          { label: 'Team Members', value: '3', icon: '👥', color: '#14b8a6' },
          { label: 'Work Hours/Week', value: '50h', icon: '⏱️', color: '#fbbf24' },
          { label: 'Paid Days Off', value: '10+', icon: '🏖️', color: '#fb923c' },
          { label: 'Company Mission', value: 'Land ∞', icon: '🌎', color: '#a78bfa' },
        ].map(s => (
          <div key={s.label} className="stat-card">
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{s.icon}</div>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.4rem', color: s.color }}>{s.value}</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem', marginTop: '0.2rem' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Mission */}
      <div className="glass-card" style={{ borderRadius: 16, padding: '1.75rem', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '1rem' }}>
          <Star size={18} color="#fbbf24" />
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, margin: 0, fontSize: '1.1rem' }}>Our Mission</h3>
        </div>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, margin: 0, fontSize: '0.95rem' }}>
          To democratize land investment by providing accessible, transparent, and profitable opportunities for investors of all levels — while building a remote team culture defined by excellence, autonomy, and impact.
        </p>
      </div>

      {/* Values grid */}
      <div>
        <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, marginBottom: '1rem', fontSize: '1.1rem' }}>Our Core Values</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem' }}>
          {VALUES.map(v => (
            <div key={v.title} className="glass-card" style={{ borderRadius: 12, padding: '1.1rem', display: 'flex', gap: '0.75rem' }}>
              <div style={{ fontSize: '1.4rem', flexShrink: 0 }}>{v.icon}</div>
              <div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.25rem' }}>{v.title}</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', lineHeight: 1.6 }}>{v.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function OrgChartTab() {
  const [selected, setSelected] = useState<typeof TEAM[0] | null>(null)

  return (
    <div className="fade-up">
      <SectionHeader
        icon={<Users size={18} />}
        title="Our Team"
        subtitle="Small team, big impact. Everyone reports to Corbin."
      />

      {/* CEO */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        <div
          className="org-node ceo"
          style={{ width: 200, cursor: 'pointer' }}
          onClick={() => setSelected(selected?.name === TEAM[0].name ? null : TEAM[0])}
        >
          <div className="avatar" style={{ background: TEAM[0].bg, color: TEAM[0].color }}>
            {TEAM[0].initials}
          </div>
          <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', marginBottom: '0.2rem' }}>{TEAM[0].name}</div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>{TEAM[0].role}</div>
          <div style={{ marginTop: '0.5rem' }}><span className="badge badge-amber">CEO</span></div>
        </div>
      </div>

      {/* Connector lines */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 0 }}>
        <div style={{ width: 1, height: 32, background: 'rgba(13,148,136,0.4)' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 0 }}>
        <div style={{ width: 160, height: 1, background: 'rgba(13,148,136,0.4)' }} />
      </div>

      {/* Reports */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        {TEAM.slice(1).map(member => (
          <div key={member.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: 1, height: 32, background: 'rgba(13,148,136,0.4)' }} />
            <div
              className="org-node"
              style={{ width: 180, cursor: 'pointer' }}
              onClick={() => setSelected(selected?.name === member.name ? null : member)}
            >
              <div className="avatar" style={{ background: member.bg, color: member.color }}>
                {member.initials}
              </div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.2rem' }}>{member.name}</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.72rem' }}>{member.role}</div>
              <div style={{ marginTop: '0.5rem' }}>
                <span className="badge badge-teal">{member.dept}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bio card */}
      {selected && (
        <div className="glass-card fade-up" style={{ borderRadius: 16, padding: '1.5rem', marginBottom: '1.5rem', borderColor: 'rgba(13,148,136,0.3)' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div className="avatar" style={{ background: selected.bg, color: selected.color, width: 56, height: 56, fontSize: '1.3rem' }}>
              {selected.initials}
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, margin: '0 0 0.2rem' }}>{selected.name}</h3>
              <div style={{ color: '#14b8a6', fontSize: '0.85rem', marginBottom: '0.75rem' }}>{selected.role}</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{selected.bio}</p>
              {'reportsTo' in selected && (
                <div style={{ marginTop: '0.75rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                  Reports to: <span style={{ color: '#fbbf24' }}>{selected.reportsTo}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Team quick contacts */}
      <div className="glass-card" style={{ borderRadius: 16, padding: '1.5rem' }}>
        <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, marginBottom: '1rem', fontSize: '0.95rem' }}>Quick Contacts</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {[
            { name: 'Corbin (CEO)', email: 'hello@dewclawland.com', label: 'Invoices, strategy, escalations' },
            { name: 'General Inbox', email: 'hello@dewclawland.com', label: 'All other inquiries' },
          ].map(c => (
            <div key={c.name} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem', background: 'rgba(255,255,255,0.03)', borderRadius: 10 }}>
              <Mail size={15} color="#14b8a6" style={{ flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 500, fontSize: '0.85rem' }}>{c.name}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>{c.label}</div>
              </div>
              <a href={`mailto:${c.email}`} style={{ color: '#14b8a6', fontSize: '0.8rem', textDecoration: 'none' }}>{c.email}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function EventsTab() {
  return (
    <div className="fade-up">
      <SectionHeader
        icon={<Calendar size={18} />}
        title="Events & Calendar"
        subtitle="Stay ahead of company events, training sessions, and key milestones."
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {EVENTS.map((ev, i) => (
          <div key={i} className="glass-card" style={{ borderRadius: 16, padding: '1.5rem', display: 'flex', gap: '1.25rem' }}>
            <div style={{ width: 4, borderRadius: 4, background: ev.type === 'bootcamp' ? 'var(--brand-coral)' : 'var(--brand-teal)', flexShrink: 0, alignSelf: 'stretch', minHeight: 60 }} />
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, margin: 0, fontSize: '1rem' }}>{ev.title}</h3>
                <span className={`badge ${ev.badgeClass}`}>{ev.badge}</span>
              </div>
              <div style={{ color: '#14b8a6', fontSize: '0.82rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: 5 }}>
                <Calendar size={12} /> {ev.date}
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.65, margin: 0 }}>{ev.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bootcamp callout */}
      <div style={{
        marginTop: '1.5rem', borderRadius: 16, padding: '2rem',
        background: 'linear-gradient(135deg, rgba(249,115,22,0.1), rgba(245,158,11,0.08))',
        border: '1px solid rgba(249,115,22,0.25)', textAlign: 'center'
      }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🏕️</div>
        <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.3rem', marginBottom: '0.5rem' }}>Q2 Sales Bootcamp</h3>
        <p style={{ color: 'var(--text-secondary)', maxWidth: 400, margin: '0 auto 1rem', fontSize: '0.9rem', lineHeight: 1.6 }}>
          May 12–16 • Virtual • All Hands Required<br />
          Sharpen your skills, align on Q2 strategy, and connect with the team.
        </p>
        <div className="badge badge-coral" style={{ fontSize: '0.8rem' }}>Block your calendar now</div>
      </div>
    </div>
  )
}

function SOPsTab() {
  return (
    <div className="fade-up">
      <SectionHeader
        icon={<ClipboardList size={18} />}
        title="Standard Operating Procedures"
        subtitle="Click any SOP to expand the step-by-step guide."
      />

      {SOPS.map((sop, i) => (
        <Accordion key={i} title={`${sop.icon}  ${sop.title}`}>
          <div style={{ paddingTop: '0.75rem' }}>
            {sop.steps.map((step, j) => (
              <div key={j} className="sop-step">
                <div className="sop-step-num">{j + 1}</div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.65, margin: 0 }}>{step}</p>
              </div>
            ))}
          </div>
        </Accordion>
      ))}

      <div className="glass-card" style={{ borderRadius: 16, padding: '1.25rem', marginTop: '1rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        <Info size={18} color="#fbbf24" style={{ flexShrink: 0, marginTop: 2 }} />
        <div>
          <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.3rem' }}>Don't see your SOP?</div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0, lineHeight: 1.6 }}>
            Reach out to Corbin at <a href="mailto:hello@dewclawland.com" style={{ color: '#14b8a6' }}>hello@dewclawland.com</a> or drop a message in #general on Slack. SOPs are living documents — if something's missing, let us know.
          </p>
        </div>
      </div>
    </div>
  )
}

function OnboardingTab() {
  const [activeWeek, setActiveWeek] = useState(0)

  return (
    <div className="fade-up">
      <SectionHeader
        icon={<Award size={18} />}
        title="New Employee Onboarding"
        subtitle="Your 4-week roadmap to becoming a fully integrated DewClaw team member."
      />

      {/* Timeline nav */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        {ONBOARDING_STEPS.map((step, i) => (
          <button
            key={i}
            className={`tab-btn ${activeWeek === i ? 'active' : ''}`}
            onClick={() => setActiveWeek(i)}
          >
            {step.week}
          </button>
        ))}
      </div>

      {/* Active week card */}
      <div className="glass-card fade-up" style={{ borderRadius: 16, padding: '1.75rem', marginBottom: '1.5rem', borderColor: 'rgba(13,148,136,0.25)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(13,148,136,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.8rem', color: '#14b8a6' }}>
            W{activeWeek + 1}
          </div>
          <div>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.05rem' }}>{ONBOARDING_STEPS[activeWeek].title}</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>{ONBOARDING_STEPS[activeWeek].week}</div>
          </div>
          {ONBOARDING_STEPS[activeWeek].done && (
            <span className="badge badge-teal" style={{ marginLeft: 'auto' }}>✓ Complete</span>
          )}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          {ONBOARDING_STEPS[activeWeek].items.map((item, j) => (
            <div key={j} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <CheckCircle size={15} color={ONBOARDING_STEPS[activeWeek].done ? '#22c55e' : '#64748b'} style={{ flexShrink: 0, marginTop: 2 }} />
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.55 }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Progress */}
      <div className="glass-card" style={{ borderRadius: 16, padding: '1.25rem', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>Onboarding Progress</span>
          <span style={{ color: '#14b8a6', fontSize: '0.85rem' }}>25%</span>
        </div>
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: '25%' }} />
        </div>
      </div>

      {/* Resources */}
      <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.95rem' }}>Key Resources</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
        {[
          { title: 'Contractor Handbook', icon: '📋', desc: 'Full remote work guidelines' },
          { title: 'Company Culture Guide', icon: '🌈', desc: 'Values, norms, and inclusion' },
          { title: 'Slack Channels', icon: '💬', desc: 'Where to find the team' },
          { title: 'Invoice Template', icon: '💸', desc: 'Submit to hello@dewclawland.com' },
        ].map(r => (
          <div key={r.title} className="glass-card" style={{ borderRadius: 12, padding: '1rem', cursor: 'pointer' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{r.icon}</div>
            <div style={{ fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.2rem' }}>{r.title}</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>{r.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ReportsTab() {
  return (
    <div className="fade-up">
      <SectionHeader
        icon={<BarChart3 size={18} />}
        title="Business Reports"
        subtitle="Track performance metrics, pipeline health, and team productivity."
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
        {[
          { label: 'Q1 Deals Closed', value: '24', change: '+18%', up: true, color: '#14b8a6' },
          { label: 'Avg. Deal Size', value: '$42K', change: '+7%', up: true, color: '#fbbf24' },
          { label: 'Pipeline Value', value: '$1.2M', change: '+31%', up: true, color: '#a78bfa' },
          { label: 'Time to Close', value: '18 days', change: '-3 days', up: true, color: '#fb923c' },
        ].map(m => (
          <div key={m.label} className="stat-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem', marginBottom: '0.5rem' }}>{m.label}</div>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.8rem', color: m.color, marginBottom: '0.4rem' }}>{m.value}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.8rem', color: '#22c55e' }}>
              <span>↑</span> {m.change} vs last quarter
            </div>
          </div>
        ))}
      </div>

      {/* Placeholder charts */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
        <div className="glass-card" style={{ borderRadius: 16, padding: '1.5rem' }}>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '0.95rem', marginBottom: '1rem' }}>Monthly Deal Volume</h3>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 120, marginBottom: '0.5rem' }}>
            {[40, 65, 45, 80, 70, 90, 75, 95, 60, 85, 72, 100].map((h, i) => (
              <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 11 ? '#14b8a6' : 'rgba(13,148,136,0.3)', borderRadius: '3px 3px 0 0', transition: 'height 0.5s ease' }} />
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', fontSize: '0.7rem' }}>
            <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Dec</span>
          </div>
        </div>
        <div className="glass-card" style={{ borderRadius: 16, padding: '1.5rem' }}>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '0.95rem', marginBottom: '1rem' }}>Lead Sources</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {[
              { label: 'Direct Mail', pct: 42, color: '#14b8a6' },
              { label: 'Online Ads', pct: 28, color: '#fbbf24' },
              { label: 'Referrals', pct: 18, color: '#a78bfa' },
              { label: 'Cold Outreach', pct: 12, color: '#fb923c' },
            ].map(s => (
              <div key={s.label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, fontSize: '0.82rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>{s.label}</span>
                  <span style={{ color: s.color, fontWeight: 600 }}>{s.pct}%</span>
                </div>
                <div className="progress-bar">
                  <div style={{ height: '100%', borderRadius: 3, background: s.color, width: `${s.pct}%`, transition: 'width 1s ease' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="glass-card" style={{ borderRadius: 16, padding: '1.25rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
        <AlertCircle size={18} color="#fbbf24" style={{ flexShrink: 0 }} />
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0 }}>
          These are illustrative metrics. For live reporting, connect your CRM or request access from Corbin at <a href="mailto:hello@dewclawland.com" style={{ color: '#14b8a6' }}>hello@dewclawland.com</a>.
        </p>
      </div>
    </div>
  )
}

function HolidaysTab() {
  const today = new Date()
  const [month, setMonth] = useState(today.getMonth())
  const [year] = useState(today.getFullYear())
  const [tooltip, setTooltip] = useState<string | null>(null)

  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const monthName = new Date(year, month).toLocaleString('default', { month: 'long' })

  const holidayMap = new Map(
    HOLIDAYS_2025.map(h => [h.date, h.name])
  )

  const days: (number | null)[] = Array(firstDay).fill(null)
  for (let i = 1; i <= daysInMonth; i++) days.push(i)

  const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  function dateStr(d: number) {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`
  }

  return (
    <div className="fade-up">
      <SectionHeader
        icon={<Umbrella size={18} />}
        title="Holiday Calendar"
        subtitle="US federal holidays and DewClaw Land company days off."
      />

      {/* Calendar */}
      <div className="glass-card" style={{ borderRadius: 20, padding: '1.5rem', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <button
            onClick={() => setMonth(m => m === 0 ? 11 : m - 1)}
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--surface-border)', borderRadius: 8, padding: '0.4rem 0.75rem', color: 'var(--text-primary)', cursor: 'pointer' }}
          >‹</button>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, margin: 0 }}>{monthName} {year}</h3>
          <button
            onClick={() => setMonth(m => m === 11 ? 0 : m + 1)}
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--surface-border)', borderRadius: 8, padding: '0.4rem 0.75rem', color: 'var(--text-primary)', cursor: 'pointer' }}
          >›</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.3rem', marginBottom: '0.5rem' }}>
          {WEEKDAYS.map(d => (
            <div key={d} style={{ textAlign: 'center', fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, padding: '0.3rem 0' }}>{d}</div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.3rem' }}>
          {days.map((d, i) => {
            if (!d) return <div key={i} />
            const ds = dateStr(d)
            const isHoliday = holidayMap.has(ds)
            const isToday = d === today.getDate() && month === today.getMonth()
            const hName = holidayMap.get(ds)
            return (
              <div
                key={i}
                className={`cal-day ${isHoliday ? 'holiday' : ''} ${isToday ? 'today' : ''}`}
                title={hName}
                onMouseEnter={() => isHoliday ? setTooltip(hName || null) : null}
                onMouseLeave={() => setTooltip(null)}
                style={{ fontSize: '0.82rem' }}
              >
                {d}
              </div>
            )
          })}
        </div>
        {tooltip && (
          <div style={{ marginTop: '0.75rem', textAlign: 'center', color: '#2dd4bf', fontSize: '0.82rem', fontWeight: 500 }}>
            🎉 {tooltip}
          </div>
        )}
      </div>

      {/* Holiday list */}
      <div className="glass-card" style={{ borderRadius: 16, padding: '1.5rem' }}>
        <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, marginBottom: '1rem', fontSize: '0.95rem' }}>2025 Observed Holidays</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {HOLIDAYS_2025.map((h, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.6rem 0.8rem', background: 'rgba(255,255,255,0.03)', borderRadius: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ fontSize: '1rem' }}>🇺🇸</span>
                <span style={{ fontSize: '0.87rem' }}>{h.name}</span>
              </div>
              <span style={{ color: '#14b8a6', fontSize: '0.8rem', fontWeight: 500 }}>
                {new Date(h.date + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </span>
            </div>
          ))}
        </div>
        <div className="divider" />
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', margin: 0, lineHeight: 1.65 }}>
          DewClaw Land observes all US federal holidays. Contractors should plan accordingly and communicate any schedule changes in advance via Slack or email.
        </p>
      </div>
    </div>
  )
}

function HandbookTab() {
  return (
    <div className="fade-up">
      <SectionHeader
        icon={<BookOpen size={18} />}
        title="Staff Handbook"
        subtitle="Everything you need to know about working at DewClaw Land."
      />

      <Accordion title="⏰  Work Hours & Availability">
        <div style={{ paddingTop: '0.75rem' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.7, margin: '0 0 1rem' }}>
            Core hours are <strong style={{ color: '#14b8a6' }}>7 AM – 5 PM Arizona Time (MST/no DST)</strong>. You're expected to be available during these hours for communication, meetings, and deliverables.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
            {[
              { label: 'Core Hours', value: '7 AM – 5 PM AZ' },
              { label: 'Timezone', value: 'Arizona (MST)' },
              { label: 'Async Response', value: 'Within 4 hrs' },
              { label: 'Urgent Response', value: 'Within 1 hr' },
            ].map(i => (
              <div key={i.label} style={{ background: 'rgba(13,148,136,0.08)', borderRadius: 10, padding: '0.75rem' }}>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.72rem', marginBottom: '0.2rem' }}>{i.label}</div>
                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#14b8a6' }}>{i.value}</div>
              </div>
            ))}
          </div>
        </div>
      </Accordion>

      <Accordion title="💬  Communication Guidelines">
        <div style={{ paddingTop: '0.75rem' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.7, margin: '0 0 0.75rem' }}>
            <strong>Slack</strong> is our primary communication tool. Email is for formal communication, invoices, and external parties.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {[
              ['#general', 'Company announcements and updates'],
              ['#team-updates', 'Project and deliverable status'],
              ['#random', 'Non-work conversation and team bonding'],
              ['DMs', 'Direct questions — keep them focused'],
            ].map(([ch, desc]) => (
              <div key={ch} style={{ display: 'flex', gap: '0.75rem', padding: '0.6rem', background: 'rgba(255,255,255,0.03)', borderRadius: 8 }}>
                <span style={{ color: '#fbbf24', fontFamily: 'monospace', fontSize: '0.85rem', fontWeight: 600, flexShrink: 0 }}>{ch}</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </Accordion>

      <Accordion title="💸  Invoice & Payment Policy">
        <div style={{ paddingTop: '0.75rem' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.7, margin: '0 0 0.75rem' }}>
            All invoices must be submitted by the <strong>last business day of the month</strong>. Payments are processed within 5–7 business days.
          </p>
          <div style={{ background: 'rgba(13,148,136,0.08)', borderRadius: 10, padding: '1rem', marginBottom: '0.75rem' }}>
            <div style={{ fontSize: '0.82rem', color: '#2dd4bf', fontWeight: 600, marginBottom: '0.4rem' }}>Submit invoices to:</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <a href="mailto:hello@dewclawland.com" style={{ color: '#fbbf24', fontSize: '0.88rem' }}>hello@dewclawland.com</a>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>CC: Corbin (CEO)</span>
            </div>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', margin: 0 }}>
            Subject format: "Invoice – [Your Name] – [Month Year]"
          </p>
        </div>
      </Accordion>

      <Accordion title="🏖️  Time Off Policy">
        <div style={{ paddingTop: '0.75rem' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.7, margin: '0 0 0.75rem' }}>
            Paid time off is earned after an initial period with the company. We believe in work-life balance and encourage team members to take time off to recharge.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {[
              'Notify your manager and Corbin at least 2 weeks in advance',
              'Add time off to the shared Slack calendar',
              'Ensure your deliverables are covered before going offline',
              'US Federal Holidays are paid — see the Holiday Calendar tab',
            ].map((item, j) => (
              <div key={j} style={{ display: 'flex', gap: '0.5rem' }}>
                <CheckCircle size={14} color="#14b8a6" style={{ flexShrink: 0, marginTop: 3 }} />
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.87rem', lineHeight: 1.55 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Accordion>

      <Accordion title="🧠  Professional Development">
        <div style={{ paddingTop: '0.75rem' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.7, margin: '0 0 0.75rem' }}>
            DewClaw Land encourages continuous learning. We support your growth through:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {[
              'Access to relevant online courses and certifications (discuss with Corbin)',
              'Participation in industry events and webinars',
              'Internal knowledge sharing sessions with the team',
              'Mentorship and feedback from leadership',
            ].map((item, j) => (
              <div key={j} style={{ display: 'flex', gap: '0.5rem' }}>
                <Star size={14} color="#fbbf24" style={{ flexShrink: 0, marginTop: 3 }} />
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.87rem', lineHeight: 1.55 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Accordion>

      <Accordion title="🛡️  Confidentiality & Security">
        <div style={{ paddingTop: '0.75rem' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.7, margin: '0 0 0.75rem' }}>
            As a DewClaw Land team member, you have access to confidential business information. This must be protected at all times.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {[
              'Never share client data, deal flow, or financials outside the team',
              'Use strong, unique passwords for all company tools',
              'Enable 2FA on all accounts where available',
              'Report any suspected security issues to Corbin immediately',
              'Proprietary processes and SOPs are confidential — do not distribute',
            ].map((item, j) => (
              <div key={j} style={{ display: 'flex', gap: '0.5rem' }}>
                <Shield size={14} color="#a78bfa" style={{ flexShrink: 0, marginTop: 3 }} />
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.87rem', lineHeight: 1.55 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Accordion>

      <Accordion title="❤️  Health & Wellness">
        <div style={{ paddingTop: '0.75rem' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.7, margin: '0 0 0.75rem' }}>
            Remote work is great — but burnout is real. We encourage healthy habits and sustainable work patterns.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {[
              'Take real breaks — step away from screens for at least 5 min every hour',
              '20-20-20 rule: every 20 min, look at something 20 feet away for 20 seconds',
              'Create a dedicated workspace separate from your relaxation space',
              'Communicate workload concerns early — we can adjust',
              'Take your earned time off — it exists for a reason',
            ].map((item, j) => (
              <div key={j} style={{ display: 'flex', gap: '0.5rem' }}>
                <Heart size={14} color="#fb923c" style={{ flexShrink: 0, marginTop: 3 }} />
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.87rem', lineHeight: 1.55 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Accordion>
    </div>
  )
}

// ─── MAIN APP ──────────────────────────────────────────────────────────────

const TABS = [
  { id: 'home', label: 'Home', icon: <Home size={15} /> },
  { id: 'org', label: 'Our Team', icon: <Users size={15} /> },
  { id: 'events', label: 'Events', icon: <Calendar size={15} /> },
  { id: 'sops', label: 'SOPs', icon: <ClipboardList size={15} /> },
  { id: 'onboarding', label: 'Onboarding', icon: <Award size={15} /> },
  { id: 'reports', label: 'Reports', icon: <BarChart3 size={15} /> },
  { id: 'holidays', label: 'Holidays', icon: <Umbrella size={15} /> },
  { id: 'handbook', label: 'Handbook', icon: <BookOpen size={15} /> },
]

function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [mobileNav, setMobileNav] = useState(false)
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 60000)
    return () => clearInterval(t)
  }, [])

  const azTime = time.toLocaleTimeString('en-US', {
    timeZone: 'America/Phoenix',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })

  function renderTab() {
    switch (activeTab) {
      case 'home': return <HomeTab />
      case 'org': return <OrgChartTab />
      case 'events': return <EventsTab />
      case 'sops': return <SOPsTab />
      case 'onboarding': return <OnboardingTab />
      case 'reports': return <ReportsTab />
      case 'holidays': return <HolidaysTab />
      case 'handbook': return <HandbookTab />
      default: return <HomeTab />
    }
  }

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <div className="mesh-bg" />

      {/* Header */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(10,15,26,0.9)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--surface-border)',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.25rem', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexShrink: 0 }}>
            <div style={{ width: 32, height: 32, borderRadius: 10, background: 'linear-gradient(135deg, #0d9488, #0f766e)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>
              🐾
            </div>
            <div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '0.95rem', lineHeight: 1 }}>DewClaw Land</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.62rem', letterSpacing: '0.05em' }}>INTRANET PORTAL</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="tab-scroll" style={{ display: 'flex', gap: '0.25rem', flex: 1, justifyContent: 'center', overflowX: 'auto' }}>
            {TABS.map(tab => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => { setActiveTab(tab.id); setMobileNav(false) }}
                style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.82rem' }}
              >
                {tab.icon}
                <span style={{ display: 'none' }}>{tab.label}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>

          {/* Time */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0, color: 'var(--text-muted)', fontSize: '0.78rem' }}>
            <span className="pulse-dot" />
            <span>{azTime} AZ</span>
          </div>
        </div>
      </header>

      {/* Main */}
      <main style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem 1.25rem 4rem', position: 'relative', zIndex: 1 }}>
        {renderTab()}
      </main>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid var(--surface-border)',
        background: 'rgba(10,15,26,0.8)',
        backdropFilter: 'blur(12px)',
        position: 'relative', zIndex: 1,
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>
            © {new Date().getFullYear()} DewClaw Land — Internal Use Only
          </div>
          <a
            href="mailto:hello@dewclawland.com"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: 'rgba(13,148,136,0.12)', border: '1px solid rgba(13,148,136,0.3)',
              borderRadius: 8, padding: '0.4rem 0.9rem',
              color: '#14b8a6', fontSize: '0.8rem', textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(13,148,136,0.22)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(13,148,136,0.12)')}
          >
            <Mail size={13} /> Contact Admin
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
