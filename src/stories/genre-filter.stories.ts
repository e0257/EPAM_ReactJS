import { Meta, StoryObj } from '@storybook/react';
import GenreFilter from '../components/genre-filter/genre-filter';

const meta = {
  title: 'components/GenreFilter',
  component: GenreFilter,
  tags: ['autodocs'],
  argTypes: {
    genres: { control: 'array' },
    selectedGenre: { control: 'text' },
    onSelect: { action: 'clicked' },
  },
} satisfies Meta<typeof GenreFilter>;

type Story = StoryObj<typeof meta>;

export default meta;

export const StoryDefault: Story = {
  args: {
    genres: ['Action', 'Romance', 'Thriller'],
  },
};

export const WithSelectedGenre: Story = {
  args: {
    genres: ['Action', 'Romance', 'Thriller'],
    selectedGenre: 'Romance',
  },
};