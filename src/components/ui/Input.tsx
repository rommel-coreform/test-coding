import { ChangeEvent, FC } from "react";

interface Props {
  page: string;
  checked: boolean;
  disabled: boolean;
  handleChangeCheckbox: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<Props> = ({ page, checked, disabled, handleChangeCheckbox }) => {
  return (
    <div className="flex justify-between m-2 items-center">
      <label htmlFor={page} className="text-lg font-normal text-black">
        {page}
      </label>
      <div className="relative flex items-center justify-center pr-3">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => handleChangeCheckbox(e)}
          disabled={disabled}
          id={page}
          name={page}
          className="absolute peer shrink-0 appearance-none w-7 h-7 border-1 border-blue-500 rounded-md bg-white checked:bg-blue checked:border-transparent focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-gray-400 disabled:bg-blue-light"
        />
        <svg
          className="absolute w-6 h-6 hidden peer-checked:block pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke={"white"}
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
    </div>
  );
};

export default Input;
