import { useId } from 'react'
import type { InputHTMLAttributes, ReactNode } from 'react'

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  /** Label rendered above the input. */
  label: string
  /** Optional icon shown beside the label (e.g. a lucide icon element). */
  icon?: ReactNode
  /** Classes for the wrapping element (e.g. "flex-1"). */
  containerClassName?: string
}

/** Labeled text input. Spreads native input props (placeholder, type, value, onChange, …). */
export default function TextField({
  label,
  icon,
  containerClassName = '',
  className = '',
  id,
  ...rest
}: TextFieldProps) {
  const autoId = useId()
  const fieldId = id ?? autoId

  return (
    <div className={`flex flex-col gap-2 ${containerClassName}`}>
      <label htmlFor={fieldId} className="flex items-center gap-2 text-sm font-medium text-ink">
        {icon}
        {label}
      </label>
      <input
        id={fieldId}
        className={`h-11 w-full rounded-lg border border-[#d5d7da] bg-white px-3.5 text-base text-ink placeholder:text-muted focus:border-brand focus:outline-none ${className}`}
        {...rest}
      />
    </div>
  )
}
