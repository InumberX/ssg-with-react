import { type ReactNode } from 'react'

import { LayoutFooter } from '~/components/common/LayoutFooter'
import { LayoutHeader } from '~/components/common/LayoutHeader'
import { type Metadata } from '~/types/metadata'

type LayoutDefaultProps = {
  metadata: Metadata
  children?: ReactNode
  isLogoTitle?: boolean
}

export const LayoutDefault = ({
  metadata,
  children,
  isLogoTitle,
}: LayoutDefaultProps) => {
  return (
    <>
      <LayoutHeader metadata={metadata} isLogoTitle={isLogoTitle} />
      <main className='LayoutMain'>{children}</main>
      <LayoutFooter metadata={metadata} />
    </>
  )
}
