import { LayoutInner } from '~/components/ui/layouts/LayoutInner'
import { LayoutPageWrapper } from '~/components/ui/layouts/LayoutPageWrapper'
import { LayoutSection } from '~/components/ui/layouts/LayoutSection'
import { LayoutDefault } from '~/layouts/LayoutDefault'
import { type Metadata } from '~/types/metadata'

export const metadata: Metadata = {
  rootDir: './',
}

const Page = () => {
  return (
    <LayoutDefault metadata={metadata}>
      <LayoutPageWrapper>
        <LayoutSection>
          <LayoutInner>
            <h1>トップページ</h1>
          </LayoutInner>
        </LayoutSection>
      </LayoutPageWrapper>
    </LayoutDefault>
  )
}

export default Page
