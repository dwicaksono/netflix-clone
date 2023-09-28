import { MouseEventHandler, ReactNode } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
interface CustomNaviationProps {
  isEnd: boolean;
  children: ReactNode;
  activeSlideIndex: number;
  onNext: MouseEventHandler<HTMLDivElement>;
  onPrevious: MouseEventHandler<HTMLDivElement>;
}
const ArrowNavigation = ({
  isEnd,
  onNext,
  children,
  onPrevious,
  activeSlideIndex,
}: CustomNaviationProps) => {
  return (
    <>
      {activeSlideIndex > 0 && (
        <div
          className="absolute invisible group-hover/slider:visible p-0 top-0 text-3xl text-white/70 w-10 h-full  bottom-0 z-10 flex items-center justify-center cursor-pointer bg-netflix-dark-tranparent-primary left-0 rounded-e-lg"
          onClick={onPrevious}
        >
          <FiChevronLeft />
        </div>
      )}
      {children}
      {!isEnd && (
        <div
          className="absolute invisible group-hover/slider:visible p-0 text-3xl text-white/70 w-10  h-full top-0 bottom-0 z-10 flex items-center justify-center cursor-pointer rounded-s-lg bg-netflix-dark-tranparent-primary right-0"
          onClick={onNext}
        >
          <FiChevronRight />
        </div>
      )}
    </>
  );
};
export default ArrowNavigation;
