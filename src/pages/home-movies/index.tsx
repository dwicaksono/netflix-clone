import { Footer, Navbar, SliderMovies } from '@/components/atoms';
import {
  useGetActionMovies,
  useGetComedyMovies,
  useGetHorrorMovies,
  useGetNetflixOriMovies,
  useGetTrendingMovies,
} from '@/lib/fetcherHook';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';

const BannerDynamic = dynamic(() => import('@/components/atoms/Banner'), {
  ssr: false,
});

const inter = Inter({ subsets: ['latin'] });

const HomeMovie = () => {
  const { data } = useGetTrendingMovies();
  const { data: netFlixOri } = useGetNetflixOriMovies();
  const { data: actionMovies } = useGetActionMovies();
  const { data: comedyMovies } = useGetComedyMovies();
  const { data: horroMovies } = useGetHorrorMovies();
  return (
    <div className={`${inter} bg-netflix-black-primary relative`}>
      <Navbar />
      <BannerDynamic />
      <SliderMovies data={data} title="Trending Now" />
      <SliderMovies data={netFlixOri} title="Popular on Netflix" />
      <SliderMovies data={actionMovies} title="Action Movies" />
      <SliderMovies data={comedyMovies} title="Comedy Movies" />
      <SliderMovies data={horroMovies} title="Horror Movies" />
      <Footer />
    </div>
  );
};

export default HomeMovie;
