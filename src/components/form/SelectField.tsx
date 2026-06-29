import { useId } from 'react'
import type { ReactNode, SelectHTMLAttributes } from 'react'
import { ChevronDown } from 'lucide-react'

export type SelectOption = { label: string; value: string }

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  /** Label rendered above the dropdown. */
  label: string
  /** Optional icon shown beside the label. */
  icon?: ReactNode
  /** Options to render. */
  options: SelectOption[]
  /** Disabled, empty-value first option shown until the user picks. */
  placeholder?: string
  /** Error message shown below the dropdown; also turns the border red. */
  error?: string
  /** Classes for the wrapping element (e.g. "flex-1"). */
  containerClassName?: string
}

/** Labeled dropdown built on a native <select> with a custom chevron. */
export default function SelectField({
  label,
  icon,
  options,
  placeholder,
  error,
  containerClassName = '',
  className = '',
  id,
  defaultValue,
  value,
  ...rest
}: SelectFieldProps) {
  const autoId = useId()
  const fieldId = id ?? autoId
  // Controlled when `value` is passed, otherwise fall back to defaultValue/placeholder.
  const valueProps =
    value !== undefined ? { value } : { defaultValue: defaultValue ?? (placeholder ? '' : undefined) }

  return (
    <div className={`flex flex-col gap-1.5 ${containerClassName}`}>
      <label htmlFor={fieldId} className="flex items-center gap-2 text-sm font-medium text-ink">
        {icon}
        {label}
      </label>
      <div className="relative">
        <select
          id={fieldId}
          aria-invalid={error ? true : undefined}
          {...valueProps}
          className={`h-11 w-full appearance-none rounded-lg border bg-white pl-3.5 pr-10 text-base text-ink focus:outline-none ${
            error ? 'border-red-400 focus:border-red-400' : 'border-[#d5d7da] focus:border-brand'
          } ${className}`}
          {...rest}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map(o => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-ink"
          strokeWidth={1.5}
        />
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}
