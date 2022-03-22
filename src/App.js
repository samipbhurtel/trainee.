import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Solution1 from "./pages/Solution1";
import Solution2 from "./pages/Solution2";
import Solution3 from "./pages/Solution3";
import Solution10 from "./pages/Solution10";
import Solution6 from "./pages/Solution6";
import Solution7 from "./pages/Solution7";
import Solution9 from "./pages/Solution9";
import Solution4 from "./pages/Solution4";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="solution1" element={<Solution1 />} />
        <Route path="solution2" element={<Solution2 />} />
        <Route path="solution3" element={<Solution3 />} />
        <Route path="solution4" element={<Solution4 />} />
        <Route path="solution6" element={<Solution6 />} />
        <Route path="solution7" element={<Solution7 />} />
        <Route path="solution9" element={<Solution9 />} />
        <Route path="solution10" element={<Solution10 />} />
      </Routes>
    </>
  );
}

export default App;
