import type { Meta, StoryObj } from '@storybook/react-vite'

import { LayoutFooter } from '~/components/common/LayoutFooter'
import { type Metadata } from '~/types/metadata'

const metadata: Metadata = {
  rootDir: '/',
}

export default {
  title: 'components/common/LayoutFooter',
  component: LayoutFooter,
} as Meta<typeof LayoutFooter>

type Story = StoryObj<typeof LayoutFooter>

export const Default: Story = {
  args: {
    metadata,
  },
}
