import NCM from "./pages/NCM";
import Feed from "./pages/Feed";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<NCM />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/buttons" element={<Landing />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
