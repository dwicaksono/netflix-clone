import QueryClientProviderConfig from '@/lib/QueryClientProviderConfig';
import { useGetTrendingMovies } from '@/lib/fetcherHook';
import PortalProvider from '@/lib/providers/PortalProvider';
import type { Meta, StoryObj } from '@storybook/react';
import { MovieCardPop } from '.';
import SliderMovies from './SliderMovies';

export default {
  title: 'components/SliderMovies',
  component: SliderMovies,
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
type Story = StoryObj<typeof SliderMovies>;

export const Default: Story = args => {
  const { data } = useGetTrendingMovies();
  return <SliderMovies data={data} {...args} />;
};

Default.args = {
  title: 'Trending Now',
};
