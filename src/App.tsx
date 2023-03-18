import { ReactElement } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import BlogDetails from "./pages/BlogDetails";
import Create from "./pages/Create";
import Home from './pages/Home';
import NotFound from "./pages/NotFound";

function App(): ReactElement {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/create" element={<Create/>} />
            <Route path="/blogs/:id" element={<BlogDetails/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
 
export default App;
