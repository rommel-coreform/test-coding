import { FC } from "react";

interface Props {
  label: string;
  onClick: () => void;
}

const Button: FC<Props> = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="bg-yellow hover:bg-yellow-light h-10 w-full text-lg rounded-md">
      {label}
    </button>
  );
};

export default Button;
