import { GenreBreadCrumbs } from '@/components';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  component: GenreBreadCrumbs,
  tags: ['autodocs'],
} as Meta;
type Story = StoryObj<typeof GenreBreadCrumbs>;

export const Default: Story = args => <GenreBreadCrumbs {...args} />;

Default.args = {
  genres: ['Action', 'Anime', 'Adult'],
};
