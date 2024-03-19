import { Meta, StoryObj } from '@storybook/react';
import BaseTemplate from './BaseTemplate';
import { mockBaseTemplateProps } from './BaseTemplate.mocks';

export default {
  title: 'templates/BaseTemplate',
  component: BaseTemplate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof BaseTemplate>;

type Story = StoryObj<typeof BaseTemplate>;

export const Basic: Story = {
  args: {
    ...mockBaseTemplateProps.base,
  },
};
