import { ReactNode } from 'react';

export function MockSidebar({ activeIndex = 0 }: { activeIndex?: number }) {
  return (
    <aside className="w-11 sm:w-12 md:w-14 bg-slate-900 flex flex-col items-center gap-2 py-3 shrink-0">
      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-sky-500 to-violet-600" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={`w-7 h-7 rounded-lg flex items-center justify-center ${
            i === activeIndex ? 'bg-white/15 text-sky-300' : 'text-slate-500'
          }`}
        >
          <div className="w-3 h-3 rounded border border-current opacity-80" />
        </div>
      ))}
    </aside>
  );
}

export function StatusBadge({ label, tone }: { label: string; tone: 'green' | 'amber' | 'blue' | 'rose' | 'slate' }) {
  const tones = {
    green: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    amber: 'bg-amber-50 text-amber-700 border-amber-200',
    blue: 'bg-sky-50 text-sky-700 border-sky-200',
    rose: 'bg-rose-50 text-rose-700 border-rose-200',
    slate: 'bg-slate-100 text-slate-600 border-slate-200',
  };
  return (
    <span className={`inline-flex px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-medium border ${tones[tone]}`}>
      {label}
    </span>
  );
}

export function KpiCard({ label, value, delta, icon }: { label: string; value: string; delta?: string; icon?: ReactNode }) {
  return (
    <div className="rounded-lg bg-white border border-slate-200 p-2 sm:p-2.5 shadow-sm min-w-0">
      <div className="flex justify-between items-start gap-1">
        <p className="text-[9px] sm:text-[10px] text-slate-500 uppercase tracking-wide truncate">{label}</p>
        {icon && <span className="text-sky-500 shrink-0">{icon}</span>}
      </div>
      <p className="text-sm sm:text-base font-bold text-slate-900 mt-0.5 truncate">{value}</p>
      {delta && <p className="text-[9px] sm:text-[10px] text-emerald-600 mt-0.5">{delta}</p>}
    </div>
  );
}

export function MockSearch({ placeholder = 'Search...' }: { placeholder?: string }) {
  return (
    <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white min-w-0 flex-1 max-w-[200px]">
      <span className="text-slate-400 text-[10px]">⌕</span>
      <span className="text-[10px] sm:text-xs text-slate-400 truncate">{placeholder}</span>
    </div>
  );
}

export function MockAvatar({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2);
  return (
    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-sky-400 to-violet-500 flex items-center justify-center text-[9px] font-bold text-white shrink-0">
      {initials}
    </div>
  );
}

type Col = { key: string; label: string; align?: 'left' | 'right' };
type Row = Record<string, ReactNode>;

export function DataTable({ columns, rows, compact }: { columns: Col[]; rows: Row[]; compact?: boolean }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white overflow-hidden flex flex-col min-h-0 flex-1">
      <div
        className={`grid gap-1 px-2 py-1.5 bg-slate-50 border-b border-slate-200 font-semibold text-slate-600 ${
          compact ? 'text-[9px]' : 'text-[10px] sm:text-xs'
        }`}
        style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }}
      >
        {columns.map((c) => (
          <span key={c.key} className={c.align === 'right' ? 'text-right' : ''}>
            {c.label}
          </span>
        ))}
      </div>
      <div className="overflow-y-auto flex-1 min-h-0 mockup-scroll">
        {rows.map((row, i) => (
          <div
            key={i}
            className={`grid gap-1 px-2 py-1.5 border-b border-slate-100 text-slate-700 even:bg-slate-50/50 ${
              compact ? 'text-[9px]' : 'text-[10px] sm:text-xs'
            }`}
            style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }}
          >
            {columns.map((c) => (
              <span key={c.key} className={`truncate ${c.align === 'right' ? 'text-right' : ''}`}>
                {row[c.key]}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ActivityFeed({ items }: { items: { time: string; text: string; tone?: 'green' | 'blue' | 'amber' }[] }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-2 flex flex-col min-h-0">
      <p className="text-[10px] sm:text-xs font-semibold text-slate-800 mb-2">Recent Activity</p>
      <ul className="space-y-2 overflow-y-auto flex-1 mockup-scroll">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2 text-[9px] sm:text-[10px]">
            <span className="text-slate-400 shrink-0 w-10">{item.time}</span>
            <span className="text-slate-600 leading-snug">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BarFunnel({ items }: { items: { label: string; value: string; pct: number }[] }) {
  return (
    <div className="space-y-2">
      {items.map((item) => (
        <div key={item.label}>
          <div className="flex justify-between text-[9px] sm:text-[10px] mb-0.5">
            <span className="text-slate-600">{item.label}</span>
            <span className="font-medium text-slate-800">{item.value}</span>
          </div>
          <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-sky-500 to-sky-400 rounded-full" style={{ width: `${item.pct}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function DonutLegend({ total, segments }: { total: string; segments: { label: string; value: string; color: string }[] }) {
  return (
    <div className="flex items-center gap-2 flex-1 min-w-0">
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-[6px] border-sky-500 border-r-violet-400 border-b-amber-400 border-l-slate-200 shrink-0 flex items-center justify-center">
        <span className="text-[9px] sm:text-[10px] font-bold text-slate-800 text-center leading-tight">{total}</span>
      </div>
      <div className="space-y-1 min-w-0">
        {segments.map((s) => (
          <p key={s.label} className="text-[9px] sm:text-[10px] text-slate-600 truncate">
            <span className={`inline-block w-1.5 h-1.5 rounded-full mr-1 ${s.color}`} />
            {s.label} <span className="font-semibold text-slate-800">{s.value}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
