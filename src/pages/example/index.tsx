import { LayoutInner } from '~/components/ui/layouts/LayoutInner'
import { LayoutPageWrapper } from '~/components/ui/layouts/LayoutPageWrapper'
import { LayoutSection } from '~/components/ui/layouts/LayoutSection'
import { LayoutDefault } from '~/layouts/LayoutDefault'
import { type Metadata } from '~/types/metadata'

export const metadata: Metadata = {
  rootDir: '../',
  title: 'サンプル',
}

const Page = () => {
  return (
    <LayoutDefault metadata={metadata}>
      <LayoutPageWrapper>
        <LayoutSection isNotSection>
          <LayoutInner>
            <h1>下層ページ</h1>
          </LayoutInner>
        </LayoutSection>

        <LayoutSection>
          <LayoutInner>
            <h2>セクションタイトル</h2>
          </LayoutInner>
        </LayoutSection>
      </LayoutPageWrapper>
    </LayoutDefault>
  )
}

export default Page
