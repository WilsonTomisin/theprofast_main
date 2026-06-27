import { useEffect } from 'react'
import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'

type ModalProps = {
  open: boolean
  onClose: () => void
  children: ReactNode
  /** Show the top-right close button. */
  showClose?: boolean
  /** Extra classes for the panel (e.g. width overrides). */
  className?: string
}

/** Accessible modal rendered in a portal. Closes on backdrop click and Escape. */
export default function Modal({ open, onClose, children, showClose = true, className = '' }: ModalProps) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    // Scroll container — clicking anywhere outside the panel closes the modal.
    <div className="fixed inset-0 z-[100] overflow-y-auto" onClick={onClose}>
      {/* Backdrop is fixed so it always covers the viewport while the content scrolls */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />
      {/* Centers the panel when short; lets it scroll when taller than the viewport */}
      <div className="relative flex min-h-full items-center justify-center p-4">
        <div
          role="dialog"
          aria-modal="true"
          onClick={e => e.stopPropagation()}
          className={`relative w-full max-w-xl rounded-3xl bg-white p-6 shadow-2xl md:p-8 ${className}`}
        >
          {showClose && (
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-muted transition hover:bg-line/20"
            >
              <X className="h-5 w-5" />
            </button>
          )}
          {children}
        </div>
      </div>
    </div>,
    document.body,
  )
}
