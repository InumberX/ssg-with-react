import type { Meta, StoryObj } from '@storybook/react-vite'

import { LayoutHeader } from '~/components/common/LayoutHeader'
import { type Metadata } from '~/types/metadata'

const metadata: Metadata = {
  rootDir: '/',
}

export default {
  title: 'components/common/LayoutHeader',
  component: LayoutHeader,
} as Meta<typeof LayoutHeader>

type Story = StoryObj<typeof LayoutHeader>

export const Default: Story = {
  args: {
    metadata,
  },
}
