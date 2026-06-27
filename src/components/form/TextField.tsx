import { useId } from 'react'
import type { InputHTMLAttributes, ReactNode } from 'react'
import { AlertCircle } from 'lucide-react'

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  /** Label rendered above the input. */
  label: string
  /** Optional icon shown beside the label (e.g. a lucide icon element). */
  icon?: ReactNode
  /** Error message shown below the input; also turns the border red. */
  error?: string
  /** Classes for the wrapping element (e.g. "flex-1"). */
  containerClassName?: string
}

/** Labeled text input. Spreads native input props (placeholder, type, value, onChange, …). */
export default function TextField({
  label,
  icon,
  error,
  containerClassName = '',
  className = '',
  id,
  ...rest
}: TextFieldProps) {
  const autoId = useId()
  const fieldId = id ?? autoId

  return (
    <div className={`flex flex-col gap-1.5 ${containerClassName}`}>
      <label htmlFor={fieldId} className="flex items-center gap-2 text-sm font-medium text-ink">
        {icon}
        {label}
      </label>
      <div className="relative">
        <input
          id={fieldId}
          aria-invalid={error ? true : undefined}
          className={`h-11 w-full rounded-lg border bg-white px-3.5 text-base text-ink placeholder:text-muted focus:outline-none ${
            error
              ? 'border-red-400 pr-10 focus:border-red-400'
              : 'border-[#d5d7da] focus:border-brand'
          } ${className}`}
          {...rest}
        />
        {error && (
          <AlertCircle className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-red-500" strokeWidth={1.8} />
        )}
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}
