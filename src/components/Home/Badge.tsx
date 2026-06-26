import { ArrowUpRight } from 'lucide-react'

export default function Badge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-2xl bg-badge-bg px-4 py-2">
      <ArrowUpRight className="h-3 w-3 text-brand" strokeWidth={2} />
      <span className="text-sm font-medium text-badge-ink">{label}</span>
    </span>
  )
}
