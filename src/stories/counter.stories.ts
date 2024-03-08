import type { Meta, StoryObj } from '@storybook/react';

import Counter from '../components/counter/counter';

const meta = {
    title: 'components/Counter',
    component: Counter,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
      initialValue: { control: 'number' },
    },
  } satisfies Meta<typeof Counter>;

type Story = StoryObj<typeof meta>;

export default meta;

export const StoryDefault: Story = {};

export const StartFromFifty: Story = {
  args: {
    initialValue: 50,
  },
};