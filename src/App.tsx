import { ChangeEvent, useEffect, useState } from "react";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";

const pages = ["Page 1", "Page 2", "Page 3", "Page 4"];

const App = () => {
  const [checkAll, setCheckAll] = useState<boolean>(false);
  const [checkedPages, setCheckedPages] = useState<string[]>([]);
  const [done, setDone] = useState<boolean>(false);

  useEffect(() => {
    if (checkedPages.length === pages.length) {
      setCheckAll(true);
    } else {
      setCheckAll(false);
    }
  }, [checkedPages]);

  const handleChangeCheckAll = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckAll(e.target.checked);
    if (e.target.checked) {
      setCheckedPages(pages);
    } else {
      setCheckedPages([]);
    }
  };

  const handleChangeCheckPage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setCheckedPages((prev) => [...prev, e.target.name]);
    } else {
      setCheckedPages((prev) => [...prev.filter((page) => page !== e.target.name)]);
    }
  };

  const handleClickDone = () => {
    if (done) {
      setCheckedPages([]);
    } else {
      setCheckedPages(pages);
    }
    setDone((prev) => !prev);
  };

  return (
    <div className="flex justify-center pt-20">
      <div className="font-montserrat p-5 rounded-lg shadow-[0_8px_15px_1px_rgba(20,20,20,0.3)] w-1/2">
        <Input page="All pages" checked={checkAll} disabled={done} handleChangeCheckbox={handleChangeCheckAll} />
        <hr className="my-5 h-0.2 bg-slate-300" />
        {pages.map((page) => {
          return (
            <div key={page} className="py-1">
              <Input
                page={page}
                checked={checkedPages.includes(page)}
                disabled={done}
                handleChangeCheckbox={handleChangeCheckPage}
              />
            </div>
          );
        })}
        <hr className="my-5 h-0.2 bg-slate-300" />
        <Button label={done ? "Reset" : "Done"} onClick={handleClickDone} />
      </div>
    </div>
  );
};

export default App;
