import { FC } from 'react';

type TButton = {
  title: string;
};

const Button: FC<TButton> = ({ title }) => {
  return (
    <button className="px-8 py-2 font-semibold text-sm bg-blue-500 text-white rounded-xl">
      {title}
    </button>
  );
};

export default Button;
