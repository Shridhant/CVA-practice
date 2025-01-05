import CoolButton from "../components/CoolButton";
import Button from "../components/Button";
function Buttons() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 ">
      <CoolButton variant={"primary"} className="text-green-400 bg-gray-800" />
      <CoolButton text="Primary Button" variant="primary" />
      <CoolButton text="Secondary Button" variant="secondary" />
      <CoolButton text="Super duper very Long" />
      <Button variant="secondary" className="bg-red-400">
        Hello
      </Button>
      <Button variant="secondary" bgColor="bg-green-500">
        World
      </Button>
    </div>
  );
}

export default Buttons;
