import TitleSlide from '@/components/TitleSlide';
import { Meta, StoryObj } from '@storybook/react';

export default {
  component: TitleSlide,
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof TitleSlide>;

export const Default: Story = args => <TitleSlide {...args} />;

Default.args = {
  title: 'Action Movie',
};
