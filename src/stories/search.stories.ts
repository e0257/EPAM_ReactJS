import { Meta, StoryObj } from '@storybook/react';
import Search from '../components/search/search';

const meta = {
  title: 'components/Search',
  component: Search,
  tags: ['autodocs'],
  argTypes: {
    initialQuery: { control: 'text' },
    onSearch: { action: 'searched' },
  },
} satisfies Meta<typeof Search>;

type Story = StoryObj<typeof meta>;

export default meta;

export const WithInitialQuery: Story = {
  args: {
    initialQuery: 'Hello',
  },
};