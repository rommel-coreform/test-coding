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
      <label htmlFor={page} className="ms-2 text-lg font-normal text-black">
        {page}
      </label>
      <input
        checked={checked}
        onChange={(e) => handleChangeCheckbox(e)}
        disabled={disabled}
        id={page}
        type="checkbox"
        name={page}
        className="w-4 h-4 text-yellow hover:bg-blue-light"
      />
    </div>
  );
};

export default Input;
