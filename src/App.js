import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/login" element={<h1>Login</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
