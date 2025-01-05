import Button from "./components/Button";
// import Page from "./pages/Page";
// import Landing from "./pages/Landing";
import CoolButton from "./components/CoolButton";

function App() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 h-screen bg-gray-100">
      <CoolButton variant={"primary"} className="text-green-400 bg-gray-800" />
      <CoolButton text="Primary Button" variant="primary" />
      <CoolButton text="Secondary Button" variant="secondary" />
      <CoolButton text="Super duper very Long" />
      <Button variant="secondary" className="bg-red-400" bgColor="bg-green-400">
        Hello
      </Button>
    </div>
  );
}

export default App;
