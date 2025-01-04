import Button from "./components/Button";
// import Page from "./pages/Page";
// import Landing from "./pages/Landing";
import CoolButton from "./components/CoolButton";

function App() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 h-screen">
      <CoolButton text="hello" /> <Button variant="primary">Hello</Button>
    </div>
  );
}

export default App;
