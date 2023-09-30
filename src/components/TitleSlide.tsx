import { BiChevronRight } from 'react-icons/bi';

const TitleSlide = ({ title }: { title: string }) => {
  return (
    <h3 className="text-white text-2xl mb-4 lg:mx-14 mx-10 font-semibold flex gap-2 items-center cursor-pointer touch-manipulation select-none">
      {title}
      <div className="flex items-center gap-1  invisible   group-hover/slider:visible opacity-0 transition-opacity duration-1000 ease-out group-hover/slider:opacity-100">
        <button className="text-sm font-semibold text-teal-400">
          Explore All
        </button>
        <span className="text-teal-400 text-xl h-full w-max group-hover/slider:visible invisible ease-out group-hover/slider:ease-in transition-all duration-[.3s]">
          <BiChevronRight />
        </span>
      </div>
    </h3>
  );
};

export default TitleSlide;
