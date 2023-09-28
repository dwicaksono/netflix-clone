const GenreBreadCrumbs = ({ genres }: { genres: string[] }) => {
  return (
    genres?.length > 0 && (
      <div className="flex text-xs font-semibold gap-1">
        {genres?.map((genre: string, i: number) => (
          <div key={genre + i} className="flex gap-1">
            <p className="text-white/60">{genre}</p>{' '}
            {genres.length - 1 === i ? null : (
              <span className="text-gray-500">&#8226;</span>
            )}
          </div>
        ))}
      </div>
    )
  );
};

export default GenreBreadCrumbs;
