import Button from "./components/Button";
import Page from "./pages/Page";

function App() {
  return (
    <div className="bg-black text-white">
      <Page />
      <div className="p-4 flex justify-center">
        <Button variant="primary">Hello</Button>
      </div>
    </div>
  );
}

export default App;
