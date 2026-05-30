import { ReactNode } from 'react';

type MockupFrameProps = {
  children: ReactNode;
  className?: string;
  label?: string;
  viewportClassName?: string;
};

export function MockupFrame({ children, className = '', label = 'Preview', viewportClassName = '' }: MockupFrameProps) {
  return (
    <div
      className={`relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_24px_80px_-12px_rgba(15,23,42,0.35)] border border-slate-200/90 dark:border-slate-600/40 bg-white text-slate-800 select-none pointer-events-none ${className}`}
      aria-hidden
    >
      <div className="flex items-center gap-2.5 px-4 py-3 bg-slate-100 border-b border-slate-200">
        <span className="w-3 h-3 rounded-full bg-red-400/90" />
        <span className="w-3 h-3 rounded-full bg-amber-400/90" />
        <span className="w-3 h-3 rounded-full bg-emerald-400/90" />
        <span className="ml-2 text-xs font-medium text-slate-400 tracking-wide">{label}</span>
      </div>
      <div className={`mockup-viewport overflow-hidden ${viewportClassName}`.trim()}>{children}</div>
    </div>
  );
}
