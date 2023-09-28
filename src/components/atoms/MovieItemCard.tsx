/* eslint-disable @next/next/no-img-element */
import { basePathThumb500 } from '@/constant';
import { usePortal } from '@/lib/providers/PortalProvider';
import { useEffect, useRef, useState } from 'react';

const MovieItemCard = ({ video }: { video: any }) => {
  const setPortal = usePortal();

  const [isHovered, setIsHovered] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isHovered) {
      setPortal(elementRef?.current, video);
    }
  }, [isHovered]);
  return (
    <div className="pr-2 cursor-pointer" ref={elementRef}>
      <div
        className="overflow-hidden rounded-lg"
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
      >
        <img
          src={basePathThumb500 + video?.backdrop_path}
          alt={`movie-${video.id}`}
          className="bg-center object-cover h-full rounded-lg"
        />
      </div>
    </div>
  );
};
export default MovieItemCard;
