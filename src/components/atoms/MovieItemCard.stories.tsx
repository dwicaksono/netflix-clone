import QueryClientProviderConfig from '@/lib/QueryClientProviderConfig';
import { useGetTrendingMovies } from '@/lib/fetcherHook';
import PortalProvider from '@/lib/providers/PortalProvider';
import { Meta } from '@storybook/react';
import MovieItemCard from './MovieItemCard';

export default {
  title: 'components/MovieItemCard',
  components: MovieItemCard,
  decorators: [
    Story => (
      <QueryClientProviderConfig>
        <PortalProvider>
          <Story />
        </PortalProvider>
      </QueryClientProviderConfig>
    ),
  ],
} as Meta;

export const Default = () => {
  const { data } = useGetTrendingMovies();

  return data?.map(val => <MovieItemCard video={val} key={val.id} />);
};
