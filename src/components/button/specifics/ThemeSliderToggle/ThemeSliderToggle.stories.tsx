import { Meta, StoryObj } from '@storybook/react';
import ThemeSliderToggle from './ThemeSliderToggle';
import { mockThemeSliderToggleProps } from './ThemeSliderToggle.mocks';

export default {
  title: 'templates/ThemeSliderToggle',
  component: ThemeSliderToggle,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof ThemeSliderToggle>;

type Story = StoryObj<typeof ThemeSliderToggle>;

export const Basic: Story = {
  args: {
    ...mockThemeSliderToggleProps.base,
  },
};
