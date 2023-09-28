import { dataMovieRandom } from '@/constant';
import axiosInstance from '@/lib/axios';
import { request } from '@/lib/services';
import { useQuery } from '@tanstack/react-query';
export const useGetTrendingMovies = () => {
  return useQuery(
    ['get_trending_movies'],
    async () => await axiosInstance.get(request.fetchTrending),
    {
      select: ({ data }) => {
        const dataMerge = data?.results.map((val: any) => ({
          ...val,
          videoUrl: dataMovieRandom?.videoUrl,
        }));
        return dataMerge;
      },
    },
  );
};

export const useGetNetflixOriMovies = () => {
  return useQuery(
    ['get_original_movies'],
    async () => await axiosInstance.get(request.fetchNetflixOriginals),
    {
      select: ({ data }) => {
        const dataMerge = data?.results.map((val: any) => ({
          ...val,
          videoUrl: dataMovieRandom?.videoUrl,
        }));
        return dataMerge;
      },
    },
  );
};
export const useGetComedyMovies = () => {
  return useQuery(
    ['get_top_movies'],
    async () => await axiosInstance.get(request.fetchComedyMovies),
    {
      select: ({ data }) => {
        const dataMerge = data?.results.map((val: any) => ({
          ...val,
          videoUrl: dataMovieRandom?.videoUrl,
        }));
        return dataMerge;
      },
    },
  );
};

export const useGetActionMovies = () => {
  return useQuery(
    ['get_action_movies'],
    async () => await axiosInstance.get(request.fetchActionMovies),
    {
      select: ({ data }) => {
        const dataMerge = data?.results.map((val: any) => ({
          ...val,
          videoUrl: dataMovieRandom?.videoUrl,
        }));
        return dataMerge;
      },
    },
  );
};
export const useGetHorrorMovies = () => {
  return useQuery(
    ['get_Horror_movies'],
    async () => await axiosInstance.get(request.fetchHorrorMovies),
    {
      select: ({ data }) => {
        const dataMerge = data?.results.map((val: any) => ({
          ...val,
          videoUrl: dataMovieRandom?.videoUrl,
        }));
        return dataMerge;
      },
    },
  );
};

export const useGetGenreMovies = () => {
  return useQuery(
    ['get_genre_movie'],
    async () => await axiosInstance.get(request.fetchGenre),
    {
      select: ({ data }) => data.genres,
    },
  );
};
