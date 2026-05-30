import { MockupFrame } from './MockupFrame';
import {
  MockSidebar,
  StatusBadge,
  KpiCard,
  MockSearch,
  MockAvatar,
  DataTable,
  ActivityFeed,
  BarFunnel,
  DonutLegend,
} from './mockup-ui/MockupPrimitives';

const UI = 'text-[10px] sm:text-[11px] md:text-xs';

export function CrmHrMockup() {
  const rows = [
    { id: 'E-1042', name: 'Alex Morgan', credit: '₹12,400', debit: '₹2,100', balance: '₹10,300', status: <StatusBadge label="Active" tone="green" /> },
    { id: 'E-1088', name: 'Jordan Kim', credit: '₹8,750', debit: '₹0', balance: '₹8,750', status: <StatusBadge label="Active" tone="green" /> },
    { id: 'E-1103', name: 'Sam Rivera', credit: '₹15,200', debit: '₹4,800', balance: '₹10,400', status: <StatusBadge label="Review" tone="amber" /> },
    { id: 'E-1120', name: 'Taylor Park', credit: '₹6,300', debit: '₹1,200', balance: '₹5,100', status: <StatusBadge label="Penalty" tone="rose" /> },
    { id: 'E-1156', name: 'Casey Lee', credit: '₹9,100', debit: '₹900', balance: '₹8,200', status: <StatusBadge label="Active" tone="green" /> },
    { id: 'E-1189', name: 'Riley Chen', credit: '₹11,600', debit: '₹3,400', balance: '₹8,200', status: <StatusBadge label="Hold" tone="slate" /> },
  ];

  return (
    <MockupFrame label="HR Wallet & CRM — Portfolio preview">
      <div className={`flex h-full min-h-0 ${UI}`}>
        <MockSidebar activeIndex={2} />
        <div className="flex-1 flex flex-col min-w-0 bg-slate-50">
          <header className="flex flex-wrap items-center gap-2 px-3 py-2 bg-white border-b border-slate-200">
            {['Overview', 'Teams', 'Wallet', 'Incentives', 'Expenses'].map((t, i) => (
              <span
                key={t}
                className={`px-2 py-1 rounded-md whitespace-nowrap ${i === 2 ? 'bg-sky-50 text-sky-700 font-semibold' : 'text-slate-500'}`}
              >
                {t}
              </span>
            ))}
            <div className="ml-auto flex items-center gap-2">
              <span className="relative w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px]">🔔</span>
              <MockAvatar name="HR Admin" />
            </div>
          </header>

          <div className="flex-1 flex flex-col lg:flex-row gap-2 p-2 sm:p-3 min-h-0 overflow-hidden">
            <div className="flex-1 flex flex-col gap-2 min-h-0">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                <KpiCard label="Total Credit" value="₹63.4L" delta="+8.2% vs last period" />
                <KpiCard label="Total Debit" value="₹12.4L" delta="Penalties & adjustments" />
                <KpiCard label="Net Balance" value="₹51.0L" delta="Wallet consolidated" />
                <KpiCard label="Active Employees" value="342" delta="12 pending reviews" />
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <MockSearch placeholder="Filter by name or employee ID" />
                <span className="px-2 py-1 rounded-md border border-slate-200 bg-white text-slate-600">Department ▾</span>
                <span className="px-2 py-1 rounded-md border border-slate-200 bg-white text-slate-600">Dec 20 – 28 ▾</span>
                <span className="px-2 py-1 rounded-md bg-sky-600 text-white font-medium ml-auto">Export CSV</span>
              </div>

              <div className="flex-1 min-h-[140px] flex flex-col">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-slate-800 text-xs sm:text-sm">Employee Wallet Summary</h3>
                  <span className="text-slate-400">1–10 of 342</span>
                </div>
                <DataTable
                  columns={[
                    { key: 'id', label: 'ID' },
                    { key: 'name', label: 'Name' },
                    { key: 'credit', label: 'Credit', align: 'right' },
                    { key: 'debit', label: 'Debit', align: 'right' },
                    { key: 'balance', label: 'Balance', align: 'right' },
                    { key: 'status', label: 'Status' },
                  ]}
                  rows={rows}
                />
              </div>
            </div>

            <div className="w-full lg:w-36 xl:w-44 shrink-0 min-h-[120px] lg:min-h-0">
              <ActivityFeed
                items={[
                  { time: '10:42', text: 'Incentive credit posted for E-1042' },
                  { time: '10:18', text: 'Debit penalty applied — expense policy' },
                  { time: '09:55', text: 'Wallet export completed by HR Admin' },
                  { time: '09:30', text: '3 expense claims awaiting approval' },
                  { time: '09:12', text: 'REST sync: 24 records updated' },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </MockupFrame>
  );
}

export function CareerPortalMockup() {
  const jobs = [
    { title: 'Senior React Developer', dept: 'Engineering', loc: 'Chennai', type: 'Full-time', applicants: 48 },
    { title: 'Product Designer', dept: 'Design', loc: 'Remote', type: 'Full-time', applicants: 32 },
    { title: 'Python Backend Engineer', dept: 'Engineering', loc: 'Chennai', type: 'Full-time', applicants: 27 },
    { title: 'Customer Success Lead', dept: 'Operations', loc: 'Hybrid', type: 'Full-time', applicants: 19 },
  ];

  return (
    <MockupFrame label="Career Portal — Portfolio preview">
      <div className={`flex flex-col h-full min-h-0 bg-slate-50 ${UI}`}>
        <header className="flex flex-wrap items-center gap-2 px-3 py-2.5 bg-white border-b border-slate-200">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-sky-500 to-violet-600" />
            <span className="font-bold text-slate-800 text-xs sm:text-sm">Career Portal</span>
          </div>
          <div className="hidden md:flex gap-3 text-slate-500 ml-4">
            {['Open Roles', 'Life at Company', 'Benefits', 'FAQ'].map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
          <div className="flex items-center gap-2 ml-auto flex-1 justify-end max-w-md">
            <MockSearch placeholder="Search jobs, teams, keywords" />
            <span className="px-3 py-1.5 rounded-full bg-slate-900 text-white font-medium whitespace-nowrap">Apply Now</span>
          </div>
        </header>

        <div className="flex-1 p-2 sm:p-3 flex flex-col gap-2 min-h-0 overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
            <KpiCard label="Open Positions" value="24" delta="6 new this week" />
            <KpiCard label="Applications" value="1,284" delta="+18% vs last month" />
            <KpiCard label="Interviews Scheduled" value="56" delta="Across 8 departments" />
            <KpiCard label="Avg. Time to Hire" value="18d" delta="Down from 22 days" />
          </div>

          <div className="flex flex-wrap gap-2">
            {['All Departments', 'Engineering', 'Design', 'Operations', 'Chennai', 'Remote'].map((f, i) => (
              <span
                key={f}
                className={`px-2 py-1 rounded-full border text-[10px] ${i === 0 ? 'bg-sky-50 border-sky-200 text-sky-700' : 'bg-white border-slate-200 text-slate-600'}`}
              >
                {f}
              </span>
            ))}
          </div>

          <div className="flex-1 grid lg:grid-cols-3 gap-2 min-h-0">
            <div className="lg:col-span-2 flex flex-col gap-1.5 min-h-0 overflow-y-auto mockup-scroll">
              <p className="font-bold text-slate-800 text-xs">Featured Open Roles</p>
              {jobs.map((j) => (
                <div
                  key={j.title}
                  className="flex flex-wrap items-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200 hover:border-sky-200 transition-colors"
                >
                  <div className="flex-1 min-w-[140px]">
                    <p className="font-semibold text-slate-800">{j.title}</p>
                    <p className="text-slate-500 mt-0.5">
                      {j.dept} · {j.loc} · {j.type}
                    </p>
                  </div>
                  <StatusBadge label={`${j.applicants} applicants`} tone="blue" />
                  <span className="px-2 py-1 rounded-md bg-slate-900 text-white text-[10px] font-medium">View Role →</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2 min-h-0">
              <div className="rounded-lg bg-white border border-slate-200 p-2">
                <p className="font-semibold text-slate-800 text-[10px] sm:text-xs mb-2">Application Pipeline</p>
                <BarFunnel
                  items={[
                    { label: 'Applied', value: '428', pct: 100 },
                    { label: 'Screening', value: '186', pct: 62 },
                    { label: 'Interview', value: '56', pct: 28 },
                    { label: 'Offer', value: '12', pct: 12 },
                  ]}
                />
              </div>
              <ActivityFeed
                items={[
                  { time: 'Now', text: 'New application: React Developer' },
                  { time: '2h', text: 'Interview scheduled — Design role' },
                  { time: '5h', text: 'Offer letter sent — Backend Engineer' },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </MockupFrame>
  );
}

export function PlatformDashboardMockup() {
  const rows = [
    { gid: 'GID-8821', client: 'Vertex Tools Pvt Ltd', catalog: 'Compliance', service: 'GST Return Filing', owner: 'Team Alpha', status: <StatusBadge label="Ongoing" tone="blue" /> },
    { gid: 'GID-7742', client: 'Silverline Retail LLP', catalog: 'Legal', service: 'Trademark Search', owner: 'Team Beta', status: <StatusBadge label="In Review" tone="amber" /> },
    { gid: 'GID-6610', client: 'Nova Manufacturing', catalog: 'Tax', service: 'TDS Compliance', owner: 'Team Alpha', status: <StatusBadge label="Completed" tone="green" /> },
    { gid: 'GID-5593', client: 'Acme Logistics', catalog: 'Advisory', service: 'Business Consultation', owner: 'Team Gamma', status: <StatusBadge label="Ongoing" tone="blue" /> },
    { gid: 'GID-4481', client: 'Greenfield Tech', catalog: 'Compliance', service: 'Annual ROC Filing', owner: 'Team Beta', status: <StatusBadge label="Pending" tone="slate" /> },
  ];

  return (
    <MockupFrame label="Business Platform Dashboard — Portfolio preview">
      <div className={`flex h-full min-h-0 ${UI}`}>
        <MockSidebar activeIndex={0} />
        <div className="flex-1 flex flex-col min-w-0 bg-slate-50 overflow-hidden">
          <header className="flex items-center justify-between gap-2 px-3 py-2 bg-white border-b border-slate-200">
            <div>
              <p className="font-bold text-slate-800 text-xs sm:text-sm">Operations Dashboard</p>
              <p className="text-slate-400 text-[10px]">All time data · Last synced 2 min ago</p>
            </div>
            <div className="flex items-center gap-2">
              <MockSearch placeholder="Search clients, services..." />
              <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] relative">
                🔔
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-rose-500 rounded-full" />
              </span>
              <MockAvatar name="Ops Lead" />
            </div>
          </header>

          <div className="flex-1 p-2 sm:p-3 flex flex-col gap-2 min-h-0 overflow-hidden">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
              <KpiCard label="Services Launched" value="385" delta="+12% QoQ" />
              <KpiCard label="In Progress" value="142" delta="42 due this week" />
              <KpiCard label="Overdue" value="24" delta="↓ 6 from yesterday" />
              <KpiCard label="Sales Revenue" value="₹82.3L" delta="INR · All regions" />
            </div>

            <div className="grid sm:grid-cols-3 gap-2 flex-1 min-h-0">
              <div className="rounded-lg bg-white border border-slate-200 p-2 flex flex-col">
                <p className="font-semibold text-slate-800 mb-2">Service Overview</p>
                <DonutLegend
                  total="131 TOTAL"
                  segments={[
                    { label: 'Ongoing', value: '11', color: 'bg-sky-500' },
                    { label: 'Completed', value: '3', color: 'bg-violet-500' },
                    { label: 'In Review', value: '2', color: 'bg-amber-400' },
                    { label: 'On Hold', value: '1', color: 'bg-slate-400' },
                  ]}
                />
              </div>
              <div className="rounded-lg bg-white border border-slate-200 p-2">
                <p className="font-semibold text-slate-800 mb-2">Lead Funnel</p>
                <BarFunnel
                  items={[
                    { label: 'Generated', value: '2,840', pct: 100 },
                    { label: 'Qualified', value: '1,120', pct: 68 },
                    { label: 'Converted', value: '384', pct: 32 },
                  ]}
                />
              </div>
              <div className="rounded-lg bg-white border border-slate-200 p-2 hidden sm:block">
                <p className="font-semibold text-slate-800 mb-2">Top Services</p>
                {[
                  { n: 'GST Filing', p: 92 },
                  { n: 'Incorporation', p: 78 },
                  { n: 'Trademark', p: 65 },
                  { n: 'Digital Marketing', p: 48 },
                ].map((s) => (
                  <div key={s.n} className="flex items-center gap-1 mb-1.5">
                    <span className="w-16 truncate text-slate-600">{s.n}</span>
                    <div className="flex-1 h-1.5 bg-slate-100 rounded-full">
                      <div className="h-full bg-sky-500 rounded-full" style={{ width: `${s.p}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 min-h-[100px] flex flex-col">
              <div className="flex justify-between items-center mb-1">
                <p className="font-semibold text-slate-800">Recent Services</p>
                <div className="flex gap-1 text-[10px]">
                  <span className="px-2 py-0.5 rounded bg-sky-100 text-sky-700 font-medium">Services</span>
                  <span className="px-2 py-0.5 rounded text-slate-500">Leads</span>
                </div>
              </div>
              <DataTable
                columns={[
                  { key: 'gid', label: 'GID' },
                  { key: 'client', label: 'Client' },
                  { key: 'catalog', label: 'Catalog' },
                  { key: 'service', label: 'Service' },
                  { key: 'owner', label: 'Assigned' },
                  { key: 'status', label: 'Status' },
                ]}
                rows={rows}
              />
            </div>
          </div>
        </div>
      </div>
    </MockupFrame>
  );
}

function LandingDashboardCard() {
  const rows = [
    { client: 'Vertex Tools', service: 'GST Return', team: 'Alpha', status: <StatusBadge label="Active" tone="green" /> },
    { client: 'Silverline LLP', service: 'TM Filing', team: 'Beta', status: <StatusBadge label="Review" tone="amber" /> },
    { client: 'Nova Mfg', service: 'ROC Annual', team: 'Alpha', status: <StatusBadge label="Done" tone="green" /> },
  ];

  return (
    <div className="relative h-full flex flex-col rounded-xl bg-white border border-slate-200 shadow-xl p-2 sm:p-3 overflow-hidden text-[9px] sm:text-[10px]">
      <div className="flex justify-between items-center mb-2">
        <p className="font-bold text-slate-800 tracking-wide">PRO SUITE DASHBOARD</p>
        <span className="text-slate-400">Live</span>
      </div>
      <div className="grid grid-cols-4 gap-1 mb-2">
        {[
          { l: 'Launched', v: '385' },
          { l: 'Ongoing', v: '142' },
          { l: 'Overdue', v: '24' },
          { l: 'Revenue', v: '₹8.2L' },
        ].map((k) => (
          <div key={k.l} className="rounded-md bg-slate-50 border border-slate-100 p-1.5 text-center">
            <p className="text-slate-400 uppercase text-[8px]">{k.l}</p>
            <p className="font-bold text-slate-900">{k.v}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-1 flex-1 min-h-0 mb-2">
        <div className="rounded-md border border-slate-100 p-1.5">
          <p className="font-semibold text-slate-700 mb-1">Overview</p>
          <DonutLegend
            total="131"
            segments={[
              { label: 'Ongoing', value: '11', color: 'bg-sky-500' },
              { label: 'Done', value: '3', color: 'bg-violet-500' },
            ]}
          />
        </div>
        <div className="rounded-md border border-slate-100 p-1.5">
          <p className="font-semibold text-slate-700 mb-1">Leads</p>
          <BarFunnel
            items={[
              { label: 'Gen', value: '2.8k', pct: 100 },
              { label: 'Qual', value: '1.1k', pct: 65 },
              { label: 'Conv', value: '384', pct: 30 },
            ]}
          />
        </div>
        <div className="rounded-md border border-slate-100 p-1.5">
          <p className="font-semibold text-slate-700 mb-1">Top</p>
          {['GST', 'LLP', 'TM'].map((s, i) => (
            <div key={s} className="flex gap-1 items-center mb-1">
              <span className="w-6 text-slate-500">{s}</span>
              <div className="flex-1 h-1 bg-slate-100 rounded-full">
                <div className="h-full bg-sky-500 rounded-full" style={{ width: `${90 - i * 22}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <DataTable
        compact
        columns={[
          { key: 'client', label: 'Client' },
          { key: 'service', label: 'Service' },
          { key: 'team', label: 'Team' },
          { key: 'status', label: 'Status' },
        ]}
        rows={rows}
      />
      <div className="absolute bottom-2 right-2 px-2 py-1 rounded-lg bg-white shadow-lg border border-emerald-200 text-emerald-700 font-bold">
        +50% Performance Lift
      </div>
    </div>
  );
}

export function SaasLandingMockup() {
  return (
    <MockupFrame label="Pro Landing Page — Portfolio preview" viewportClassName="mockup-viewport--landing">
      <div className={`h-full relative overflow-hidden bg-gradient-to-br from-sky-100/90 via-white to-blue-50 ${UI}`}>
        <header className="relative flex items-center justify-between gap-2 px-3 sm:px-4 py-2.5 border-b border-white/70 bg-white/50 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-sky-500 via-violet-500 to-amber-400 shadow-sm" />
            <span className="font-bold text-slate-800">ProSuite</span>
          </div>
          <div className="hidden md:flex gap-4 text-slate-600">
            {['Platform', 'AI Agents', 'Pricing', 'Developers'].map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 rounded-full bg-sky-600 text-white font-medium text-[10px] sm:text-xs">Book Demo</span>
            <span className="px-3 py-1 rounded-full border-2 border-emerald-500/70 text-emerald-700 font-medium bg-white text-[10px] sm:text-xs">Login</span>
          </div>
        </header>

        <div className="relative flex flex-col md:flex-row h-[calc(100%-3rem)] min-h-0 px-3 sm:px-5 py-3 sm:py-4 gap-4">
          <div className="flex flex-col justify-center md:w-[42%] shrink-0 z-10">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 leading-tight">
              Professional Services <span className="text-sky-600">Platform</span>
            </h2>
            <p className="text-slate-600 mt-2 leading-relaxed">
              Integrated CRM for CAs, lawyers, and consultants — manage leads, services, billing, and teams at scale.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {['CA', 'Lawyers', 'Consultants', 'Firms'].map((t) => (
                <span key={t} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white border border-slate-200 shadow-sm font-medium text-slate-700">
                  <span className="text-emerald-500">✓</span> {t}
                </span>
              ))}
            </div>
            <div className="mt-4 inline-flex w-fit px-4 py-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold shadow-lg shadow-sky-500/25">
              Get Started →
            </div>
            <div className="flex gap-4 mt-4 text-slate-500">
              <span><strong className="text-slate-800">385+</strong> services</span>
              <span><strong className="text-slate-800">2.8k</strong> leads</span>
              <span><strong className="text-slate-800">50%</strong> faster onboarding</span>
            </div>
          </div>
          <div className="flex-1 min-h-[200px] md:min-h-0 relative">
            <LandingDashboardCard />
          </div>
        </div>
      </div>
    </MockupFrame>
  );
}

const MOCKUP_MAP = {
  'crm-hr': CrmHrMockup,
  'career-portal': CareerPortalMockup,
  'platform-dashboard': PlatformDashboardMockup,
  'saas-landing': SaasLandingMockup,
} as const;

export function ProjectMockupByType({ type }: { type: keyof typeof MOCKUP_MAP }) {
  const Component = MOCKUP_MAP[type];
  return <Component />;
}
