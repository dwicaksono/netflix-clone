/* eslint-disable @next/next/no-img-element */
import MovieItemCard from '@/components/atoms/MovieItemCard';
import { useRef, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import { TitleSlide } from '.';
import ArrowNavigation from './ArrowNavigation';

const SliderMovies = ({ data, title }: { data: any; title: string }) => {
  const sliderRef = useRef<Slider>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(false);

  const beforeChange = async (currentIndex: number, nextIndex: number) => {
    if (currentIndex < nextIndex) {
      setActiveSlideIndex(nextIndex);
    } else if (currentIndex > nextIndex) {
      setIsEnd(false);
    }
    setActiveSlideIndex(nextIndex);
  };
  const settings: Settings = {
    speed: 500,
    arrows: false,
    infinite: true,
    lazyLoad: 'ondemand',
    slidesToShow: 6,
    slidesToScroll: 6,
    beforeChange,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const handlePrevious = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div className="group/slider my-14">
      <TitleSlide title={title} />
      <div className="w-full overflow-hidden h-full z-10 group relative">
        {data?.length > 0 && (
          <div className="relative" style={{ overflow: 'inherit' }}>
            <ArrowNavigation
              activeSlideIndex={activeSlideIndex}
              isEnd={isEnd}
              onNext={handleNext}
              onPrevious={handlePrevious}
            >
              <Slider ref={sliderRef} {...settings}>
                {data?.map((val: any) => (
                  <MovieItemCard video={val} key={val.id} />
                ))}
              </Slider>
            </ArrowNavigation>
          </div>
        )}
      </div>
    </div>
  );
};

export default SliderMovies;
