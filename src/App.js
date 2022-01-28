import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage/HomePage";
import MintPage from "pages/MintPage/MintPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mint" element={<MintPage />} />
      </Routes>
    </Router>
  );
}

export default App;
