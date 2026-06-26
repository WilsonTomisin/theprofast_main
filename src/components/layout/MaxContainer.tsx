import type { ElementType, ReactNode } from 'react'

type MaxContainerProps = {
  /** Element to render as (e.g. 'nav', 'section'). Defaults to 'div'. */
  as?: ElementType
  className?: string
  children: ReactNode
}

/**
 * Centers content and constrains it to the site's max content width (1280px).
 * Pass extra layout/spacing utilities via `className`.
 */
export default function MaxContainer({ as: Tag = 'div', className = '', children }: MaxContainerProps) {
  return <Tag className={`mx-auto w-full max-w-7xl ${className}`}>{children}</Tag>
}
