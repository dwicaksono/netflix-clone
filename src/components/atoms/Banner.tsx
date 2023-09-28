/* eslint-disable @next/next/no-img-element */
import { dataMovieRandom } from '@/constant';
import { FC } from 'react';
import { FaPlay } from 'react-icons/fa6';
import { LuInfo } from 'react-icons/lu';
import { Button } from '.';

const Banner: FC = () => {
  return (
    <header className="w-full relative lg:h-[40vw]">
      <div className="bg-gradient-to-t from-netflix-black-primary to-transparent absolute w-full h-32 bottom-0 z-10" />
      <video
        src={dataMovieRandom?.videoUrl}
        poster={dataMovieRandom?.thumbnailUrl}
        className="w-full lg:h-[40vw] brightness-[60%] transition duration-150 object-cover bg-center bg-cover aspect-video"
        autoPlay
        muted
        loop
      />
      <div className="lg:mx-14 mx-10 absolute lg:top-[25%] top-[25%]">
        <h1 className=" font-bold text-base lg:text-4xl text-white mb-3 lg:mb-10 max-w-sm line-clamp-2 drop-shadow-md">
          {dataMovieRandom?.title}
        </h1>
        <p className="text-white text-xs lg:text-base  max-w-md line-clamp-3 mb-5 lg:mb-11 drop-shadow-md font-semibold">
          {dataMovieRandom?.description}
        </p>
        <div className="flex gap-4 lg:mb-11 text-white">
          <Button
            title="Play"
            onClick={() => console.log('masuk')}
            withIcon={<FaPlay color="black" />}
          />
          <Button
            title="More Info"
            variant="dark"
            onClick={() => console.log('masuk')}
            withIcon={<LuInfo color="white" />}
          />
        </div>
      </div>
    </header>
  );
};

export default Banner;
