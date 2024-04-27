import { Meta, StoryObj } from '@storybook/react';
import Dialog from '../components/dialog/dialog';
import MovieForm from '../components/movie-form/movie-form';

const meta = {
  title: 'components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    onClose: { action: 'Clicked' }
  },
} satisfies Meta<typeof Dialog>;

type Story = StoryObj<typeof meta>;

export default meta;

export const AddMovie: Story = {
  args: {
    title: 'Add Movie',
    children: <MovieForm onSubmit={(data) => console.log(data)} />,
  }
}

export const EditMovie: Story = {
  args: {
    title: 'Edit Movie',
    children: <MovieForm
      initialData={{
        id: 123,
        movieName: 'Dummy Movie',
        imageUrl: 'http://dummy.url',
        genres: ['action'],
        description: 'Dummy Overview',
        releaseYear: 2020,
        releaseDate: '2020-01-01',
        rating: '5',
        duration: '120',
      }}
      onSubmit={(data) => console.log(data)}
    />,
  }
}

export const DeleteMovie: Story = {
  args: {
    title: 'Delete Movie',
    children: <>
      <div>Do you really want delete this movie?</div>
      <button>Confirm</button>
    </>,
  }
}
