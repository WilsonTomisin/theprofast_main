import { useId } from 'react'
import type { TextareaHTMLAttributes } from 'react'

type TextAreaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  /** Label rendered above the textarea. */
  label: string
}

/** Labeled multi-line text input. Spreads native textarea props. */
export default function TextAreaField({
  label,
  className = '',
  id,
  rows = 5,
  ...rest
}: TextAreaFieldProps) {
  const autoId = useId()
  const fieldId = id ?? autoId

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={fieldId} className="text-sm font-medium text-ink">
        {label}
      </label>
      <textarea
        id={fieldId}
        rows={rows}
        className={`w-full resize-none rounded-lg border border-[#d5d7da] bg-white px-3.5 py-2.5 text-base text-ink placeholder:text-muted focus:border-brand focus:outline-none ${className}`}
        {...rest}
      />
    </div>
  )
}
