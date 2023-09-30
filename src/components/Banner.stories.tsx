import type { Meta, StoryObj } from '@storybook/react';
import Banner from './Banner';

export default {
  title: 'components/Banner',
  component: Banner,
  tags: ['autodocs'],
} as Meta<typeof Banner>;
type Story = StoryObj<typeof Banner>;

export const Primary: Story = {
  render: () => <Banner />,
};
