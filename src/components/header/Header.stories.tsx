import { Meta, StoryObj } from '@storybook/react';
import Header from './Header';
import { mockHeaderProps } from './Header.mocks';

export default {
  title: 'templates/Header',
  component: Header,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof Header>;

type Story = StoryObj<typeof Header>;

export const Basic: Story = {
  args: {
    ...mockHeaderProps.base,
  },
};
