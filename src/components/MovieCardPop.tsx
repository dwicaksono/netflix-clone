/* eslint-disable @next/next/no-img-element */
import Portal from '@/components/Portal';
import { basePathThumb500 } from '@/constant';
import { useOutsideClick } from '@/hooks';
import { useGetGenreMovies } from '@/lib/fetcherHook';
import { usePortal, usePortalData } from '@/lib/providers/PortalProvider';
import { useRef, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiSolidVolumeFull, BiSolidVolumeMute } from 'react-icons/bi';
import { BsHandThumbsDown, BsHandThumbsUp } from 'react-icons/bs';
import { FaPause, FaPlay } from 'react-icons/fa6';
import { FiChevronDown } from 'react-icons/fi';
import { GenreBreadCrumbs } from '.';

const MovieCardPop = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const { data: genres } = useGetGenreMovies();
  const { miniModalMediaData, anchorElement } = usePortalData();
  const setPortal = usePortal();
  const [isHoverThumb, setIsHoverThumb] = useState(false);
  const [isPlay, setIsPlay] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const rect = anchorElement?.getBoundingClientRect();

  const hasToRender = !!miniModalMediaData && !!anchorElement;
  let isFirstElement: boolean = false;
  let isLastElement: boolean = false;
  if (hasToRender) {
    const parentElement = anchorElement.closest('.slick-active');
    const nextSiblingOfParentElement = parentElement?.nextElementSibling;
    const previousSiblingOfParentElement =
      parentElement?.previousElementSibling;
    if (!previousSiblingOfParentElement?.classList.contains('slick-active')) {
      isFirstElement = true;
    } else if (
      !nextSiblingOfParentElement?.classList.contains('slick-active')
    ) {
      isLastElement = true;
    }
  }

  const listGenre = genres
    ?.filter((genre: any) => miniModalMediaData?.genre_ids?.includes(genre.id))
    ?.map((genre: any) => genre.name);

  const videoPlayHandler = () => {
    setIsPlay(true);
    videoRef.current?.play();
  };
  const videoPauseHandler = () => {
    setIsPlay(false);
    videoRef.current?.pause();
  };
  const muteHandler = () => {
    setIsMuted(prev => !prev);
  };
  useOutsideClick(cardRef, () => {
    setPortal(null, null);
  });
  return (
    !!anchorElement &&
    !!miniModalMediaData && (
      <Portal>
        <div
          ref={cardRef}
          onMouseLeave={() => setPortal(null, null)}
          className={`bg-netflix-black-primary overflow-hidden rounded-lg text-white h-max z-20 cursor-pointer flex flex-col absolute drop-shadow-3xl`}
          style={{
            ...(rect && {
              width: rect?.width * 1.5,
              top: rect.top + window.scrollY - 0.75 * rect.height,
              ...(isLastElement
                ? {
                    right: document.documentElement.clientWidth - rect.right,
                  }
                : {
                    left: isFirstElement
                      ? rect.left
                      : rect.left - 0.25 * rect.width,
                  }),
            }),
          }}
        >
          <div className="relative">
            <div className="h-max">
              <video
                poster={basePathThumb500 + miniModalMediaData?.backdrop_path}
                id="videoThumb"
                ref={videoRef}
                autoPlay
                muted={isMuted}
                loop
                className="w-full object-cover bg-center z-[5] top-0 aspect-video"
              >
                <source src={miniModalMediaData?.videoUrl} type="video/mp4" />
              </video>
            </div>
            <div className="p-4 w-full text-white flex justify-between items-center absolute top-0 z-10">
              <h4 className="text-base drop-shadow-lg font-semibold line-clamp-1 w-32">
                {miniModalMediaData?.original_title ||
                  miniModalMediaData?.original_name}
              </h4>
              {isMuted ? (
                <div
                  className="transition-all ease-in-out duration-[0.2s] border-2 text-white opacity-30 hover:scale-75 hover:opacity-100 border-white w-8 h-8 rounded-full text-center items-center justify-center flex leading-none"
                  onClick={muteHandler}
                >
                  <BiSolidVolumeMute />
                </div>
              ) : (
                <div
                  className="transition-all ease-in-out duration-[0.2s] border-2 text-white opacity-30 hover:scale-75 hover:opacity-100 border-white w-8 h-8 rounded-full text-center items-center justify-center flex leading-none"
                  onClick={muteHandler}
                >
                  <BiSolidVolumeFull />
                </div>
              )}
            </div>

            <div className="p-4 flex flex-col gap-2 relative  bg-netflix-black-primary">
              <div className="flex justify-between items-center">
                <div className="flex text-white gap-4 h-12 items-center">
                  {isPlay ? (
                    <div
                      className="transition-all ease-in-out duration-[0.2s] hover:scale-[.85] text-black bg-white drop-shadow-lg w-8 h-8 flex items-center text-center self-center justify-center rounded-full "
                      onClick={videoPauseHandler}
                    >
                      <FaPause />
                    </div>
                  ) : (
                    <div
                      className="transition-all ease-in-out duration-[0.2s] hover:scale-[.85] text-black bg-white drop-shadow-lg w-8 h-8 flex items-center text-center self-center justify-center rounded-full "
                      onClick={videoPlayHandler}
                    >
                      <FaPlay />
                    </div>
                  )}
                  <div className="transition-all ease-in-out duration-[0.2s] border-2 text-white opacity-30 hover:scale-75 hover:opacity-100 border-white w-8 h-8 rounded-full text-center items-center justify-center flex leading-none">
                    <AiOutlinePlus />
                  </div>
                  <div
                    onMouseEnter={() => setIsHoverThumb(true)}
                    onMouseLeave={() => setIsHoverThumb(false)}
                    className="transition-all ease-out duration-[0.5s] hover:w-fit  border-2 hover:px-3 hover:h-10 text-white opacity-30 hover:border-none hover:bg-white hover:text-netflix-black-primary hover:opacity-100 border-white w-8 h-8 rounded-full text-center items-center justify-center hover:justify-between hover:gap-4 flex leading-none"
                  >
                    <span className="hover:shadow-lg w-fit h-fit p-2 rounded-full hover:bg-netflix-dark-tranparent-primary hover:text-white transition-all ease-in-out duration-[.5s]">
                      <BsHandThumbsUp />
                    </span>
                    {isHoverThumb && (
                      <span className=" hover:shadow-lg w-fit h-fit p-2 rounded-full  hover:bg-netflix-dark-tranparent-primary hover:text-white transition-all ease-in-out duration-[.5s]">
                        <BsHandThumbsDown />
                      </span>
                    )}
                  </div>
                </div>
                <div className="transition-all ease-in-out duration-[0.2s] border-2 text-white opacity-30 hover:scale-75 hover:opacity-100 border-white w-8 h-8 rounded-full text-center items-center justify-center flex leading-none">
                  <FiChevronDown />
                </div>
              </div>
              <div className="flex gap-2 items-start">
                <p className="text-green-500 text-sm font-bold">New</p>
                <div className="border-[1px] border-white/50 text-white/50 text-xs px-2">
                  18+
                </div>
                <p className="text-sm text-white/50">2h 35m</p>
                <div className="text-xs border-[1px] rounded-sm px-1 border-white/50 text-white/50 ">
                  HD
                </div>
              </div>
              <GenreBreadCrumbs genres={listGenre} />
            </div>
          </div>
        </div>
      </Portal>
    )
  );
};

export default MovieCardPop;
