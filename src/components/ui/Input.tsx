import { FC } from "react";

interface Props {
  label: string;
}

const Input: FC<Props> = ({ label }) => {
  return (
    <div className="flex justify-between m-2 items-center">
      <label htmlFor={label} className="ms-2 text-lg font-normal text-black">
        {label}
      </label>
      <input id={label} type="checkbox" name={label} className="w-4 h-4 text-yellow hover:bg-blue-light" />
    </div>
  );
};

export default Input;
