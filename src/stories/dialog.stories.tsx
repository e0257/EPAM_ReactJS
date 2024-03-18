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
        title: 'Dummy Movie',
        movieUrl: 'http://dummy.url',
        genre: 'action',
        overview: 'Dummy Overview',
        releaseDate: '2020-01-01',
        rating: '5',
        timing: '120 min',
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
