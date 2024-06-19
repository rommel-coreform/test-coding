import Button from "./components/ui/Button";
import Input from "./components/ui/Input";

const App = () => {
  return (
    <div className="flex justify-center pt-20">
      <div className="font-montserrat p-5 rounded-lg shadow-[0_8px_15px_1px_rgba(20,20,20,0.3)] w-1/2">
        <Input label="All pages" />
        <hr className="my-5 h-0.2 bg-slate-300" />
        <Button label="Done" onClick={() => {}} />
      </div>
    </div>
  );
};

export default App;
