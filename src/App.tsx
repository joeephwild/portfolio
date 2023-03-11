
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home, Projects } from "./pages";

function App() {

  return (
    <div className=" ">
      <Navbar />
      <div className="fixed bottom-9 right-10 bg-[#b1dd40] text-black font-bold text-lg px-6 py-2.5">Still a work in Progress😉</div>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/work/:id" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
