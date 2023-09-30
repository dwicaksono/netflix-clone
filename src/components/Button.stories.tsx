import { Meta } from '@storybook/react';
import Button from './Button'; // Import your Button component

export default {
  title: 'components/Button',
  component: Button,
} as Meta;

export const Primary = {
  args: {
    label: 'Primary Button',
    title: 'button',
  },
};
