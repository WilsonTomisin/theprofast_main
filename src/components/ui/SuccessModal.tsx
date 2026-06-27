import type { ReactNode } from 'react'
import { Check } from 'lucide-react'
import Modal from './Modal'
import CTAButton from './CTAButton'

type SuccessModalProps = {
  open: boolean
  onClose: () => void
  title: string
  message?: string
  /** Extra content between the message and the action buttons. */
  children?: ReactNode
  primaryLabel?: string
  onPrimary?: () => void
  secondaryLabel?: string
  onSecondary?: () => void
  /** Optional footer content under the buttons. */
  footer?: ReactNode
}

/** A success-state modal: green check, title, message, optional body + actions. */
export default function SuccessModal({
  open,
  onClose,
  title,
  message,
  children,
  primaryLabel = 'Done',
  onPrimary,
  secondaryLabel,
  onSecondary,
  footer,
}: SuccessModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex flex-col items-center gap-3 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 ring-8 ring-green-50">
          <Check className="h-7 w-7 text-green-600" strokeWidth={3} />
        </span>
        <h2 className="text-2xl font-bold text-ink">{title}</h2>
        {message && <p className="max-w-md text-base text-body">{message}</p>}
      </div>

      {children && <div className="mt-6">{children}</div>}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <CTAButton variant="primary" fullWidth onClick={onPrimary ?? onClose}>
          {primaryLabel}
        </CTAButton>
        {secondaryLabel && (
          <CTAButton variant="outline" fullWidth onClick={onSecondary ?? onClose}>
            {secondaryLabel}
          </CTAButton>
        )}
      </div>

      {footer && <div className="mt-6 text-center">{footer}</div>}
    </Modal>
  )
}
