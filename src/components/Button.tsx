import { FC, ReactElement } from 'react';

type TButton = {
  title: string;
  variant?: 'default' | 'dark';
  onClick?: () => void;
  withIcon?: ReactElement;
};

const Button: FC<TButton> = ({
  title,
  variant = 'default',
  onClick,
  withIcon,
}) => {
  if (variant === 'dark') {
    return (
      <button
        className="bg-[rgba(51,51,51,0.5)] flex items-center gap-2 text-white px-2 py-1 md:px-4 md:py-2 rounded-md font-bold"
        onClick={onClick}
      >
        {withIcon} {title}
      </button>
    );
  }
  return (
    <button
      className="flex items-center gap-2 px-2 py-1 md:px-4 md:py-2 font-bold text-sm bg-white text-netflix-black-primary rounded-md"
      onClick={onClick}
    >
      {withIcon}
      {title}
    </button>
  );
};

export default Button;
