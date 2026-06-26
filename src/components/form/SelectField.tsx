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
  /** Classes for the wrapping element (e.g. "flex-1"). */
  containerClassName?: string
}

/** Labeled dropdown built on a native <select> with a custom chevron. */
export default function SelectField({
  label,
  icon,
  options,
  placeholder,
  containerClassName = '',
  className = '',
  id,
  defaultValue,
  ...rest
}: SelectFieldProps) {
  const autoId = useId()
  const fieldId = id ?? autoId

  return (
    <div className={`flex flex-col gap-2 ${containerClassName}`}>
      <label htmlFor={fieldId} className="flex items-center gap-2 text-sm font-medium text-ink">
        {icon}
        {label}
      </label>
      <div className="relative">
        <select
          id={fieldId}
          defaultValue={defaultValue ?? (placeholder ? '' : undefined)}
          className={`h-11 w-full appearance-none rounded-lg border border-[#d5d7da] bg-white pl-3.5 pr-10 text-base text-ink focus:border-brand focus:outline-none ${className}`}
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
    </div>
  )
}
