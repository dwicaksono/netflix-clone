import QueryClientProviderConfig from '@/lib/QueryClientProviderConfig';
import PortalProvider from '@/lib/providers/PortalProvider';
import type { Meta, StoryObj } from '@storybook/react';
import { MovieCardPop } from '.';
import MovieItemCard from './MovieItemCard';

const data = {
  adult: false,
  backdrop_path: '/1syW9SNna38rSl9fnXwc9fP7POW.jpg',
  id: 565770,
  title: 'Blue Beetle',
  original_language: 'en',
  original_title: 'Blue Beetle',
  overview:
    'Recent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds himself in possession of an ancient relic of alien biotechnology: the Scarab.',
  poster_path: '/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg',
  media_type: 'movie',
  genre_ids: [28, 878, 12],
  popularity: 2868.214,
  release_date: '2023-08-16',
  video: false,
  vote_average: 7.13,
  vote_count: 1001,
  videoUrl:
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
};
export default {
  component: MovieCardPop,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <QueryClientProviderConfig>
        <PortalProvider>
          <Story />
          <MovieCardPop />
        </PortalProvider>
      </QueryClientProviderConfig>
    ),
  ],
} as Meta;
type Story = StoryObj<typeof MovieCardPop>;

export const Default: Story = args => {
  return (
    <div className="w-44 my-20">
      <MovieItemCard {...args} />
    </div>
  );
};
Default.args = {
  video: data,
};
