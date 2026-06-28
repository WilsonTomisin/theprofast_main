import { Link } from 'react-router'
import { ChevronRight } from 'lucide-react'
import type { NavMenuItem } from '../../lib/data/navMenus'

/** The rich navbar dropdown menu (icon + title + description, with optional "Coming Soon"). */
export default function NavDropdown({ items, onNavigate }: { items: NavMenuItem[]; onNavigate?: () => void }) {
  return (
    <div className="w-100 max-w-[calc(100vw-2rem)] rounded-2xl border border-line/60 bg-white p-2 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.3)]">
      {items.map(item => {
        const disabled = item.comingSoon || !item.to
        const body = (
          <div className={`flex items-start gap-3 rounded-xl p-3 transition ${disabled ? '' : 'hover:bg-line/10'}`}>
            <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.comingSoon ? 'bg-line/30' : 'bg-brand-soft'}`}>
              <item.icon className={`h-5 w-5 ${item.comingSoon ? 'text-muted' : 'text-brand'}`} strokeWidth={1.6} />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className={`font-bold ${item.comingSoon ? 'text-muted' : 'text-ink'}`}>{item.title}</span>
                {item.comingSoon ? (
                  <span className="rounded-full bg-brand-soft px-2 py-0.5 text-xs font-medium text-brand">Coming Soon</span>
                ) : (
                  <ChevronRight className="ml-auto h-4 w-4 shrink-0 text-muted" strokeWidth={2} />
                )}
              </div>
              <p className={`mt-0.5 text-sm ${item.comingSoon ? 'text-muted/70' : 'text-body'}`}>{item.description}</p>
            </div>
          </div>
        )

        return disabled ? (
          <div key={item.title} className="cursor-default select-none">
            {body}
          </div>
        ) : (
          <Link key={item.title} to={item.to!} onClick={onNavigate}>
            {body}
          </Link>
        )
      })}
    </div>
  )
}
