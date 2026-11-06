import type { Meta, StoryObj } from '@storybook/react-vite'

import { LayoutSection } from '~/components/ui/layouts/LayoutSection'

export default {
  title: 'components/ui/layouts/LayoutSection',
  component: LayoutSection,
} as Meta<typeof LayoutSection>

type Story = StoryObj<typeof LayoutSection>

export const Default: Story = {
  render: (args) => {
    return (
      <LayoutSection {...args}>
        <>
          コンテンツが入ります
          <br />
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </>
      </LayoutSection>
    )
  },
}
