import { useState } from 'react'
import type { ButtonHTMLAttributes, MouseEvent, ReactNode } from 'react'
import { Loader2 } from 'lucide-react'

export type CTAButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
export type CTAButtonSize = 'sm' | 'md' | 'lg'

type CTAButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> & {
  variant?: CTAButtonVariant
  size?: CTAButtonSize
  /** Externally-controlled loading state. Combined with the internal async state. */
  isLoading?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  fullWidth?: boolean
  /**
   * Click handler. If it returns a promise, the button shows a spinner and
   * disables itself until the promise settles — no manual loading state needed.
   */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void | Promise<void>
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:cursor-not-allowed disabled:opacity-60'

const variantStyles: Record<CTAButtonVariant, string> = {
  primary: 'bg-brand text-white hover:bg-brand/90',
  secondary: 'bg-ink text-white hover:bg-ink/90',
  outline: 'border border-ink/80 bg-white text-ink hover:bg-ink/5',
  ghost: 'bg-transparent text-ink hover:bg-ink/5',
}

const sizeStyles: Record<CTAButtonSize, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-4 text-base',
  lg: 'h-12 px-6 text-base',
}

export default function CTAButton({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  onClick,
  disabled,
  children,
  className = '',
  type = 'button',
  ...rest
}: CTAButtonProps) {
  const [pending, setPending] = useState(false)
  const loading = isLoading || pending
  const isDisabled = disabled || loading

  async function handleClick(event: MouseEvent<HTMLButtonElement>) {
    if (!onClick) return
    const result = onClick(event)
    if (result instanceof Promise) {
      try {
        setPending(true)
        await result
      } finally {
        setPending(false)
      }
    }
  }

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={isDisabled}
      aria-busy={loading}
      className={`${base} ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...rest}
    >
      {loading ? <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" /> : leftIcon}
      {children}
      {!loading && rightIcon}
    </button>
  )
}
