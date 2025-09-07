import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar.js";
import Home from "./pages/home.js";
import About from "./pages/about.js";
import ReadingList from "./pages/readinglist.js";

export default function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/readinglist" element={<ReadingList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
