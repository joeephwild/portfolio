import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home, Projects } from "./pages";

function App() {
  return (
    <div className=" ">
      <Navbar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/work/:id" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
