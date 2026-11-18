import { LayoutInner } from '~/components/ui/layouts/LayoutInner'
import { type Metadata } from '~/types/metadata'

type LayoutFooterProps = {
  metadata: Metadata
}

export const LayoutFooter = (_: LayoutFooterProps) => {
  return (
    <footer className='LayoutFooter'>
      <LayoutInner>フッター</LayoutInner>
    </footer>
  )
}
